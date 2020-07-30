import { v4 as uuidv4 } from 'uuid';

export default class PlayerModel {
  constructor(spawnLocations) {
    this.health = 1;
    this.maxHealth = 1;
    this.gold = 0;
    this.id = `player-${uuidv4()}`;
    this.spawnLocations = spawnLocations;

    const location = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];
    [this.x, this.y] = location;
  }

  // init() {
  //   this.model = this.sys.game.globals.model;
  // }

  updateGold(gold) {
    this.gold += gold;
    return gold;
  }

  // updateGold(gold) {
  //   // this.gold += gold;
  //   // return gold;
  //   let { score } = this.sys.game.globals.model;
  //   score += 10;
  //   this.sys.game.globals.model.score = score;
  // }

  updateHealth(health) {
    this.health += health;
    if (this.health > 10) {
      this.health = 10;
    }
  }

  respawn() {
    this.health = this.maxHealth;
    const location = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];
    this.x = location[0] * 2;
    this.y = location[1] * 2;
  }
}
