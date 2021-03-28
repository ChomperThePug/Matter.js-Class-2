const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var block1, block2;

var ground1;


function setup() {
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;
    block1 = new box(200,200,100,30);
    block2 = new box(200,50,100,30);
    ground1 = new Ground(width/2, height - 20, width, 100)
}

function draw() {
    background(0);
    Engine.update(engine);
    ground1.display();
    block1.display();
    block2.display();
}