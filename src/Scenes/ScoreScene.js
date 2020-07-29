import Phaser from 'phaser';
/* eslint no-undef: "error" */
/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["preload"] }]  */
/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["postScore"] }]  */
import { getScores } from '../Objects/apiScore';

export default class DisplayScoreScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    this.add.text(650, 200, 'Best 5 Marksmen', {
      color: 'white',
      fontSize: '32px ',
      fontFamily: 'san-serif',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      const scoreStyle = {
        color: 'red',
        fontSize: '38px ',
      };

      scores.sort((x, y) => y.score - x.score);
      const space = 30;
      for (let i = 0; i < 5; i += 1) {
        if (scores[i] !== undefined) {
          this.add
            .text(
              650,
              240 + (space * i),
              `${i + 1}. Name: ${scores[i].user} Score: ${scores[i].score}`,
              scoreStyle,
            )
            .setOrigin(0.5, 0.5);
        }
      }
    });

    const style = 'width: 150px; height: 40px; border-radius: 30px; border: 0; font: 30px sans-serif; color: black;';
    const btn = this.add.dom(650, 490, 'button', style, 'Guide');
    btn.addListener('click');

    btn.on('click', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Guide');
    });
  }
}
