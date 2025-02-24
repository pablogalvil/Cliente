const canvas = document.getElementById("canvas");
const pincel = canvas.getContext("2d");

// Configuración del color
pincel.fillStyle = "red";

// Definimos los puntos del logo de Mitsubishi
const triangles = [
  [
    [300, 0],
    [200, 200],
    [400, 200],
    [300, 400],
    [200, 200],
    [400, 200],
  ], // Triángulo superior
  [
    [300, 400],
    [100, 400],
    [0, 600],
    [300, 400],
    [200, 600],
    [0, 600],
  ], // Triángulo izquierdo
  [
    [300, 400],
    [500, 400],
    [600, 600],
    [300, 400],
    [400, 600],
    [600, 600],
  ], // Triángulo derecho
];

// Dibujar los triángulos
triangles.forEach((triangle) => {
  pincel.beginPath();
  pincel.moveTo(...triangle[0]);
  pincel.lineTo(...triangle[1]);
  pincel.lineTo(...triangle[2]);
  pincel.moveTo(...triangle[3]);
  pincel.lineTo(...triangle[4]);
  pincel.lineTo(...triangle[5]);
  pincel.closePath();
  pincel.fill();
});
