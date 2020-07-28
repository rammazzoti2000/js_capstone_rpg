import Phaser from 'phaser';
import Player from '../Classes/Player';
import Chest from '../Classes/Chest';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
    this.score = 0;
  }

  create() {
    this.createAudio();
    this.createChests();
    this.createWalls();
    this.createPlayer();
    this.addCollisions();
    this.createInput();
  }

  update() {
    this.player.update(this.cursors);
  }

  createAudio() {
    this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 });
  }

  createPlayer() {
    this.player = new Player(this, 32, 32, 'characters', 0);
  }

  createChests() {
    this.chests = this.physics.add.group();
    this.chestPositions = [[100, 100], [200, 200], [300, 300], [400, 400], [500, 500]];
    this.maxNumberOfChests = 3;
    for (let i = 0; i < this.maxNumberOfChests; i += 1) {
      this.spawnChest();
    }
  }

  spawnChest() {
    const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];

    const chest = this.chests.getFirstDead();
    if (!chest) {
      const chest = new Chest(this, location[0], location[1], 'items', 0);
      this.chests.add(chest);
    } else {
      chest.setPosition(location[0], location[1]);
      chest.makeActive();
    }
  }

  createWalls() {
    this.wall = this.physics.add.image(500, 100, 'button1');
    this.wall.setImmovable();
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  addCollisions() {
    this.physics.add.collider(this.player, this.wall);
    this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
  }

  collectChest(player, chest) {
    this.goldPickupAudio.play();
    this.score += chest.coins;
    this.events.emit('updateScore', this.score);
    chest.makeInactive();
    this.time.delayedCall(1000, this.spawnChest, [], this);
  }
}
