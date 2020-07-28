import Phaser from 'phaser';
import Player from '../Classes/Player';
import Chest from '../Classes/Chest';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
  }

  preload() {
    this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
  }

  create() {
    const goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 });

    this.chest = new Chest(this, 300, 300, 'items', 0);

    this.wall = this.physics.add.image(500, 100, 'button1');
    this.wall.setImmovable();

    this.player = new Player(this, 32, 32, 'characters', 0);

    this.physics.add.collider(this.player, this.wall);
    this.physics.add.overlap(this.player, this.chest,
      (player, chest) => {
        goldPickupAudio.play();
        chest.destroy();
      });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.update(this.cursors);
  }
}
