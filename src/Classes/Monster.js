import Phaser from 'phaser';

export default class Monster extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame, id, health, maxHealth) {
    super(scene, x, y, key, frame, 'Monster');
    this.scene = scene;
    this.id = id;
    this.health = health;
    this.maxHealth = maxHealth;

    this.scene.physics.world.enable(this);
    this.setImmovable(false);

    this.setScale(2);
    this.setCollideWorldBounds(true);
    this.scene.add.existing(this);
  }

  makeActive() {
    this.setActive(true);
    this.setVisible(true);
    this.body.checkCollision.none = false;
  }

  makeInactive() {
    this.setActive(false);
    this.setVisible(false);
    this.body.checkCollision.none = true;
  }
}
