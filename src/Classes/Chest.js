import Phaser from 'phaser';

export default class Chest extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame, 'Chest');
    this.scene = scene;
    this.coins = 10;

    this.scene.physics.world.enable(this);

    this.scene.add.existing(this);
  }
}
