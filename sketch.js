//create a physical world
const World=Matter.World;
//create a phsics engine
const Engine=Matter.Engine;
//create bodies and add it to the world
const Bodies=Matter.Bodies;

var engine, world;
var ball;
var wedge;
var angle=60;
var wall1,wall2,wall3,wall4;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

wall1=new Ground(200,390,400,20);
wall2= new Ground(390,200,20,400);
wall3= new Ground(10,200,20,400);
wall4=new Ground(200,10,400,20);
var ball_options={
    restitution:1,
    friction:0.01
}
  ball=Bodies.circle(100,20,40,ball_options);
  World.add(world,ball);

/*ground_options={
    isStatic:true
}
  ground=Bodies.rectangle(0,380,600,20,ground_options);
  World.add(world,ground);

  var ops={
      isStatic:true
  }
  wedge=Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge)
  

  wedge2=Bodies.rectangle(200,200,100,20,ops)
World.add(world,wedge2)*/
}

function draw() 
{background(0)
    Engine.update(engine);

    wall1.show();
    wall2.show();
    wall3.show();
    wall4.show();


   /* Matter.Body.rotate(wedge,angle)
    push()
    translate(wedge.position.x,wedge.position.y)
    rotate(angle)
    
    rect(0,0,100,20)
    pop()
   angle+=0.05;
*/
  ellipse(ball.position.x,ball.position.y,40)
  //rect(ground.position.x,ground.position.y,600,20);
  //rect(wedge2.position.x,wedge2.position.y,100,20)
  
  
}

