var bottom, side1, side2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	paperImg = loadImage("paper.png");
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);

	bottomSprite = createSprite(1200, height-70, 200, 20);
	bottomSprite.shapeColor = "white"

	side1Sprite = createSprite(width-190, height-210, 20, 300);
	side1Sprite.shapeColor = "white"

	side2Sprite = createSprite(width-410, height-210, 20, 300);
	side2Sprite.shapeColor = "white"

	binSprite = createSprite(1200, 480, 50, 50);
	binSprite.addImage(binImage);
	binSprite.scale = 1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 400, 30);

	ground = new Ground(1500/2, 650, 1500, 20);
	
	launcher = new Launcher(paper.body,{x:200, y:200});

	bottom = Bodies.rectangle(1200, 610, 200, 20, {isStatic:true});
	World.add(world, bottom);

	side1 = Bodies.rectangle(width-190, height-110, 20, 100, {isStatic:true});
	World.add(world, side1);

	side2 = Bodies.rectangle(width-410, height-110, 20, 100, {isStatic:true});
	World.add(world, side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  paper.display();

  ground.display();

  launcher.display();

  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    launcher.fly();
}