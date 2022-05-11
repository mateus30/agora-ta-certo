
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;

var engine;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(0);

	engine=Engine.create();
	world=engine.world;

    var plane_options = {
		isStatic:true
	}

   var plane=Bodies.rectangle(400,600,1000,20,plane_options);
   World.add(world,plane);

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
    block1 = Bodies.circle(220,10,30,block1_options);
    World.add(world,block1);

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	block2 = Bodies.rectangle(110,50,30,30,block2_options);
    World.add(world,block2);

	var block3_options = {
		restiution:0.01,
		friction:1,
		frictionAir:0.3
	}

	block3 = Bodies.rectangle(350,50,50,30,block3_options);
    World.add(world,block3);
}

function draw() {
  background(0);

  fill("brown")
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,30,30);
  rect(block3.position.x,block3.position.y,50,30);

  Engine.update(engine);
  drawSprites();
}



