const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine,ground,ball;


function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world; 

  var options={
   isStatic:true

  }

  ground=Bodies.rectangle(400,400,800,50,options);
  World.add(myworld,ground)
  var ballop={
    restitution:1

  }
  ball=Bodies.circle(200,100,10,ballop)
  World.add(myworld,ball)
  console.log(ground.position.x)


}

function draw() {
  background(0);
  Engine.update(myengine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
}