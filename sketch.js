
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2, bobObject3, bobObject4, bobObject5
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobObject1= new bobObject();
	bobObject2= new bobObject();
	bobObject3= new bobObject();
	bobObject4= new bobObject();
	bobObject5= new bobObject();

	roof=new roof();

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  
  drawSprites();
 
}



