import Phaser from 'phaser';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import UiScene from './Scenes/UiScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import GuideScene from './Scenes/GuideScene';
import GameOver from './Scenes/GameOverScene';
import Model from './Classes/Model';
import ScoreScene from './Scenes/ScoreScene';
import config from './Config/config';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Guide', GuideScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Ui', UiScene);
    this.scene.add('GameOver', GameOver);
    this.scene.add('Score', ScoreScene);
    this.scene.start('Boot');

    const model = new Model();
    this.globals = { model, bgMusic: null };
  }
}

window.game = new Game();
