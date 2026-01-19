const ITEMS = [];

const itemTypes = ["sword", "axe", "spear", "bow", "armor", "staff"];
const materials = ["wood", "stone", "iron", "steel", "gold", "mythril"];

let id = 0;
for (let type of itemTypes) {
  for (let mat of materials) {
    ITEMS.push({
      id: id++,
      name: `${mat} ${type}`,
      damage: Math.random()*5 + 2,
      defense: Math.random()*3,
      rarity: Math.random()
    });
  }
}

// Already 36 — duplicate tiers to reach 100+
while (ITEMS.length < 100) {
  ITEMS.push({...ITEMS[Math.floor(Math.random()*ITEMS.length)], id: id++});
}
