import { MoveableObject } from "./GameObject"
import { manifest, ssManifest } from "@/config/manifest";
import { ZombieFSM } from "./Fsm";

export class Zombie extends MoveableObject {
  constructor(sprites, store) {
    super(store)
    this.spriteNames = ['zombie1S', 'zombieDieS', 'zombieHeadS', 'zombieAttackingS', 'zombieBurnedS']
    this.sprites = {}
    this.spriteNames.forEach(v => {
      this.sprites[v] = sprites[v]
    })
    this.fsm = new ZombieFSM(this, this.sprites)
    this.graphic = null
  }
  init() {
    this.graphic = this.sprites['zombie1S']
    this.addChild(this.graphic)
    setTimeout(() => {
      // this.graphic = this.sprites['zombieDieS']
      this.fsm.attack()
    }, 2000);
    setTimeout(() => {
      // this.graphic = this.sprites['zombieDieS']
      this.fsm.burn()
    }, 3000);
  }
}