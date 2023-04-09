var GameState = {
  // load all the assets in the game
  preload: function(){
    this.load.image("background", "assets/images/background.png")
    this.load.image("arrow", "assets/images/arrow.png")
    this.load.spritesheet('chicken', 'assets/images/chicken_spritesheet.png',{
      frameWidth: 130, frameHeight: 200})
    this.load.spritesheet("horse", 'assets/images/horse_spritesheet.png',  {
      frameWidth: 212, frameHeight: 200})
    this.load.spritesheet("pig", 'assets/images/pig_spritesheet.png',  {
      frameWidth: 295, frameHeight: 200})
    this.load.spritesheet("sheep", 'assets/images/sheep_spritesheet.png',  {
      frameWidth: 244, frameHeight: 200})
  },

  
  create: function(){
    // Baclground Image of the game and centering it on the canvas
    this.background = this.add.image(0, 0, "background")
    this.background.setOrigin(0, 0)

    // group of animals
    var animalData = [
      {key: 'chicken', text: 'CHICKEN'},
      {key: 'horse', text: 'HORSE'},
      {key: 'pig', text: 'PIG'},
      {key: 'sheep', text: 'SHEEP'}
    ];

    this.animals = this.add.group()
    
    //custom classes or manual

    // https://labs.phaser.io/edit.html?src=src/game%20objects/sprites/custom%20sprite%20class%20ES6.js&v=3.55.2
    // left arrow
    this.leftArrow = this.add.sprite(60, game.scale.height/2, 'arrow');
    this.leftArrow.setScale(-1, 1)
    this.leftArrow.customParams = {direction: -1};

    // change cursors
    this.leftArrow.on('pointerover', function() {
      this.scene.input.setDefaultCursor('pointer'); });
    
    this.leftArrow.on('pointerout', function() {
      this.scene.input.setDefaultCursor('default'); });
    
    // left arrow user-input
    this.leftArrow.setInteractive({pixelPerfect: true});
    this.leftArrow.on('pointerdown', GameState.switchAnimal, this);
    
    //right arrow
    this.rightArrow = this.add.sprite(580, game.scale.height/2, 'arrow');
    this.rightArrow.customParams = {direction: 1};

    // change cursors on right arrow
    this.rightArrow.on('pointerover', function() {
      this.scene.input.setDefaultCursor('pointer'); });
    
    this.rightArrow.on('pointerout', function() {
      this.scene.input.setDefaultCursor('default'); });

    //right arrow user-input
    this.rightArrow.setInteractive({pixelPerfect: true});
    this.rightArrow.on('pointerdown', GameState.switchAnimal, this)
  },

  
  update: function(){
    // CODE HERE
  },
  animateAnimal: function(sprite, event){
    console.log(`Playing animation...`)
  },
  switchAnimal: function(sprite, event){
    console.log(`Switching Animal...`);
  }
}


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
  scene: {
    preload: GameState.preload,
    create: GameState.create,
    update: GameState.update
  }
}
var game = new Phaser.Game(config)