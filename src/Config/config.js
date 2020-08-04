import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0,
      },
    },
  },
  pixelArt: true,
  roundPixels: true,
  dom: {
    createContainer: true,
  },
};
