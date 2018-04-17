window.renderStatistics = function(ctx, names, times) {
  // ctx.fillStyle= 'rgba(0,0,0,0.7)';
  // ctx.fillRect(110,20,270,420);
  // ctx.fillStyle= 'white';
  // ctx.fillRect(100,10,270,420);
  var alpha = ctx.globalAlpha;
  ctx.save();
  ctx.globalAlpha = alpha * 0.68;
  ctx.beginPath();
  ctx.moveTo(549.6, 125.4);
  ctx.bezierCurveTo(532.6, 159.4, 571.7, 169.6, 578.1, 192.1);
  ctx.bezierCurveTo(584.6, 214.7, 542.6, 280.9, 542.6, 280.9);
  ctx.lineTo(43.4, 280.9);
  ctx.bezierCurveTo(43.4, 280.9, -0.1, 228.4, 20.0, 171.2);
  ctx.bezierCurveTo(40.2, 113.9, 60.6, 119.9, 60.6, 119.9);
  ctx.bezierCurveTo(60.6, 119.9, 48.7, 48.0, 97.1, 35.9);
  ctx.bezierCurveTo(145.5, 23.8, 179.1, 87.4, 179.1, 87.4);
  ctx.bezierCurveTo(179.1, 87.4, 176.9, 30.2, 248.6, 18.9);
  ctx.bezierCurveTo(320.4, 7.6, 345.6, 86.9, 345.6, 86.9);
  ctx.bezierCurveTo(345.6, 86.9, 342.0, 40.4, 408.1, 19.4);
  ctx.bezierCurveTo(474.3, -1.5, 545.0, 34.4, 551.9, 63.1);
  ctx.bezierCurveTo(551.9, 63.1, 566.6, 91.4, 549.6, 125.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.globalAlpha = alpha * 1.00;
  ctx.beginPath();
  ctx.moveTo(534.9, 112.3);
  ctx.bezierCurveTo(517.9, 146.3, 556.9, 156.4, 563.4, 179.0);
  ctx.bezierCurveTo(569.8, 201.6, 527.9, 267.7, 527.9, 267.7);
  ctx.lineTo(28.7, 267.7);
  ctx.bezierCurveTo(28.7, 267.7, -14.8, 215.3, 5.3, 158.0);
  ctx.bezierCurveTo(25.5, 100.8, 45.9, 106.8, 45.9, 106.8);
  ctx.bezierCurveTo(45.9, 106.8, 34.0, 34.9, 82.4, 22.8);
  ctx.bezierCurveTo(130.8, 10.7, 164.4, 74.3, 164.4, 74.3);
  ctx.bezierCurveTo(164.4, 74.3, 162.1, 17.1, 233.9, 5.8);
  ctx.bezierCurveTo(305.7, -5.5, 330.9, 73.8, 330.9, 73.8);
  ctx.bezierCurveTo(330.9, 73.8, 327.3, 27.2, 393.4, 6.3);
  ctx.bezierCurveTo(459.5, -14.7, 530.3, 21.3, 537.2, 50.0);
  ctx.bezierCurveTo(537.2, 50.0, 551.9, 78.3, 534.9, 112.3);
  ctx.closePath();
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fill();
  ctx.restore();

  ctx.fillStyle= 'black';
  ctx.font = '26px PT Mono';
  ctx.fillText('Ура вы победили!', 190, 40);
  ctx.fillText('Список результатов:', 190, 70);
  
  let maxTime = Math.max(...times);
  let barWidth = 70; //px
  let maxBarHeight = 140; //px
  let baseYCoordinate = 220; //px
  
  for (let i = 0; i < times.length; i++) {
    let barHeight = maxBarHeight * times[i] / maxTime;
    let barXCoordinate = 100 + i * 100; //px
    let randomOpacity = Math.random().toFixed(1);
    ctx.fillStyle = names[i] == 'Вы' ? 'rgba(255,0,0,1)' : `rgba(0,0,255,${randomOpacity})`;
    ctx.fillRect(barXCoordinate, baseYCoordinate - barHeight, barWidth, barHeight);
    ctx.fillStyle= 'black';
    ctx.font = '20px PT Mono';
    ctx.fillText(names[i], barXCoordinate, baseYCoordinate + 20);
    ctx.fillText(`${Math.floor(times[i])}`, barXCoordinate, baseYCoordinate + 40);
  }
};