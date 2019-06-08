let k

class Main extends Phaser.Scene {

    preload() {

    }
    create() {
        k = this.input.keyboard.addKeys('LEFT,RIGHT,SPACE,UP,DOWN,W,A,S,D')
    }

    update() {

    }
}

const game = new Phaser.Game({
    scene: Main,
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
})
