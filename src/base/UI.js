import { GameObject } from "./GameObject";

export class CustomMouse extends GameObject {
  constructor(store) {
    super(store)
    this.sprite = null
    this.regX = 40
    this.regY = 40
  }
  bind(sprite) {
    this.removeAllChildren()
    console.log(sprite)
    this.sprite = sprite
    this.addChild(this.sprite)
  }
  start(stage) {
    this.on('tick', () => {
      if(this.sprite) {
        // console.log(stage.x, stage.y)
        this.sprite.x = stage.mouseX / stage.scaleX
        this.sprite.y = stage.mouseY / stage.scaleY
      }
    })
  }
  off() {
    this.removeAllChildren()
    this.off('tick')
  }
}

export class PlantCard extends GameObject {
  constructor(store, loader, spriteSheet, customMouse) {
    super(store)
    this.card = new createjs.Bitmap(loader.getResult('plantCard'))
    this.addChild(this.card)
    this.on('click', () => {
      console.log('CARD CLICK')
      store.dispatch({ action: 'PLANT_START', payload: { type: 'repeater' }})
      customMouse.bind(new createjs.Sprite(spriteSheet['repeaterS'], 'play'))
    })
  }
}