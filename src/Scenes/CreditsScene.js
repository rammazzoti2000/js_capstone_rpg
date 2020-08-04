import Phaser from 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  /* eslint-disable no-unused-expressions */

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.thanksText = this.add.text(0, 0, 'Special thanks to Microverse', { fontSize: '32px', fill: '#c41425' });
    this.madeByText = this.add.text(0, 0, 'Created By: ale[x360]', { fontSize: '26px', fill: '#fff' });
    this.contactText = this.add.text(0, 0, 'bangau.alexandru@gmail.com', { fontSize: '18px', fill: '#32a852' });
    this.openText = this.add.text(0, 0,
      'Special thanks to the Developers at the OpenGameArt'
      + '\n         for the sound, music and characters',
      { fontSize: '20px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.thanksText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.contactText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.openText,
      this.zone,
    );

    this.madeByText.setY(1000);
    this.thanksText.setY(900);
    this.creditsText.setY(800);
    this.contactText.setY(1100);
    this.openText.setY(1200);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: 50,
      ease: 'Power3',
      duration: 3000,
      delay: 1000,
    });

    this.thanksTween = this.tweens.add({
      targets: this.thanksText,
      y: 200,
      ease: 'Power3',
      duration: 3000,
      delay: 1000,
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: 270,
      ease: 'Power3',
      duration: 3000,
      delay: 1000,
      onComplete: function x() {},
    });

    this.contactTween = this.tweens.add({
      targets: this.contactText,
      y: 310,
      ease: 'Power3',
      duration: 3000,
      delay: 1000,
      onComplete: function x() {},
    });

    this.openTween = this.tweens.add({
      targets: this.openText,
      y: 500,
      ease: 'Power3',
      duration: 3000,
      delay: 1000,
      onComplete: function x() {
        setTimeout(() => {
          this.scene.start('Title');
        }, 5000);
      }.bind(this),
    });
  }
}
