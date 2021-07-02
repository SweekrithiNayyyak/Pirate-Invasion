const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

var tower;


function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 // towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150,350,160,310);
  ground=new Ground(600,500,1200,50)
 
  
}

function draw() {
  background(backgroundImg);
  //image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
 // ground.display();
  

  tower.display();
  
 
}







