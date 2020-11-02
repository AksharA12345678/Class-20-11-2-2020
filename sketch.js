var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(100, 600, 50, 80);
 fixedRect.shapeColor = "green"
 movingRect = createSprite(800,600,80,30)
 movingRect.shapeColor = "green"
 fixedRect.debug = true;
 movingRect.debug = true;

 movingRect.velocityX = -5;
 fixedRect.velocityX = 5;
}

function draw() {
  background(0);  

 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX * (-1)
    movingRect.velocityX = movingRect.velocityX * (-1)
  }
  if(movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * (-1)
    movingRect.velocityY = movingRect.velocityY * (-1)
    }
  drawSprites();
}