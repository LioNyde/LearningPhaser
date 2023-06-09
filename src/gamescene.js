class GameScene extends Phaser.Scene {
   constructor() {
      super({ key: 'GameScene' })
   }

   create() {

//  <----- BACKGROUND IMAGE DISPLAY ----->
      this.background = this.add.image(0, 0, "background")
      this.background.setOrigin(0, 0)

//      <----- ANIMAL GROUP ----->
      this.animals = this.add.group()
      var animal;
      this.animalData = [
        { key: 'chicken',   text: 'CHICKEN' },
        { key: 'horse',     text: 'HORSE'   },
        { key: 'pig',       text: 'PIG'     },
        { key: 'sheep',     text: 'SHEEP'   }
    ];

      this.animalData.forEach(object => {
        animal = this.animals.create(1000, this.scale.height / 2, object.key);
        animal.customParams = { text: object.text, sfx: this.sound.add(object.key + '-sfx')}
        animal.setInteractive({ useHandCursor: true, pixelPerfect: true });
        animal.on('pointerdown', this.animateAnimal, this)
      });

//  <------ CURRENT ANIMAL DISPLAY ------>
      this.currentIndex = 0
      this.currentAnimal = this.animals.getChildren()[this.currentIndex]
      this.currentAnimal.x = game.scale.width/2

//  <------ ANIMAL TEXT DISPLAY ------>
      this.animalText = this.add.text(game.scale.width/2, game.scale.height/2 + 150, 'CHICKEN');
      this.animalText.setStyle({ fontFamily: 'Arial', fontSize: 30, color: '#000000', fontWeight: 'bold'});
      this.animalText.setOrigin(0.5)
//        <----- RIGHT ARROW ----->
      this.leftArrow = this.add.sprite(60, this.scale.height / 2, 'arrow');
      this.leftArrow.setScale(-1, 1)
      this.leftArrow.customParams = { direction: -1 };

//  <------ LEFT ARROW INTERACTIVE ------>
      this.leftArrow.setInteractive({ pixelPerfect: true, useHandCursor: true });
      this.leftArrow.on('pointerdown', this.switchAnimal);

//        <----- RIGHT ARROW ----->
      this.rightArrow = this.add.sprite(580, this.scale.height / 2, 'arrow');
      this.rightArrow.customParams = { direction: 1 };

// <------ RIGHT ARROW INTERACTIVE ------>
      this.rightArrow.setInteractive({ pixelPerfect: true, useHandCursor: true });
      this.rightArrow.on('pointerdown', this.switchAnimal)
   }

// <----- ANIMAL ANIMATION AND SOUND ----->
   animateAnimal(event) {
      console.log('animating animal');
      var animal = this.animals.getChildren()[this.currentIndex]
      animal.play(animal.texture.key + '_anim', true, 0)
      animal.customParams.sfx.play()
      animal.on('animationcomplete', function(){
        animal.anims.restart()
        animal.anims.pause()
      });
}
//  <------ SWITCHING ANIMALS ------->
   switchAnimal(event) {
      var scene = this.scene;
      var newAnimal, endX;
      
      if(scene.isMoving){return;}
      scene.isMoving = true
      
      var sfx = scene.sound.add('button-sfx')
      sfx.play()
  //  <----- MODIFY TEXT ----->
      scene.animalText.visible = false
  
  //  <----- TWEENS AND POSITIONS ----->
      if (this.customParams.direction > 0 && scene.currentIndex <= 3) {
         
//  <--- RIGHT ARROW TWEENS AND PREV ---->
         
         var index = scene.currentIndex
         ++scene.currentIndex
         if (scene.currentIndex > 3 && this.customParams.direction > 0) {
            scene.isMoving = false
            scene.currentIndex = 3
            scene.animalText.visible = TextTrackCueList 
            return;
         }
         
         scene.tweens.add({
            targets: scene.animals.getChildren()[index],
            x: -150,
            duration: 500,
            ease: 'linear',
            onComplete: function(){
               scene.isMoving = false
               scene.animalText.setText(scene.animals.getChildren()[scene.currentIndex].customParams.text)
               scene.animalText.visible = true
            }
         });
         
         scene.animals.getChildren()[scene.currentIndex].x = game.scale.width + 150
         scene.tweens.add({
            targets: scene.animals.getChildren()[scene.currentIndex],
            x: game.scale.width/2,
            duration: 500,
            ease: 'linear',
            onComplete: function(){
              scene.isMoving = false
              scene.animalText.setText(scene.animals.getChildren()[scene.currentIndex].customParams.text)
              scene.animalText.visible = true
            }
         });
      } else if(this.customParams.direction < 0 && scene.currentIndex >= 0){
         

//  <---- LEFT ARROW TWEENS AND PREV ---->
         var index = scene.currentIndex
         --scene.currentIndex
         if (scene.currentIndex < 0 && this.customParams.direction < 0) {
            scene.isMoving = false
            scene.currentIndex = 0
            scene.animalText.visible = true
            return;
         }
         
         scene.tweens.add({
            targets: scene.animals.getChildren()[index],
            x: game.scale.width + 150,
            duration: 500,
            ease: 'linear',
            onComplete: function() {
              scene.isMoving = false
              scene.animalText.setText(scene.animals.getChildren()[scene.currentIndex].customParams.text)
              scene.animalText.visible = true
            }
         });
         
         scene.tweens.add({
            targets: scene.animals.getChildren()[scene.currentIndex],
            x: game.scale.width/2,
            duration: 500,
            ease: 'linear',
            onComplete: function() {
              scene.isMoving = false
              scene.animalText.setText(scene.animals.getChildren()[scene.currentIndex].customParams.text)
              scene.animalText.visible = true
            }
         });
      }
      scene.currentAnimal = newAnimal
   }
}