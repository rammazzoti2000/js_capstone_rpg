import Phaser from 'phaser';
import Button from '../Objects/Button';
/* eslint no-undef: "error" */
/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["preload"] }]  */
/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["postScore"] }]  */
import { getScores } from '../Objects/apiScore';

export default class DisplayScoreScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    this.add.text(400, 100, 'Leader Board', {
      color: 'white',
      fontSize: '32px ',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      const scoreStyle = {
        color: 'white',
        fontSize: '38px ',
      };

      scores.sort((x, y) => y.score - x.score);
      const space = 40;
      for (let i = 0; i < 5; i += 1) {
        if (scores[i] !== undefined) {
          this.add.text(60, 200 + (space * i),
            `${i + 1}. Name: ${scores[i].user} -- Score: ${scores[i].score}`,
            scoreStyle);
        }
      }
    });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Guide');

    // const style = 'width: 150px; height: 40px; border-radius: 30px; border: 0; font: 30px sans-serif; color: black;';
    // const btn = this.add.dom(650, 490, 'button', style, 'Guide');
    // btn.addListener('click');
    //
    this.menuButton.on('click', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Guide');
    });
  }
}
