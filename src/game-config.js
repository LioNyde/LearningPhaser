// GAME CONFIGURATION

var config = {
  type: Phaser.AUTO,
  width: 640, 
  height: 360,
  resolution: window.devicePixelRatio,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    align: {
      x: 0.5,
      y: 0.5
    }
  },
  debug: true,
  scene: [Loader, GameScene]
}

var game = new Phaser.Game(config);
