import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Title
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 7,
      'Final Warrior', { fontSize: '64px', fill: '#fff' });
    this.titleText.setOrigin(0.5);

    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 50, 'blueButton1', 'blueButton2', 'Play', 'Guide');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 150, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.2, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
