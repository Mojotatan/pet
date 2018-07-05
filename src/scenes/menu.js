import game from '../'
import fight from './fight'

let cursors

export default class SimpleScene extends Phaser.Scene {
  preload() {
    
  }

  create() {
    cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    if (cursors.space.isDown) {
      //transition scene
    }
  }
}