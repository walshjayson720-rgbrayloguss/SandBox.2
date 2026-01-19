function handleCombat() {
  for (let i = 0; i < humans.length; i++) {
    for (let j = i+1; j < humans.length; j++) {
      const a = humans[i];
      const b = humans[j];

      if (a.kingdom !== b.kingdom &&
          Math.abs(a.x - b.x) <= 1 &&
          Math.abs(a.y - b.y) <= 1) {

        b.hp -= a.item.damage;
        a.hp -= b.item.damage;
      }
    }
  }
}
