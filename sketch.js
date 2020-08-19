
var car, wall;
var speed, weight;
var gameState = "play";

function setup() {
  createCanvas(1600,400);

speed = random(10, 20);
weight = random(400, 1500);
  
  car = createSprite(80, 200, 60, 20);
  car.shapeColor = color(255, 0, 0);


  wall = createSprite(1500, 200, 10, 400);
  wall.shapeColor = color(255, 255, 255);

}

function draw() {
  background(0,0,0);  
  
  car.velocityX = speed;

  // telling the car when to stop

  if (wall.x - car.x < wall.width/2 + car.width/2 && weight*speed*speed < 160000){
   car.velocityX = 0;
   car.shapeColor = color(0, 0, 255);
  }

  if (wall.x - car.x < wall.width/2 + car.width/2 && weight*speed*speed > 160000){
    car.velocityX = 0;
    car.shapeColor = color(0, 255, 0);
   }

  drawSprites();
}