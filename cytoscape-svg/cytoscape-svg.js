(function () {
  'use strict';

  function t(t,e){var i,r=Object.keys(e);for(i=0;i<r.length;i++)t=t.replace(new RegExp("\\{"+r[i]+"\\}","gi"),e[r[i]]);return t}function e(t){var e,i,r;if(!t)throw new Error("cannot create a random attribute name for an undefined object");e="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",i="";do{for(i="",r=0;r<12;r++)i+=e[Math.floor(Math.random()*e.length)];}while(t[i]);return i}var i={left:"start",right:"end",center:"middle",start:"start",end:"end"},r={alphabetic:"alphabetic",hanging:"hanging",top:"text-before-edge",bottom:"text-after-edge",middle:"central"},s=function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return [t[0]/e,t[1]/e]},n=function(t,e){void 0===e&&(e=10);var i,r,s,n={},a="50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro".split(",");for(i=0;i<a.length;i+=2)r="&"+a[i+1]+";",s=parseInt(a[i],e),n[r]="&#"+s+";";return n["\\xa0"]="&#160;",n}(0,32),a={strokeStyle:{svgAttr:"stroke",canvas:"#000000",svg:"none",apply:"stroke"},fillStyle:{svgAttr:"fill",canvas:"#000000",svg:null,apply:"fill"},lineCap:{svgAttr:"stroke-linecap",canvas:"butt",svg:"butt",apply:"stroke"},lineJoin:{svgAttr:"stroke-linejoin",canvas:"miter",svg:"miter",apply:"stroke"},miterLimit:{svgAttr:"stroke-miterlimit",canvas:10,svg:4,apply:"stroke"},lineWidth:{svgAttr:"stroke-width",canvas:1,svg:1,apply:"stroke"},globalAlpha:{svgAttr:"opacity",canvas:1,svg:1,apply:"fill stroke"},font:{canvas:"10px sans-serif"},shadowColor:{canvas:"#000000"},shadowOffsetX:{canvas:0},shadowOffsetY:{canvas:0},shadowBlur:{canvas:0},textAlign:{canvas:"start"},textBaseline:{canvas:"alphabetic"},lineDash:{svgAttr:"stroke-dasharray",canvas:[],svg:null,apply:"stroke"}},o=/*#__PURE__*/function(){function e(t,e){this.__root=void 0,this.__ctx=void 0,this.__root=t,this.__ctx=e;}return e.prototype.addColorStop=function(e,i){var r,s=this.__ctx.__createElement("stop");s.setAttribute("offset",e),-1!==i.indexOf("rgba")?(r=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(i))&&(s.setAttribute("stop-color",t("rgb({r},{g},{b})",{r:r[1],g:r[2],b:r[3]})),s.setAttribute("stop-opacity",r[4])):s.setAttribute("stop-color",i),this.__root.appendChild(s);},e}(),h=function(t,e){this.__root=void 0,this.__ctx=void 0,this.__root=t,this.__ctx=e;},l={width:500,height:500,enableMirroring:!1},_=/*#__PURE__*/function(){function _(t,e){var i,r,s,n;if(void 0===t&&(t=l),this.width=void 0,this.height=void 0,this.enableMirroring=void 0,this.canvas=void 0,this.__document=void 0,this.__canvas=void 0,this.__ctx=void 0,this.__ids=void 0,this.__root=void 0,this.__defs=void 0,this.__currentElement=void 0,this.__groupStack=void 0,this.__currentElementsToStyle=null,"number"==typeof t?(this.width=t,this.height=null!=e?e:l.height,this.enableMirroring=l.enableMirroring,this.__document=document):(this.width=null!=(r=t.width)?r:l.width,this.height=null!=(s=t.height)?s:l.height,this.enableMirroring=null!=(n=t.enableMirroring)?n:l.enableMirroring,this.__document=t.document||document,i=t.ctx),!(i||(this.__canvas=this.__document.createElement("canvas"),i=this.__canvas.getContext("2d"))))throw new Error("Unable to get canvas context");this.__ctx=i,this.canvas=this,this.__setDefaultStyles(),this.__stack=[this.__getStyleState()],this.__groupStack=[],this.__root=this.__document.createElementNS("http://www.w3.org/2000/svg","svg"),this.__root.setAttribute("version","1.1"),this.__root.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.__root.setAttribute("width",this.width.toString()),this.__root.setAttribute("height",this.height.toString()),this.__ids={},this.__defs=this.__document.createElementNS("http://www.w3.org/2000/svg","defs"),this.__root.appendChild(this.__defs),this.__currentElement=this.__document.createElementNS("http://www.w3.org/2000/svg","g"),this.__root.appendChild(this.__currentElement);}var c=_.prototype;return c.__createElement=function(t,e,i){void 0===e&&(e={});var r,s,n=this.__document.createElementNS("http://www.w3.org/2000/svg",t),a=Object.keys(e);for(i&&(n.setAttribute("fill","none"),n.setAttribute("stroke","none")),r=0;r<a.length;r++)n.setAttribute(s=a[r],e[s]);return n},c.__setDefaultStyles=function(){for(var t in a)this[t]=a[t].canvas;},c.__applyStyleState=function(t){var e,i,r=Object.keys(t);for(e=0;e<r.length;e++)this[i=r[e]]=t[i];},c.__getStyleState=function(){var t,e,i={},r=Object.keys(a);for(t=0;t<r.length;t++)i[e=r[t]]=this[e];return i},c.__applyStyleToCurrentElement=function(e){if(this.__currentElement){var i=this.__currentElement,r=this.__currentElementsToStyle;r&&(i.setAttribute(e,""),i=r.element,r.children.forEach(function(t){t.setAttribute(e,"");}));var s,n,l,_,c,u=Object.keys(a);for(s=0;s<u.length;s++)if(l=this[u[s]],"apply"in(n=a[u[s]]))if(l instanceof h){if(l.__ctx)for(;l.__ctx.__defs.childNodes.length;)_=l.__ctx.__defs.childNodes[0].getAttribute("id"),this.__ids[_]=_,this.__defs.appendChild(l.__ctx.__defs.childNodes[0]);i.setAttribute(n.apply,t("url(#{id})",{id:l.__root.getAttribute("id")}));}else if(l instanceof o)i.setAttribute(n.apply,t("url(#{id})",{id:l.__root.getAttribute("id")}));else if(-1!==n.apply.indexOf(e)&&n.svg!==l)if("stroke"!==n.svgAttr&&"fill"!==n.svgAttr||-1===l.indexOf("rgba")){var d=n.svgAttr;if("globalAlpha"===u[s]&&i.getAttribute(d=e+"-"+n.svgAttr))continue;i.setAttribute(d,l);}else if(c=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(l)){i.setAttribute(n.svgAttr,t("rgb({r},{g},{b})",{r:c[1],g:c[2],b:c[3]}));var p=parseFloat(c[4]),g=this.globalAlpha;null!=g&&(p*=g),i.setAttribute(n.svgAttr+"-opacity",p.toString());}}},c.__closestGroupOrSvg=function(t){if(void 0===t&&(t=this.__currentElement),t)return "g"===t.nodeName||"svg"===t.nodeName?t:this.__closestGroupOrSvg(t.parentNode)},c.getSerializedSvg=function(t){var e,i,r,s,a,o=(new XMLSerializer).serializeToString(this.__root);if(/xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi.test(o)&&(o=o.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink')),t)for(e=Object.keys(n),i=0;i<e.length;i++)s=n[r=e[i]],(a=new RegExp(r,"gi")).test(o)&&(o=o.replace(a,s));return o},c.getSvg=function(){return this.__root},c.save=function(){var t=this.__createElement("g"),e=this.__closestGroupOrSvg();e&&this.__groupStack.push(e),e.appendChild(t),this.__currentElement=t,this.__stack.push(this.__getStyleState());},c.restore=function(){this.__currentElement=this.__groupStack.pop(),this.__currentElementsToStyle=null,this.__currentElement||(this.__currentElement=this.__root.childNodes[1]);var t=this.__stack.pop();this.__applyStyleState(t);},c.__addTransform=function(t){if(this.__currentElement){var e=this.__closestGroupOrSvg();if(e){if(e.childNodes.length>0){"path"===this.__currentElement.nodeName&&(this.__currentElementsToStyle||(this.__currentElementsToStyle={element:e,children:[]}),this.__currentElementsToStyle.children.push(this.__currentElement),this.__applyCurrentDefaultPath());var i=this.__createElement("g");e.appendChild(i),this.__currentElement=i;}if(this.__currentElement){var r=this.__currentElement.getAttribute("transform");r?r+=" ":r="",this.__currentElement.setAttribute("transform",r+=t);}}}},c.scale=function(e,i){void 0===i&&(i=e),this.__addTransform(t("scale({x},{y})",{x:e,y:i}));},c.rotate=function(e){var i=180*e/Math.PI;this.__addTransform(t("rotate({angle},{cx},{cy})",{angle:i,cx:0,cy:0}));},c.translate=function(e,i){this.__addTransform(t("translate({x},{y})",{x:e,y:i}));},c.transform=function(e,i,r,s,n,a){this.__addTransform(t("matrix({a},{b},{c},{d},{e},{f})",{a:e,b:i,c:r,d:s,e:n,f:a}));},c.beginPath=function(){var t,e;this.__currentDefaultPath="",this.__currentPosition={},t=this.__createElement("path",{},!0),(e=this.__closestGroupOrSvg())&&(e.appendChild(t),this.__currentElement=t);},c.__applyCurrentDefaultPath=function(){var t=this.__currentElement;t&&("path"===t.nodeName?t.setAttribute("d",this.__currentDefaultPath):console.error("Attempted to apply path command to node",t.nodeName));},c.__addPathCommand=function(t){this.__currentDefaultPath+=" ",this.__currentDefaultPath+=t;},c.moveTo=function(e,i){this.__currentElement&&("path"!==this.__currentElement.nodeName&&this.beginPath(),this.__currentPosition={x:e,y:i},this.__addPathCommand(t("M {x} {y}",{x:e,y:i})));},c.closePath=function(){this.__currentDefaultPath&&this.__addPathCommand("Z");},c.lineTo=function(e,i){this.__currentPosition={x:e,y:i},this.__currentDefaultPath.indexOf("M")>-1?this.__addPathCommand(t("L {x} {y}",{x:e,y:i})):this.__addPathCommand(t("M {x} {y}",{x:e,y:i}));},c.bezierCurveTo=function(e,i,r,s,n,a){this.__currentPosition={x:n,y:a},this.__addPathCommand(t("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",{cp1x:e,cp1y:i,cp2x:r,cp2y:s,x:n,y:a}));},c.quadraticCurveTo=function(e,i,r,s){this.__currentPosition={x:r,y:s},this.__addPathCommand(t("Q {cpx} {cpy} {x} {y}",{cpx:e,cpy:i,x:r,y:s}));},c.arcTo=function(t,e,i,r,n){var a=this.__currentPosition&&this.__currentPosition.x,o=this.__currentPosition&&this.__currentPosition.y;if(void 0!==a&&void 0!==o){if(n<0)throw new Error("IndexSizeError: The radius provided ("+n+") is negative.");if(a===t&&o===e||t===i&&e===r||0===n)this.lineTo(t,e);else {var h=s([a-t,o-e]),l=s([i-t,r-e]);if(h[0]*l[1]!=h[1]*l[0]){var _=Math.acos(Math.abs(h[0]*l[0]+h[1]*l[1])),c=s([h[0]+l[0],h[1]+l[1]]),u=n/Math.sin(_/2),d=t+u*c[0],p=e+u*c[1],g=[-h[1],h[0]],m=[l[1],-l[0]],f=function(t){var e=t[0];return t[1]>=0?Math.acos(e):-Math.acos(e)},v=f(g),x=f(m);this.lineTo(d+g[0]*n,p+g[1]*n),this.arc(d,p,n,v,x);}else this.lineTo(t,e);}}},c.stroke=function(){this.__currentElement&&("path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","fill stroke markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("stroke"));},c.fill=function(){this.__currentElement&&("path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","stroke fill markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("fill"));},c.rect=function(t,e,i,r){this.__currentElement&&("path"!==this.__currentElement.nodeName&&this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.lineTo(t,e),this.closePath());},c.fillRect=function(t,e,i,r){var s;s=this.__createElement("rect",{x:t,y:e,width:i,height:r},!0),this.__closestGroupOrSvg().appendChild(s),this.__currentElement=s,this.__applyStyleToCurrentElement("fill");},c.strokeRect=function(t,e,i,r){var s;s=this.__createElement("rect",{x:t,y:e,width:i,height:r},!0),this.__closestGroupOrSvg().appendChild(s),this.__currentElement=s,this.__applyStyleToCurrentElement("stroke");},c.__clearCanvas=function(){var t=this.__closestGroupOrSvg();if(t){for(var e=t.getAttribute("transform"),i=this.__root.childNodes[1],r=i.childNodes,s=r.length-1;s>=0;s--)r[s]&&i.removeChild(r[s]);this.__currentElement=i,this.__groupStack=[],e&&this.__addTransform(e);}},c.clearRect=function(t,e,i,r){if(0!==t||0!==e||i!==this.width||r!==this.height){var s,n=this.__closestGroupOrSvg();s=this.__createElement("rect",{x:t,y:e,width:i,height:r,fill:"#FFFFFF"},!0),n.appendChild(s);}else this.__clearCanvas();},c.createLinearGradient=function(t,i,r,s){var n=this.__createElement("linearGradient",{id:e(this.__ids),x1:t+"px",x2:r+"px",y1:i+"px",y2:s+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(n),new o(n,this)},c.createRadialGradient=function(t,i,r,s,n,a){var h=this.__createElement("radialGradient",{id:e(this.__ids),cx:s+"px",cy:n+"px",r:a+"px",fx:t+"px",fy:i+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(h),new o(h,this)},c.__parseFont=function(){var t=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i.exec(this.font);if(t){var e={style:t[1]||"normal",size:t[4]||"10px",family:t[6]||"sans-serif",weight:t[3]||"normal",decoration:t[2]||"normal",href:null};return "underline"===this.__fontUnderline&&(e.decoration="underline"),this.__fontHref&&(e.href=this.__fontHref),e}},c.__wrapTextLink=function(t,e){if(t.href){var i=this.__createElement("a");return i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t.href),i.appendChild(e),i}return e},c.__applyText=function(t,e,s,n){var a=this.__parseFont(),o=this.__closestGroupOrSvg();if(a){var h,l,_=this.__createElement("text",{"font-family":a.family,"font-size":a.size,"font-style":a.style,"font-weight":a.weight,"text-decoration":a.decoration,x:e,y:s,"text-anchor":(l=this.textAlign,i[l]||i.start),"dominant-baseline":(h=this.textBaseline,r[h]||r.alphabetic)},!0);_.appendChild(this.__document.createTextNode(t)),this.__currentElement=_,this.__applyStyleToCurrentElement(n),o.appendChild(this.__wrapTextLink(a,_));}},c.fillText=function(t,e,i){this.__applyText(t,e,i,"fill");},c.strokeText=function(t,e,i){this.__applyText(t,e,i,"stroke");},c.measureText=function(t){return this.__ctx.font=this.font,this.__ctx.measureText(t)},c.arc=function(e,i,r,s,n,a){if(s!==n){(s%=2*Math.PI)==(n%=2*Math.PI)&&(n=(n+2*Math.PI-.001*(a?-1:1))%(2*Math.PI));var o,h=e+r*Math.cos(n),l=i+r*Math.sin(n),_=e+r*Math.cos(s),c=i+r*Math.sin(s),u=a?0:1,d=n-s;d<0&&(d+=2*Math.PI),o=a?d>Math.PI?0:1:d>Math.PI?1:0,this.lineTo(_,c),this.__addPathCommand(t("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",{rx:r,ry:r,xAxisRotation:0,largeArcFlag:o,sweepFlag:u,endX:h,endY:l})),this.__currentPosition={x:h,y:l};}},c.clip=function(){var i=this.__closestGroupOrSvg(),r=this.__createElement("clipPath"),s=e(this.__ids),n=this.__createElement("g");i&&this.__currentElement&&(this.__applyCurrentDefaultPath(),i.removeChild(this.__currentElement),r.setAttribute("id",s),r.appendChild(this.__currentElement),this.__defs.appendChild(r),i.setAttribute("clip-path",t("url(#{id})",{id:s})),i.appendChild(n),this.__currentElement=n);},c.drawImage=function(){var t,e,i,r,s,n,a,o,h,l,c,u,d,p,g=Array.prototype.slice.call(arguments),m=g[0],f=0,v=0;if(3===g.length)t=g[1],e=g[2],i=s=m.width,r=n=m.height;else if(5===g.length)t=g[1],e=g[2],i=g[3],r=g[4],s=m.width,n=m.height;else {if(9!==g.length)throw new Error("Invalid number of arguments passed to drawImage: "+arguments.length);f=g[1],v=g[2],s=g[3],n=g[4],t=g[5],e=g[6],i=g[7],r=g[8];}a=this.__closestGroupOrSvg();var x="translate("+t+", "+e+")";if(m instanceof _){if((o=m.getSvg().cloneNode(!0)).childNodes&&o.childNodes.length>1){for(h=o.childNodes[0];h.childNodes.length;)p=h.childNodes[0].getAttribute("id"),this.__ids[p]=p,this.__defs.appendChild(h.childNodes[0]);if(l=o.childNodes[1]){var b=l.getAttribute("transform");l.setAttribute("transform",b?b+" "+x:x),a.appendChild(l);}}}else if("CANVAS"===m.nodeName||"IMG"===m.nodeName){if((c=this.__createElement("image")).setAttribute("width",i),c.setAttribute("height",r),c.setAttribute("preserveAspectRatio","none"),f||v||s!==m.width||n!==m.height){if((u=this.__document.createElement("canvas")).width=i,u.height=r,!(d=u.getContext("2d")))return;d.drawImage(m,f,v,s,n,0,0,i,r),m=u;}c.setAttribute("transform",x),c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===m.nodeName?m.toDataURL():m.getAttribute("src")),a.appendChild(c);}},c.createPattern=function(t,i){var r,s=this.__document.createElementNS("http://www.w3.org/2000/svg","pattern"),n=e(this.__ids);return s.setAttribute("id",n),s.setAttribute("width",t.width),s.setAttribute("height",t.height),"CANVAS"===t.nodeName||"IMG"===t.nodeName?((r=this.__document.createElementNS("http://www.w3.org/2000/svg","image")).setAttribute("width",t.width),r.setAttribute("height",t.height),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===t.nodeName?t.toDataURL():t.getAttribute("src")),s.appendChild(r),this.__defs.appendChild(s)):t instanceof _&&(s.appendChild(t.__root.childNodes[1]),this.__defs.appendChild(s)),new h(s,this)},c.setLineDash=function(t){this.lineDash=t&&t.length>0?t.join(","):null;},_}();

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
