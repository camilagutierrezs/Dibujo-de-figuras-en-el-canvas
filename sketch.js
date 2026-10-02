function setup() {
  createCanvas(1200, 400);
  noLoop();
}

function draw() {
  background(15, 23, 42); // Fondo oscuro

  // Etiquetas para identificaciones
  fill(255);
  textSize(14);
  textAlign(CENTER);

  drawCasita(100, 150);
  text("1. Casita", 100, 320);

  drawHonguito(300, 150);
  text("2. Honguito", 300, 320);

  drawEstrella(500, 150);
  text("3. Estrella", 500, 320);

  drawLunaConGradiente(700, 150);
  text("4. Luna (Gradiente)", 700, 320);

  drawFiguraLibre(900, 150);
  text("5. Libre (Cassette)", 900, 320);

  drawZorritoCETYS(1100, 150);
  text("6. Extra: Zorrito CETYS", 1100, 320);
}

// -------------------------------------------------------------
// 1. CASITA
// -------------------------------------------------------------
function drawCasita(x, y) {
  push();
  translate(x, y);

  // Pared
  fill(245, 245, 245);
  stroke(30);
  strokeWeight(2);
  rect(-50, -10, 100, 100, 4);

  // Techo
  fill(225, 29, 72);
  triangle(-60, -10, 0, -70, 60, -10);

  // Puerta
  fill(120, 53, 15);
  rect(-15, 30, 30, 60, 2);

  // Perilla
  fill(250, 204, 21);
  noStroke();
  circle(10, 62, 6);

  // Ventana
  stroke(30);
  fill(186, 230, 253);
  rect(-40, 10, 25, 25, 2);
  line(-27.5, 10, -27.5, 35);
  line(-40, 22.5, -15, 22.5);

  pop();
}

// -------------------------------------------------------------
// 2. HONGUITO
// -------------------------------------------------------------
function drawHonguito(x, y) {
  push();
  translate(x, y);

  // Tallo
  fill(254, 243, 199);
  stroke(30);
  strokeWeight(2);
  rect(-25, 10, 50, 70, 20);

  // Sombrero
  fill(239, 68, 68);
  arc(0, 15, 120, 110, PI, TWO_PI, CHORD);

  // Pecas blancas
  fill(255);
  noStroke();
  circle(0, -15, 20);
  circle(-30, 0, 14);
  circle(30, 0, 14);
  circle(-15, -35, 10);
  circle(15, -35, 10);

  // Ojitos
  fill(30);
  ellipse(-10, 40, 6, 12);
  ellipse(10, 40, 6, 12);

  pop();
}

// -------------------------------------------------------------
// 3. ESTRELLA
// -------------------------------------------------------------
function drawEstrella(x, y) {
  push();
  translate(x, y);
  fill(250, 204, 21);
  stroke(217, 119, 6);
  strokeWeight(2);

  beginShape();
  let points = 5;
  let outerRadius = 55;
  let innerRadius = 24;
  for (let i = 0; i < points * 2; i++) {
    let r = i % 2 === 0 ? outerRadius : innerRadius;
    let angle = (i * PI) / points - HALF_PI;
    let px = cos(angle) * r;
    let py = sin(angle) * r;
    vertex(px, py);
  }
  endShape(CLOSE);
  pop();
}

// -------------------------------------------------------------
// 4. LUNA (GRADIENTE RADIAL)
// -------------------------------------------------------------
function drawLunaConGradiente(x, y) {
  push();
  translate(x, y);

  let ctx = drawingContext;
  let gradient = ctx.createRadialGradient(-10, -10, 5, 0, 0, 60);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(0.5, "#fef08a");
  gradient.addColorStop(1, "#eab308");

  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 50, 0, Math.PI * 2);
  ctx.arc(22, -18, 42, 0, Math.PI * 2, true);
  ctx.closePath();

  ctx.fillStyle = gradient;
  ctx.shadowColor = "rgba(250, 204, 21, 0.4)";
  ctx.shadowBlur = 20;
  ctx.fill();
  ctx.restore();

  pop();
}

// -------------------------------------------------------------
// 5. LIBRE (CASSETTE)
// -------------------------------------------------------------
function drawFiguraLibre(x, y) {
  push();
  translate(x, y);

  fill(51, 65, 85);
  stroke(226, 232, 240);
  strokeWeight(2);
  rect(-60, -40, 120, 80, 8);

  fill(244, 63, 94);
  rect(-50, -32, 100, 45, 4);

  fill(255);
  rect(-35, -20, 70, 22, 11);

  fill(30);
  circle(-18, -9, 16);
  circle(18, -9, 16);

  fill(255);
  circle(-18, -9, 6);
  circle(18, -9, 6);

  fill(30, 41, 59);
  quad(-40, 40, 40, 40, 30, 22, -30, 22);

  pop();
}

// -------------------------------------------------------------
// 6. EXTRA: ZORRITO CETYS
// -------------------------------------------------------------
function drawZorritoCETYS(x, y) {
  push();
  translate(x, y);
  strokeWeight(1.5);

  // Oreja Izquierda
  fill(234, 88, 12);
  stroke(194, 65, 12);
  triangle(-45, -15, -55, -65, -10, -35);
  fill(255);
  noStroke();
  triangle(-40, -20, -48, -55, -18, -33);

  // Oreja Derecha
  fill(234, 88, 12);
  stroke(194, 65, 12);
  triangle(45, -15, 55, -65, 10, -35);
  fill(255);
  noStroke();
  triangle(40, -20, 48, -55, 18, -33);

  // Cabeza (Naranja)
  stroke(194, 65, 12);
  fill(234, 88, 12);
  beginShape();
  vertex(-50, -20);
  vertex(0, -40);
  vertex(50, -20);
  vertex(60, 15);
  vertex(0, 65);
  vertex(-60, 15);
  endShape(CLOSE);

  // Pelaje inferior (Blanco)
  fill(255);
  noStroke();
  beginShape();
  vertex(-60, 15);
  vertex(-25, 10);
  vertex(0, 30);
  vertex(25, 10);
  vertex(60, 15);
  vertex(0, 65);
  endShape(CLOSE);

  // Franja Dorada CETYS
  fill(250, 204, 21);
  triangle(-18, -36, 0, -10, 18, -36);

  // Ojos
  fill(30);
  beginShape();
  vertex(-35, -5);
  vertex(-15, 5);
  vertex(-30, 12);
  endShape(CLOSE);

  beginShape();
  vertex(35, -5);
  vertex(15, 5);
  vertex(30, 12);
  endShape(CLOSE);

  fill(255);
  circle(-26, 2, 3);
  circle(26, 2, 3);

  // Nariz
  fill(15);
  triangle(-8, 52, 8, 52, 0, 63);

  pop();
}
