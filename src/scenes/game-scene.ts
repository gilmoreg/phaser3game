import { Ship } from '../objects/ship';

export class GameScene extends Phaser.Scene {
  private player: Ship;
  private ships: Ship[];
  private pauseKey: Phaser.Input.Keyboard.Key;
  private paused: boolean;

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  create(): void {
    this.player = new Ship({ scene: this });

    this.ships = [
      new Ship({ scene: this }),
      new Ship({ scene: this })
    ];

    this.ships[0].active = false; this.ships[0].x = 25; this.ships[0].y = 25;
    this.ships[1].active = false;

    this.cameras.main.startFollow(this.player);
    this.pauseKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.Q
    );
    this.add.text(0, 0, 'Hello World', { font: 'Arial' }).setScrollFactor(0);
  }

  update(): void {
    if (this.pauseKey.isDown) {
      this.paused = !this.paused;
    }

    if (this.paused) {
      return;
    }

    this.player.update();

    this.ships.forEach(s => s.update());

    // Phaser.Geom.Intersects.RectangleToRectangle(
    //   bullet.getBody(),
    //   this.asteroids[i].getBody()
    // )
    // this.scene.start('MainMenuScene');
  }
}
