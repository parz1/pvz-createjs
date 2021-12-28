import StateMachine from 'javascript-state-machine'

export const ZombieFSM = new StateMachine.factory({
  init: 'walk',
  transitions: [
    { name: 'attack', from: 'walk', to: 'attacking' },
    { name: 'burn', from: ['walk', 'attacking'], to: 'burned' },
    { name: 'die', from: ['walk', 'attacking', 'burned'], to: 'dead' }
  ],
  data(instance, spriteSheet) {
    this.instance = instance
    this.spriteSheet = spriteSheet
  },
  methods: {
    onAttack(lifecycle) {
      console.log('FSM TRANSITION: ' + lifecycle.transition)
      this.instance.removeAllChildren()
      this.instance.addChild(new createjs.Sprite(this.spriteSheet['zombieAttackingS'], 'play'))
    },
    onBurn(lifecycle) {
      console.log('FSM TRANSITION: ' + lifecycle.transition)
      this.instance.removeAllChildren()
      this.instance.addChild(new createjs.Sprite(this.spriteSheet['zombieBurnedS'], 'play'))
    },
    onDie(lifecycle) {
      console.log(lifecycle.transition)
      this.instance.removeAllChildren()
      const body = new createjs.Sprite(this.spriteSheet['zombieLostHeadS'], 'play')
      const head = new createjs.Sprite(this.spriteSheet['zombieHeadS'], 'play')
      const dieBody = new createjs.Sprite(this.spriteSheet['zombieDieS'], 'play')
      head.x = 30
      this.instance.addChild(body)
      this.instance.addChild(head)
      setTimeout(() => {
        // this.instance.removeAllChildren()
        this.instance.removeChild(body)
        this.instance.addChild(dieBody)
      }, 1000);
    }
  },
})

// export const PlantFSM = new StateMachine.factory({
//   init: 'idle',
//   transitions: [
//     { name: 'dead'}
//   ]
// })