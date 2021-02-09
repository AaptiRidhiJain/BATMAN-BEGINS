const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;

var world,engine;
var umbrella;
var maxDrops = 100;
var drops = [];
var thunder;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    umbrella = new Umbrella(300,450,100);

    if(frameCount % 100 === 0){
        for(var i = 0; i< maxDrops; i ++){
          drops.push(new Drop(random(0,400),random(0,400),3,10));
         }
        }
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();

      for(var i = 0; i < maxDrops; i ++){
       drops[i].display();
       drops[i].update();
       }

    var rand = Math.round(random(1,2));
  if(frameCount%40===0){
    thunderCreatedFrame = frameCount;

   thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     case 4 : thunder.addImage(thunder4);
     break;
     default : break;
   }
   thunder.scale = random(0.3,0.6);
  }

  if(thunderCreatedFrame + 10 === frameCount && thunder){
    thunder.destroy();
  }

  // if(this.rain)

    drawSprites();
}   

