const Engine =  Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const constraint = Matter.Constraint
var world,engine;
var ground
var box1,box2,box3,bx4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var ball
var rope


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  ground = new Ground(400,380,800,20)
  ball = new Ball(200,200,50,50)
  rope = new Rope(ball.body,{x:200,y:50})
  box1 = new Box(500,100,40,40)
  box2 = new Box(500,100,40,40)
  box3 = new Box(500,100,40,40)
  box4 = new Box(500,100,40,40)
  box5 = new Box(300,100,40,40)
  box6 = new Box(300,100,40,40)
  box7 = new Box(500,100,40,40)
  box8 = new Box(400,100,40,40)
  box9 = new Box(400,100,40,40)
  box10 = new Box(500,100,40,40)
  box11 = new Box(300,100,40,40)
  box12 = new Box(400,100,40,40)
  box13 = new Box(500,100,40,40)
  box14= new Box(300,100,40,40)
  box15 = new Box(500,100,40,40)
  box16 = new Box(400,100,40,40)
  box17 = new Box(400,100,40,40)
  box18 = new Box(300,100,40,40)
  box19 = new Box(400,100,40,40)
  box20 = new Box(500,100,40,40)
  box21 = new Box(400,100,40,40)
  box22 = new Box(400,100,40,40)
  box23 = new Box(300,100,40,40)
  box24 = new Box(300,100,40,40)

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


function draw() {
  background("yellow");  
  Engine.update(engine)
ground.display()
ball.display()
rope.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()














  drawSprites();
}