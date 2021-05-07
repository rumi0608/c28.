var paper1, dustbinRight, dustbinLeft, dustbinMiddle;
var ground , sling1
var Dustbin

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

   paper1 = new paper(150, 500, 10);   

 //dustbin  
   dustbinRight = new dustbin(850, 600, 10, 150);
   dustbinMiddle = new dustbin(850, 600, 200, 10);
   dustbinLeft = new dustbin(850, 600, 10, 150);

 //ground
   ground = new Ground(600, height-35, 1200, 15); 

   sling1= new launcher(paper1.body,{x:400,y:350});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

//displaying
  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  paper1.display();
  
  ground.display();

  sling1.display();

  drawSprites();

}

function mouseReleased(){
  launcher.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      bird.trajectory=[];
      Matter.Body.setPosition(paper1.body,{x:200,y:50});
     launcher.attach(paper.body);
  }
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  //}
}