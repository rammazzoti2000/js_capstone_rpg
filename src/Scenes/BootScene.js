import Phaser from 'phaser';
// import mapJSON from '../../assets/level/large_level1.json';
import logoImg from '../../assets/zenva_logo.png';
import button1Img from '../../assets/images/ui/blue_button01.png';
import itemsImg from '../../assets/images/items.png';
import charactersImg from '../../assets/images/characters.png';
import monstersImg from '../../assets/images/monsters.png';
import backgroundImg from '../../assets/level/background-extruded.png';

const mapJSON = require('../../assets/level/large_level1.json');

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.loadImages();
    this.loadSpriteSheets();
    this.loadAudio();
    this.loadTileMap();
  }

  loadImages() {
    this.load.image('logo', logoImg);
    this.load.image('button1', button1Img);
    this.load.image('background', backgroundImg);
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', itemsImg, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', charactersImg, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', monstersImg, { frameWidth: 32, frameHeight: 32 });
  }

  loadAudio() {
    this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
    this.load.audio('enemyDeath', ['assets/audio/EnemyDeath.wav']);
    this.load.audio('playerAttack', ['assets/audio/PlayerAttack.wav']);
    this.load.audio('playerDamage', ['assets/audio/PlayerDamage.wav']);
    this.load.audio('playerDeath', ['assets/audio/PlayerDeath.wav']);
  }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', mapJSON);
  }

  create() {
    this.scene.start('Preloader');
  }
}
