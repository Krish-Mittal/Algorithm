var a,b,edge;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 200, 50, 50);
  a.velocityX=-3;
  b.velocityX=3;
  edge=createEdgeSprites();
}

function draw() {
  background(255,255,255); 
  
 /* a.x=mouseX;
  a.y=mouseY;*/
  
 fand(b,a);
 isTouching(b,a);

  drawSprites();
}
