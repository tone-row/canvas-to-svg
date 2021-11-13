(function () {
  'use strict';

  function t(t,e){var r,i=Object.keys(e);for(r=0;r<i.length;r++)t=t.replace(new RegExp("\\{"+i[r]+"\\}","gi"),e[i[r]]);return t}function e(t){var e,r,i;if(!t)throw new Error("cannot create a random attribute name for an undefined object");e="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",r="";do{for(r="",i=0;i<12;i++)r+=e[Math.floor(Math.random()*e.length)];}while(t[r]);return r}const r={left:"start",right:"end",center:"middle",start:"start",end:"end"},i={alphabetic:"alphabetic",hanging:"hanging",top:"text-before-edge",bottom:"text-after-edge",middle:"central"},s=function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return [t[0]/e,t[1]/e]},o=function(t,e=10){let r,i,s,o={};const l="50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro".split(",");for(r=0;r<l.length;r+=2)i="&"+l[r+1]+";",s=parseInt(l[r],e),o[i]="&#"+s+";";return o["\\xa0"]="&#160;",o}(0,32),l={strokeStyle:{svgAttr:"stroke",canvas:"#000000",svg:"none",apply:"stroke"},fillStyle:{svgAttr:"fill",canvas:"#000000",svg:null,apply:"fill"},lineCap:{svgAttr:"stroke-linecap",canvas:"butt",svg:"butt",apply:"stroke"},lineJoin:{svgAttr:"stroke-linejoin",canvas:"miter",svg:"miter",apply:"stroke"},miterLimit:{svgAttr:"stroke-miterlimit",canvas:10,svg:4,apply:"stroke"},lineWidth:{svgAttr:"stroke-width",canvas:1,svg:1,apply:"stroke"},globalAlpha:{svgAttr:"opacity",canvas:1,svg:1,apply:"fill stroke"},font:{canvas:"10px sans-serif"},shadowColor:{canvas:"#000000"},shadowOffsetX:{canvas:0},shadowOffsetY:{canvas:0},shadowBlur:{canvas:0},textAlign:{canvas:"start"},textBaseline:{canvas:"alphabetic"},lineDash:{svgAttr:"stroke-dasharray",canvas:[],svg:null,apply:"stroke"}};class n{constructor(t,e){this.__root=void 0,this.__ctx=void 0,this.__root=t,this.__ctx=e;}addColorStop(e,r){var i,s=this.__ctx.__createElement("stop");s.setAttribute("offset",e),-1!==r.indexOf("rgba")?(i=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(r))&&(s.setAttribute("stop-color",t("rgb({r},{g},{b})",{r:i[1],g:i[2],b:i[3]})),s.setAttribute("stop-opacity",i[4])):s.setAttribute("stop-color",r),this.__root.appendChild(s);}}class a{constructor(t,e){this.__root=void 0,this.__ctx=void 0,this.__root=t,this.__ctx=e;}}const h={width:500,height:500,enableMirroring:!1};class _{constructor(t=h,e){let r;var i,s,o;if(this.width=void 0,this.height=void 0,this.enableMirroring=void 0,this.canvas=void 0,this.__document=void 0,this.__canvas=void 0,this.__ctx=void 0,this.__ids=void 0,this.__root=void 0,this.__defs=void 0,this.__currentElement=void 0,this.__groupStack=void 0,this.__currentElementsToStyle=null,"number"==typeof t?(this.width=t,this.height=null!=e?e:h.height,this.enableMirroring=h.enableMirroring,this.__document=document):(this.width=null!=(i=t.width)?i:h.width,this.height=null!=(s=t.height)?s:h.height,this.enableMirroring=null!=(o=t.enableMirroring)?o:h.enableMirroring,this.__document=t.document||document,r=t.ctx),!r&&(this.__canvas=this.__document.createElement("canvas"),r=this.__canvas.getContext("2d"),!r))throw new Error("Unable to get canvas context");this.__ctx=r,this.canvas=this,this.__setDefaultStyles(),this.__stack=[this.__getStyleState()],this.__groupStack=[],this.__root=this.__document.createElementNS("http://www.w3.org/2000/svg","svg"),this.__root.setAttribute("version","1.1"),this.__root.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.__root.setAttribute("width",this.width.toString()),this.__root.setAttribute("height",this.height.toString()),this.__ids={},this.__defs=this.__document.createElementNS("http://www.w3.org/2000/svg","defs"),this.__root.appendChild(this.__defs),this.__currentElement=this.__document.createElementNS("http://www.w3.org/2000/svg","g"),this.__root.appendChild(this.__currentElement);}__createElement(t,e,r){console.log("createElement",this.__root),void 0===e&&(e={});var i,s,o=this.__document.createElementNS("http://www.w3.org/2000/svg",t),l=Object.keys(e);for(r&&(o.setAttribute("fill","none"),o.setAttribute("stroke","none")),i=0;i<l.length;i++)o.setAttribute(s=l[i],e[s]);return o}__setDefaultStyles(){console.log("setDefaultStyles",this.__root);for(let t in l)this[t]=l[t].canvas;}__applyStyleState(t){console.log("applyStyleState",this.__root);let e,r,i=Object.keys(t);for(e=0;e<i.length;e++)r=i[e],this[r]=t[r];}__getStyleState(){console.log("getStyleState",this.__root);let t,e,r={},i=Object.keys(l);for(t=0;t<i.length;t++)e=i[t],r[e]=this[e];return r}__applyStyleToCurrentElement(e){if(!this.__currentElement)return;let r,i,s,o,h,_,c=this.__currentElement,d=Object.keys(l);for(r=0;r<d.length;r++)if(i=l[d[r]],s=this[d[r]],"apply"in i)if(s instanceof a){if(s.__ctx)for(;s.__ctx.__defs.childNodes.length;)o=s.__ctx.__defs.childNodes[0].getAttribute("id"),this.__ids[o]=o,this.__defs.appendChild(s.__ctx.__defs.childNodes[0]);c.setAttribute(i.apply,t("url(#{id})",{id:s.__root.getAttribute("id")}));}else if(s instanceof n)c.setAttribute(i.apply,t("url(#{id})",{id:s.__root.getAttribute("id")}));else if(-1!==i.apply.indexOf(e)&&i.svg!==s)if("stroke"!==i.svgAttr&&"fill"!==i.svgAttr||-1===s.indexOf("rgba")){let t=i.svgAttr;if("globalAlpha"===d[r]&&(t=e+"-"+i.svgAttr,c.getAttribute(t)))continue;c.setAttribute(t,s);}else if(h=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,_=h.exec(s),_){c.setAttribute(i.svgAttr,t("rgb({r},{g},{b})",{r:_[1],g:_[2],b:_[3]}));let e=parseFloat(_[4]),r=this.globalAlpha;null!=r&&(e*=r),c.setAttribute(i.svgAttr+"-opacity",e.toString());}}__closestGroupOrSvg(t=this.__currentElement){if(console.log("closestGroupOrSvg",this.__root),t)return "g"===t.nodeName||"svg"===t.nodeName?t:this.__closestGroupOrSvg(t.parentNode)}getSerializedSvg(t){console.log("getSerializedSvg",this.__root);let e,r,i,s,l,n,a=(new XMLSerializer).serializeToString(this.__root);if(n=/xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi,n.test(a)&&(a=a.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink')),t)for(e=Object.keys(o),r=0;r<e.length;r++)i=e[r],s=o[i],l=new RegExp(i,"gi"),l.test(a)&&(a=a.replace(l,s));return a}getSvg(){return console.log("getSvg",this.__root),this.__root}save(){console.log("save",this.__root);const t=this.__createElement("g"),e=this.__closestGroupOrSvg();e&&this.__groupStack.push(e),e.appendChild(t),this.__currentElement=t,this.__stack.push(this.__getStyleState());}restore(){console.log("restore",this.__root),this.__currentElement=this.__groupStack.pop(),this.__currentElementsToStyle=null,this.__currentElement||(this.__currentElement=this.__root.childNodes[1]);let t=this.__stack.pop();this.__applyStyleState(t);}__addTransform(t){if(console.log("addTransform",this.__root),!this.__currentElement)return;const e=this.__closestGroupOrSvg();if(!e)return;if(e.childNodes.length>0){"path"===this.__currentElement.nodeName&&(this.__currentElementsToStyle||(this.__currentElementsToStyle={element:e,children:[]}),this.__currentElementsToStyle.children.push(this.__currentElement),this.__applyCurrentDefaultPath());let t=this.__createElement("g");e.appendChild(t),this.__currentElement=t;}if(!this.__currentElement)return;let r=this.__currentElement.getAttribute("transform");r?r+=" ":r="",r+=t,this.__currentElement.setAttribute("transform",r);}scale(e,r){console.log("scale",this.__root),void 0===r&&(r=e),this.__addTransform(t("scale({x},{y})",{x:e,y:r}));}rotate(e){console.log("rotate",this.__root);let r=180*e/Math.PI;this.__addTransform(t("rotate({angle},{cx},{cy})",{angle:r,cx:0,cy:0}));}translate(e,r){console.log("translate",this.__root),this.__addTransform(t("translate({x},{y})",{x:e,y:r}));}transform(e,r,i,s,o,l){console.log("transform",this.__root),this.__addTransform(t("matrix({a},{b},{c},{d},{e},{f})",{a:e,b:r,c:i,d:s,e:o,f:l}));}beginPath(){let t,e;console.log("beginPath",this.__root),this.__currentDefaultPath="",this.__currentPosition={},t=this.__createElement("path",{},!0),e=this.__closestGroupOrSvg(),e&&(e.appendChild(t),this.__currentElement=t);}__applyCurrentDefaultPath(){console.log("applyCurrentDefaultPath",this.__root);let t=this.__currentElement;t&&("path"===t.nodeName?t.setAttribute("d",this.__currentDefaultPath):console.error("Attempted to apply path command to node",t.nodeName));}__addPathCommand(t){console.log("addPathCommand",this.__root),this.__currentDefaultPath+=" ",this.__currentDefaultPath+=t;}moveTo(e,r){console.log("moveTo",this.__root),this.__currentElement&&("path"!==this.__currentElement.nodeName&&this.beginPath(),this.__currentPosition={x:e,y:r},this.__addPathCommand(t("M {x} {y}",{x:e,y:r})));}closePath(){console.log("closePath",this.__root),this.__currentDefaultPath&&this.__addPathCommand("Z");}lineTo(e,r){console.log("lineTo",this.__root),this.__currentPosition={x:e,y:r},this.__currentDefaultPath.indexOf("M")>-1?this.__addPathCommand(t("L {x} {y}",{x:e,y:r})):this.__addPathCommand(t("M {x} {y}",{x:e,y:r}));}bezierCurveTo(e,r,i,s,o,l){console.log("bezierCurveTo",this.__root),this.__currentPosition={x:o,y:l},this.__addPathCommand(t("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",{cp1x:e,cp1y:r,cp2x:i,cp2y:s,x:o,y:l}));}quadraticCurveTo(e,r,i,s){console.log("quadraticCurveTo",this.__root),this.__currentPosition={x:i,y:s},this.__addPathCommand(t("Q {cpx} {cpy} {x} {y}",{cpx:e,cpy:r,x:i,y:s}));}arcTo(t,e,r,i,o){console.log("arcTo",this.__root);let l=this.__currentPosition&&this.__currentPosition.x,n=this.__currentPosition&&this.__currentPosition.y;if(void 0===l||void 0===n)return;if(o<0)throw new Error("IndexSizeError: The radius provided ("+o+") is negative.");if(l===t&&n===e||t===r&&e===i||0===o)return void this.lineTo(t,e);let a=s([l-t,n-e]),h=s([r-t,i-e]);if(a[0]*h[1]==a[1]*h[0])return void this.lineTo(t,e);let _=Math.acos(Math.abs(a[0]*h[0]+a[1]*h[1])),c=s([a[0]+h[0],a[1]+h[1]]),d=o/Math.sin(_/2),u=t+d*c[0],g=e+d*c[1],p=[-a[1],a[0]],m=[h[1],-h[0]],f=t=>{let e=t[0];return t[1]>=0?Math.acos(e):-Math.acos(e)},v=f(p),x=f(m);this.lineTo(u+p[0]*o,g+p[1]*o),this.arc(u,g,o,v,x);}stroke(){console.log("stroke",this.__root),this.__currentElement&&("path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","fill stroke markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("stroke"));}fill(){console.log("fill",this.__root),this.__currentElement&&("path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","stroke fill markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("fill"));}rect(t,e,r,i){console.log("rect",this.__root),this.__currentElement&&("path"!==this.__currentElement.nodeName&&this.beginPath(),this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+i),this.lineTo(t,e+i),this.lineTo(t,e),this.closePath());}fillRect(t,e,r,i){let s,o;console.log("fillRect",this.__root),s=this.__createElement("rect",{x:t,y:e,width:r,height:i},!0),o=this.__closestGroupOrSvg(),o.appendChild(s),this.__currentElement=s,this.__applyStyleToCurrentElement("fill");}strokeRect(t,e,r,i){let s,o;console.log("strokeRect",this.__root),s=this.__createElement("rect",{x:t,y:e,width:r,height:i},!0),o=this.__closestGroupOrSvg(),o.appendChild(s),this.__currentElement=s,this.__applyStyleToCurrentElement("stroke");}__clearCanvas(){console.log("clearCanvas",this.__root);let t=this.__closestGroupOrSvg();if(!t)return;let e=t.getAttribute("transform"),r=this.__root.childNodes[1],i=r.childNodes;for(let t=i.length-1;t>=0;t--)i[t]&&r.removeChild(i[t]);this.__currentElement=r,this.__groupStack=[],e&&this.__addTransform(e);}clearRect(t,e,r,i){if(console.log("clearRect",this.__root),0===t&&0===e&&r===this.width&&i===this.height)return void this.__clearCanvas();let s,o=this.__closestGroupOrSvg();s=this.__createElement("rect",{x:t,y:e,width:r,height:i,fill:"#FFFFFF"},!0),o.appendChild(s);}createLinearGradient(t,r,i,s){console.log("createLinearGradient",this.__root);let o=this.__createElement("linearGradient",{id:e(this.__ids),x1:t+"px",x2:i+"px",y1:r+"px",y2:s+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(o),new n(o,this)}createRadialGradient(t,r,i,s,o,l){console.log("createRadialGradient",this.__root);let a=this.__createElement("radialGradient",{id:e(this.__ids),cx:s+"px",cy:o+"px",r:l+"px",fx:t+"px",fy:r+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(a),new n(a,this)}__parseFont(){console.log("parseFont",this.__root);let t=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i.exec(this.font);if(!t)return;let e={style:t[1]||"normal",size:t[4]||"10px",family:t[6]||"sans-serif",weight:t[3]||"normal",decoration:t[2]||"normal",href:null};return "underline"===this.__fontUnderline&&(e.decoration="underline"),this.__fontHref&&(e.href=this.__fontHref),e}__wrapTextLink(t,e){if(console.log("wrapTextLink",this.__root),t.href){let r=this.__createElement("a");return r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t.href),r.appendChild(e),r}return e}__applyText(t,e,s,o){console.log("applyText",this.__root);let l=this.__parseFont(),n=this.__closestGroupOrSvg();if(!l)return;let a=this.__createElement("text",{"font-family":l.family,"font-size":l.size,"font-style":l.style,"font-weight":l.weight,"text-decoration":l.decoration,x:e,y:s,"text-anchor":(_=this.textAlign,r[_]||r.start),"dominant-baseline":(h=this.textBaseline,i[h]||i.alphabetic)},!0);var h,_;a.appendChild(this.__document.createTextNode(t)),this.__currentElement=a,this.__applyStyleToCurrentElement(o),n.appendChild(this.__wrapTextLink(l,a));}fillText(t,e,r){console.log("fillText",this.__root),this.__applyText(t,e,r,"fill");}strokeText(t,e,r){console.log("strokeText",this.__root),this.__applyText(t,e,r,"stroke");}measureText(t){return console.log("measureText",this.__root),this.__ctx.font=this.font,this.__ctx.measureText(t)}arc(e,r,i,s,o,l){if(console.log("arc",this.__root),s===o)return;(s%=2*Math.PI)==(o%=2*Math.PI)&&(o=(o+2*Math.PI-.001*(l?-1:1))%(2*Math.PI));let n=e+i*Math.cos(o),a=r+i*Math.sin(o),h=e+i*Math.cos(s),_=r+i*Math.sin(s),c=l?0:1,d=0,u=o-s;u<0&&(u+=2*Math.PI),d=l?u>Math.PI?0:1:u>Math.PI?1:0,this.lineTo(h,_),this.__addPathCommand(t("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",{rx:i,ry:i,xAxisRotation:0,largeArcFlag:d,sweepFlag:c,endX:n,endY:a})),this.__currentPosition={x:n,y:a};}clip(){console.log("clip",this.__root);let r=this.__closestGroupOrSvg(),i=this.__createElement("clipPath"),s=e(this.__ids),o=this.__createElement("g");r&&this.__currentElement&&(this.__applyCurrentDefaultPath(),r.removeChild(this.__currentElement),i.setAttribute("id",s),i.appendChild(this.__currentElement),this.__defs.appendChild(i),r.setAttribute("clip-path",t("url(#{id})",{id:s})),r.appendChild(o),this.__currentElement=o);}drawImage(){console.log("drawImage",this.__root);let t,e,r,i,s,o,l,n,a,h,c,d,u,g,p=Array.prototype.slice.call(arguments),m=p[0],f=0,v=0;if(3===p.length)t=p[1],e=p[2],s=m.width,o=m.height,r=s,i=o;else if(5===p.length)t=p[1],e=p[2],r=p[3],i=p[4],s=m.width,o=m.height;else {if(9!==p.length)throw new Error("Invalid number of arguments passed to drawImage: "+arguments.length);f=p[1],v=p[2],s=p[3],o=p[4],t=p[5],e=p[6],r=p[7],i=p[8];}l=this.__closestGroupOrSvg();let x="translate("+t+", "+e+")";if(m instanceof _){if(n=m.getSvg().cloneNode(!0),n.childNodes&&n.childNodes.length>1){for(a=n.childNodes[0];a.childNodes.length;)g=a.childNodes[0].getAttribute("id"),this.__ids[g]=g,this.__defs.appendChild(a.childNodes[0]);if(h=n.childNodes[1],h){let t,e=h.getAttribute("transform");t=e?e+" "+x:x,h.setAttribute("transform",t),l.appendChild(h);}}}else if("CANVAS"===m.nodeName||"IMG"===m.nodeName){if(c=this.__createElement("image"),c.setAttribute("width",r),c.setAttribute("height",i),c.setAttribute("preserveAspectRatio","none"),f||v||s!==m.width||o!==m.height){if(d=this.__document.createElement("canvas"),d.width=r,d.height=i,u=d.getContext("2d"),!u)return;u.drawImage(m,f,v,s,o,0,0,r,i),m=d;}c.setAttribute("transform",x),c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===m.nodeName?m.toDataURL():m.getAttribute("src")),l.appendChild(c);}}createPattern(t,r){console.log("createPattern",this.__root);let i,s=this.__document.createElementNS("http://www.w3.org/2000/svg","pattern"),o=e(this.__ids);return s.setAttribute("id",o),s.setAttribute("width",t.width),s.setAttribute("height",t.height),"CANVAS"===t.nodeName||"IMG"===t.nodeName?(i=this.__document.createElementNS("http://www.w3.org/2000/svg","image"),i.setAttribute("width",t.width),i.setAttribute("height",t.height),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===t.nodeName?t.toDataURL():t.getAttribute("src")),s.appendChild(i),this.__defs.appendChild(s)):t instanceof _&&(s.appendChild(t.__root.childNodes[1]),this.__defs.appendChild(s)),new a(s,this)}setLineDash(t){console.log("setLineDash",this.__root),this.lineDash=t&&t.length>0?t.join(","):null;}}

  var CRp = {};
  var is = {};

  is.number = (obj) => obj != null && typeof obj === typeof 1 && !isNaN(obj);

  CRp.bufferCanvasImage = function (options, cy) {
    //disable usePaths temporarily
    var usePaths = cy.renderer().usePaths;
    cy.renderer().usePaths = () => {
      return false;
    };
    // flush path cache
    cy.elements().forEach(function (ele) {
      ele._private.rscratch.pathCacheKey = null;
      ele._private.rscratch.pathCache = null;
    });

    var renderer = cy.renderer();
    var eles = cy.mutableElements();
    var bb = eles.boundingBox();
    var ctrRect = renderer.findContainerClientCoords();
    var width = options.full ? Math.ceil(bb.w) : ctrRect[2];
    var height = options.full ? Math.ceil(bb.h) : ctrRect[3];
    var specdMaxDims =
      is.number(options.maxWidth) || is.number(options.maxHeight);
    var pxRatio = renderer.getPixelRatio();
    var scale = 1;

    if (options.scale !== undefined) {
      width *= options.scale;
      height *= options.scale;

      scale = options.scale;
    } else if (specdMaxDims) {
      var maxScaleW = Infinity;
      var maxScaleH = Infinity;

      if (is.number(options.maxWidth)) {
        maxScaleW = (scale * options.maxWidth) / width;
      }

      if (is.number(options.maxHeight)) {
        maxScaleH = (scale * options.maxHeight) / height;
      }

      scale = Math.min(maxScaleW, maxScaleH);

      width *= scale;
      height *= scale;
    }

    if (!specdMaxDims) {
      width *= pxRatio;
      height *= pxRatio;
      scale *= pxRatio;
    }

    var buffCxt = null;
    var buffCanvas = (buffCxt = new _(width, height));

    // Rasterize the layers, but only if container has nonzero size
    if (width > 0 && height > 0) {
      buffCxt.clearRect(0, 0, width, height);

      // fill background
      if (options.bg) {
        buffCxt.globalCompositeOperation = "destination-over";

        buffCxt.fillStyle = options.bg;
        buffCxt.fillRect(0, 0, width, height);
      }

      buffCxt.globalCompositeOperation = "source-over";

      var zsortedEles = renderer.getCachedZSortedEles();

      if (options.full) {
        // draw the full bounds of the graph
        buffCxt.translate(-bb.x1 * scale, -bb.y1 * scale);
        buffCxt.scale(scale, scale);

        renderer.drawElements(buffCxt, zsortedEles);

        buffCxt.scale(1 / scale, 1 / scale);
        buffCxt.translate(bb.x1 * scale, bb.y1 * scale);
      } else {
        // draw the current view
        var pan = cy.pan();

        var translation = {
          x: pan.x * scale,
          y: pan.y * scale,
        };

        scale *= cy.zoom();

        buffCxt.translate(translation.x, translation.y);
        buffCxt.scale(scale, scale);

        renderer.drawElements(buffCxt, zsortedEles);

        buffCxt.scale(1 / scale, 1 / scale);
        buffCxt.translate(-translation.x, -translation.y);
      }
    }

    // restore usePaths to default value
    cy.renderer().usePaths = usePaths;
    return buffCanvas;
  };

  function output(canvas) {
    return canvas.getSerializedSvg();
  }

  CRp.svg = function (options) {
    return output(CRp.bufferCanvasImage(options || {}, this));
  };

  // registers the extension on a cytoscape lib ref
  let register = function (cytoscape) {
    if (!cytoscape) {
      return;
    } // can't register if cytoscape unspecified

    cytoscape("core", "svg", CRp.svg); // register with cytoscape.js
  };

  if (typeof cytoscape !== "undefined") {
    // expose to global cytoscape (i.e. window.cytoscape)
    register(cytoscape);
  }

  module.exports = register;

})();
//# sourceMappingURL=cytoscape-svg.js.map
