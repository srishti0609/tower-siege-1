const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(350,300,300,20);
    ground2=new Ground(800,200,200,20);

    box1=new Box(260,260,30,40);
    box3=new Box(292,260,30,40);
    box4=new Box(324,260,30,40);
    box5=new Box(356,260,30,40);
    box6=new Box(388,260,30,40);
    box7=new Box(420,260,30,40);
    

    box8=new Box(292,250,30,40);
    box9=new Box(324,250,30,40);
    box10=new Box(356,250,30,40);
    box11=new Box(388,250,30,40);

    box12=new Box(324,240,30,40);
    box13=new Box(356,240,30,40);

    b1=new B(752,170,30,40);
    b2=new B(782,170,30,40);
    b3=new B(796,170,30,40);
    b4=new B(818,170,30,40);
    b5=new B(830,170,30,40);
   
    b6=new B(782,150,30,40);
    b7=new B(796,150,30,40);
    b8=new B(818,150,30,40);

    b9=new B(796,130,30,40);
    polygon=new Polygon(100,150,25);
    slingshot=new Slingshot(polygon.body,{x:100,y:140});

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  ground1.display();
  ground2.display();
  box1.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
 
  polygon.display();
  slingshot.display();

  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  
  
  function mouseReleased(){
  slingshot.fly();
  }
  