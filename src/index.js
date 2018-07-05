import test from './scenes/test'
import platforming from './scenes/platforming'

import {maps} from './map.js'

// going for 5/8 ratio
const config = {
  width: 1200,
  height: 750,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 1000}
    }
  },
  scene: platforming
}

let game = new Phaser.Game(config)