import { Bullet } from "./Bullet";
import { GameObject } from "./GameObject";

export class PlatForm extends GameObject {
  constructor(store) {
    super(store)
    this.ground = []
    this.x = 250
    this.y = 180
    this.addChild(new createjs.Text('HELLO'))
  }
  addPlant(x, y, plant) {
    this.store.dispatch({ type: 'ADD_PLANT', payload: plant })
    plant.x = (x-1) * 80
    plant.y = (y-1) * 110
    plant.init()
    this.addChild(plant)
  }
  addZombie(y, zombie) {
    this.store.dispatch({ type: 'ADD_ZOMBIE', payload: zombie })
    zombie.x = 600
    zombie.y = (y-1) * 110 - 50
    zombie.init()
    this.addChild(zombie)
  }
}

export class Plant extends GameObject {
  constructor(spriteSheet, store) {
    super(store)
    this.spriteSheet = spriteSheet
    this.hp = 100
    this.repeater = new createjs.Sprite(this.spriteSheet['repeaterS'], 'play')
  }
  init() {
    this.addChild(this.repeater)
    // this.shoot()
    setInterval(() => {
      this.shoot()
    }, 2000);
  }
  shoot() {
    const bullet = new Bullet({ x: 40, y: 0 }, this.spriteSheet, this.store)
    this.addChild(bullet)
    bullet.start()
  }
  eaten(damage = 50) {
    console.log('EATEN')
    this.hp -= damage
    if(this.hp <= 0) {
      this.removeAllChildren()
    }
  }
}