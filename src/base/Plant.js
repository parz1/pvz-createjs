import { Bullet } from "./Bullet";
import { GameObject } from "./GameObject";

export class Plant extends GameObject {
  constructor(spriteSheet, store) {
    super(store)
    this.spriteSheet = spriteSheet
    this.hp = 100
  }
  init() {
    const repeater = new createjs.Sprite(this.spriteSheet['repeaterS'], 'play')
    this.addChild(repeater)
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
}