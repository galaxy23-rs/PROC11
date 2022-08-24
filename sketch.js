var sea 
var ship, shipmov


function preload(){
sea=loadImage("sea.png");
shipmov=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(400,400);
  

  sea = (200,200);
ship.addAnimation("moving",shipmov)

}

sea.velocityX(0.3);


function draw() {
  background("sea.png");
  
if (sea.x <0)
  {
sea.x=sea.widht/2;

}




 drawSprite(); 
 
}