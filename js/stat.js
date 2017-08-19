'use strict';

function drawRect(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.restore();
}

function drawText(ctx, text, X, Y, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, X, Y);
}

window.renderStatistics = function (ctx, names, times) {
  // Тень
  drawRect(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  // Основное окно
  ctx.strokeRect(100, 10, 420, 270);
  drawRect(ctx, 100, 10, 420, 270, 'white');

  // Текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  drawText(ctx, 'Ура вы победили!', 120, 40, '#000');
  drawText(ctx, 'Список результатов:', 120, 60, '#000');

  // стататистика
  function getMaxPositiveNumber(numbers) {
    var max = -1;
    for (var i = 0; i < numbers.length; i++) {
      var numer = numbers[i];
      if (numer > max) {
        max = numer;
      }
    }
    return max;
  }

  var histogramHeight = 150; // px;
  var step = histogramHeight / getMaxPositiveNumber(times); // px;
  var barWidth = 40; // px;
  var indent = 50; // px;
  var initialX = 200; // px;
  var initialY = 250; // px;

  for (var i = 0; i < times.length; i++) {
    var randomAlpha = Math.random();

    if (names[i] !== 'Вы') {
      drawRect(ctx, initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step, 'rgba(0, 0, 255,' + randomAlpha + ')');
    } else {
      drawRect(ctx, initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step, 'rgb(255, 0, 0)');
    }

    drawText(ctx, names[i], initialX + indent * i, initialY + 20, '#000');
    drawText(ctx, Math.round(times[i]), initialX + indent * i, initialY - 5 - times[i] * step, '#000');
  }
};

