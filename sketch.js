const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var tank;
//const {Engine} = Matter 
//const Engine = Matter.Engine
var engine, world;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    tank = new Tanker(150,200);
    ground = new Ground(380,200);
    canon = new CanonBall(200,50)
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background('#ff033e');
    tank.display();
    ground.display();
    canon.display(); 
    }

    function mouseDragged(){
       if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
    }
function keyReleased() {
    // Call the shoot method for the cannon.
    canon.fly();
}
