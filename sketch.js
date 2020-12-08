function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight=300;

for (var k = 0; k <=innerWidth; k = k + 80){
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 40; j<=innerWidth; j=j+50)
{

  plinkos.push(new plinkos.push(j,75));
}
for (var j = 15; j ,width-10; j=j+50)
{

  plinkos.push(new plinkos(j,175));

  for (var j =0; j < particles.length; k++){

    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new particles(random(width/2-10, width/2+10), 10,10));
  }
}
function draw() {
  background(255,255,255);  
  drawSprites();
}