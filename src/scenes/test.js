export default class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('phil', 'assets/img/1318.png')
    this.load.image('pheel', 'assets/img/1318.jpg')
  }

  create() {
    let phil = this.physics.add.image(0, 0, 'pheel')
    phil.setVelocity(100, 200)
    phil.setBounce(1, 1)
    phil.setCollideWorldBounds(true)

    let particles = this.add.particles('phil')
    let emitter = particles.createEmitter({
      speed: 100,
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    })

    emitter.startFollow(phil)
  }
}