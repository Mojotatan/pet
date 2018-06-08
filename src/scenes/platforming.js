let player, cursors, obj

export default class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('phil', 'assets/img/1318.png')
    this.load.image('pheel', 'assets/img/1318.jpg')
    this.load.image('marty', 'assets/img/437.jpg')
  }

  create() {
    player = this.physics.add.image(200, 600, 'pheel')
    player.setBounce(.2)
    player.setCollideWorldBounds(true)

    obj = this.physics.add.image(600, 665, 'marty')

    obj.setCollideWorldBounds(true)

    this.physics.add.collider(player, obj)

    cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    if (cursors.left.isDown) {
      player.body.setVelocityX(-400)
    }
    else if (cursors.right.isDown) {
      player.body.setVelocityX(400)
    }
    else {
      player.body.setVelocityX(0)
    }

    if (cursors.up.isDown && player.body.onFloor()) {
      player.body.setVelocityY(-750)
    }
  }
}