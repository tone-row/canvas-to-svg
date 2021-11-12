import {
  format,
  getDominantBaseline,
  getTextAnchor,
  normalize,
  randomString,
} from "./helpers";
import { STYLES, CanvasPattern, CanvasGradient, namedEntities } from "./shared";

type Options = {
  width: number;
  height: number;
  enableMirroring: boolean;
  document?: Document;
  ctx?: CanvasRenderingContext2D;
};
const defaultOptions: Options = {
  width: 500,
  height: 500,
  enableMirroring: false,
};

export class CanvasToSvg {
  width: number;
  height: number;
  enableMirroring: boolean;
  canvas: CanvasToSvg;
  __document: Document;
  __canvas?: HTMLCanvasElement;
  __ctx: CanvasRenderingContext2D;
  __ids: { [key: string]: string };
  __root: SVGSVGElement;
  __defs: SVGElement;
  __currentElement: SVGElement | undefined;
  __groupStack: SVGElement[];
  __currentElementsToStyle: null | { element: any; children: any[] } = null;
  [k: string]: any;

  constructor(width?: number, height?: number);
  constructor(options: Options | number = defaultOptions, height?: number) {
    let __ctx;
    if (typeof options === "number") {
      this.width = options;
      this.height = height ?? defaultOptions.height;
      this.enableMirroring = defaultOptions.enableMirroring;
      this.__document = document;
    } else {
      this.width = options.width ?? defaultOptions.width;
      this.height = options.height ?? defaultOptions.height;
      this.enableMirroring =
        options.enableMirroring ?? defaultOptions.enableMirroring;
      this.__document = options.document || document;
      __ctx = options.ctx;
    }

    if (!__ctx) {
      // allow passing in an existing context to wrap around
      // if a context is passed in, we know a canvas already exist
      this.__canvas = this.__document.createElement("canvas");
      __ctx = this.__canvas.getContext("2d");
      if (!__ctx) throw new Error("Unable to get canvas context");
    }

    this.__ctx = __ctx;
    this.canvas = this; ///point back to this instance!

    this.__setDefaultStyles();
    this.__stack = [this.__getStyleState()];
    this.__groupStack = [];

    //the root svg element
    this.__root = this.__document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.__root.setAttribute("version", "1.1");
    this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.__root.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    );
    this.__root.setAttribute("width", this.width.toString());
    this.__root.setAttribute("height", this.height.toString());

    //make sure we don't generate the same ids in defs
    this.__ids = {};

