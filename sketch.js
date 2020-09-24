const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundObj,divisionsobj,plinkoObj,particleObj;
var particles = [];
var plinkos = [];
var divisions = [];   
var divisionHeight = 300;  
var score =0;                       
function preload() {
  
}

function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    groundObj = new ground(600,height,1200,20);
    //divisionsobj= new Divisions(600,380,1200,20);
    //plinkoObj= new Plinko(60,140,10);
    //particleObj= new particle(30,180,10);
    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
    
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
  
      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
  
       for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
}

function draw(){
    background("grey");
    Engine.update(engine);
    groundObj.display();
    //divisionsobj.display();
    //plinkoObj.display();
    //particleObj.display();
    for (var l=0; l < plinkos.length;l++) {
        plinkos[l].display();
    }
    if(frameCount%60===0){
        particles.push(new particle(random(width/2-30, width/2+30), 10,10));
        score++;
      }
    for (var j=0; j<particles.length;j++) {
        particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
    }
    

}

