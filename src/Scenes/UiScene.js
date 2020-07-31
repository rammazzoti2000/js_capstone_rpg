import Phaser from 'phaser';

export default class UiScene extends Phaser.Scene {
  constructor() {
    super('Ui');
  }

  init() {
    this.gameScene = this.scene.get('Game');
    this.model = this.sys.game.globals.model;
  }

  create() {
    this.setupUiElements();
    this.setupEvents();
  }

  setupUiElements() {
    this.scoreText = this.add.text(35, 8, 'Coins: 0', { fontSize: '16px', fill: '#fff' });
    this.coinIcon = this.add.image(15, 15, 'items', 3);
  }

  setupEvents() {
    this.gameScene.events.on('updateScore', (score) => {
      this.scoreText.setText(`Coins: ${score}`);
      this.sys.game.globals.model.score = score;
    });
  }
}
