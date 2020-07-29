import Phaser from 'phaser';

import config from '../Config/config';
import Button from '../Objects/Button';
import { postScore } from '../Objects/apiScore';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init() {
    this.model = this.sys.game.globals.model;
  }

  preload() {
    this.load.image('gameOverTitle', 'assets/ui/blue_button02.png');
    this.load.image('sprImg', 'assets/sci1.png');
    this.load.audio('gameOverMusic', 'assets/KungFuFighting.mp3');
  }

  create() {
    // const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'sprBg0');
    // const scaleX = this.cameras.main.width / image.width;
    // const scaleY = this.cameras.main.height / image.height;
    // const scale = Math.max(scaleX, scaleY);
    // image.setScale(scale).setScrollFactor(1);

    const user = this.sys.game.globals.model.userName;

    this.gameOver = this.sound.add('gameOverMusic', { volume: 0.07 });
    this.gameOver.play();
    this.add.image(this.game.config.width * 0.5, 240, 'sprImg').setScale(0.35);

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.85,
      'BtnPlay',
    );

    this.score = this.add.text(this.game.config.width * 0.3, 10, `Hello ${user},
     your Score is: ${this.sys.game.globals.model.score}`, {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    postScore(this.model.userName, this.model.score);

    this.gameButton = new Button(this, config.width / 1.57, (config.height / 2) + 100,
      'Button1', 'Button2', 'Restart', 'Game');
    this.gameButton = new Button(this, config.width / 4.5, (config.height / 2) + 100,
      'Button1', 'Button2', 'Submit', 'DisplayScore');
  }
}
