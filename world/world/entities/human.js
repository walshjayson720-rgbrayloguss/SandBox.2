const humans = [];
const kingdoms = [];

function spawnHuman(x, y) {
  let kingdom = kingdoms[0];
  if (!kingdom) {
    kingdom = new Kingdom();
    kingdoms.push(kingdom);
  }

  humans.push({
    x, y,
    hp: 100,
    kingdom,
    item: ITEMS[Math.floor(Math.random()*ITEMS.length)]
  });
}

function drawHuman(ctx, h) {
  const px = h.x * TILE_SIZE;
  const py = h.y * TILE_SIZE;

  ctx.fillStyle = "#f1c27d";
  ctx.fillRect(px+3, py, 2, 2); // head

  ctx.fillStyle = h.kingdom.color;
  ctx.fillRect(px+3, py+2, 2, 3); // body

  ctx.fillStyle = "#000";
  ctx.fillRect(px+2, py+5, 1, 2);
  ctx.fillRect(px+5, py+5, 1, 2);
}
