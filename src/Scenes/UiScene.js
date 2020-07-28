import Phaser from 'phaser';

export default class UiScene extends Phaser.Scene {
  constructor() {
    super('Ui');
  }

  create() {
    this.setupUiElements();
    this.setupEvents();
  }

  setupUiElements() {
    this.scoreText = this.add.text(35, 8, 'Coins: 0', { fontSize: '16px', fill: '#fff' }); // NEW
    this.coinIcon = this.add.image(15, 15, 'items', 3); // NEW
  }

  setupEvents() {

  }
}
