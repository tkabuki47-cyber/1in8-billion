// Simulation Web Worker for 1in8b Laboratory
self.onmessage = function(e) {
  var d = e.data || {};
  if (d.t === "run") {
    var id = d.id;
    var lives = d.lives || [];
    for (var i = 0; i < lives.length; i++) {
      self.postMessage({ t: "life", id: id, i: i, r: lives[i] });
    }
    self.postMessage({ t: "done", id: id });
  }
};
