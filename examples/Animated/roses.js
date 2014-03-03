// Generated by CoffeeScript 1.6.3
(function() {
  var drawCircle, drawDrop, drawPetal, drawRose;

  paper.install(window);

  drawCircle = function(radius, color, strokeColor, strokeWidth, group) {
    var circle;
    circle = new Path.Circle(new Point(0, 0), radius);
    circle.fillColor = color;
    circle.strokeWidth = strokeWidth;
    circle.strokeColor = strokeColor;
    group.addChild(circle);
    return circle;
  };

  drawPetal = function(color, strokeColor, strokeWidth, group, height, width, smooth) {
    var petal;
    petal = new Path();
    petal.add(new Point(0, 0));
    petal.add(new Point(height, width / 2));
    petal.add(new Point(height, -width / 2));
    petal.add(new Point(0, 0));
    petal.fillColor = color;
    petal.strokeWidth = strokeWidth;
    petal.strokeColor = strokeColor;
    if ((smooth != null) && smooth) {
      petal.smooth();
    }
    group.addChild(petal);
    return petal;
  };

  drawDrop = function(color, strokeColor, strokeWidth, group, width, height, angle) {
    var drop, handle1, handle2;
    if (height == null) {
      height = width;
    }
    if (angle == null) {
      angle = 45;
    }
    handle1 = new Point({
      angle: angle,
      length: height / 2
    });
    handle2 = new Point({
      angle: -angle,
      length: height / 2
    });
    drop = new Path();
    drop.segments = [[[0, 0], null, handle1], [[height, 0], [0, width / 2], [0, -width / 2]], [[0, 0], handle2, null]];
    drop.fillColor = color;
    drop.strokeWidth = strokeWidth;
    drop.strokeColor = strokeColor;
    group.addChild(drop);
    return drop;
  };

  drawRose = function(shape, nShapes, radius, group, offset) {
    var angle, i, shapeClone, _i, _results;
    shape.position.x = radius;
    if (offset != null) {
      shape.rotate(offset, new Point(0, 0));
    }
    angle = 360 / nShapes;
    _results = [];
    for (i = _i = 1; 1 <= nShapes ? _i <= nShapes : _i >= nShapes; i = 1 <= nShapes ? ++_i : --_i) {
      shapeClone = shape.clone();
      shapeClone.rotate(angle * i, new Point(0, 0));
      _results.push(group.addChild(shapeClone));
    }
    return _results;
  };

  window.onload = function() {
    var circle, drop, flowerBlue, flowerDarkBlue, flowerGray, flowerGreen, flowerLightBlue, flowerPurple, flowerRed, flowerSize, flowerStrokeBlue, g1, g2, g3, nRoses, offset, petal, radius1, radius2, radius3, radius4, radius5, radius6, radius7, radiusRose1, rose, roseCopy, roses, step, tool, x, y, _i, _j;
    paper.setup(canvas);

    // view.persistence = 1;
    view.persistence = 0;

    view.update(true);

    tool = new Tool();
    rose = new Group();

    flowerStrokeBlue = '#202e45';
    flowerBlue = '#2c96a9';
    flowerDarkBlue = '#234c5e';
    flowerLightBlue = '#2993db';
    flowerGreen = '#62b5bf';
    flowerPurple = '#61314f';
    flowerRed = '#a13f32';
    flowerGray = '#7c7976';
    colors = [flowerStrokeBlue, flowerBlue, flowerDarkBlue, flowerLightBlue, flowerGreen, flowerPurple, flowerRed, flowerGray];

    flowerSize = 150;
    radius1 = flowerSize * 0.95;
    radius2 = flowerSize * 0.88;
    radius3 = flowerSize * 0.83;
    radius4 = flowerSize * 0.80;
    radius5 = flowerSize * 0.65;
    radius6 = flowerSize * 0.5;
    radius7 = flowerSize * 0.3;

    g0 = new Group();
    drawCircle(flowerSize, flowerDarkBlue, 'black', 2.5, g0);
    drawCircle(flowerSize, flowerDarkBlue, flowerGreen, 2.5, g0);
    drawCircle(radius1, flowerDarkBlue, 'black', 2, g0);
    drawCircle(radius2, flowerDarkBlue, 'white', 3, g0);
    drawCircle(radius3, flowerDarkBlue, flowerLightBlue, 2, g0);
    drawCircle(radius4, flowerGreen, flowerLightBlue, 0, g0);
    drawCircle(radius5, flowerLightBlue, flowerDarkBlue, 2.4, g0);
    drawCircle(radius6, flowerPurple, flowerDarkBlue, 2, g0);
    rose.addChild(g0);

    g1 = new Group();
    radiusRose1 = radius4 - 11;
    circle = drawCircle(11, flowerBlue, flowerDarkBlue, 1.5, g1);
    drawRose(circle, 22, radiusRose1, g1);
    circle = drawCircle(7, flowerBlue, flowerDarkBlue, 1.5, g1);
    drawRose(circle, 22, radiusRose1, g1);
    circle = drawCircle(4, flowerRed, flowerDarkBlue, 0, g1);
    drawRose(circle, 11, radiusRose1, g1);
    circle = drawCircle(4, flowerPurple, flowerDarkBlue, 0, g1);
    drawRose(circle, 11, radiusRose1, g1, 360 / 22);
    rose.addChild(g1);

    g2 = new Group();
    drop = drawDrop(flowerBlue, flowerDarkBlue, 2, g2, 30, 60);
    drawRose(drop, 11, radius7 + 10, g2);
    drop = drawDrop(flowerRed, flowerDarkBlue, 1, g2, 10, 60, 10);
    drawRose(drop, 11, radius7 + 10, g2);
    rose.addChild(g2);

    g3 = new Group();
    drawCircle(flowerSize * 0.3, flowerBlue, flowerDarkBlue, 1, g3);
    petal = drawPetal('white', flowerDarkBlue, 1, g3, 31, 15, false);
    drawRose(petal, 6, 29, g3);
    drop = drawDrop('white', flowerDarkBlue, 1, g3, 12.5, 35, 20);
    drawRose(drop, 6, 23, g3, 360 / 12);
    rose.addChild(g3);

    nRoses = 6;
    step = 305;
    rose.translate(150, 150);
    roses = new Array();

    for (x = _i = 0; 0 <= nRoses ? _i <= nRoses : _i >= nRoses; x = 0 <= nRoses ? ++_i : --_i) {
      for (y = _j = 0; 0 <= nRoses ? _j <= nRoses : _j >= nRoses; y = 0 <= nRoses ? ++_j : --_j) {
        if (x === 0 && y === 0) {
          continue;
        }
        offset = 0;
        if (y % 2 === 1) {
          offset = step / 2;
        }
        roseCopy = rose.clone();
        roseCopy.translate(offset + step * x, Math.sqrt(3) * 0.5 * step * y);
        roseCopy.firstChild.children[1].fillColor = colors[Math.floor(Math.random()*colors.length-1)];
        roseCopy.visible = false;
        roses.push(roseCopy);
      }
    }

    view.draw();

    view.onFrame = function() {
      g0.needsUpdate();
      g1.rotate(3);
      g2.rotate(-2);
      return g3.rotate(1);
    };

    tool.onMouseDown = function() {
      var _k, _len;
      for (_k = 0, _len = roses.length; _k < _len; _k++) {
        rose = roses[_k];
        rose.visible = !rose.visible;
      }
      view.update(true);
      return;
    };

    tool.onKeyUp = function(event) {
      if (event.key == 'space') {
        view.persistence = view.persistence>0?0:1;
        console.log('Changing view.persistence to ' + view.persistence);
      }
      return;
    };

    return;
  };

}).call(this);
