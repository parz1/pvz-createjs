import { MoveableObject } from "./GameObject";

export class Bullet extends MoveableObject {
  constructor(offset = {x: 0, y: 0}, spriteSheet, store) {
    super(store)
    this.offset = offset
    this.spriteSheet = spriteSheet
    this.isHit = false  // 确保只击中一个僵尸的flag
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
      if(bullet.x >= 1080) {
        this.removeChild(bullet)
        this.off('tick')
      }
      this.store.state.game.zombies.forEach(zombie => { // 遍历所有僵尸，撞击到一个后修改isHit，已防多个僵尸扣血
        const pt = bullet.localToLocal(50, 50, zombie)
        if(zombie.hitTest(pt.x, pt.y) && !that.isHit) {
          // console.log('HIT')
          zombie.hit(20)
          that.removeChild(bullet)
          bulletHit.x = bullet.x
          that.addChild(bulletHit)
          setTimeout(() => {
            that.removeChild(bulletHit)
          }, 100);
          that.off('tick')
          that.isHit = true
        }
      })
    })
  }
}