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
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start('GameScene');
    }
  }
}