    //defs tag
    this.__defs = this.__document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    );
    this.__root.appendChild(this.__defs);

    //also add a group child. the svg element can't use the transform attribute
    this.__currentElement = this.__document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    this.__root.appendChild(this.__currentElement);
  }

  __createElement(elementName: string, properties?: any, resetFill?: boolean) {
    if (typeof properties === "undefined") {
      properties = {};
    }

    var element = this.__document.createElementNS(
        "http://www.w3.org/2000/svg",
        elementName
      ),
      keys = Object.keys(properties),
      i,
      key;
    if (resetFill) {
      //if fill or stroke is not specified, the svg element should not display. By default SVG's fill is black.
      element.setAttribute("fill", "none");
      element.setAttribute("stroke", "none");
    }
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      element.setAttribute(key, properties[key]);
    }
    return element;
  }

  __setDefaultStyles() {
    //default 2d canvas context properties see:http://www.w3.org/TR/2dcontext/
    for (let key in STYLES) {
      this[key] = STYLES[key as keyof typeof STYLES].canvas;
    }
  }

  /**
   * Applies styles on restore
   */
  __applyStyleState(styleState: any) {
    let keys = Object.keys(styleState),
      i,
      key;
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      this[key] = styleState[key];
    }
  }

  /**
   * Gets the current style state
   */
  __getStyleState() {
    let i,
      styleState = {} as any,
      keys = Object.keys(STYLES),
      key;
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      styleState[key] = this[key];
    }
    return styleState;
  }

  /**
   * Applies the current styles to the current SVG element. On "ctx.fill" or "ctx.stroke"
   */
  __applyStyleToCurrentElement(type: "stroke" | "fill") {
    if (!this.__currentElement) return;
    let currentElement = this.__currentElement;
    const currentStyleGroup = this.__currentElementsToStyle;
    if (currentStyleGroup) {
      currentElement.setAttribute(type, "");
      currentElement = currentStyleGroup.element;
      currentStyleGroup.children.forEach(function (node) {
        node.setAttribute(type, "");
      });
    }

    let keys = Object.keys(STYLES),
      i,
      style,
      value,
      id,
      regex,
      matches;
    for (i = 0; i < keys.length; i++) {
      style = STYLES[keys[i] as keyof typeof STYLES];
      value = this[keys[i]];
      if ("apply" in style) {
        //is this a gradient or pattern?
        if (value instanceof CanvasPattern) {
          //pattern
          if (value.__ctx) {
            //copy over defs
            while (value.__ctx.__defs.childNodes.length) {
              id = value.__ctx.__defs.childNodes[0].getAttribute("id");
              this.__ids[id] = id;
              this.__defs.appendChild(value.__ctx.__defs.childNodes[0]);
            }
          }
          currentElement.setAttribute(
            style.apply,
            format("url(#{id})", { id: value.__root.getAttribute("id") })
          );
        } else if (value instanceof CanvasGradient) {
          //gradient
          currentElement.setAttribute(
            style.apply,
            format("url(#{id})", { id: value.__root.getAttribute("id") })
          );
        } else if (style.apply.indexOf(type) !== -1 && style.svg !== value) {
          if (
            (style.svgAttr === "stroke" || style.svgAttr === "fill") &&
            value.indexOf("rgba") !== -1
          ) {
            //separate alpha value, since illustrator can't handle it
            regex =
              /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi;
            matches = regex.exec(value);
            if (matches) {
              currentElement.setAttribute(
                style.svgAttr,
                format("rgb({r},{g},{b})", {
                  r: matches[1],
                  g: matches[2],
                  b: matches[3],
                })
              );
              //should take globalAlpha here
              let opacity = parseFloat(matches[4]);
              let globalAlpha = this.globalAlpha;
              if (globalAlpha != null) {
                opacity *= globalAlpha;
              }
              currentElement.setAttribute(
                style.svgAttr + "-opacity",
                opacity.toString()
              );
            }
          } else {
            let attr = style.svgAttr;
            if (keys[i] === "globalAlpha") {
              attr = type + "-" + style.svgAttr;
              if (currentElement.getAttribute(attr)) {
                //fill-opacity or stroke-opacity has already been set by stroke or fill.
                continue;
              }
            }
            //otherwise only update attribute if right type, and not svg default
            currentElement.setAttribute(attr, value);
          }
        }
      }
    }
  }

  __closestGroupOrSvg(
    node: SVGElement | ParentNode | undefined | null = this.__currentElement
  ): SVGElement | void {
    if (!node) return;
    if (node.nodeName === "g" || node.nodeName === "svg")
      return node as SVGElement;
    return this.__closestGroupOrSvg(node.parentNode);
  }

  /**
   * Returns the serialized value of the svg so far
   * @param fixNamedEntities - Standalone SVG doesn't support named entities, which document.createTextNode encodes.
   *                           If true, we attempt to find all named entities and encode it as a numeric entity.
   * @return serialized svg
   */
  getSerializedSvg(fixNamedEntities: boolean) {
    let serialized = new XMLSerializer().serializeToString(this.__root),
      keys,
      i,
      key,
      value,
      regexp,
      xmlns;

    //IE search for a duplicate xmnls because they didn't implement setAttributeNS correctly
    xmlns =
      /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi;
    if (xmlns.test(serialized)) {
      serialized = serialized.replace(
        'xmlns="http://www.w3.org/2000/svg',
        'xmlns:xlink="http://www.w3.org/1999/xlink'
      );
    }

    if (fixNamedEntities) {
      keys = Object.keys(namedEntities);
      //loop over each named entity and replace with the proper equivalent.
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        value = namedEntities[key];
        regexp = new RegExp(key, "gi");
        if (regexp.test(serialized)) {
          serialized = serialized.replace(regexp, value);
        }
      }
    }

    return serialized;
  }
  /**
   * Returns the root svg
   * @return
   */
  getSvg() {
    return this.__root;
  }

  /**
   * Will generate a group tag.
   */
  save() {
    const group = this.__createElement("g");
    const parent = this.__closestGroupOrSvg();
    if (parent) this.__groupStack.push(parent);
    (parent as Node).appendChild(group);
    this.__currentElement = group;
    this.__stack.push(this.__getStyleState());
  }

  /**
   * Sets current element to parent, or just root if already root
   */
  restore() {
    this.__currentElement = this.__groupStack.pop();
    this.__currentElementsToStyle = null;
    //Clearing canvas will make the poped group invalid, currentElement is set to the root group node.
    if (!this.__currentElement) {
      this.__currentElement = this.__root.childNodes[1] as SVGElement;
    }
    let state = this.__stack.pop();
    this.__applyStyleState(state);
  }

  /**
   * Helper method to add transform
   * @private
   */
  __addTransform(t: any) {
    if (!this.__currentElement) return;
    //if the current element has siblings, add another group
    const parent = this.__closestGroupOrSvg();
    if (!parent) return;
    if (parent.childNodes.length > 0) {
      if (this.__currentElement.nodeName === "path") {
        if (!this.__currentElementsToStyle)
          this.__currentElementsToStyle = { element: parent, children: [] };
        this.__currentElementsToStyle.children.push(this.__currentElement);
        this.__applyCurrentDefaultPath();
      }

      let group = this.__createElement("g");
      parent.appendChild(group);
      this.__currentElement = group;
    }

    if (!this.__currentElement) return;
    let transform = this.__currentElement.getAttribute("transform");
    if (transform) {
      transform += " ";
    } else {
      transform = "";
    }
    transform += t;
    this.__currentElement.setAttribute("transform", transform);
  }

  /**
   *  scales the current element
   */
  scale(x: any, y: any) {
    if (y === undefined) {
      y = x;
    }
    this.__addTransform(format("scale({x},{y})", { x: x, y: y }));
  }

  /**
   * rotates the current element
   */
  rotate(angle: any) {
    let degrees = (angle * 180) / Math.PI;
    this.__addTransform(
      format("rotate({angle},{cx},{cy})", { angle: degrees, cx: 0, cy: 0 })
    );
  }

  /**
   * translates the current element
   */
  translate(x: any, y: any) {
    this.__addTransform(format("translate({x},{y})", { x: x, y: y }));
  }

  /**
   * applies a transform to the current element
   */
  transform(a: any, b: any, c: any, d: any, e: any, f: any) {
    this.__addTransform(
      format("matrix({a},{b},{c},{d},{e},{f})", {
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f,
      })
    );
  }

  /**
   * Create a new Path Element
   */
  beginPath() {
    let path, parent;

    // Note that there is only one current default path, it is not part of the drawing state.
    // See also: https://html.spec.whatwg.org/multipage/scripting.html#current-default-path
    this.__currentDefaultPath = "";
    this.__currentPosition = {};

    path = this.__createElement("path", {}, true);
    parent = this.__closestGroupOrSvg();
    if (!parent) return;
    parent.appendChild(path);
    this.__currentElement = path;
  }

  /**
   * Helper function to apply currentDefaultPath to current path element
   * @private
   */
  __applyCurrentDefaultPath() {
    let currentElement = this.__currentElement;
    if (!currentElement) return;
    if (currentElement.nodeName === "path") {
      currentElement.setAttribute("d", this.__currentDefaultPath);
    } else {
      console.error(
        "Attempted to apply path command to node",
        currentElement.nodeName
      );
    }
  }

  /**
   * Helper function to add path command
   * @private
   */
  __addPathCommand(command: any) {
    this.__currentDefaultPath += " ";
    this.__currentDefaultPath += command;
  }

  /**
   * Adds the move command to the current path element,
   * if the currentPathElement is not empty create a new path element
   */
  moveTo(x: number, y: number) {
    if (!this.__currentElement) return;
    if (this.__currentElement.nodeName !== "path") {
      this.beginPath();
    }

    // creates a new subpath with the given point
    this.__currentPosition = { x: x, y: y };
    this.__addPathCommand(format("M {x} {y}", { x: x, y: y }));
  }

  /**
   * Closes the current path
   */
  closePath() {
    if (this.__currentDefaultPath) {
      this.__addPathCommand("Z");
    }
  }

  /**
   * Adds a line to command
   */
  lineTo(x: any, y: any) {
    this.__currentPosition = { x: x, y: y };
    if (this.__currentDefaultPath.indexOf("M") > -1) {
      this.__addPathCommand(format("L {x} {y}", { x: x, y: y }));
    } else {
      this.__addPathCommand(format("M {x} {y}", { x: x, y: y }));
    }
  }

  /**
   * Add a bezier command
   */
  bezierCurveTo(cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any) {
    this.__currentPosition = { x: x, y: y };
    this.__addPathCommand(
      format("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
        cp1x: cp1x,
        cp1y: cp1y,
        cp2x: cp2x,
        cp2y: cp2y,
        x: x,
        y: y,
      })
    );
  }

  /**
   * Adds a quadratic curve to command
   */
  quadraticCurveTo(cpx: any, cpy: any, x: any, y: any) {
    this.__currentPosition = { x: x, y: y };
    this.__addPathCommand(
      format("Q {cpx} {cpy} {x} {y}", { cpx: cpx, cpy: cpy, x: x, y: y })
    );
  }

  /**
   * Adds the arcTo to the current path
   *
   * @see http://www.w3.org/TR/2015/WD-2dcontext-20150514/#dom-context-2d-arcto
   */
  arcTo(x1: any, y1: any, x2: any, y2: any, radius: any) {
    // Let the point (x0, y0) be the last point in the subpath.
    let x0 = this.__currentPosition && this.__currentPosition.x;
    let y0 = this.__currentPosition && this.__currentPosition.y;

    // First ensure there is a subpath for (x1, y1).
    if (typeof x0 == "undefined" || typeof y0 == "undefined") {
      return;
    }

    // Negative values for radius must cause the implementation to throw an IndexSizeError exception.
    if (radius < 0) {
      throw new Error(
        "IndexSizeError: The radius provided (" + radius + ") is negative."
      );
    }

    // If the point (x0, y0) is equal to the point (x1, y1),
    // or if the point (x1, y1) is equal to the point (x2, y2),
    // or if the radius radius is zero,
    // then the method must add the point (x1, y1) to the subpath,
    // and connect that point to the previous point (x0, y0) by a straight line.
    if ((x0 === x1 && y0 === y1) || (x1 === x2 && y1 === y2) || radius === 0) {
      this.lineTo(x1, y1);
      return;
    }

    // Otherwise, if the points (x0, y0), (x1, y1), and (x2, y2) all lie on a single straight line,
    // then the method must add the point (x1, y1) to the subpath,
    // and connect that point to the previous point (x0, y0) by a straight line.
    let unit_vec_p1_p0 = normalize([x0 - x1, y0 - y1]);
    let unit_vec_p1_p2 = normalize([x2 - x1, y2 - y1]);
    if (
      unit_vec_p1_p0[0] * unit_vec_p1_p2[1] ===
      unit_vec_p1_p0[1] * unit_vec_p1_p2[0]
    ) {
      this.lineTo(x1, y1);
      return;
    }

    // Otherwise, let The Arc be the shortest arc given by circumference of the circle that has radius radius,
    // and that has one point tangent to the half-infinite line that crosses the point (x0, y0) and ends at the point (x1, y1),
    // and that has a different point tangent to the half-infinite line that ends at the point (x1, y1), and crosses the point (x2, y2).
    // The points at which this circle touches these two lines are called the start and end tangent points respectively.

    // note that both vectors are unit vectors, so the length is 1
    let cos =
      unit_vec_p1_p0[0] * unit_vec_p1_p2[0] +
      unit_vec_p1_p0[1] * unit_vec_p1_p2[1];
    let theta = Math.acos(Math.abs(cos));

    // Calculate origin
    let unit_vec_p1_origin = normalize([
      unit_vec_p1_p0[0] + unit_vec_p1_p2[0],
      unit_vec_p1_p0[1] + unit_vec_p1_p2[1],
    ]);
    let len_p1_origin = radius / Math.sin(theta / 2);
    let x = x1 + len_p1_origin * unit_vec_p1_origin[0];
    let y = y1 + len_p1_origin * unit_vec_p1_origin[1];

    // Calculate start angle and end angle
    // rotate 90deg clockwise (note that y axis points to its down)
    let unit_vec_origin_start_tangent = [-unit_vec_p1_p0[1], unit_vec_p1_p0[0]];
    // rotate 90deg counter clockwise (note that y axis points to its down)
    let unit_vec_origin_end_tangent = [unit_vec_p1_p2[1], -unit_vec_p1_p2[0]];
    let getAngle = (vector: number[]) => {
      // get angle (clockwise) between vector and (1, 0)
      let x = vector[0];
      let y = vector[1];
      if (y >= 0) {
        // note that y axis points to its down
        return Math.acos(x);
      } else {
        return -Math.acos(x);
      }
    };
    let startAngle = getAngle(unit_vec_origin_start_tangent);
    let endAngle = getAngle(unit_vec_origin_end_tangent);

    // Connect the point (x0, y0) to the start tangent point by a straight line
    this.lineTo(
      x + unit_vec_origin_start_tangent[0] * radius,
      y + unit_vec_origin_start_tangent[1] * radius
    );

    // Connect the start tangent point to the end tangent point by arc
    // and adding the end tangent point to the subpath.
    this.arc(x, y, radius, startAngle, endAngle);
  }

  /**
   * Sets the stroke property on the current element
   */
  stroke() {
    if (!this.__currentElement) return;
    if (this.__currentElement.nodeName === "path") {
      this.__currentElement.setAttribute("paint-order", "fill stroke markers");
    }
    this.__applyCurrentDefaultPath();
    this.__applyStyleToCurrentElement("stroke");
  }

  /**
   * Sets fill properties on the current element
   */
  fill() {
    if (!this.__currentElement) return;
    if (this.__currentElement.nodeName === "path") {
      this.__currentElement.setAttribute("paint-order", "stroke fill markers");
    }
    this.__applyCurrentDefaultPath();
    this.__applyStyleToCurrentElement("fill");
  }

  /**
   *  Adds a rectangle to the path.
   */
  rect(x: any, y: any, width: any, height: any) {
    if (!this.__currentElement) return;
    if (this.__currentElement.nodeName !== "path") {
      this.beginPath();
    }
    this.moveTo(x, y);
    this.lineTo(x + width, y);
    this.lineTo(x + width, y + height);
    this.lineTo(x, y + height);
    this.lineTo(x, y);
    this.closePath();
  }

  /**
   * adds a rectangle element
   */
  fillRect(x: any, y: any, width: any, height: any) {
    let rect, parent;
    rect = this.__createElement(
      "rect",
      {
        x: x,
        y: y,
        width: width,
        height: height,
      },
      true
    );
    parent = this.__closestGroupOrSvg();
    (parent as Node).appendChild(rect);
    this.__currentElement = rect;
    this.__applyStyleToCurrentElement("fill");
  }

  /**
   * Draws a rectangle with no fill
   * @param x
   * @param y
   * @param width
   * @param height
   */
  strokeRect(x: any, y: any, width: any, height: any) {
    let rect, parent;
    rect = this.__createElement(
      "rect",
      {
        x: x,
        y: y,
        width: width,
        height: height,
      },
      true
    );
    parent = this.__closestGroupOrSvg();
    (parent as Node).appendChild(rect);
    this.__currentElement = rect;
    this.__applyStyleToCurrentElement("stroke");
  }

  /**
   * Clear entire canvas:
   * 1. save current transforms
   * 2. remove all the childNodes of the root g element
   */
  __clearCanvas() {
    let current = this.__closestGroupOrSvg();
    if (!current) return;
    let transform = current.getAttribute("transform");
    let rootGroup = this.__root.childNodes[1];
    let childNodes = rootGroup.childNodes;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      if (childNodes[i]) {
        rootGroup.removeChild(childNodes[i]);
      }
    }
    this.__currentElement = rootGroup as SVGElement;
    //reset __groupStack as all the child group nodes are all removed.
    this.__groupStack = [];
    if (transform) {
      this.__addTransform(transform);
    }
  }

  /**
   * "Clears" a canvas by just drawing a white rectangle in the current group.
   */
  clearRect(x: any, y: any, width: any, height: any) {
    //clear entire canvas
    if (x === 0 && y === 0 && width === this.width && height === this.height) {
      this.__clearCanvas();
      return;
    }
    let rect,
      parent = this.__closestGroupOrSvg();
    rect = this.__createElement(
      "rect",
      {
        x: x,
        y: y,
        width: width,
        height: height,
        fill: "#FFFFFF",
      },
      true
    );
    (parent as Node).appendChild(rect);
  }

  /**
   * Adds a linear gradient to a defs tag.
   * Returns a canvas gradient object that has a reference to it's parent def
   */
  createLinearGradient(x1: any, y1: any, x2: any, y2: any) {
    let grad = this.__createElement(
      "linearGradient",
      {
        id: randomString(this.__ids),
        x1: x1 + "px",
        x2: x2 + "px",
        y1: y1 + "px",
        y2: y2 + "px",
        gradientUnits: "userSpaceOnUse",
      },
      false
    );
    this.__defs.appendChild(grad);
    return new CanvasGradient(grad, this);
  }

  /**
   * Adds a radial gradient to a defs tag.
   * Returns a canvas gradient object that has a reference to it's parent def
   */
  createRadialGradient(x0: any, y0: any, r0: any, x1: any, y1: any, r1: any) {
    let grad = this.__createElement(
      "radialGradient",
      {
        id: randomString(this.__ids),
        cx: x1 + "px",
        cy: y1 + "px",
        r: r1 + "px",
        fx: x0 + "px",
        fy: y0 + "px",
        gradientUnits: "userSpaceOnUse",
      },
      false
    );
    this.__defs.appendChild(grad);
    return new CanvasGradient(grad, this);
  }

  /**
   * Parses the font string and returns svg mapping
   * @private
   */
  __parseFont() {
    let regex =
      /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i;
    let fontPart = regex.exec(this.font);
    if (!fontPart) return;
    let data = {
      style: fontPart[1] || "normal",
      size: fontPart[4] || "10px",
      family: fontPart[6] || "sans-serif",
      weight: fontPart[3] || "normal",
      decoration: fontPart[2] || "normal",
      href: null,
    };

    //canvas doesn't support underline natively, but we can pass this attribute
    if (this.__fontUnderline === "underline") {
      data.decoration = "underline";
    }

    //canvas also doesn't support linking, but we can pass this as well
    if (this.__fontHref) {
      data.href = this.__fontHref;
    }

    return data;
  }

  /**
   * Helper to link text fragments
   * @param font
   * @param element
   * @return {*}
   * @private
   */
  __wrapTextLink(font: any, element: any) {
    if (font.href) {
      let a = this.__createElement("a");
      a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", font.href);
      a.appendChild(element);
      return a;
    }
    return element;
  }

  /**
   * Fills or strokes text
   * @param text
   * @param x
   * @param y
   * @param action - stroke or fill
   * @private
   */
  __applyText(text: any, x: any, y: any, action: any) {
    let font = this.__parseFont(),
      parent = this.__closestGroupOrSvg();
    if (!font) return;
    let textElement = this.__createElement(
      "text",
      {
        "font-family": font.family,
        "font-size": font.size,
        "font-style": font.style,
        "font-weight": font.weight,
        "text-decoration": font.decoration,
        x: x,
        y: y,
        "text-anchor": getTextAnchor(this.textAlign),
        "dominant-baseline": getDominantBaseline(this.textBaseline),
      },
      true
    );

    textElement.appendChild(this.__document.createTextNode(text));
    this.__currentElement = textElement;
    this.__applyStyleToCurrentElement(action);
    (parent as Node).appendChild(this.__wrapTextLink(font, textElement));
  }

  /**
   * Creates a text element
   * @param text
   * @param x
   * @param y
   */
  fillText(text: any, x: any, y: any) {
    this.__applyText(text, x, y, "fill");
  }

  /**
   * Strokes text
   * @param text
   * @param x
   * @param y
   */
  strokeText(text: any, x: any, y: any) {
    this.__applyText(text, x, y, "stroke");
  }

  /**
   * No need to implement this for svg.
   * @param text
   * @return {TextMetrics}
   */
  measureText(text: any) {
    this.__ctx.font = this.font;
    return this.__ctx.measureText(text);
  }

  /**
   *  Arc command!: any
   */
  arc(
    x: any,
    y: any,
    radius: any,
    startAngle: any,
    endAngle: any,
    counterClockwise?: any
  ) {
    // in canvas no circle is drawn if no angle is provided.
    if (startAngle === endAngle) {
      return;
    }
    startAngle = startAngle % (2 * Math.PI);
    endAngle = endAngle % (2 * Math.PI);
    if (startAngle === endAngle) {
      //circle time! subtract some of the angle so svg is happy (svg elliptical arc can't draw a full circle)
      endAngle =
        (endAngle + 2 * Math.PI - 0.001 * (counterClockwise ? -1 : 1)) %
        (2 * Math.PI);
    }
    let endX = x + radius * Math.cos(endAngle),
      endY = y + radius * Math.sin(endAngle),
      startX = x + radius * Math.cos(startAngle),
      startY = y + radius * Math.sin(startAngle),
      sweepFlag = counterClockwise ? 0 : 1,
      largeArcFlag = 0,
      diff = endAngle - startAngle;

    // https://github.com/gliffy/canvas2svg/issues/4
    if (diff < 0) {
      diff += 2 * Math.PI;
    }

    if (counterClockwise) {
      largeArcFlag = diff > Math.PI ? 0 : 1;
    } else {
      largeArcFlag = diff > Math.PI ? 1 : 0;
    }

    this.lineTo(startX, startY);
    this.__addPathCommand(
      format(
        "A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",
        {
          rx: radius,
          ry: radius,
          xAxisRotation: 0,
          largeArcFlag: largeArcFlag,
          sweepFlag: sweepFlag,
          endX: endX,
          endY: endY,
        }
      )
    );

    this.__currentPosition = { x: endX, y: endY };
  }

  /**
   * Generates a ClipPath from the clip command.
   */
  clip() {
    let group = this.__closestGroupOrSvg(),
      clipPath = this.__createElement("clipPath"),
      id = randomString(this.__ids),
      newGroup = this.__createElement("g");
    if (!group) return;
    if (!this.__currentElement) return;
    this.__applyCurrentDefaultPath();
    group.removeChild(this.__currentElement);
    clipPath.setAttribute("id", id);
    clipPath.appendChild(this.__currentElement);

    this.__defs.appendChild(clipPath);

    //set the clip path to this group
    group.setAttribute("clip-path", format("url(#{id})", { id: id }));

    //clip paths can be scaled and transformed, we need to add another wrapper group to avoid later transformations
    // to this path
    group.appendChild(newGroup);

    this.__currentElement = newGroup;
  }

  /**
   * Draws a canvas, image or mock context to this canvas.
   * Note that all svg dom manipulation uses node.childNodes rather than node.children for IE support.
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawimage
   */
  drawImage() {
    //convert arguments to a real array
    let args = Array.prototype.slice.call(arguments),
      image = args[0],
      dx,
      dy,
      dw,
      dh,
      sx = 0,
      sy = 0,
      sw,
      sh,
      parent,
      svg,
      defs,
      group,
      currentElement,
      svgImage,
      canvas,
      context,
      id;

    if (args.length === 3) {
      dx = args[1];
      dy = args[2];
      sw = image.width;
      sh = image.height;
      dw = sw;
      dh = sh;
    } else if (args.length === 5) {
      dx = args[1];
      dy = args[2];
      dw = args[3];
      dh = args[4];
      sw = image.width;
      sh = image.height;
    } else if (args.length === 9) {
      sx = args[1];
      sy = args[2];
      sw = args[3];
      sh = args[4];
      dx = args[5];
      dy = args[6];
      dw = args[7];
      dh = args[8];
    } else {
      throw new Error(
        "Invalid number of arguments passed to drawImage: " + arguments.length
      );
    }

    parent = this.__closestGroupOrSvg();
    currentElement = this.__currentElement;
    let translateDirective = "translate(" + dx + ", " + dy + ")";
    if (image instanceof CanvasToSvg) {
      //canvas2svg mock canvas context. In the future we may want to clone nodes instead.
      //also I'm currently ignoring dw, dh, sw, sh, sx, sy for a mock context.
      svg = image.getSvg().cloneNode(true);
      if (svg.childNodes && svg.childNodes.length > 1) {
        defs = svg.childNodes[0];
        while (defs.childNodes.length) {
          id = (defs.childNodes[0] as SVGElement).getAttribute("id") as string;
          this.__ids[id] = id;
          this.__defs.appendChild(defs.childNodes[0]);
        }
        group = svg.childNodes[1];
        if (group) {
          //save original transform
          let originTransform = (group as SVGElement).getAttribute("transform");
          let transformDirective;
          if (originTransform) {
            transformDirective = originTransform + " " + translateDirective;
          } else {
            transformDirective = translateDirective;
          }
          (group as SVGElement).setAttribute("transform", transformDirective);
          (parent as Node).appendChild(group);
        }
      }
    } else if (image.nodeName === "CANVAS" || image.nodeName === "IMG") {
      //canvas or image
      svgImage = this.__createElement("image");
      svgImage.setAttribute("width", dw);
      svgImage.setAttribute("height", dh);
      svgImage.setAttribute("preserveAspectRatio", "none");

      if (sx || sy || sw !== image.width || sh !== image.height) {
        //crop the image using a temporary canvas
        canvas = this.__document.createElement("canvas");
        canvas.width = dw;
        canvas.height = dh;
        context = canvas.getContext("2d");
        if (!context) return;
        context.drawImage(image, sx, sy, sw, sh, 0, 0, dw, dh);
        image = canvas;
      }
      svgImage.setAttribute("transform", translateDirective);
      svgImage.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        image.nodeName === "CANVAS"
          ? image.toDataURL()
          : image.getAttribute("src")
      );
      (parent as Node).appendChild(svgImage);
    }
  }

  /**
   * Generates a pattern tag
   */
  createPattern(image: any, repetition: any) {
    let pattern = this.__document.createElementNS(
        "http://www.w3.org/2000/svg",
        "pattern"
      ),
      id = randomString(this.__ids),
      img;
    pattern.setAttribute("id", id);
    pattern.setAttribute("width", image.width);
    pattern.setAttribute("height", image.height);
    if (image.nodeName === "CANVAS" || image.nodeName === "IMG") {
      img = this.__document.createElementNS(
        "http://www.w3.org/2000/svg",
        "image"
      );
      img.setAttribute("width", image.width);
      img.setAttribute("height", image.height);
      img.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        image.nodeName === "CANVAS"
          ? image.toDataURL()
          : image.getAttribute("src")
      );
      pattern.appendChild(img);
      this.__defs.appendChild(pattern);
    } else if (image instanceof CanvasToSvg) {
      pattern.appendChild(image.__root.childNodes[1]);
      this.__defs.appendChild(pattern);
    }
    return new CanvasPattern(pattern, this);
  }

  setLineDash(dashArray: any) {
    if (dashArray && dashArray.length > 0) {
      this.lineDash = dashArray.join(",");
    } else {
      this.lineDash = null;
    }
  }

  /*
  ctx.prototype.drawFocusRing = function () {};
    ctx.prototype.createImageData = function () {};
    ctx.prototype.getImageData = function () {};
    ctx.prototype.putImageData = function () {};
    ctx.prototype.globalCompositeOperation = function () {};
    ctx.prototype.setTransform = function () {};
    */
}
