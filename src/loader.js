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
    this.load.audio('button-sfx', 'button.mp3') 
  }

  create() {
    this.background = this.add.image(0, 0, "background")
    this.background.setOrigin(0, 0)
    
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
    var up = this;
    this.gameName = this.add.text(game.scale.width/2, game.scale.height/2, 'F A R M  A N I M A L S')
    this.gameName.setOrigin(0.5)
    this.gameName.setStyle({fontFamily: 'Arial', fontSize: 50, color: '#000000',stroke: '#000000', strokeThickness: 5,})
    
    this.playButton = this.add.text(game.scale.width/2, game.scale.height/2 + 100, 'Play')
    this.playButton.setOrigin(0.5)
    this.playButton.setStyle({fontFamily: 'Arial', fontSize: 30, color: '#000000', stroke: '#000000', strokeThickness: 3})
    
    this.playButton.setInteractive()
    this.playButton.on('pointerdown', function(){
      var sfx = up.sound.add('button-sfx')
      sfx.play()
      up.scene.start('GameScene')
    })
  }
}