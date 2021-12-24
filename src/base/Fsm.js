import StateMachine from 'javascript-state-machine'

export const ZombieFSM = new StateMachine.factory({
  init: 'walk',
  transitions: [
    { name: 'attack', from: 'walk', to: 'attacking' },
    { name: 'burn', from: ['walk', 'attacking'], to: 'burned' },
    { name: 'die', from: ['walk', 'attacking', 'burned'], to: 'dead' }
  ],
  data(instance, sprites) {
    this.instance = instance
    this.sprites = sprites
  },
  methods: {
    onAttack(lifecycle) {
      console.log('FSM TRANSITION: ' + lifecycle.transition)
      this.instance.removeAllChildren()
      this.instance.addChild(this.sprites['zombieAttackingS'])
    },
    onBurn(lifecycle) {
      console.log('FSM TRANSITION: ' + lifecycle.transition)
      this.instance.removeAllChildren()
      this.instance.addChild(this.sprites['zombieBurnedS'])
    },
    onDie(lifecycle) {
      console.log(lifecycle.transition)
    }
  },
})

// export const PlantFSM = new StateMachine.factory({
//   init: 'idle',
//   transitions: [
//     { name: 'dead'}
//   ]
// })