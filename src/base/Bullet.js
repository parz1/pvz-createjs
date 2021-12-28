import { MoveableObject } from "./GameObject";

export class Bullet extends MoveableObject {
  constructor(offset = {x: 0, y: 0}, spriteSheet, store) {
    super(store)
    this.offset = offset
    this.spriteSheet = spriteSheet
  }
  start() {
    const bullet = new createjs.Sprite(this.spriteSheet['repeaterBulletS'])
    const bulletHit = new createjs.Sprite(this.spriteSheet['repeaterBulletHitS'])
    bullet.x = this.offset.x
    bullet.y = this.offset.y
    this.addChild(bullet)
    const that = this
    this.on('tick', () => {
      bullet.x += 2
      this.store.state.game.zombies.forEach(zombie => {
        if(bullet.x >= 1080) {
          that.removeChild(bullet)
          that.off('tick')
        }
        const pt = bullet.localToLocal(50, 50, zombie)
        if(zombie.hitTest(pt.x, pt.y)) {
          console.log('HIT')
          zombie.hit()
          that.removeChild(bullet)
          bulletHit.x = bullet.x
          that.addChild(bulletHit)
          setTimeout(() => {
            that.removeChild(bulletHit)
          }, 100);
          that.off('tick')
        }
      })
    })
  }
}