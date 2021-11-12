//helper function to format a string
export function format(str: string, args: any): string {
  var keys = Object.keys(args),
    i;
  for (i = 0; i < keys.length; i++) {
    str = str.replace(new RegExp("\\{" + keys[i] + "\\}", "gi"), args[keys[i]]);
  }
  return str;
}

//helper function that generates a random string
export function randomString(holder: Record<string, unknown>) {
  var chars, randomstring, i;
  if (!holder) {
    throw new Error(
      "cannot create a random attribute name for an undefined object"
    );
  }
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  randomstring = "";
  do {
    randomstring = "";
    for (i = 0; i < 12; i++) {
      randomstring += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (holder[randomstring]);
  return randomstring;
}

//helper function to map named to numbered entities
export function createNamedToNumberedLookup(items: string, radix = 10) {
  let i,
    entity,
    lookup = {} as Record<string, string>,
    base10;
  const itemsArr = items.split(",");
  // Map from named to numbered entities.
  for (i = 0; i < itemsArr.length; i += 2) {
    entity = "&" + itemsArr[i + 1] + ";";
    base10 = parseInt(itemsArr[i], radix);
    lookup[entity] = "&#" + base10 + ";";
  }
  //FF and IE need to create a regex from hex values ie &nbsp; == \xa0
  lookup["\\xa0"] = "&#160;";
  return lookup;
}

//TODO: support rtl languages
const getTextAnchorMap = {
  left: "start",
  right: "end",
  center: "middle",
  start: "start",
  end: "end",
};
//helper function to map canvas-textAlign to svg-textAnchor
export function getTextAnchor(textAlign: keyof typeof getTextAnchorMap) {
  return getTextAnchorMap[textAlign] || getTextAnchorMap.start;
}

//INFO: not supported in all browsers
const getDominantBaselineMap = {
  alphabetic: "alphabetic",
  hanging: "hanging",
  top: "text-before-edge",
  bottom: "text-after-edge",
  middle: "central",
};
//helper function to map canvas-textBaseline to svg-dominantBaseline
export function getDominantBaseline(
  textBaseline: keyof typeof getDominantBaselineMap
) {
  return (
    getDominantBaselineMap[textBaseline] || getDominantBaselineMap.alphabetic
  );
}

/**
 * Return a new normalized vector of given vector
 */
export const normalize = function (vector: [number, number]) {
  var len = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
  return [vector[0] / len, vector[1] / len];
};
