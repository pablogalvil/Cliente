const canvas = document.getElementById("trafficSign");
const ctx = canvas.getContext("2d");

// Dibujar triángulo rojo
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(500, 0);
ctx.lineTo(500, 500);
ctx.lineTo(0, 500);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

// Dibujar triángulo blanco interno
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(480, 20);
ctx.lineTo(480, 480);
ctx.lineTo(20, 480);
ctx.closePath();
ctx.fillStyle = "#1b418a";
ctx.fill();

// Dibujar signo de exclamación negro
ctx.fillStyle = "white";
ctx.font = "bold 200px Arial";
ctx.textAlign = "center";
ctx.fillText("P", 250, 330);
