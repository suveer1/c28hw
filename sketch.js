const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var papper;
var ground;
var dustbin;
var launch1

function setup(){
createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    papper = new Papper(200,200,30);
    ground = new Ground(600,380,width,20);
    dustbin=new Dustbin(1000,370);
    launch1=new Launcher(papper.body,{x:100,y:100});


}

function draw(){
    background("white");
    Engine.update(engine);
    papper.display();
    ground.display();
    dustbin.display();
    launch1.display();
}
/*function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(papper.body,papper.body.position,{x:30,y:-12});
        
    }
}*/
function mouseDragged(){
    Matter.Body.setPosition(papper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launch1.fly();
}