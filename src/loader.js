class Loader extends Phaser.Scene{
  constructor() {
    super("Loader");
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.image("arrow", "assets/images/arrow.png");
    this.load.spritesheet('chicken', 'assets/images/chicken_spritesheet.png',{
      frameWidth: 131, frameHeight: 200});
    this.load.spritesheet("horse", 'assets/images/horse_spritesheet.png',  {
      frameWidth: 212, frameHeight: 200});
    this.load.spritesheet("pig", 'assets/images/pig_spritesheet.png',  {
      frameWidth: 297, frameHeight: 200});
    this.load.spritesheet("sheep", 'assets/images/sheep_spritesheet.png',  {
      frameWidth: 244, frameHeight: 200});

    
  }

  create() {
    this.background = this.add.image(0, 0, "background")
    this.background.setOrigin(0, 0)
    
    // TIMER 
    this.loadingtimer = this.time.addEvent({ delay: 2000, callback: this.onEvent, callbackScope: this });
    
    this.timertext = this.add.text(game.scale.width/2, (game.scale.height/2) + 100).setOrigin(0.5, 0.5)
    this.maintext = this.add.text(game.scale.width/2, (game.scale.height/2), 'Loading Assets...').setScale(2).setOrigin(0.5, 0.5)
    this.timertext.setColor('black')
    this.maintext.setColor('black')
    this.scene.start('GameScene')
  }

  update() {
    var progress = this.loadingtimer.getProgress().toString().substr(0, 4)
    this.timertext.setText(`Progress : ${progress}`)
  }

  onEvent() {
    // called when the timer completes
    this.maintext.setText('Loading Complete...')
    
  }
}