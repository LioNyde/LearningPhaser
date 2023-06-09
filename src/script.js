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

    this.lol = 'lol'
    // group of animals
    this.animals = this.add.group()
    var animal;
    var animalData = [
      {key: 'chicken', text: 'CHICKEN'},
      {key: 'horse', text: 'HORSE'},
      {key: 'pig', text: 'PIG'},
      {key: 'sheep', text: 'SHEEP'}
    ];
    
    animalData.forEach(object => {
      animal = this.animals.create(1000, game.scale.height/2, object.key);
      animal.customParams = {text: object.text}

      animal.setInteractive({useHandCursor: true, pixelPerfect: true});
      animal.on('pointerdown', GameState.animateAnimal, this)
    });

    this.currentIndex = 0
    this.currentAnimal = this.animals.getChildren()
    this.currentAnimal[this.currentIndex].setPosition(game.scale.width/2, game.scale.height/2)
    

    // left arrow
    this.leftArrow = this.add.sprite(60, game.scale.height/2, 'arrow');
    this.leftArrow.setScale(-1, 1)
    this.leftArrow.customParams = {direction: -1};
    // left arrow user-input
    this.leftArrow.setInteractive({pixelPerfect: true, useHandCursor: true});
    this.leftArrow.on('pointerdown', GameState.switchAnimal);

    //right arrow
    this.rightArrow = this.add.sprite(580, game.scale.height/2, 'arrow');
    this.rightArrow.customParams = {direction: 1};
    //right arrow user-input
    this.rightArrow.setInteractive({pixelPerfect: true, useHandCursor: true});
    this.rightArrow.on('pointerdown', GameState.switchAnimal)
  },

  
  update: function(){
    // CODE HERE
  },
  animateAnimal: function(){
    var name = 'lol'
    console.log(`Playing animation...`)
  },
  switchAnimal: function(){
    console.log('Switching Animals...');
    console.log(game.GameState.lol)
  }

}

