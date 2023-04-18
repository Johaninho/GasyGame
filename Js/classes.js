class Sprite{
    constructor({position, imageSrc, scale = {x : 1, y : 1}, frameMax = 1, offset = {x : 0, y : 0}}){
        this.position = position 
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.frameMax = frameMax
        this.currentFrame = 0
        this.frameElapsed = 0
        this.frameHold = 5
        this.offset = offset
    }

    draw(){
        c.drawImage(this.image,
            this.currentFrame * (this.image.width / this.frameMax),
            0,
            this.image.width / this.frameMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.frameMax) * this.scale.x,
            this.image.height * this.scale.y
        )
    }

    animateFrame(){
        this.frameElapsed++
        if(this.frameElapsed % this.frameHold === 0){
            if(this.currentFrame < this.frameMax -1){
                this.currentFrame++
            } else {
                this.currentFrame = 0
            }
        }
    }

    update(){
        this.draw()
        this.animateFrame()
    }
}

class Figther extends Sprite{
    constructor({position, velocity, imageSrc, scale = {x : 1, y : 1}, frameMax = 1, offset = {x : 0, y : 0}, sprites, attackBox, lastdirection, atkpower = 5}){

        super({position, imageSrc, scale, frameMax, offset})
        
        this.velocity = velocity 
        this.width = 50
        this.height = 150
        this.lastKey = ''
        this.attackBox = attackBox
        this.isAttacking = false
        this.attackPower = atkpower
        this.health = 100
        this.currentFrame = 0
        this.frameElapsed = 0
        this.frameHold = 5
        this.sprites = sprites
        this.lastdirection = lastdirection
        this.dead = false

        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }

    update(){
        this.draw()

        if(this.lastdirection == 'left' && this.isAttacking == false)
            this.attackBox.offset.x = this.attackBox.offset.l
        else if(this.lastdirection == 'rigth' && this.isAttacking == false)
            this.attackBox.offset.x = this.attackBox.offset.r

        // c.fillStyle = '#000'
        // c.fillRect((this.position.x + this.attackBox.offset.x), (this.position.y + this.attackBox.offset.y), this.attackBox.width, this.attackBox.height)

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(!this.dead)
            this.animateFrame()

        if(this.position.y + this.velocity.y + this.height >= canvas.height - 90){
            this.velocity.y = 0
            this.position.y = 360
        }
        else  this.velocity.y += gravity
    }

    TakeHit(attackPower){
        this.health -= attackPower
        if(this.health <= 0)
            this.switchSprite('death')
        else
            this.switchSprite('takeHit')
    }

    switchSprite(sprite){
        if(this.image === this.sprites.Attack1.image && this.currentFrame < this.sprites.Attack1.frameMax - 1)
            return
        
        if(this.image === this.sprites.Attack1Left.image && this.currentFrame < this.sprites.Attack1Left.frameMax - 1)
            return

        if(this.image === this.sprites.TakeHit.image && this.currentFrame < this.sprites.TakeHit.frameMax - 1)
            return

        if(this.image === this.sprites.Death.image){
            if(this.currentFrame === this.sprites.Death.frameMax - 1){
                this.dead = true
            }
            return
        }

        switch (sprite) {
            case 'idle':
                if(this.image !== this.sprites.Idle.image){
                    this.image = this.sprites.Idle.image
                    this.frameMax = this.sprites.Idle.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'idleLeft':
                if(this.image !== this.sprites.IdleLeft.image){
                    this.image = this.sprites.IdleLeft.image
                    this.frameMax = this.sprites.IdleLeft.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'run':
                if(this.image !== this.sprites.Run.image){
                    this.image = this.sprites.Run.image
                    this.frameMax = this.sprites.Run.frameMax
                    this.currentFrame = 0
                }
                break;

             case 'runLeft':
                if(this.image !== this.sprites.RunLeft.image){
                    this.image = this.sprites.RunLeft.image
                    this.frameMax = this.sprites.RunLeft.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'jump':
                if(this.image !== this.sprites.Jump.image){
                    this.image = this.sprites.Jump.image
                    this.frameMax = this.sprites.Jump.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'jumpLeft':
                if(this.image !== this.sprites.JumpLeft.image){
                    this.image = this.sprites.JumpLeft.image
                    this.frameMax = this.sprites.JumpLeft.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'fall':
                if(this.image !== this.sprites.Fall.image){
                    this.image = this.sprites.Fall.image
                    this.frameMax = this.sprites.Fall.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'fallLeft':
            if(this.image !== this.sprites.FallLeft.image){
                this.image = this.sprites.FallLeft.image
                this.frameMax = this.sprites.FallLeft.frameMax
                this.currentFrame = 0
            }
            break;

            case 'attack1':
                if(this.image !== this.sprites.Attack1.image){
                    this.image = this.sprites.Attack1.image
                    this.frameMax = this.sprites.Attack1.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'attack1Left':
            if(this.image !== this.sprites.Attack1Left.image){
                this.image = this.sprites.Attack1Left.image
                this.frameMax = this.sprites.Attack1Left.frameMax
                this.currentFrame = 0
            }
            break;

            case 'takeHit':
                if(this.image !== this.sprites.TakeHit.image){
                    this.image = this.sprites.TakeHit.image
                    this.frameMax = this.sprites.TakeHit.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'takeHitLeft':
                if(this.image !== this.sprites.TakeHitLeft.image){
                    this.image = this.sprites.TakeHitLeft.image
                    this.frameMax = this.sprites.TakeHitLeft.frameMax
                    this.currentFrame = 0
                }
                break;

            case 'death':
                if(this.image !== this.sprites.Death.image){
                    this.image = this.sprites.Death.image
                    this.frameMax = this.sprites.Death.frameMax
                    this.currentFrame = 0
                }
                break;
        }
    }
}