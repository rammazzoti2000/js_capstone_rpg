import Phaser from 'phaser';
import zenvaImg from '../assets/zenva_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', zenvaImg);
  }

  create() {
    this.scene.start('Preloader');
  }
}
