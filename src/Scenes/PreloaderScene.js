import Phaser from 'phaser';
import blueButton1Img from '../../assets/ui/blue_button02.png';
import blueButton2Img from '../../assets/ui/blue_button03.png';
import phaserLogoImg from '../../assets/logo.png';
import boxImg from '../../assets/ui/grey_box.png';
import checkedBoxImg from '../../assets/ui/blue_boxCheckmark.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      // eslint-disable-next-line
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('blueButton1', blueButton1Img);
    this.load.image('blueButton2', blueButton2Img);
    this.load.image('phaserLogo', phaserLogoImg);
    this.load.image('box', boxImg);
    this.load.image('checkedBox', checkedBoxImg);
    this.load.audio('bgMusic', ['assets/TownTheme.mp3']);
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
