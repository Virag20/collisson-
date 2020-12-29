var movingRec,fixRec;
function setup() {
  createCanvas(800,400);
  fixRec=createSprite(200, 200, 80, 80);
  fixRec.shapeColor="green"
  fixRec.debug=true;
  movingRec=createSprite(400,200,50,30)
  movingRec.shapeColor="green"
  movingRec.debug=true;
}

function draw() {
  background(255,255,255);
  movingRec.x=World.mouseX
  movingRec.y=World.mouseY
  if(movingRec.x-fixRec.x<fixRec.width/2+movingRec.width/2 && fixRec.x-movingRec.x<fixRec.width/2+movingRec.width/2&& movingRec.y-fixRec.y<fixRec.height/2+movingRec.height/2&& fixRec.y-movingRec.y<fixRec.height/2+movingRec.height/2){
  movingRec.shapeColor="red"
  fixRec.shapeColor="red"
  }
  else{
    movingRec.shapeColor="green"
    fixRec.shapeColor="green"
  }
  drawSprites();
}