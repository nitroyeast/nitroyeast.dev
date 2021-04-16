let k, blu, red, lazer, graphics, ok, wall, bull, bull2, goal

class Main extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/img/background.png')
        this.load.image('blu', 'assets/img/blu-tank.png')
        this.load.image('red', 'assets/img/red-tank.png')
        this.load.image('lazer', 'assets/img/lazer.png')
        this.load.image('wall', 'assets/img/wall.png')
        this.load.image('bull', 'assets/img/bullet.png')
        this.load.image('goal', 'assets/img/goal.png')

    }
    create() {
        //define k as key input
        k = this.input.keyboard.addKeys('SHIFT,LEFT,RIGHT,UP,DOWN,W,A,S,D,SPACE')
        //add background
        this.add.image(0,0, 'bg').setOrigin(0,0)
        //add in red and blue tank sprites
        blu = this.physics.add.sprite(100,400,'blu')
        red = this.physics.add.sprite(900,400,'red')

        lazer = new Phaser.Geom.Line()
        graphics = this.add.graphics()
        //collide on edge
        red.setCollideWorldBounds(true)
        blu.setCollideWorldBounds(true)
        //set gravity
        red.setGravityY(0)
        blu.setGravityY(0)
        
        //set speed and damping (friction), applied in setDrag
        red.curSpeed = 160
        blu.curSpeed = 160
        red.body.useDamping = true
        blu.body.useDamping = true
        red.setDrag(.001)
        blu.setDrag(.001)
        //set verticle movement
        blu.curJump = 160
        red.curJump = 160
        //set horizontal movement
        blu.vertX = 130
        red.vertX = 130
        blu.vertY = 130
        red.vertY = 130
        //bullet testing
        bull = this.physics.add.sprite(200, 400, 'bull')
        bull2 = this.physics.add.sprite(800, 400, 'bull')
        bull2.speed = 100
        bull2.setGravity(0)
        bull.speed = 100
        bull.stop = 0
        bull2.stop = 0
        bull.setGravityY(0)
       
        bull.setCollideWorldBounds(true, 1, 1)
        bull2.setCollideWorldBounds(true, 1, 1)

        
        //wall generation
        wall = this.physics.add.staticGroup()
        wall.create(250, 100, 'wall').setScale(1, 1.2).refreshBody()
        wall.create(250, 700, 'wall').setScale(1, 1.2).refreshBody()
        wall.create(750, 100, 'wall').setScale(1, 1.2).refreshBody()
        wall.create(750, 700, 'wall').setScale(1, 1.2).refreshBody()
        
        //wall collision
        this.physics.add.collider(blu, wall)
        this.physics.add.collider(red, wall)

        this.physics.add.collider(red, bull2)
        this.physics.add.collider(blu, bull2)
        this.physics.add.collider(blu, bull) 
        this.physics.add.collider(red, bull)
        //tank collision
        this.physics.add.collider(red, blu)

        
        //function for when bullet hits a wall
        const bullWall = (bull,wall) => {
            bull.x = 200
            bull.y = 400
            bull.setVelocityX(bull.stop)
            bull.setVelocityY(bull.stop)
        }
        const bull2wall = (bull2,wall) => {
            bull2.x = 800
            bull2.y = 400
            bull2.setVelocityX(bull2.stop)
            bull2.setVelocityY(bull2.stop)
        }
        
        
        //collider for bullet and wall, calls on bullWall function
        this.physics.add.collider(bull, wall, bullWall)
        this.physics.add.collider(bull2,wall, bull2wall)
        
        
        //goal generation
        goal = this.physics.add.sprite(0,0,'goal').setScale(3, 8)
        goal = this.physics.add.sprite(1010,0,'goal').setScale(3, 8)

        //make goal non move
        goal.body.immovable = true;goal.body.moves = false
        //collide with tank
        this.physics.add.collider(goal, blu)
        this.physics.add.collider(goal, red) 
        //function for bullet and goal collision
        const bullGoal = (goal,bull) => {
            bull.x = 200
            bull.y = 400
            bull.setVelocityX(bull.stop)
            bull.setVelocityY(bull.stop)
        }
        const bull2Goal = (goal,bull2) => {
            bull2.x = 800
            bull2.y = 400
            bull2.setVelocityX(bull2.stop)
            bull2.setVelocityY(bull2.stop)
        }
        //collide with bullets
        this.physics.add.collider(goal, bull, bullGoal) 
        this.physics.add.collider(goal, bull2, bull2Goal) 
        

        
        
    }

    update() {

        // red player

        let right = k.RIGHT.isDown
        let left = k.LEFT.isDown
        let down = k.DOWN.isDown
        let up = k.UP.isDown
        let space = k.SHIFT.isDown

        if (left && down) {
            red.setVelocityX(-red.vertY)
            red.setVelocityY(red.vertY)
            red.rotation = Math.PI * 3/4
        } else if (left && up) {
            red.setVelocityX(-red.vertX)
            red.setVelocityY(-red.vertY)
            red.rotation = -Math.PI * 3/4
        }
        else if (right && up) {
            red.setVelocityX(red.vertX)
            red.setVelocityY(-red.vertY)
            red.rotation = -Math.PI/4
        }
        else if (right && down) {
            red.setVelocityX(red.vertX)
            red.setVelocityY(red.vertY)
            red.rotation = Math.PI/4
        }
        else if (left) {
        
            red.setVelocityX(-red.curSpeed)
            red.rotation = Math.PI
        }

        else if (right) {
            
            red.setVelocityX(red.curSpeed)
            red.rotation = 0
        }

        else if (up) {
            red.setVelocityY(-red.curJump)
            red.rotation = -Math.PI/2
        }

        else if (down) {
            red.setVelocityY(red.curJump)
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
            blu.setVelocityX(-blu.vertX)
            blu.setVelocityY(-blu.vertY)
            blu.rotation = -Math.PI * 3/4
        }
        else if (a && s) {
            blu.setVelocityX(-blu.vertX)
            blu.setVelocityY(blu.vertY)
            blu.rotation = Math.PI * 3/4
        }
        else if (d && w) {
            blu.setVelocityX(blu.vertX)
            blu.setVelocityY(-blu.vertY)
            blu.rotation = -Math.PI/4
        }
        else if (d && s) {
            blu.setVelocityX(blu.vertX)
            blu.setVelocityY(blu.vertY)
            blu.rotation = Math.PI/4
        }
        else if (a) {
            
            blu.setVelocityX(-blu.curSpeed)
            blu.rotation = Math.PI
        }

        else if (d) {
           
            blu.setVelocityX(blu.curSpeed)
            blu.rotation = 0
        }

        else if (w) {
            blu.setVelocityY(-blu.curJump)
            blu.rotation = -Math.PI/2
        }

        else if (s) {
            blu.setVelocityY(blu.curJump)
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
