import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
  }

  create() {
    const goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 });

    const button = this.add.image(100, 100, 'button1');
    button.setOrigin(0.5, 0.5);

    this.add.sprite(300, 100, 'button1');

    this.chest = this.physics.add.image(300, 300, 'items', 0);

    this.wall = this.physics.add.image(500, 100, 'button1');
    this.wall.setImmovable();

    this.player = this.physics.add.image(32, 32, 'characters', 0);
    this.player.setScale(2);
    this.player.body.setCollideWorldBounds(true);

    this.physics.add.collider(this.player, this.wall);
    this.physics.add.overlap(this.player, this.chest,
      (player, chest) => {
        goldPickupAudio.play();
        chest.destroy();
      });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
    }
  }
}
