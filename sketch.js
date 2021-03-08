var ship,ship_up,sea,seaImage,shipImg2;
    

function preload(){
ship_up= loadAnimation("ship-1.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
  shipImg2=loadImage("ship-2.png");
  
  
}

function setup(){
  createCanvas(900,800);
 
   //moving background
 sea=createSprite(400,300);
  sea.addImage(seaImage);
  sea.velocityX=-3;
   //create a ship sprite
    ship= createSprite(500,400,20,50);
    ship.addAnimation("up_down", ship_up);
    ship.scale = 0.5;
}

function draw() {
  background("sea.png");
  if(keyDown("space")){
    ship.addAnimation("ship-",shipImg2);
  }
 //code to reset the background
  if(sea.x<0){
    sea.x = sea.width/2;
  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
}