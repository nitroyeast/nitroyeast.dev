let k, blu, red, lazer, graphics, ok, wall

class Main extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/img/background.png')
        this.load.image('blu', 'assets/img/blu-tank.png')
        this.load.image('red', 'assets/img/red-tank.png')
        this.load.image('lazer', 'assets/img/lazer.png')
        this.load.image('wall', 'assets/img/wall.png')
    }
    create() {
        k = this.input.keyboard.addKeys('SHIFT,LEFT,RIGHT,UP,DOWN,W,A,S,D,SPACE')
        this.add.image(0,0, 'bg').setOrigin(0,0)
        blu = this.physics.add.sprite(200,300,'blu')
        red = this.physics.add.sprite(800,400,'red')
        lazer = new Phaser.Geom.Line()
        graphics = this.add.graphics()
        //collide on edge
        red.setCollideWorldBounds(true)
        blu.setCollideWorldBounds(true)
        //set gravity
        red.setGravityY(0)
        blu.setGravityY(0)
        //set speed and drag
        red.curSpeed = 275
        blu.curSpeed = 275
        red.setDragX = 3000
        blu.setDragX = 3000
        //set verticle movement
        
        
        //wall generation
        wall = this.physics.add.staticGroup()
        wall.create(300, 525, 'wall').setScale(1, 1).refreshBody()
        
        //wall collision
        this.physics.add.collider(blu, wall)

    }

    update() {

        // red player

        let right = k.RIGHT.isDown
        let left = k.LEFT.isDown
        let down = k.DOWN.isDown
        let up = k.UP.isDown
        let space = k.SHIFT.isDown

        if (left && down) {
            red.x -= 1
            red.y += 1
            red.rotation = Math.PI * 3/4
        } else if (left && up) {
            red.x -= 1
            red.y -= 1
            red.rotation = -Math.PI * 3/4
        }
        else if (right && up) {
            red.x += 1
            red.y -= 1
            red.rotation = -Math.PI/4
        }
        else if (right && down) {
            red.x += 1
            red.y += 1
            red.rotation = Math.PI/4
        }
        else if (left) {
            red.x -= 1
            red.rotation = Math.PI
        }

        else if (right) {
            red.x += 1
            red.rotation = 0
        }

        else if (up) {
            red.y -= 1
            red.rotation = -Math.PI/2
        }

        else if (down) {
            red.y += 1
            red.rotation = Math.PI/2
        }

        if (space) {
            Phaser.Geom.Line.SetToAngle(lazer,red.x,red.y,red.rotation, 2000)
            graphics.lineStyle(2,0xffffff)
            graphics.strokeLineShape(lazer)
            let brect = blu.getBounds()
            if (Phaser.Geom.Intersects.LineToRectangle(lazer,brect)) {
              // die die die
              graphics.lineStyle(2, 0xff0000)
            }
            graphics.strokeRectShape(brect)
            setTimeout( () => {graphics.clear()}, 200)
        }

        // blue player

        let a = k.A.isDown
        let d = k.D.isDown
        let s = k.S.isDown
        let w = k.W.isDown
        let g = k.SPACE.isDown

        if (a && w) {
            blu.x -= 1
            blu.y -= 1
            blu.rotation = -Math.PI * 3/4
        }
        else if (a && s) {
            blu.x -= 1
            blu.y += 1
            blu.rotation = Math.PI * 3/4
        }
        else if (d && w) {
            blu.x += 1
            blu.y -= 1
            blu.rotation = -Math.PI/4
        }
        else if (d && s) {
            blu.x += 1
            blu.y += 1
            blu.rotation = Math.PI/4
        }
        else if (a) {
            blu.x -= 1
            blu.setVelocityX(-blu.curSpeed)
            blu.rotation = Math.PI
        }

        else if (d) {
            blu.x += 1
            blu.setVelocityX(blu.curSpeed)
            blu.rotation = 0
        }

        else if (w) {
            blu.y -= 1
            blu.rotation = -Math.PI/2
        }

        else if (s) {
            blu.y += 1
            blu.rotation = Math.PI/2
        }

        if (g) {
            Phaser.Geom.Line.SetToAngle(lazer,blu.x,blu.y,blu.rotation, 2000)
            graphics.lineStyle(2,0xffffff)
            graphics.strokeLineShape(lazer)
            let rrect = red.getBounds()
            if (Phaser.Geom.Intersects.LineToRectangle(lazer,rrect)) {
              // die die die
              graphics.lineStyle(2, 0xff0000)
            }
            graphics.strokeRectShape(rrect)
            setTimeout( () => {graphics.clear()}, 200)
        }

    }
}

const game = new Phaser.Game({
    scene: Main,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
})
