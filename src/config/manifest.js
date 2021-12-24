export const manifest = [
  { id: 'bg', src: require('@/assets/img/background-level-1.jpg').default},
  { id: 'zombie1S', src: require('@/assets/img/zombie/zombie-1.png').default },
  { id: 'zombie2S', src: require('@/assets/img/zombie/zombie-2.png').default },
  { id: 'zombie3S', src: require('@/assets/img/zombie/zombie-3.png').default },
  { id: "zombieAttackingS", src: require("@/assets/img/zombie/zombie-attacking.png").default },
  { id: 'zombieBurnedS', src: require('@/assets/img/zombie/zombie-burned.png').default },
  { id: 'zombieDieS', src: require('@/assets/img/zombie/zombie-die.png').default },
  { id: 'zombieHeadS', src: require('@/assets/img/zombie/zombie-head.png').default },
  { id: 'zombieLostHeadS', src: require('@/assets/img/zombie/zombie-lost-head.png').default },
  { id: 'zombieLostHeadAttackingS', src: require('@/assets/img/zombie/zombie-lost-head-attacking.png').default },
]

export const ssManifest = {
  zombie1S: {
    frames: {width: 166, height: 144},
    animations: {
      play: [0, 20, 'play', 0.15]
    }
  },
  zombie2S: {
    frames: {width: 166, height: 144},
    animations: {
      play: [0, 30, 'play', 0.15]
    }
  },
  zombie3S: {
    frames: {width: 166, height: 144},
    animations: {
      play: [0, 17, 'play', 0.15]
    }
  },
  zombieAttackingS: {
    frames: {width:166, height:144},
    animations: {
      play: [0, 20, 'play', 0.15]
    }
  },
  zombieBurnedS: {
    frames: {width:166, height:144},
    animations: {
      play: [0, 18, null, 0.15]
    }
  },
  zombieDieS: {
    frames: {width:166, height:144},
    animations: {
      play: [0, 8, null, 0.15]
    }
  },
  zombieHeadS: {
    frames: {width:150, height:186},
    animations: {
      play: [0, 11, null, 0.5]
    }
  },
  zombieLostHeadS: {
    frames: {width:166, height:144},
    animations: {
      play: [0, 17, 'play', 0.15]
    }
  },
  zombieLostHeadAttackingS: {
    frames: {width:166, height:144},
    animations: {
      play: [0, 10, 'play', 0.15]
    }
  }
}