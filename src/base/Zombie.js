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
  }
  init() {
    this.graphic = new createjs.Sprite(this.spriteSheet['zombie1S'], 'play')
    this.addChild(this.graphic)
  }
  attack() {
    this.fsm.attack()
  }
  burn() {
    this.fsm.burn()
  }
  hit() {
    this.hp -= 50
    if (this.hp <= 0 && this.fsm.state !== 'dead') {
      this.fsm.die()
    }
  }
}