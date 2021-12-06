// import './polyfills'
import { createDOMStage, getDOMStage } from '@/utils'
import { Game } from '@/base/Game'
// import './styles.css'

const init = () => {
  const body = document.getElementsByTagName('body')[0]
  const canvas = createDOMStage()
  body.append(canvas)

  window.onload = () => {
    const canvas = getDOMStage()
    const game = new Game(canvas)

    game.init()
  }
}

init()
