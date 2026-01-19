function updateAI() {
  humans.forEach(h => {
    const dx = Math.floor(Math.random()*3)-1;
    const dy = Math.floor(Math.random()*3)-1;
    const nx = h.x + dx;
    const ny = h.y + dy;

    if (map[ny] && map[ny][nx] && TILES[map[ny][nx]].walkable) {
      h.x = nx;
      h.y = ny;
    }
  });
}
