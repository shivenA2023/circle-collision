// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;
let mouseX, mouseY;
let orange = {
  x: 480,
  y: 400,
};
// Global Variables
// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}

// Animation Loop
requestAnimationFrame(draw);

function draw() {
  let distance = Math.sqrt((orange.y - mouseY) ** 2 + (mouseX - orange.x) ** 2);
  //Logic
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // Draw
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "beige";
  ctx.beginPath();
  ctx.arc(orange.x, orange.y, 100, 0, 2 * Math.PI);
  ctx.fill();

  // Draw Player

  // Animate
  requestAnimationFrame(draw);

  if (distance < 130.01) {
    orange.x = Math.random() * 800 + 100;
    orange.y = Math.random() * 600 + 100;
  }
}
