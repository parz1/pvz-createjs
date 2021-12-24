import { ZombieFSM } from "./Fsm"

export class GameObject extends createjs.Container {
  constructor(store) {
    super()
    this.store = store
  }
}

export class MoveableObject extends GameObject {
  constructor(store) {
    super(store)
    this.velocity = { x: 0, y: 0 }
    this.moveable = true
    this.on('tick', this.tick)
  }
  tick(e) {
    const { isComplete, isOver } = this.store.state.world
    if(!isComplete && !isOver) {
      this.x += this.velocity.x
    } else {
      this.freeze()
    }
  }
  freeze() {
    console.log('FREEZE')
    this.moveable = false
  }
}