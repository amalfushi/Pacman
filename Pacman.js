//0 empty, 1 wall, 2 coin

var world =[
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1],
        [1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,1,1,2,1,2,2,2,1,2,1,2,1,2,1,2,1],
        [1,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,1],
        [1,2,1,1,1,2,1,2,1,2,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,1,1,1,2,1],
        [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,1,1,1,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],
        [1,2,1,2,1,2,2,2,1,2,2,2,1,2,1,0,0,0,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1],
        [1,2,1,2,1,2,2,2,1,1,1,1,1,2,2,0,0,0,2,2,1,1,1,1,1,2,2,2,1,2,1,2,1],
        [1,2,1,2,1,2,2,2,1,2,2,2,1,2,1,0,0,0,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1],
        [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,1,1,1,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],
        [1,2,1,1,1,2,1,2,1,2,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,1,1,1,2,1],
        [1,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,1],
        [1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,1,1,2,1,2,2,2,1,2,1,2,1,2,1,2,1],
        [1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
var xPos = 800;
var yPos = 350;
var score = 0;

var ghost = {
    xPos: 750,
    yPos: 300,
    active: false
}

function showWorld(){
    var htmlString="";
    for (var y=0; y<world.length; y++){
        htmlString += '<div class="row">'
        for(var x=0; x<world[y].length; x++){
            if(world[y][x] === 1){
                htmlString += '<div class="brick"></div>';
            } else if(world[y][x] === 2){
                htmlString += '<div class="coin"></div>';
            } else if(world[y][x] === 0){
                htmlString += '<div class="empty"></div>';
            }
        }
        htmlString += '</div>';
    }
    // console.log(htmlString);
    document.getElementById('world').innerHTML = htmlString;
}

document.onkeydown = function(event){
    console.log(event);

    //left
    if(event.keyCode == 37 && world[yPos/50][(xPos/50)-1] !=1){
        xPos -= 50;
    } 

    //up
    else if( event.keyCode ==38 && world[(yPos/50)-1][xPos/50] !=1){
        yPos -= 50;
    }  

    //right
    else if( event.keyCode ==39 && world[yPos/50][(xPos/50)+1] !=1){
        xPos += 50;
    } 

    //down
    else if( event.keyCode ==40 && world[(yPos/50)+1][xPos/50] !=1){
        yPos += 50;
    }
    //left 37
    //up 38
    //right 39
    //up 40

    document.getElementById('pacman').style.top = yPos+'px';
    document.getElementById('pacman').style.left = xPos+'px';
    checkCollision();
};

function checkCollision(){
    var currentCoords = [xPos/50, yPos/50];
    if (world[yPos/50][xPos/50] === 2){
        world[yPos/50][xPos/50] = 0;
        score ++;
        showWorld();
        showScore();
    } else if(world[yPos/50][xPos/50] === 1){
        console.log("shit")
        document.getElementsByClassName('brick').style.backgroundColor= "red";
        document.getElementByClassName('brick').style.backgroundColor = "white";
        document.getElementByClassName('brick').style.backgroundColor = "red";
        document.getElementByClassName('brick').style.backgroundColor = "white";
        document.getElementByClassName('brick').style.backgroundColor = "red";
        document.getElementByClassName('brick').style.backgroundColor = "white";
    }
    
}

function showScore(){
    document.getElementById('score').innerText = "Score: "+ score;
}

showWorld();



//build a world
//put pacman on board
//move pacman
//eat coins
//add fruit
//randomly generate board