let k, blu, red, lazer, graphics, ok, wall, bball, rball, bgoal, rgoal, rscore, bscore

class Main extends Phaser.Scene {
    init () {
        rscore = 0
        bscore = 0
    }
    preload() {
        this.load.image('bg', 'assets/img/background.png')
        this.load.image('blu', 'assets/img/blu-tank.png')
        this.load.image('red', 'assets/img/red-tank.png')
        this.load.image('lazer', 'assets/img/lazer.png')
        this.load.image('wall', 'assets/img/wall.png')
        this.load.image('bball', 'assets/img/bluball.png')
        this.load.image('rball', 'assets/img/redball.png')
        this.load.image('bgoal', 'assets/img/bluegoal.png')
        this.load.image('rgoal', 'assets/img/redgoal.png')

    }
    create() {
        //define k as key input
        k = this.input.keyboard.addKeys('SHIFT,LEFT,RIGHT,UP,DOWN,W,A,S,D,SPACE')
        //add background
        this.add.image(0,0, 'bg').setOrigin(0,0)
        //add in red and blue tank sprites
        blu = this.physics.add.sprite(100,400,'blu')
        red = this.physics.add.sprite(900,400,'red')
        //red tank faces foward when spawning 
        red.rotation = Math.PI


        lazer = new Phaser.Geom.Line()
        graphics = this.add.graphics()
        //collide on edge
        red.setCollideWorldBounds(true)
        blu.setCollideWorldBounds(true)
        //set gravity
        red.setGravityY(0)
        blu.setGravityY(0)
        
        //set speed and damping (friction), applied in setDrag
        red.curSpeed = 230
        blu.curSpeed = 230
        red.body.useDamping = true
        blu.body.useDamping = true
        red.setDrag(.001)
        blu.setDrag(.001)
        //set verticle movement
        blu.curJump = 230
        red.curJump = 230
        //set horizontal movement
        blu.vertX = 200
        red.vertX = 200
        blu.vertY = 200
        red.vertY = 200

        //ball phsyics
        bball = this.physics.add.sprite(200, 400, 'bball').setScale(1.3, 1.3)
        rball = this.physics.add.sprite(800, 400, 'rball').setScale(1.3, 1.3)
        rball.lazerboost = 215
        bball.lazerboost = 215
        bball.stop = 0
        rball.stop = 0
        bball.setGravityY(0)
        rball.setGravity(0)

       
        bball.setCollideWorldBounds(true, 1, 1)
        rball.setCollideWorldBounds(true, 1, 1)

        
        //wall generation
        wall = this.physics.add.staticGroup()
        wall.create(250, 100, 'wall').setScale(1, 1.2).refreshBody()
        wall.create(250, 700, 'wall').setScale(1, 1.2).refreshBody()
        wall.create(750, 100, 'wall').setScale(1, 1.2).refreshBody()
        wall.create(750, 700, 'wall').setScale(1, 1.2).refreshBody()
        
        //wall collision
        this.physics.add.collider(blu, wall)
        this.physics.add.collider(red, wall)

        this.physics.add.collider(red, rball)
        this.physics.add.collider(blu, rball)
        this.physics.add.collider(blu, bball) 
        this.physics.add.collider(red, bball)
        //tank collision
        this.physics.add.collider(red, blu)

        
        //function for when bballet hits a wall, UNUSED
        /*
        const bballWall = (bball,wall) => {
            bball.x = 200
            bball.y = 400
            bball.setVelocityX(bball.stop)
            bball.setVelocityY(bball.stop)
        }
        const rballwall = (rball,wall) => {
            rball.x = 800
            rball.y = 400
            rball.setVelocityX(rball.stop)
            rball.setVelocityY(rball.stop)
        }
        */
        
        //collider for bballet and wall
        this.physics.add.collider(bball, wall)
        this.physics.add.collider(rball,wall)
        
        
        //goal generation
        bgoal = this.physics.add.sprite(0,0,'bgoal').setScale(3, 8)
        rgoal = this.physics.add.sprite(1026,0,'rgoal').setScale(3, 8)

        //make bgoal non move
        bgoal.body.immovable = true;bgoal.body.moves = false
        rgoal.body.immovable = true;rgoal.body.moves = false

        //collide with tank
        this.physics.add.collider(bgoal, blu)
        this.physics.add.collider(bgoal, red) 
        this.physics.add.collider(rgoal, blu)
        this.physics.add.collider(rgoal, red) 
        
        //bluetext is text for the score, not the value itself
        let blutext = this.add.text(50, 700, 'Blue Score: 0', {
            fontFamily: "comic sans ms",
            color: "blue",
            fontSize: "24px",
        })
        //redtext is text for the score, not the value itself
        let redtext = this.add.text(830, 700, 'Red Score: 0', {
            fontFamily: "comic sans ms",
            color: "red",
            fontSize: "24px",
        })
        
        
        //function for bballet and bgoal collision
        //blue bballet is bball, red bballet is rball
        //bgoal is for blue, rgoal is for red.
        
        //blue bballet does into blue bgoal, minus 1 point for blue
        const bballGoal = (bgoal,bball) => {
            bscore -= 1 
            blutext.setText(`Blue Score: ${bscore}`)
            bball.x = 200
            bball.y = 400
            bball.setVelocityX(bball.stop)
            bball.setVelocityY(bball.stop)
        }
        //red bballet goes into blue bgoal, plus 1 point for red
        const rballGoal = (bgoal,rball) => {
            rscore += 1 
            redtext.setText(`Red Score: ${rscore}`)
            rball.x = 800
            rball.y = 400
            rball.setVelocityX(rball.stop)
            rball.setVelocityY(rball.stop)
        }
        
        //rgoal
        //blue bballet goes into red bgoal, plus 1 point for blue
        const bballGoal2 = (rgoal,bball) => {
            bscore += 1 
            blutext.setText(`Blue Score: ${bscore}`)
            bball.x = 200
            bball.y = 400
            bball.setVelocityX(bball.stop)
            bball.setVelocityY(bball.stop)
        }
        //red bballet goes into red bgoal, minus 1 point for red
        const rballGoal2 = (rgoal,rball) => {
            rscore -= 1 
            redtext.setText(`Red Score: ${rscore}`)
            rball.x = 800
            rball.y = 400
            rball.setVelocityX(rball.stop)
            rball.setVelocityY(rball.stop)
        }
        //collide with ball
        this.physics.add.collider(bgoal, bball, bballGoal) 
        this.physics.add.collider(bgoal, rball, rballGoal)
        this.physics.add.collider(rgoal, bball, bballGoal2) 
        this.physics.add.collider(rgoal, rball, rballGoal2) 
        

        
        
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
            let lazerbball = bball.getBounds()
            if (Phaser.Geom.Intersects.LineToRectangle(lazer,lazerbball)) {
              bball.setVelocityX(bball.lazerboost)  
              graphics.lineStyle(2, 0xff0000)
            }
            graphics.strokeRectShape(lazerbball)
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
            let lazerball = rball.getBounds()
            if (Phaser.Geom.Intersects.LineToRectangle(lazer,lazerball)) {
              rball.setVelocityX(rball.lazerboost)
              graphics.lineStyle(2, 0xff0000)
            }
            graphics.strokeRectShape(lazerball)
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
