import Phaser from 'phaser';
import logoImg from '../../assets/zenva_logo.png';
import button1Img from '../../assets/images/ui/blue_button01.png';
import itemsImg from '../../assets/images/items.png';
import charactersImg from '../../assets/images/characters.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logoImg);
    this.load.image('button1', button1Img);
    this.load.spritesheet('items', itemsImg, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', charactersImg, { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.scene.start('Preloader');
    this.scene.start('GameScene');
  }
}
