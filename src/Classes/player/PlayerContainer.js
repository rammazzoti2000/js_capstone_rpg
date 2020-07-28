import Phaser from 'phaser';
import Player from './Player';

const Direction = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  UP: 'UP',
  DOWN: 'DOWN',
};

export default class PlayerContainer extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y);
    this.scene = scene;
    this.velocity = 160;
    this.currentDirection = Direction.RIGHT;
    this.playerAttacking = false;
    this.flipX = true;
    this.swordHit = false;

    this.setSize(64, 64);
    this.scene.physics.world.enable(this);

    this.body.setCollideWorldBounds(true);
    this.scene.add.existing(this);
    this.scene.cameras.main.startFollow(this);

    this.player = new Player(this.scene, 0, 0, key, frame);
    this.add(this.player);

    this.weapon = this.scene.add.image(40, 0, 'items', 4);
    this.scene.add.existing(this.weapon);
    this.weapon.setScale(1.5);
    this.scene.physics.world.enable(this.weapon);
    this.add(this.weapon);
    this.weapon.alpha = 1;
  }

  update(cursors) {
    this.body.setVelocity(0);

    if (cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
      this.currentDirection = Direction.LEFT;
      this.weapon.setPosition(-40, 0);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
      this.currentDirection = Direction.RIGHT;
      this.weapon.setPosition(40, 0);
    }

    if (cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
      this.currentDirection = Direction.UP;
      this.weapon.setPosition(0, -40);
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
      this.currentDirection = Direction.DOWN;
      this.weapon.setPosition(0, 40);
    }

    if (this.playerAttacking) {

    } else {
      if (this.currentDirection === Direction.DOWN) {
        this.weapon.setAngle(-270);
      } else if (this.currentDirection === Direction.UP) {
        this.weapon.setAngle(-90);
      } else {
        this.weapon.setAngle(0);
      }
    }
  }
}
