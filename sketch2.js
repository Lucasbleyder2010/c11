var ship,boatImg,ship1,ship2,ship3,ship4;
var sea,oceanImg;
function preload(){
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4")
sea= loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  var sea = createSprite(500,100,40,40);
  sea.addImage(oceanImg)
  var ship = createSprite (500,100,40,50)
  boatImg.addAnimation("ship",boat)
  ship.velocityX  = -5
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
 }
    drawSprites();

 
}
