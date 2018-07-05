import test from './scenes/test'
import fight from './scenes/fight'
import menu from './scenes/menu'

import {maps} from './map.js'

// going for 5/8 ratio
const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 750,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 300}
    }
  },
  scene: fight
}

let game = new Phaser.Game(config)