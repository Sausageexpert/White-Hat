const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;
var bouncingPad;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  bouncingPad = createSprite(200, 0, 400, 10);


  // ball.shapeColor = "red";

  var ground_options ={
    isStatic:true
  }

  var ball_options ={
restitution: 2.0
  }

  ground = Bodies.rectangle(200,380,400,50,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200, 80, 30, ball_options);
  World.add(world,ball);

  bouncingPad = Bodies.rect(200, 10, 400, 10);
  World.add(world,bouncingPad);
  
  console.log(ground);
  console.log(ground.position.x); 
  console.log(ground.position.y); 
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  fill("red");
  
  if (bouncingPad.y - ball.y === 0){
      ball.velocityY = (-1)*ball.velocityY;
  }

  rect(ground.position.x,ground.position.y,400,50);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  drawSprites();
}