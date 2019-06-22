let k, blu, red

class Main extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/img/background.png')
        this.load.image('blu', 'assets/img/blu-tank.png')
        this.load.image('red', 'assets/img/red-tank.png')
        this.load.image('lazer', 'assets/img/lazer.png')
    }
    create() {
        k = this.input.keyboard.addKeys('LEFT,RIGHT,SPACE,UP,DOWN,W,A,S,D')
        this.add.image(0,0, 'bg').setOrigin(0,0)
        blu = this.add.image(200,300,'blu')
        red = this.add.image(801,400,'red')
    }

    update() {

        // red player

        let right = k.RIGHT.isDown
        let left = k.LEFT.isDown
        let down = k.DOWN.isDown
        let up = k.UP.isDown

        if (left && up) {
            red.x -= 1
            red.y -= 1
            red.rotation = -Math.PI * 3/4
        }
        else if (left && down) {
            red.x -= 1
            red.y += 1
            red.rotation = Math.PI * 3/4
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

        // blue player

        let a = k.A.isDown
        let d = k.D.isDown
        let s = k.S.isDown
        let w = k.W.isDown

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

    }
}

const game = new Phaser.Game({
    scene: Main,
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
})
