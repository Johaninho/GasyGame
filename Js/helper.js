function determineWinner(player_1, player_2){
    let tie = document.querySelector('#tie')
    if(player_1.health === player_2.health){
        tie.style.display = 'flex'
        tie.innerHTML = 'Ady sahala'
    } else if(player_1.health > player_2.health){
        tie.style.display = 'flex'
        tie.innerHTML = 'Nandresy ny mpilalao I'
    } else {
        tie.style.display = 'flex'
        tie.innerHTML = 'Nandresy ny mpilalao II'
    }
}

function decraseTimer(){
    if(time > 0){
        setTimeout(decraseTimer, 1000)
        time --
        document.querySelector('#timer').innerHTML = time
    }
    
    if(time == 0)
       determineWinner(player, ennemy)
}

function setPlayer(player, playerchoice){
    switch(playerchoice){
        case 'jaomarenga' :
            player = Jaomarenga
            break
        case 'radama' :
            player = Radama
            break
        case 'trimobe' :
            player = Trimobe
            break
        case 'mpamosavy':
            player = Mpamosavy
            break
    }
    return player
}

function attack(player){
    if(player.lastdirection === 'left')
        player.switchSprite('attack1Left')
    else 
        player.switchSprite('attack1')

    player.isAttacking = true
}

function setMapName(mapName) {
    return mapDefault = mapName
}

function loadMap(mapName){

   switch(mapName){
        case 'wood' :
            wood.mapGenerate() 
            break
        case 'forest' : 
            forest.mapGenerate()
            break
        case 'rainForest' :
            rainForest.mapGenerate()
            break
        case 'forestSunset' :
            forestSunset.mapGenerate()
            break
        case 'ghotic' :
            ghotic.mapGenerate()
            break
   }
}

addEventListener('keydown', ({key}) => {

    if(!player.dead) {
        switch(key){
            case 'd' :
                keys.d.pressed = true
                player.lastKey = 'd'
                player.lastdirection = 'rigth'
                break
            case 'q' :
                keys.q.pressed = true
                player.lastKey = 'q'
                player.lastdirection = 'left'
                break
            case 'z' :
                if( player.position.y + player.velocity.y > 25)
                    player.velocity.y = -15
                break
            case ' ' :
                attack(player)
                break 
        }
    }

    if(!ennemy.dead){
        switch(key){

            //ennemy command
            case 'm' :
                keys.m.pressed = true
                ennemy.lastKey = 'm'
                ennemy.lastdirection = 'rigth'
                break
            case 'k' :
                keys.k.pressed = true
                ennemy.lastKey = 'k'
                ennemy.lastdirection = 'left'
                break
            case 'o' :
                if( ennemy.position.y + ennemy.velocity.y > 25)
                    ennemy.velocity.y = -15
                break
            case 'Enter' :
                attack(ennemy)
                break
        }
    }
})

addEventListener('keyup', ({key}) => {
    switch(key){
        case 'd' :
            keys.d.pressed = false
            break 
        case 'q' :
            keys.q.pressed = false
            break 
        case 'm' :
            keys.m.pressed = false
            break
        case 'k' :
            keys.k.pressed = false
            break
    }
})