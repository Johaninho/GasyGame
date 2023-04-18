var wood = {

    background_1 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/wood/background (1).png',
        scale : {
            x : 1.175,
            y : 1.14
        }
    }),

    mapGenerate : function(){
        this.background_1.update()
    }

}

rainForest = {

    background_1 : new Sprite({
        position : {
            x : 0,
            y : -272
        },
        imageSrc : './img/Background/Background.png',
        scale : {
            x : 1.3,
            y : 1.1
        }
    }),
    
    mapGenerate : function(){
        this.background_1.update()

    }

}

forestSunset = {

    background_1 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/Reference-Image.png',
        scale : {
            x : 0.62,
            y : 0.56
        }
    }),


    mapGenerate : function(){
        this.background_1.update()
    }

}

var forest = {
    background_1 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/Forest/plx-1.png',
        scale : {
            x : 3.4,
            y : 2.4
        }
    }),
    background_2 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/Forest/plx-2.png',
        scale : {
            x : 3.4,
            y : 2.4
        }
    }),

    background_3 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/Forest/plx-3.png',
        scale : {
            x : 3.14,
            y : 2.4   
        }
    }),

    background_4 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/Forest/plx-4.png',
        scale : {
            x : 3.14,
            y : 2.4   
        }
    }),

    background_5 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/Forest/plx-5.png',
        scale : {
            x : 3.14,
            y : 2.4   
        }
    }),

    tilesCreation : function(){
        var tiles = []

        for(let i = 0; i <= 9; i++){
            tiles.push(new Sprite({
                position : {
                    x : 120 * i,
                    y : 514
                },
                imageSrc : './img/Background/Forest/jungle tileset.png',
                scale : {
                    x : 1,
                    y : 1.3   
                }
            }))
        }

        tiles.forEach(floor => {
            floor.update()
        })
    },

    floorCreation : function(){
        var tiles = []

        for(let i = 0; i <= 29; i++){
            tiles.push(new Sprite({
                position : {
                    x : 40 * i - 5,
                    y : 550
                },
                imageSrc : './img/Background/Forest/jungle tileset-2.png',
                scale : {
                    x : 1,
                    y : 1.3   
                }
            }))
        }

        tiles.forEach(floor => {
            floor.update()
        })
    },


    mapGenerate : function(){
        this.background_1.update()
        this.background_2.update()
        this.background_3.update()
        this.background_4.update()
        this.background_5.update()
        this.tilesCreation()
        this.floorCreation()
    }

}

var ghotic = {
    background_1 : new Sprite({
        position : {
            x : 0,
            y : 0
        },
        imageSrc : './img/Background/environment-preview.png',
        scale : {
            x : 2,
            y : 2.15  
        }
    }),

    mapGenerate : function(){
        this.background_1.update()
    }
}