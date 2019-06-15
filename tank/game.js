let k, blu, red

class Main extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/img/background.png')
        this.load.image('blu', 'assets/img/blu-tank.png')
        this.load.image('red', 'assets/img/red-tank.png')
    }
    create() {
        k = this.input.keyboard.addKeys('LEFT,RIGHT,SPACE,UP,DOWN,W,A,S,D')
        this.add.image(0,0, 'bg').setOrigin(0,0)
        blu = this.add.image(200,300,'blu')
        red = this.add.image(801,400,'red')
    }

    update() {

        // red player

        let rright = k.RIGHT.isDown
        let rleft = k.LEFT.isDown
        let rdown = k.DOWN.isDown
        let rup = k.UP.isDown

        if (rleft && ! rright && ! rup && ! rdown) {
            red.x -= 1
            red.rotation = Math.PI
        }
        if (! rleft && rright && ! rup && ! rdown) {
            red.x += 1
            red.rotation = 0
        }
        if (! rleft && ! rright && rup && ! rdown) {
            red.y -= 1
            red.rotation = -Math.PI/2
        }
        if (! rleft && ! rright && ! rup && rdown) {
            red.y += 1
            red.rotation = Math.PI/2
        }
        if (rleft && ! rright && rup && ! rdown) {
            red.x -= 1
            red.y -= 1
            red.rotation = -Math.PI * 3/4
        }
        if (rleft && ! rright && ! rup && rdown) {
            red.x -= 1
            red.y += 1
            red.rotation = Math.PI * 3/4
        }
        if (! rleft && rright && rup && ! rdown) {
            red.x += 1
            red.y -= 1
            red.rotation = -Math.PI/4
        }
        if (! rleft && rright && ! rup && rdown) {
            red.x += 1
            red.y += 1
            red.rotation = Math.PI/4
        }
        

        // blue player

        let lleft = k.A.isDown
        let lright = k.D.isDown
        let ldown = k.S.isDown
        let lup = k.W.isDown

        if (lleft && ! lright && ! lup && ! ldown) {
            blu.x -= 1
            blu.rotation = Math.PI
        }
        if (! lleft && lright && ! lup && ! ldown) {
            blu.x += 1
            blu.rotation = 0
        }
        if (! lleft && ! lright && lup && ! ldown) {
            blu.y -= 1
            blu.rotation = -Math.PI/2
        }
        if (! lleft && ! lright && ! lup && ldown) {
            blu.y += 1
            blu.rotation = Math.PI/2
        }
        if (! lleft && lright && ! lup && ldown) {
            blu.y += 1
            blu.x += 1
            blu.rotation = Math.PI/4
        }
        if (! lleft && lright && lup && ! ldown) {
            blu.y -= 1
            blu.x += 1
            blu.rotation = -Math.PI/4
        }
        if (lleft && ! lright && ! lup && ldown) {
            blu.y += 1
            blu.x -= 1
            blu.rotation = Math.PI*3/4
        }
        if (lleft && !lright && lup && ! ldown) {
            blu.y -= 1
            blu.x -= 1
            blu.rotation = -Math.PI*3/4
        }
        
    }
}

const game = new Phaser.Game({
    scene: Main,
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
})
