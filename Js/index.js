const maps = document.querySelectorAll('.terrain')
const container = document.querySelector('.map')
const box = document.querySelector('.box')

const jaomarenga = document.querySelector('#Jaomarenga')
const trimobe = document.querySelector('#Trimobe')
const mpamosavy = document.querySelector('#Mpamosavy')
const radama = document.querySelector('#Radama')

const j1 = document.querySelector('#joueur1')
const j2 = document.querySelector('#joueur2')

var players = []

jaomarenga.addEventListener('click', () => {
    if(j1.classList.contains('joueur')){
        document.querySelector('#perso-choisie1').innerHTML = "Jaomarenga"
        players.push('jaomarenga')
        j1.classList.remove('joueur')
        j2.classList.add('joueur')
    } else{
        document.querySelector('#perso-choisie2').innerHTML = "Jaomarenga"
        players.push('jaomarenga')
    }
})

radama.addEventListener('click', () => {
    if(j1.classList.contains('joueur')){
        document.querySelector('#perso-choisie1').innerHTML = "Radama"
        players.push('radama')
        j1.classList.remove('joueur')
        j2.classList.add('joueur')
    } else {
        document.querySelector('#perso-choisie2').innerHTML = "Radama"
        players.push('radama')
    }
})

mpamosavy.addEventListener('click', () => {
    if(j1.classList.contains('joueur')){
        document.querySelector('#perso-choisie1').innerHTML = "mpamosavy"
        players.push('mpamosavy')
        j1.classList.remove('joueur')
        j2.classList.add('joueur')
    } else {
        document.querySelector('#perso-choisie2').innerHTML = "Mpamosavy"
        players.push('mpamosavy')
    }
})

trimobe.addEventListener('click', () => {
    if(j1.classList.contains('joueur')){
        document.querySelector('#perso-choisie1').innerHTML = "trimobe"
        players.push('trimobe')
        j1.classList.remove('joueur')
        j2.classList.add('joueur')
    } else {
        document.querySelector('#perso-choisie2').innerHTML = "Trimobe"
        players.push('trimobe')
    }
})


var timerId = setInterval(() => {
    if(players.length == 2){
        document.querySelector('.map').classList.remove('none')
        document.querySelector('.personnage').classList.add('none')
    }
}, 10)


maps.forEach(map => {
    map.addEventListener('click', () => {
        clearInterval(timerId)
        container.classList.add('none')
        box.classList.remove('none')
        setMapName(map.id)
        player = setPlayer(player, players[0])
        ennemy = setPlayer(ennemy, players[1])
        ennemy.position.x = player.position.x + 250
        ennemy.lastdirection = 'left'
        animate()
    })
})