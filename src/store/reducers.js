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
    default:
      return state
  }
}

function gameReducers(state = initialState.game, action) {
  const { payload, type } = action
  switch (type) {
    case 'ADD_ZOMBIE':
      // TODO change state
      return {
        ...state,
        zombies: [...state.zombies, payload]
      }
    case 'ADD_PLANT':
      // TODO change state
      return {
        ...state,
        plants: [...state.plants, payload]
      }
    case 'PLANT_START':
      return {
        ...state,
        isPlanting: true,
        plantType: payload
      }
    default:
      return state
  }
}

export const reducer = {
  world: worldReducers,
  game: gameReducers
}
