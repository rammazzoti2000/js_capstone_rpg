import Phaser from 'phaser';
import Player from '../Classes/Player';
import Chest from '../Classes/Chest';
import Map from '../Classes/Map';
import GameManager from '../GameManager/GameManager';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
    this.score = 0;
  }

  create() {
    this.createMap();
    this.createAudio();
    this.createGroups();
    this.createInput();

    this.createGameManager();
  }

  update() {
    if (this.player) this.player.update(this.cursors);
  }

  createAudio() {
    this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 });
  }

  createPlayer(location) {
    this.player = new Player(this, location[0] * 2, location[1] * 2, 'characters', 0);
  }

  createGroups() {
    this.chests = this.physics.add.group();
  }

  spawnChest(chestObject) {
    const chest = this.chests.getFirstDead();
    if (!chest) {
      const chest = new Chest(this, chestObject.x * 2, chestObject.y * 2, 'items', 0, chestObject.gold, chestObject.id);
      this.chests.add(chest);
    } else {
      chest.coins = chestObject.gold;
      chest.id = chestObject.id;
      chest.setPosition(chestObject.x * 2, chestObject.y * 2);
      chest.makeActive();
    }
  }

  spawnMonster(monsterObject) {
    console.log(monsterObject);
  }

  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  addCollisions() {
    this.physics.add.collider(this.player, this.map.blockedLayer);
    this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
  }

  collectChest(player, chest) {
    this.goldPickupAudio.play();
    this.score += chest.coins;
    this.events.emit('updateScore', this.score);
    chest.makeInactive();
    this.events.emit('pickUpChest', chest.id);
  }

  createMap() {
    this.map = new Map(this, 'map', 'background', 'background', 'blocked');
  }

  createGameManager() {
    this.events.on('spawnPlayer', (location) => {
      this.createPlayer(location);
      this.addCollisions();
    });

    this.events.on('chestSpawned', (chest) => {
      this.spawnChest(chest);
    });

    this.events.on('monsterSpawned', (monster) => {
      this.spawnMonster(monster);
    });


    this.gameManager = new GameManager(this, this.map.map.objects);
    this.gameManager.setup();
  }
}
