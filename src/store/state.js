const worldState = {
  level: 0,
  score: 0,
  isComplete: false,
  isOver: false
}
const gameState = {
  isPlanting: false,
  plantType: '',
  plants: [],
  zombies: [],
  hp: 100,
}
export const state = {
  world: worldState,
  game: gameState
}