import impl from "./convert-to-svg.js";

// registers the extension on a cytoscape lib ref
let register = function (cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape("core", "svg", impl.svg); // register with cytoscape.js
};

if (typeof cytoscape !== "undefined") {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;
