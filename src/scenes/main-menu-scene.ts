import { CONST } from '../const/const';

export class MainMenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: 'MainMenuScene'
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );

    // reset score, highscore and player lives
    if (CONST.SCORE > CONST.HIGHSCORE) {
      CONST.HIGHSCORE = CONST.SCORE;
    }
    CONST.SCORE = 0;
    CONST.LIVES = 3;
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start('GameScene');
    }
  }
}
