import Phaser from 'phaser';

export default class UiButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, hoverKey, text, targetCallback) {
    super(scene, x, y, 'UiButton');
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.key = key;
    this.hoverKey = hoverKey;
    this.text = text;
    this.targetCallback = targetCallback;
  }
}
