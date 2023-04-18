const Radama = new Figther({
    position : {x : 400, y : 0},
    velocity : {x : 0, y : 0},
    imageSrc : './img/Figther/Radama/Idle.png',
    frameMax : 8,
    scale : {
        x : 2.5,
        y : 2.5
    },
    offset : {
        x : 190,
        y : 80
    },
    sprites : {
        Idle : {
            imageSrc : './img/Figther/Radama/Idle.png',
            frameMax : 8
        },
        IdleLeft : {
            imageSrc : './img/Figther/Radama/IdleLeft.png',
            frameMax : 8
        },
        Run : {
            imageSrc : './img/Figther/Radama/Run.png',
            frameMax : 8
        },
        RunLeft : {
            imageSrc : './img/Figther/Radama/RunLeft.png',
            frameMax : 8
        },
        Jump : {
            imageSrc : './img/Figther/Radama/Jump.png',
            frameMax : 2
        },
        JumpLeft : {
            imageSrc : './img/Figther/Radama/JumpLeft.png',
            frameMax : 2
        },
        Fall : {
            imageSrc : './img/Figther/Radama/Fall.png',
            frameMax : 2
        },
        FallLeft : {
            imageSrc : './img/Figther/Radama/FallLeft.png',
            frameMax : 2
        },
        Attack1 : {
            imageSrc : './img/Figther/Radama/Attack1.png',
            frameMax : 4
        },
        Attack1Left : {
            imageSrc : './img/Figther/Radama/Attack1Left.png',
            frameMax : 4
        },
        TakeHit : {
            imageSrc : './img/Figther/Radama/Take Hit - white silhouette.png',
            frameMax : 4
        },
        TakeHitLeft : {
            imageSrc : './img/Figther/Radama/Take Hit - white silhouetteLeft.png',
            frameMax : 4
        },
        Death : {
            imageSrc : './img/Figther/Radama/Death.png',
            frameMax : 6
        }
    },
    attackBox : {
        width : 130,
        height : 50,
        
        offset : {
            x : 45,
            y : 90,
            r : 45,
            l : -150
        }
    },
    lastdirection : 'rigth'
})

const Mpamosavy = new Figther({
    position : {x : 400, y : 0},
    velocity : {x : 0, y : 0},
    imageSrc : './img/Figther/Mpamosavy/Idle.png',
    frameMax : 8,
    scale : {
        x : 2.5,
        y : 2.5
    },
    offset : {
        x : 250,
        y : 230,
    },
    sprites : {
        Idle : {
            imageSrc : './img/Figther/Mpamosavy/Idle.png',
            frameMax : 8
        },
        IdleLeft : {
            imageSrc : './img/Figther/Mpamosavy/IdleLeft.png',
            frameMax : 8
        },
        Run : {
            imageSrc : './img/Figther/Mpamosavy/Run.png',
            frameMax : 8
        },
        RunLeft : {
            imageSrc : './img/Figther/Mpamosavy/RunLeft.png',
            frameMax : 8
        },
        Jump : {
            imageSrc : './img/Figther/Mpamosavy/Jump.png',
            frameMax : 2
        },
        JumpLeft : {
            imageSrc : './img/Figther/Mpamosavy/JumpLeft.png',
            frameMax : 2
        },
        Fall : {
            imageSrc : './img/Figther/Mpamosavy/Fall.png',
            frameMax : 2
        },
        FallLeft : {
            imageSrc : './img/Figther/Mpamosavy/FallLeft.png',
            frameMax : 2
        },
        Attack1 : {
            imageSrc : './img/Figther/Mpamosavy/Attack1.png',
            frameMax : 8
        },
        Attack1Left : {
            imageSrc : './img/Figther/Mpamosavy/Attack1Left.png',
            frameMax : 8
        },
        TakeHit : {
            imageSrc : './img/Figther/Mpamosavy/Take hit.png',
            frameMax : 3
        },
        TakeHitLeft : {
            imageSrc : './img/Figther/Mpamosavy/Take hitLeft.png',
            frameMax : 3
        },
        Death : {
            imageSrc : './img/Figther/Mpamosavy/Death.png',
            frameMax : 7
        }
    },
    attackBox : {
        width : 150,
        height : 150,
        
        offset : {
            x : 200,
            y : -15,
            r : 120,
            l : -150
        }
    },
    lastdirection : 'rigth',
    atkpower :4
})

