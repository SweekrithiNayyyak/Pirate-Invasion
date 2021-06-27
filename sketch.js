//create a physical world
const World=Matter.World;
//create a phsics engine
const Engine=Matter.Engine;
//create bodies and add it to the world
const Bodies=Matter.Bodies;

var engine, world;
var ball;
var wedge;
var rope;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;


var ball_options={
    restitution:1,
    friction:0.01
}
  ball=Bodies.circle(200,50,50,ball_options);
  World.add(world,ball);

  rope=Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:105,
    stiffness:0.1
  });
  World.add(world,rope);

  ball2=Bodies.circle(200,300,50,ball_options);
  World.add(world,ball2)

  rope2=Matter.Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:150,
    stiffness:0.01
  })

  World.add(world,rope2);
  
 
}

function draw() 
{background(20)
    Engine.update(engine);


   

  
  ellipse(ball.position.x,ball.position.y,50)
  ellipse(ball2.position.x,ball2.position.y,50)
  
  stroke("white");
  line(rope.pointA.x,rope.pointA.y,rope.bodyB.position.x,rope.bodyB.position.y)
  line(rope2.bodyA.position.x,rope2.bodyA.position.y,rope2.bodyB.position.x,rope2.bodyB.position.y)

  
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.09,y:0})
  }
}

