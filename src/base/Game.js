import createjs from '@/createjs'
import { CONFIG } from '@/config'
import { handleResize } from '@/utils'

export class Game {
  constructor(canvas) {
    this.canvas = canvas
  }
  init() {
    this.stage = new createjs.Stage(this.canvas)
    const text = new createjs.Text('HELLO WORLD')
    this.stage.addChild(text)
    createjs.Ticker.framerate = CONFIG.framerate
    createjs.Ticker.on('tick', () => {
      this.update()
    })
    handleResize(this.canvas, this.stage)
    window.onresize = () => handleResize(this.canvas, this.stage)
    // TODO STAGE
    // TODO Load source packages (graphics/sounds)
    // TODO store 状态树初始化
  }
  update() {
    this.stage.update()
  }
  exit() {}
}
