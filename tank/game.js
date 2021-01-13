let k, blu, red, lazer, graphics, ok

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
        blu = this.add.image(200,300,'blu')
        red = this.add.image(800,400,'red')
        lazer = new Phaser.Geom.Line()
        graphics = this.add.graphics()
        blu.setCollideWorldBounds(true) //collide with outside walls
        red.setColideWorldBounds(true) //same for red
        
        
        //wall generation
        wall = this.physics.add.staticGroup()
        plats.create(300, 525, 'wall').setScale(0, 0).refreshBody()
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
            blu.rotation = Math.PI
        }

        else if (d) {
            blu.x += 1
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
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
})
