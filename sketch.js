var fixedRect, movingRect;
var go1,go2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,50,50);
  movingRect = createSprite(200,200,50,50);

  go1 = createSprite(300,80,40,40);
  go2 = createSprite(350,80,40,40);
}

function draw() {
  background(0);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(isTouching(go1,movingRect) === true){
    go1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else{
    go1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(go2,movingRect) === true){
    go2.shapeColor = "red";
    //movingRect.shapeColor = "red";
  }

  else{
    go2.shapeColor = "green";
    //movingRect.shapeColor = "green";
  }


  drawSprites();
}


