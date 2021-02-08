const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,polygonImg,slingshot;

function preload(){
polygonImg=loadImage("polygon.png");
}


function setup(){
    var canvas=createCanvas(1000,600);
    
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(500,590,1000,20);
    ground2=new Ground(460,395,300,10);
    ground3=new Ground(810,195,230,10);
    block1=new Block(550,370,30,40);
    block2=new Block(520,370,30,40);
    block3=new Block(490,370,30,40);
    block4=new Block(460,370,30,40);
    block5=new Block(430,370,30,40);
    block6=new Block(400,370,30,40);
    block7=new Block(370,370,30,40);
    block8=new Block(520,330,30,40);
    block9=new Block(490,330,30,40);
    block10=new Block(460,330,30,40);
    block11=new Block(430,330,30,40);
    block12=new Block(400,330,30,40);
    block13=new Block(490,290,30,40);
    block14=new Block(460,290,30,40);
    block15=new Block(430,290,30,40);
    block16=new Block(460,250,30,40);
    block17=new Block(870,170,30,40);
    block18=new Block(840,170,30,40);
    block19=new Block(810,170,30,40);
    block20=new Block(780,170,30,40);
    block21=new Block(750,170,30,40);
    block22=new Block(840,130,30,40);
    block23=new Block(810,130,30,40);
    block24=new Block(780,130,30,40);
    block25=new Block(810,90,30,40);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot=new Slingshot(this.polygon,{x:100,y:200})

    Engine.run(engine);
}

function draw(){
background(rgb(117,71,82));

textSize(15);
fill("white");
text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",50,100);

ground1.display();
ground2.display();
ground3.display();

fill ("skyblue")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("rgb(59,239,218)");
block13.display();
block14.display();
block15.display();
fill("grey");
block16.display();
fill("skyblue");
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill("rgb(59,239,218)");
block22.display();
block23.display();
block24.display();
fill("pink");
block25.display();

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);
slingshot.display();

Engine.update(engine);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
