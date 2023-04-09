
var GameState = {
  preload: function(){
    this.load.image("background", "assets/images/background.png")
    this.load.image("arrow", "assets/images/arrow.png")
    this.load.spritesheet('chicken', 'assets/images/chicken_spritesheet.png',{
      frameWidth: 130, frameHeight: 200
    })
    this.load.spritesheet("horse", 'assets/images/horse_spritesheet.png',  {
      frameWidth: 212, frameHeight: 200
    })
    this.load.spritesheet("pig", 'assets/images/pig_spritesheet.png',  {
      frameWidth: 295, frameHeight: 200
    })
    this.load.spritesheet("sheep", 'assets/images/sheep_spritesheet.png',  {
      frameWidth: 244, frameHeight: 200
    })
  },
  create: function(){
    this.background = this.add.image(0, 0, "background")
    this.background.setOrigin(.001, .001)

    this.chicken = this.add.sprite(game.scale.height/2, game.scale.height/2, 'chicken')
    this.chicken.setOrigin(1, 1)
  },
  update: function(){
    
  }
}


var config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: {
    preload: GameState.preload,
    create: GameState.create,
    update: GameState.update
  }
}
var game = new Phaser.Game(config)