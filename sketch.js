
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:1.5,
		friction:0,
		density:1.2,
	}
	ball=Bodies.circle(200,150,40,ball_options);
	World.add(world,ball);

	block1=new Ground(width/2,670,width,20)
	block2=new Ground(1100,600,20,120)
	block3=new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40);
  block1.display();
  block2.display();
  block3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}