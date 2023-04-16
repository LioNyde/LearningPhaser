class Loader extends Phaser.Scene{
  constructor() {
    super("Loader");
  }

  preload() {
    
//  <------- LOAD SPRITES ------->
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

//  <------ LOAD SOUNDS------>
    this.load.audio('chicken-sfx', 
      ['assets/sfx/chicken.ogg',  'assets/sfx/chicken.mp3']);
    this.load.audio('horse-sfx', 
      ['assets/sfx/horse.ogg',    'assets/sfx/horse.mp3']);
    this.load.audio('pig-sfx', 
      ['assets/sfx/pig.ogg',      'assets/sfx/pig.mp3']);
    this.load.audio('sheep-sfx', 
      ['assets/sfx/sheep.ogg',    'assets/sfx/sheep.mp3']);
    
  }

  create() {
    this.background = this.add.image(0, 0, "background")
    this.background.setOrigin(0, 0)
    
    // TIMER 
    this.loadingtimer = this.time.addEvent({ delay: 2000, callback: this.onFinish, callbackScope: this });
    
    this.timertext = this.add.text(game.scale.width/2, (game.scale.height/2) + 100).setOrigin(0.5, 0.5)
    this.maintext = this.add.text(game.scale.width/2, (game.scale.height/2), 'Loading Assets...').setScale(2).setOrigin(0.5, 0.5)
    this.timertext.setColor('black')
    this.maintext.setColor('black')
    
//  <----- LOAD ANIMATIONS ----->
    
    this.anims.create({
      key: 'chicken_anim',
      frames: this.anims.generateFrameNumbers('chicken'),
      frameRate: 6,
      repeat: 0
    });
    this.anims.create({
       key: 'horse_anim',
       frames: this.anims.generateFrameNumbers('horse'),
       frameRate: 6,
       repeat: 0
    });
    this.anims.create({
       key: 'pig_anim',
       frames: this.anims.generateFrameNumbers('pig', { start: 0, end: 2 }),
       frameRate: 6,
       repeat: 0
    });
    this.anims.create({
       key: 'sheep_anim',
       frames: this.anims.generateFrameNumbers('sheep', { start: 0, end: 2 }),
       frameRate: 6,
       repeat: 0
    });
    
    this.scene.start('GameScene')
  }

  update() {
    var progress = this.loadingtimer.getProgress().toString().substr(0, 4)
    this.timertext.setText(`Progress : ${progress}`)
  }

  onFinish() {
//  <---- ON TIMER COMPLETE ---->
    this.maintext.setText('Loading Complete...')
    //this.scene.start('GameScene')
  }
}