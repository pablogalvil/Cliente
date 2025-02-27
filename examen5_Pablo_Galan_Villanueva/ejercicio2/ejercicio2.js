const canvas = document.getElementById("trafficSign");
const ctx = canvas.getContext("2d");

//Cuadrado blanco
ctx.beginPath();
ctx.moveTo(3, 13);
ctx.arc(13, 13, 10, Math.PI * 0.5, Math.PI * 2);
ctx.lineTo(13, 3);
ctx.lineTo(487, 3);
ctx.arc(487, 13, 10, Math.PI * 0.5, Math.PI * 2);
ctx.lineTo(497, 13);
ctx.lineTo(497, 487);
ctx.arc(487, 487, 10, Math.PI * 2, Math.PI * 0.5);
ctx.lineTo(487, 497);
ctx.lineTo(13, 497);
ctx.arc(13, 487, 10, Math.PI * 0.5, Math.PI * 2);
ctx.lineTo(3, 487);
ctx.closePath();
ctx.strokeStyle = "#092d78";
ctx.lineWidth = 3;
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//Cuadrado azul
ctx.beginPath();
ctx.moveTo(10, 20);
ctx.arc(20, 20, 10, Math.PI * 0.5, Math.PI * 2);
ctx.lineTo(20, 10);
ctx.lineTo(480, 10);
ctx.arc(480, 20, 10, Math.PI * 0.5, Math.PI * 2);
ctx.lineTo(490, 20);
ctx.lineTo(490, 480);
ctx.arc(480, 480, 10, Math.PI * 2, Math.PI * 0.5);
ctx.lineTo(480, 490);
ctx.lineTo(20, 490);
ctx.arc(20, 480, 10, Math.PI * 0.5, Math.PI * 2);
ctx.lineTo(10, 480);
ctx.closePath();
ctx.fillStyle = "#092d78";
ctx.fill();

//Flecha
ctx.beginPath();
ctx.moveTo(250, 40);
ctx.lineTo(360, 230);
ctx.arc(355, 240, 11, 0, Math.PI * 1.5);
ctx.lineTo(350, 250);
ctx.lineTo(280, 230);
ctx.lineTo(280, 460);
ctx.lineTo(220, 460);
ctx.lineTo(220, 230);
ctx.lineTo(150, 250);
ctx.arc(145, 240, 10, Math.PI * 0.5, Math.PI);
ctx.lineTo(140, 230);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();
