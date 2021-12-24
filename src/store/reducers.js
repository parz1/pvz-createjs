import { state as initialState } from './state'

function worldReducers(state = initialState.world, action) {
  const { payload, type } = action
  switch (type) {
    case 'LEVELUP':
      // TODO change state
      return {
        ...state,
        level: state.level + 1
      }
    case 'ADD_SCORE':
      return {
        ...state,
        score: state.score += payload.score
      }
  }
  return state
}

function gameReducers(state = initialState.game, action) {
  const { payload, type } = action
  switch (type) {
    case 'ADD_SCORE':
      // TODO change state
      return {
        ...state
      }
    default:
      return state
  }
  return state
}

export const reducer = {
  world: worldReducers,
  game: gameReducers
}
