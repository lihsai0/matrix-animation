export default function injectTransition(d3) {
  // attrs
  function attrsFunction(transition, map) {
    return transition.each(function() {
      var x = map.apply(this, arguments), t = d3.select(this).transition(transition);
      for (var name in x) t.attr(name, x[name]);
    });
  }

  function attrsObject(transition, map) {
    for (var name in map) transition.attr(name, map[name]);
    return transition;
  }

  d3.transition.prototype.attrs = function(map) {
    return (typeof map === "function" ? attrsFunction : attrsObject)(this, map);
  }
}
