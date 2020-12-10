var fixedRect, movingRect;
var Rect1, Rect2;
var go1, go2, go3,go4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80);
  fixedRect.shapeColor = "aqua"
movingRect.shapeColor="aqua"

go1 = createSprite(100,100,50,50);
go2 = createSprite(200,100,50,50);
go3 = createSprite(300,100,50,50);
go4 = createSprite(400,100,50,50);
go1.shapeColor = "aqua"
go2.shapeColor="aqua"
go3.shapeColor = "aqua"
go4.shapeColor="aqua"

  Rect1 = createSprite(100, 600,80,50)
  Rect2 = createSprite(100,0,50,50)

  Rect1.shapeColor="indigo";
  Rect2.shapeColor = "lime";

  Rect1.velocityY = -2;
  Rect2.velocityY = 2;

}

function draw() {
  background(0);  

 

  movingRect.x=mouseX
  movingRect.y=mouseY
  console.log(movingRect.x - fixedRect.x)

  if(isTouching(movingRect, go1)){
    go2.shapeColor = "crimson"
    go4.shapeColor="crimson"
  }else{
    go2.shapeColor = "aqua"
    go4.shapeColor="aqua"
  }

  bounceOff()
  
  drawSprites();
}

