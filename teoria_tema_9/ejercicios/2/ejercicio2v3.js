const canvas = document.getElementById("trafficSign");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(250, 250, 249, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "white";
ctx.strokeStyle = "#092d78";
ctx.lineWidth = 3;
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(250, 250, 240, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "#092d78";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 250, 180, Math.PI * 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 250, 120, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "#092d78";
ctx.fill();

ctx.beginPath();
ctx.moveTo(65, 250);
ctx.lineTo(136, 250);
ctx.lineTo(210, 330);
ctx.lineTo(135, 400);
ctx.lineTo(65, 400);
ctx.closePath();
ctx.fillStyle = "#092d78";
ctx.fill();

ctx.beginPath();
ctx.moveTo(320, 430);
ctx.lineTo(290, 330);
ctx.lineTo(350, 260);
ctx.lineTo(440, 270);
ctx.lineTo(440, 390);
ctx.closePath();
ctx.fillStyle = "#092d78";
ctx.fill();

ctx.beginPath();
ctx.moveTo(310, 160);
ctx.lineTo(205, 140);
ctx.lineTo(170, 70);
ctx.lineTo(350, 70);
ctx.closePath();
ctx.fillStyle = "#092d78";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(150, 250);
ctx.lineTo(95, 300);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();
