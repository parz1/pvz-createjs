import { MoveableObject } from "./GameObject"
import { manifest, ssManifest } from "@/config/manifest";
import { ZombieFSM } from "./Fsm";

export class Zombie extends MoveableObject {
  constructor(spriteSheet, store) {
    super(store)
    this.spriteSheet = spriteSheet
    this.fsm = new ZombieFSM(this, this.spriteSheet)
    this.graphic = null
    this.hp = 100
    this.counter = 0
  }
  init() {
    this.graphic = new createjs.Sprite(this.spriteSheet['zombie1S'], 'play')
    this.addChild(this.graphic)
    this.on('tick', () => {
      let that = this
      if (this.fsm.state === 'walk') {
        this.x -= 5
      }
      if (this.x <= 0) {
        this.removeChild(this.graphic)
        this.off('tick')
      }
      if (this.fsm.state === 'walk') {
        this.store.state.game.plants.forEach(plant => {
          const pt = plant.localToLocal(50, 50, that.graphic)
          if (that.graphic.hitTest(pt.x, pt.y)) {
            console.log('ATTACK')
            if (this.fsm.state != 'attacking') {
              that.attack()
            }
          }
        })
      } else if (this.fsm.state === 'attacking') {
        // 植物扣血
        let flag = false
        this.store.state.game.plants.forEach(plant => {
          const pt = plant.localToLocal(50, 50, that.graphic)
          console.log(pt.x, pt.y)
          console.log(that.graphic.x, that.graphic.y)
          if (that.graphic.hitTest(pt.x, pt.y)) {
            console.log('attacking')
            flag = true
            if (!that.counter) {
              plant.eaten(50)
            }
            that.counter++
            that.counter %= 1000
          }
        })
        if(!flag) {
          this.fsm.walk()
        }
      }
    })
  }
  attack() {
    this.fsm.attack()
  }
  burn() {
    this.fsm.burn()
  }
  hit(damage = 50) {
    this.hp -= damage
    if (this.hp <= 0 && this.fsm.state !== 'dead') {
      this.fsm.die()
    }
  }
}