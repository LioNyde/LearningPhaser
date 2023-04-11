class GameScene extends Phaser.Scene {
  constructor() {
    super({key: 'GameScene'})
  }

  create() {
    // Background Image of the game and centering it on the canvas
    this.background = this.add.image(0, 0, "background")
    this.background.setOrigin(0, 0)

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
      animal.on('pointerdown', this.animateAnimal, this)
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
    this.leftArrow.on('pointerdown', this.switchAnimal);

    //right arrow
    this.rightArrow = this.add.sprite(580, game.scale.height/2, 'arrow');
    this.rightArrow.customParams = {direction: 1};
    //right arrow user-input
    this.rightArrow.setInteractive({pixelPerfect: true, useHandCursor: true});
    this.rightArrow.on('pointerdown', this.switchAnimal, this)
  }
  animateAnimal(event){
    console.log('animating animal')
  }
  switchAnimal(event) {
    console.log('switch animal')

    // right arrow shows 360 left throws error
    console.log(this.game.scale.height);
  }
}