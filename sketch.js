const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var penimg, polygon;
var backgroundImg;
var score = 0;

function preload()
{
  getTime();
  backgroundImg = loadImage("sprites/bg.png");
  penimg = loadImage("pentagon.jpg");
}

function setup() {
  createCanvas(1000,500);

  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 490, 1000, 15);

  stand1 = new Ground(450,311,170,10);
  stand2 = new Ground(740,221,150,10);

  box1 = new Box(450, 200, 20, 30);
  box2 = new Box(450, 230, 20, 30);
  box3 = new Box(430, 230, 20, 30);
  box4 = new Box(470, 230, 20, 30);
  box5 = new Box(450, 260, 20, 30);
  box6 = new Box(430, 260, 20, 30);
  box7 = new Box(410, 260, 20, 30);
  box8 = new Box(470, 260, 20, 30);
  box9 = new Box(490, 260, 20, 30);
  box10 = new Box(450, 290, 20, 30);
  box11 = new Box(430, 290, 20, 30);
  box12 = new Box(410, 290, 20, 30);
  box13 = new Box(390, 290, 20, 30);
  box14 = new Box(470, 290, 20, 30);
  box15= new Box(490, 290, 20, 30);
  box16 = new Box(510, 290, 20, 30);
  box17 = new Box(700, 200, 20, 30);
  box18 = new Box(720, 200, 20, 30);
  box19 = new Box(740, 200, 20, 30);
  box20 = new Box(760, 200, 20, 30);
  box21 = new Box(780, 200, 20, 30);
  box22 = new Box(720, 170, 20, 30);
  box23 = new Box(740, 170, 20, 30);
  box24 = new Box(760, 170, 20, 30);
  box25 = new Box(740, 140, 20, 30);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  polygon.Visibility = 255;

  slingshot = new SlingShot(this.polygon,{x: 100, y: 200});
}

function draw() 
{
  background(backgroundImg); 
  
  Engine.update(engine);

  textSize(30);
  fill("white");
  text("Score: " + score, width - 300, 50);

  fill("white");
  textSize(15);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 150, 50);
  text("To try again, Press the SAPCEBAR key.", 250, 70);

  fill("yellow");
  box1.display();

  fill("orange");
  box2.display();
  box3.display();
  box4.display();

  fill("red");
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("pink");
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  fill("green");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("blue");
  box22.display();
  box23.display();
  box24.display();

  fill("purple");
  box25.display();

  ground.display();

  stand1.display();
  stand2.display();

  slingshot.display();

  imageMode(CENTER);
  image(penimg, polygon.position.x, polygon.position.y, 50, 50);

  drawSprites();
} 

function keyPressed()
{ if(keyCode === 32) 
    { 
      slingshot.attach(polygon);
    }
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(10,13);

    if(hour >= 06 && hour <= 18)
    {
        bg = "sprites/bg.png";
        
    }

    else 
    {
        bg = "sprites/bg2.jpg";
  
    }
    backgroundImg = loadImage(bg);
}