const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight;

canvas.onclick = e => {
  const x = Math.floor(e.offsetX / TILE_SIZE);
  const y = Math.floor(e.offsetY / TILE_SIZE);

  if (currentTool === "human") spawnHuman(x, y);
  if (currentTool === "water") map[y][x] = "water";
};

function draw() {
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      ctx.fillStyle = TILES[map[y][x]].color;
      ctx.fillRect(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  humans.forEach(h => drawHuman(ctx, h));
}

function loop() {
  updateAI();
  handleCombat();
  draw();
  requestAnimationFrame(loop);
}

loop();
