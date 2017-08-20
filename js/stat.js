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

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

window.renderStatistics = function (ctx, names, times) {
  // Тень
  drawRect(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  // Основное окно
  ctx.strokeRect(100, 10, 420, 270);
  drawRect(ctx, 100, 10, 420, 270, 'white');

  // Текст
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

    var xOffset = initialX + indent * i;
    var time = times[i];
    var textColor = '#000';
    var yOffset = initialY - time * step;
    var underBarTime = Math.round(times[i]);
    var underBarTimeYoffSet = yOffset - 5;
    var barNameYoffSet = initialY + 20;
    var barName = names[i];
    var barHeight = time * step;
    var barColor = names[i] === 'Вы'
      ? 'rgb(255, 0, 0)'
      : 'rgba(0, 0, 255, ' + getRandomValue(0.05, 1) + ')';

    drawRect(ctx, xOffset, yOffset, barWidth, barHeight, barColor);
    drawText(ctx, barName, xOffset, barNameYoffSet, textColor);
    drawText(ctx, underBarTime, xOffset, underBarTimeYoffSet, textColor);
  }
};

