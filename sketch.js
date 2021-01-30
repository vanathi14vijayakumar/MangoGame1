
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango,mango2,mango3,mango4,mango5;
var stone,tree;
var boy,string,ground;
var boyImage,treeImage
function preload()
{
  boyImage = loadImage("Images/boy.png")
  treeImage = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango = new Mango(800,200,20)
    mango2 = new Mango(860,189,20)
    mango3 = new Mango(740,290,20)
    mango4 = new Mango(710,250,20)
    mango5 = new Mango(770,150,20)
    stone = new Stone(125,410,20);
    ground = new Ground(500,590,1000,10);
    string = new Slingshot(stone.body,{x:125,y:410});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango5);
  detectCollision(stone,mango4);
  
  image(boyImage,91,320,200,360);
  image(treeImage,600,70,380,530);
  stone.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  string.display();
  ground.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  string.fly();
}

function detectCollision(lstone,lmango){
   mangoPosition = lmango.body.position
   stonePosition = lstone.body.position

  var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
  if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
  }
}