const Direction = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  UP: 'UP',
  DOWN: 'DOWN',
};

export default class PlayerContainer {
  constructor(scene, x, y, key, health, maxHealth, id) {
    this.scene = scene;
    this.velocity = 160;
    this.currentDirection = Direction.RIGHT;
    this.playerAttacking = false;
    this.flipX = true;
    this.swordHit = false;
    this.health = health;
    this.maxHealth = maxHealth;
    this.id = id;
  }
}
