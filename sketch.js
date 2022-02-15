var caxa
function setup() {
  createCanvas(400,400);
  caxa=createSprite(200, 200, 30, 30)
}


function draw() 
{
  background(30);
 drawSprites()
 if(keyDown("left")){
caxa.x=caxa.x-5

 }
if(keyDown("right")){
caxa.x=caxa.x+5

}
if(keyDown("up")){
caxa.y=caxa.y-5

}
if(keyDown("down")){
  caxa.y=caxa.y+5
}
}




