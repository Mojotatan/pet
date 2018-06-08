export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('phil', 'assets/img/1318.png')
  }

  create() {
    this.add.text(100, 100, 'Yo dawg', {fill: '#0f0'})
    this.add.image(100, 200, 'phil')
  }
}