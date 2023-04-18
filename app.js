const canvas = document.querySelector('#room')
const c = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 600

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const keys = {
    q : {
        pressed : false
    },

    d : {
        pressed : false
    },

    k : {
        pressed : false
    },

    m : {
        pressed : false
    }
}

var mapDefault = 'wood'

//initialisation player
var player 
var ennemy 

// console.log(player, ennemy);

let time = 90

decraseTimer()

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    loadMap(mapDefault)

    c.fillStyle = 'rgba(255, 255, 255, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    ennemy.update()

    //player actions

    player.velocity.x = 0

    if(player.position.y + player.velocity.y <= 0)
        player.velocity. y = 0
    
    if(keys.q.pressed && player.lastKey === 'q'){
        player.velocity.x = -5 
        player.switchSprite('runLeft')
    } else if(keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
        player.switchSprite('run')
    } else {
        if(player.lastdirection === 'left')
            player.switchSprite('idleLeft')
        else
            player.switchSprite('idle')
    }


    if(player.velocity.y < 0){
        if(player.lastdirection == 'left')
            player.switchSprite('jumpLeft')
        else
            player.switchSprite('jump')
    } else if(player.velocity.y > 0)
        if(player.lastdirection == 'left')
            player.switchSprite('fallLeft')
        else
            player.switchSprite('fall')

    if(player.position.x + player.attackBox.offset.x + player.attackBox.width >= ennemy.position.x &&
        player.position.x + player.attackBox.offset.x <= ennemy.position.x + ennemy.width &&
        player.position.y + player.attackBox.offset.y + player.attackBox.height >= ennemy.position.y &&
        player.position.y + player.attackBox.offset.y <= ennemy.height + ennemy.position.y &&
        player.isAttacking && player.currentFrame == 2){
            player.isAttacking = false
            ennemy.TakeHit(player.attackPower)
            document.querySelector('#ennemiHealth').style.width = `${ennemy.health}%`
        }

    if(player.isAttacking && player.currentFrame == 2){
        player.isAttacking = false
    }

    if(player.position.x + player.velocity.x <= 0 || player.position.x  + player.velocity.x >= canvas.width - 50)
        player.velocity.x = 0

    //ennemy actions

    ennemy.velocity.x = 0

    if(ennemy.position.y + ennemy.velocity.y <= 0)
        ennemy.velocity. y = 0

    if(keys.k.pressed && ennemy.lastKey === 'k'){
            ennemy.velocity.x = -5 
            ennemy.switchSprite('runLeft')
        } else if(keys.m.pressed && ennemy.lastKey === 'm'){
            ennemy.velocity.x = 5
            ennemy.switchSprite('run')
    } else {
        if(ennemy.lastdirection === 'left')
            ennemy.switchSprite('idleLeft')
        else
            ennemy.switchSprite('idle')
    }


    if(ennemy.velocity.y < 0){
        if(ennemy.lastdirection == 'left')
            ennemy.switchSprite('jumpLeft')
        else
            ennemy.switchSprite('jump')

    } else if(ennemy.velocity.y > 0)

        if(ennemy.lastdirection == 'left')
            ennemy.switchSprite('fallLeft')
        else
            ennemy.switchSprite('fall')

    if(ennemy.position.x + ennemy.attackBox.offset.x + player.attackBox.width >= player.position.x &&
        ennemy.position.x + ennemy.attackBox.offset.x <= player.position.x + player.width &&
        ennemy.position.y + ennemy.attackBox.offset.y + ennemy.attackBox.height >= player.position.y &&
        ennemy.position.y + ennemy.attackBox.offset.y <= player.height + player.position.y &&
        ennemy.isAttacking && ennemy.currentFrame == 2){
            player.isAttacking = false
            player.TakeHit(ennemy.attackPower)
            document.querySelector('#playerHealth').style.width = `${player.health}%`
        }

    if(ennemy.isAttacking && ennemy.currentFrame == 2){
        ennemy.isAttacking = false
    }

    if(ennemy.position.x + ennemy.velocity.x <= 0 || ennemy.position.x  + ennemy.velocity.x >= canvas.width - 50)
        ennemy.velocity.x = 0
        
    //determine le vaincoeur
    if(player.health <= 0 || ennemy.health <= 0){
        determineWinner(player,ennemy)
        time = 0
    }
    
}
