//variables
let fish
let jellyfish
let jellyfish2
let plant
let plant2
let plant3

let wavesX=0;
let wavesY=600;

let x=0
let y=0


let timer = 0
let highScore = 999

class Candy {
    constructor(x, y, clr) {
        this.x=random(width)
        this.y = y;
        this.clr = clr;
        this.d = 25;
        this.speed = random(2, 6);
    }
    
    show() {
        noStroke();
        fill(this.clr);
        circle(this.x, this.y, this.d);
    }
    
    fall() {
        this.y += this.speed;
        if (this.y > 625) {
            this.y = -25;
            this.x=random(width)
        }
    }
    checkForCatch() {
        let  hit = collideLineCircle(x+376,y+266,x+210,y+264 , this.x, this.y, this.d);
        return hit;
    }
}

let candies = [];

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  createConsole("lines");
  
  angleMode(DEGREES);
  fish.resize(80,50)
  jellyfish.resize(70,70)
  jellyfish2.resize(60,60)
  plant.resize(280,280)
  plant2.resize(200,200)
  plant3.resize(250,250)
  makeCandy();
  noLoop();
  
}
function preload(){
    fish = loadImage('fish.png');
    jellyfish = loadImage('jellyfish.png')
    jellyfish2 = loadImage('jellyfish2.png')
    plant = loadImage('plant.png')
    plant2 = loadImage('plant2.png')
    plant3 = loadImage('plant3.png')
}




function draw() {
 background("Azure"); 
 rectGradient(0, 0, width, 350, "blue", "lightBlue"); 
 noStroke()
 drawCloud(494, 97)
 drawCloud(301, 68, 0.65)
 drawCloud(80,61)
 drawCloud(157,137, 0.4)
 drawCloud(572,19, 0.3)
 if (isLooping()==false){
      text("Click to start, use arrow keys to move boat and catch all candy ", 309,173)
 }
 
drawWaves(wavesX+600,wavesY);
drawWaves(wavesX,wavesY);

 drawBoat();
 drawFlag();
 drawFlagpole();
 for (let i = 0; i < candies.length; i += 1) {
     let candy = candies[i];
     candy.fall();
     candy.show();
     if (candy.checkForCatch()) {
         candies.splice(i, 1);
         i--;
     }
 }
 moveWaves()
 runTimer()
 drawSun();
 
  // Don't delete the following or the sketching code breaks
  drawMouseLines("black");
}


function mouseClicked() {
    loop();
}
 function drawWaves(x,y) {
     push()
     translate(x,y-600)
     noStroke();
    fill("skyBlue"); 
      beginShape(); 
      curveVertex(600,600);
      curveVertex(600,600);
   curveVertex(0,600);  
   curveVertex(0, 300); 
   curveVertex(33, 260); 
   curveVertex(90, 290);
   curveVertex(130, 320);
   curveVertex(195, 290); 
   curveVertex(246, 270); 
   curveVertex(320, 330); 
   curveVertex(365, 290); 
   curveVertex(415, 275); 
   curveVertex(500, 320); 
   curveVertex(565, 300);
   curveVertex(650,300);
   curveVertex(650,600);
   curveVertex(650,600); // control point 
   endShape(); 
   
   //add details here
   image(fish,309,373 + 30 * sin(frameCount))
   image(jellyfish,472,435 + 30 * sin(frameCount))
   image(jellyfish2,62,361 + 30 * sin(frameCount) )
   image(plant,390,410)
   image(plant2, 230,460)
   image(plant3,5,445)
   pop()

}
function drawBoat(){
    fill("saddleBrown"); 
  beginShape(); 
  vertex(x+210,y+264); 
  vertex(x+238,y+328); 
  vertex(x+345,y+330); 
  vertex(x+376,y+266); 
  endShape(); 
  
   // increase x by 5 if right arrow is pressed
    if(keyIsDown(RIGHT_ARROW)){
        x+=3
        
    }
    
    // decrease x by 5 if left arrow is pressed
    if(keyIsDown(LEFT_ARROW)){
       x-=3
       
    }
} 
function drawFlag() { 
  fill("pink"); 
beginShape(); 
  vertex(x+270,y+186); 
  vertex(x+274,y+223); 
  vertex(x+321,y+203); 
  vertex(x+265,y+185); 
  endShape(); 
  
  // increase x by 5 if right arrow is pressed
    if(keyIsDown(RIGHT_ARROW)){
        x+=3
        
    }
    
    // decrease x by 5 if left arrow is pressed
    if(keyIsDown(LEFT_ARROW)){
       x-=3
       
    }
} 
function drawFlagpole() { 
  fill("brown"); 
    beginShape(); 
   vertex(x+265,y+265); 
  vertex(x+261,y+186); 
  vertex(x+273,y+186); 
  vertex(x+276,y+266); 
  vertex(x+264, y+265); 
  endShape(); 
  
  
    // increase x by 5 if right arrow is pressed
    if(keyIsDown(RIGHT_ARROW)){
        x+=3
        
    }
    
    // decrease x by 5 if left arrow is pressed
    if(keyIsDown(LEFT_ARROW)){
       x-=3
       
    }
} 
function drawCloud (x, y, s = 0.5){
    push()
    translate(x, y);
    scale(s);
    translate(-77, -176)
    fill("white")
    noStroke();
    circle(0, 200, 100);
    circle(75,200, 100);
    circle(150,200, 100);
    circle(40, 150, 100);
    circle(100, 150, 100);
    pop()
}

function moveWaves() {
     //update the variable
 wavesX-=1
 
 //reset the variable with an if statement
 if (wavesX<-600){
  wavesX=0;
 }
 
}

function makeCandy() {
    timer=0
    candies.push(new Candy(161, 90, "lightBlue"))
  candies.push(new Candy(86, -100, "deepPink"))
  candies.push(new Candy(242,3, "blue"))
  candies.push(new Candy(326,190,"yellowGreen"))
  candies.push(new Candy(392,-150,"red"))
  candies.push(new Candy(467,-293,"magenta"))
  candies.push(new Candy(18,25,"gold"))
  candies.push(new Candy(528,3,"orange"))
  candies.push(new Candy(580,-250,"lime"))
  candies.push(new Candy(241,489,"pink"))
}

function runTimer() {
    
    if (candies.length == 0) {
        fill("black")
        text("You win!\nClick to restart",300, 300)
        if (timer<highScore){
            highScore=int(timer)
        }
        
        if (mouseIsPressed) {
            makeCandy();
        }
    }
    else {
    timer += 1/40;
    }
    fill("black")
    text("Time: " + int(timer), 50, 50)
    text("highScore: "+highScore,60,70)
   
    
    
}
function drawSun(){
    fill("yellow")
    beginShape();
    vertex(539, 46,90)
    endShape();
}