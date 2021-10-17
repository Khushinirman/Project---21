
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;
var rightSide;
var top_wall;
var right_wall;
var left_wall;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	left_wall =new Ground(10,600,10,1500);
	right_wall =new Ground(800,600,20,1500);
	top_wall =new Ground(400,10,800,10);
	ground =new Ground(400,590,800,10);
    leftSide =new Ground(550,550,10,220);
	rightSide =new Ground(700,550,10,220);

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	//ellipseMode(RADIUS);
	World.add(world,ball);
	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	
}

function draw() {
	fill("white");
	stroke("black");
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftSide.display();
  rightSide.display();
  top_wall.display();
  right_wall.display();
  left_wall.display();

 
   drawSprites();
   Engine.update(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-50});
	}

}
