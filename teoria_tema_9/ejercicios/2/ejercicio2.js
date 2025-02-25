const canvas = document.getElementById("trafficSign");
const ctx = canvas.getContext("2d");

// Dibujar triángulo rojo
ctx.beginPath();
ctx.moveTo(230, 20);
ctx.arc(250, 20, 20, Math.PI * 1.3, Math.PI * 1.7);
ctx.lineTo(270, 20);
ctx.lineTo(490, 480);
ctx.arc(485, 490, 10.5, Math.PI * 0.05, Math.PI * 0.75);
ctx.lineTo(482, 500);
ctx.lineTo(20, 500);
ctx.arc(20, 490, 9.5, 0, Math.PI * 1.75);
ctx.lineTo(10, 490);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

// Dibujar triángulo blanco interno
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(450, 470);
ctx.lineTo(50, 470);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.moveTo(280, 180);
ctx.lineTo(265, 350);
ctx.arc(250, 350, 15, 0, Math.PI);
ctx.lineTo(235, 350);
ctx.lineTo(220, 180);
ctx.arc(250, 180, 30, Math.PI, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();

// Dibujar punto del signo de exclamación
ctx.beginPath();
ctx.arc(250, 400, 25, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
