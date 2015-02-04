$(document).ready(function() {


  var animatePieChart = function() {
    var pieChart = Snap("#pieChart");
    var strokes = pieChart.selectAll("path");

    for (var i = 0; i < strokes.length; ++i) {
      var stroke = strokes[i];

      var len = stroke.getTotalLength();
      stroke.attr({
        "stroke-dasharray": len + " " + len,
        "stroke-dashoffset": "" + len
      });

      stroke.animate({"stroke-dashoffset": 0}, 1000);
    }

  };

  animatePieChart();

  (function() {
    var logo = Snap("#logo");
    var paths = logo.selectAll("path");

    for (var i = 0; i < paths.length; ++i) {
      var path = paths[i];
      var len = path.getTotalLength();
      var states = [{
        "stroke-dashoffset": 0,
        "fill-opacity": 0
      }, {
        fill: '#0071bc',
        "fill-opacity": 1

      }, {
        "fill-opacity": 0
      }, {
        "stroke-dashoffset": "" + len
      }];

      path.attr({
        fill: "white",
        stroke: "#000",
        strokeWidth: 1,
        "stroke-dasharray": len + " " + len,
        "stroke-dashoffset": "" + len
      });

      (function animateCircle(el, i) {
        el.animate(states[i], 2000, function() {
          animateCircle(el, ++i in states ? i : 0);
        })
      })(path, 0);
    }
  })();

  (function() {
    var panda = Snap("#panda");
    var paths = panda.selectAll("path");

    var text = panda.text(10, 15, "Drag panda parts");
    text.attr({
      'font-size': '12px',
      'font-family': 'Arial',
      'fill': 'rgba(0,0,0,0.5)'

    });

    for (var i = 0; i < paths.length; ++i) {
      var path = paths[i];
      path.drag();
      var len = path.getTotalLength();
      var states = [{
        "stroke-dashoffset": 0,
        "fill-opacity": 0
      }, {
        fill: '#000000',
        "fill-opacity": 1
      }, {
        fill: '#009245'
      }, {
        fill: '#0071BC'
      }, {
        fill: '#F7931E'
      }];

      path.attr({
        fill: "white",
        stroke: "#000",
        strokeWidth: 1,
        "stroke-dasharray": len + " " + len,
        "stroke-dashoffset": "" + len
      });

      (function animateCircle(el, i) {
        el.animate(states[i], 1000, function() {
          animateCircle(el, ++i);
        })
      })(path, 0);
    }
  })();
});
