const MAP_WIDTH = 200;
const MAP_HEIGHT = 120;

const map = [];

for (let y = 0; y < MAP_HEIGHT; y++) {
  map[y] = [];
  for (let x = 0; x < MAP_WIDTH; x++) {
    map[y][x] = Math.random() < 0.1 ? "water" : "grass";
  }
}
