
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var groundobj ;
var dustbinobj;


function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER)

//var Render 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj = new Ground(400,450,800,50,"yellow");
	World.add(world,groundobj)
	dustbinwall1 = new Dustbin(530,445,120,15);
	World.add(world,dustbinwall1);
	dustbinwall2 = new Dustbin(485,395,15,100);
	World.add(world,dustbinwall2);
	dustbinwall3 = new Dustbin(575,395,15,100);
	World.add(world,dustbinwall3);
    // console.log(dustbinobj1)
	//dustbinobj =  new Dustbin();
	paperobj = new Paper(200,435,30);
	console.log(paperobj)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  groundobj.display();
 // fill("white")
  dustbinwall1.display();
  //dustbinwall2.display()
  //dustbinwall3.display(;
	paperobj.display();
  
  drawSprites();
 //keyPressed()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:100,y:-103})
	}
}