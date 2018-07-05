let player, cursors, platforms, projectiles, enemy, text

let w = 1200
let h = 750

export default class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('phil', 'assets/img/1318.png') // 26 x 33
    this.load.image('pheel', 'assets/img/1318.jpg')
    this.load.image('marty', 'assets/img/437.jpg') // 130 x 165
    this.load.image('dirt', 'assets/img/grass_4x1.png') // 168 x 42
    this.load.image('mountains', 'assets/img/mountain-crop.jpg')
    this.load.spritesheet(
      'blackmage', 'assets/img/black-mage.png',
      {frameWidth: 20, frameHeight: 32}
    )
  }

  create() {
    this.add.image(600, 375, 'mountains')

    projectiles = this.physics.add.group()
    projectiles.maxSize = 1

    platforms = this.physics.add.staticGroup()

    for (let i = 84; i < 1284; i += 168) {
      platforms.create(i, h - 21, 'dirt')
    }

    platforms.create(84, 500, 'dirt').setScale(2).refreshBody()
    platforms.create(600, 350, 'dirt').setScale(2).refreshBody()

    player = this.physics.add.sprite(20, h - 74, 'blackmage').setScale(2)
    player.setCollideWorldBounds(true)
    player.face = 1

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('blackmage', {start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'stand',
      frames: this.anims.generateFrameNumbers('blackmage', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    })

    enemy = this.physics.add.sprite(w - (130/2), h - (165/2 + 42), 'marty')
    enemy.health = 100

    console.log(this)

    this.physics.add.collider(player, platforms)
    this.physics.add.collider(projectiles, platforms, (projectile, platform) => {
      projectile.destroy()
    })
    this.physics.add.collider(projectiles, enemy, (projectile, enemy) => {
      enemy.health -= 20
      projectile.destroy()
    })





    cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    if (projectiles.children.size > 0) {
      if (projectiles.children.entries[0].x > 1200 || projectiles.children.entries[0].x < 0) {
        projectiles.children.entries[0].destroy()
      }
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160)
      player.face = -1
      player.anims.play('walk', true)
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(160)
      player.face = 1
      player.anims.play('walk', true)
    }
    else {
      player.setVelocityX(0)
      player.anims.play('stand', true)
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-400)
    }

    if (cursors.space.isDown) {
      // console.log(player)
      let missile = projectiles.create(player.x, player.y, 'phil')
      if (missile) {
        missile.setVelocityX(1000 * player.face)
        missile.setGravityY(-300)
      }
    }
  }
}