var player 

function preload(){
girlAnimation = loadAnimation("images/1-removebg-preview.png", "images/2-removebg-preview.png", "images/3-removebg-preview.png")
}

function setup() {
 createCanvas(600,500)
 player = createSprite(300,200)
 player.addAnimation("girl",girlAnimation)
}

function draw() {
 background("gray")
 drawSprites();
}