const Jaomarenga = new Figther({
    position : {x : 400, y : 0},
    velocity : {x : 0, y : 0},
    imageSrc : './img/Figther/Mpamosavy/Idle.png',
    frameMax : 8,
    scale : {
        x : 2.5,
        y : 2.5
    },
    offset : {
        x : 150,
        y : 60,
    },
    sprites : {
        Idle : {
            imageSrc : './img/Figther/Chasseur/Idle.png',
            frameMax : 8
        },
        IdleLeft : {
            imageSrc : './img/Figther/Chasseur/IdleLeft.png',
            frameMax : 8
        },
        Run : {
            imageSrc : './img/Figther/Chasseur/Run.png',
            frameMax : 8
        },
        RunLeft : {
            imageSrc : './img/Figther/Chasseur/RunLeft.png',
            frameMax : 8
        },
        Jump : {
            imageSrc : './img/Figther//Chasseur/Jump.png',
            frameMax : 2
        },
        JumpLeft : {
            imageSrc : './img/Figther//Chasseur/JumpLeft.png',
            frameMax : 2
        },
        Fall : {
            imageSrc : './img/Figther//Chasseur/Fall.png',
            frameMax : 2
        },
        FallLeft : {
            imageSrc : './img/Figther//Chasseur/FallLeft.png',
            frameMax : 2
        },
        Attack1 : {
            imageSrc : './img/Figther/Chasseur/Attack1.png',
            frameMax : 5
        },
        Attack1Left : {
            imageSrc : './img/Figther/Chasseur/Attack1Left.png',
            frameMax : 5
        },
        TakeHit : {
            imageSrc : './img/Figther/Chasseur/Take hit.png',
            frameMax : 3
        },
        TakeHitLeft : {
            imageSrc : './img/Figther/Chasseur/Take hitLeft.png',
            frameMax : 3
        },
        Death : {
            imageSrc : './img/Figther/Chasseur/Death.png',
            frameMax : 8
        }
    },
    attackBox : {
        width : 150,
        height : 100,
        
        offset : {
            x : 200,
            y : 70,
            r : 70,
            l : -140
        }
    },
    lastdirection : 'rigth',
    atkpower :4
})

const Trimobe = new Figther({
    position : {x : 400, y : 0},
    velocity : {x : 0, y : 0},
    imageSrc : './img/Figther/Trimobe/Idle.png',
    frameMax : 5,
    scale : {
        x : 2.5,
        y : 2.5
    },
    offset : {
        x : 80,
        y : 50
    },
    sprites : {
        Idle : {
            imageSrc : './img/Figther/Trimobe/Idle.png',
            frameMax : 5,
        },
        IdleLeft : {
            imageSrc : './img/Figther/Trimobe/IdleLeft.png',
            frameMax : 5
        },
        Run : {
            imageSrc : './img/Figther/Trimobe/Run.png',
            frameMax : 6
        },
        RunLeft : {
            imageSrc : './img/Figther/Trimobe/RunLeft.png',
            frameMax : 6
        },
        Jump : {
            imageSrc : './img/Figther/Trimobe/Jump.png',
            frameMax : 5
        },
        JumpLeft : {
            imageSrc : './img/Figther/Trimobe/JumpLeft.png',
            frameMax : 5
        },
        Fall : {
            imageSrc : './img/Figther/Trimobe/Jump.png',
            frameMax : 5
        },
        FallLeft : {
            imageSrc : './img/Figther/Trimobe/JumpLeft.png',
            frameMax : 5
        },
        Attack1 : {
            imageSrc : './img/Figther/Trimobe/Attack_1.png',
            frameMax : 4
        },
        Attack1Left : {
            imageSrc : './img/Figther/Trimobe/Attack_1Left.png',
            frameMax : 4
        },
        TakeHit : {
            imageSrc : './img/Figther/Trimobe/Hurt.png',
            frameMax : 2
        },
        TakeHitLeft : {
            imageSrc : './img/Figther/Trimobe/hurtLeft.png',
            frameMax : 2
        },
        Death : {
            imageSrc : './img/Figther/Trimobe/Dead.png',
            frameMax : 4
        }
    },
    attackBox : {
        width : 130,
        height : 50,
        
        offset : {
            x : 45,
            y : 90,
            r : 45,
            l : -150
        }
    },
    lastdirection : 'rigth'
})
