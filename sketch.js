var canvas;
var music;
var blue,orange,maroon,green
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(100,590,200,10)
    blue.shapeColor = "blue"
    orange = createSprite(300,590,200,10)
    orange.shapeColor = "orange"
    maroon = createSprite(500,590,200,10)
    maroon.shapeColor = "maroon"
    green = createSprite(700,590,200,10)
    green.shapeColor = "green"
    box = createSprite(400,300,50,50)

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
box.y = World.mouseY;
box.x = World.mouseX;
if(box.isTouching(blue)){
    box.shapeColor = "blue"
}else{
    box.shapeColor = "grey"
}
if(box.isTouching(orange)){
    box.shapeColor = "orange"
}
if(box.isTouching(maroon)){
    box.shapeColor = "maroon"
}
if(box.isTouching(green)){
    box.shapeColor = "green"
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}
