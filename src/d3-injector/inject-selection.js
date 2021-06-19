export default function injectSelection(d3) {
  // attrs
  function attrsFunction(selection, map) {
    return selection.each(function() {
      const x = map.apply(this, arguments), s = d3.select(this);
      for (let name in x) s.attr(name, x[name]);
    });
  }

  function attrsObject(selection, map) {
    for (let name in map) selection.attr(name, map[name]);
    return selection;
  }

  d3.selection.prototype.attrs = function(map) {
    return (typeof map === "function" ? attrsFunction : attrsObject)(this, map);
  }
}
