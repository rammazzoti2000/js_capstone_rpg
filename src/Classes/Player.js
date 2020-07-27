import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame, 'Player');
    this.scene = scene;
    this.velocity = 160;

    this.scene.physics.world.enable(this);
    this.setImmovable(false);

    this.setScale(2);
    this.setCollideWorldBounds(true);
    this.scene.add.existing(this);
  }

  update(cursors) {
    this.body.setVelocity(0);

    if (cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
    }

    if (cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
    }
  }
}
