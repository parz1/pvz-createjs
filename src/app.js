// import './polyfills'
import { createDOMStage, getDOMStage } from '@/utils'
import { Game } from '@/base/Game'
import './global.css'

const init = () => {
  const body = document.getElementsByTagName('body')[0]
  const canvas = createDOMStage()
  body.append(canvas)
  window.onload = () => {
    const canvas = getDOMStage()
    const game = new Game(canvas)
    // NOTE hack
    window.game = game
    
    game.init()
  }
}

init()
