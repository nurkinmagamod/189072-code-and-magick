'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Основное окно
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);

  // стататистика
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150; // px;
  var step = histogramHeight / (max - 0); // px;

  ctx.fillText('Список результатов:', 120, 60);

  var barWidth = 40; // px;
  var indent = 50; // px;
  var initialX = 200; // px;
  var initialY = 250; // px;

  for (var i = 0; i < times.length; i++) {
    var randomAlpha = Math.random();

    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 255,' + randomAlpha + ')';
    }
    else {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    }
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);
  }

  ctx.fillStyle = '#000';

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - 5 - times[i] * step);
  }
};

