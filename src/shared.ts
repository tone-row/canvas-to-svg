import { createNamedToNumberedLookup, format } from "./helpers";

export const namedEntities = createNamedToNumberedLookup(
  "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy," +
    "5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute," +
    "5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34," +
    "5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil," +
    "68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde," +
    "6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute," +
    "6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml," +
    "75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc," +
    "7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash," +
    "7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta," +
    "sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu," +
    "st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi," +
    "t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota," +
    "tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau," +
    "u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip," +
    "81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym," +
    "8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr," +
    "8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod," +
    "8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup," +
    "8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4," +
    "nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob," +
    "rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0," +
    "Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm," +
    "80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger," +
    "811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
  32
);

export const STYLES = {
  strokeStyle: {
    svgAttr: "stroke", //corresponding svg attribute
    canvas: "#000000", //canvas default
    svg: "none", //svg default
    apply: "stroke", //apply on stroke() or fill()
  },
  fillStyle: {
    svgAttr: "fill",
    canvas: "#000000",
    svg: null, //svg default is black, but we need to special case this to handle canvas stroke without fill
    apply: "fill",
  },
  lineCap: {
    svgAttr: "stroke-linecap",
    canvas: "butt",
    svg: "butt",
    apply: "stroke",
  },
  lineJoin: {
    svgAttr: "stroke-linejoin",
    canvas: "miter",
    svg: "miter",
    apply: "stroke",
  },
  miterLimit: {
    svgAttr: "stroke-miterlimit",
    canvas: 10,
    svg: 4,
    apply: "stroke",
  },
  lineWidth: {
    svgAttr: "stroke-width",
    canvas: 1,
    svg: 1,
    apply: "stroke",
  },
  globalAlpha: {
    svgAttr: "opacity",
    canvas: 1,
    svg: 1,
    apply: "fill stroke",
  },
  font: {
    //font converts to multiple svg attributes, there is custom logic for this
    canvas: "10px sans-serif",
  },
  shadowColor: {
    canvas: "#000000",
  },
  shadowOffsetX: {
    canvas: 0,
  },
  shadowOffsetY: {
    canvas: 0,
  },
  shadowBlur: {
    canvas: 0,
  },
  textAlign: {
    canvas: "start",
  },
  textBaseline: {
    canvas: "alphabetic",
  },
  lineDash: {
    svgAttr: "stroke-dasharray",
    canvas: [],
    svg: null,
    apply: "stroke",
  },
};

export class CanvasGradient {
  __root: any;
  __ctx: any;
  constructor(gradientNode: any, ctx: any) {
    this.__root = gradientNode;
    this.__ctx = ctx;
  }

  addColorStop(offset: number, color: string) {
    var stop = this.__ctx.__createElement("stop"),
      regex,
      matches;
    stop.setAttribute("offset", offset);
    if (color.indexOf("rgba") !== -1) {
      //separate alpha value, since webkit can't handle it
      regex = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi;
      matches = regex.exec(color);
      if (matches) {
        stop.setAttribute(
          "stop-color",
          format("rgb({r},{g},{b})", {
            r: matches[1],
            g: matches[2],
            b: matches[3],
          })
        );
        stop.setAttribute("stop-opacity", matches[4]);
      }
    } else {
      stop.setAttribute("stop-color", color);
    }
    this.__root.appendChild(stop);
  }
}

export class CanvasPattern {
  __root: any;
  __ctx: any;
  constructor(patternNode: any, ctx: any) {
    this.__root = patternNode;
    this.__ctx = ctx;
  }
}
