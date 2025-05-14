let ufoX = 100
let ufoY = 300

let ufo;
var score;
score = 0
var hit = false

let cloudColor = 'grey'
let clickCount = 0
let cloud1 = { x: 1700, y: 0, s: -26, hit: [600,100,200,100] };
let cloud2 = { x: 2200, y: 0, s: -24, hit: [600,350,265,140] };
let cloud3 = { x: 2000, y: 0, s: -30, hit: [600,600,280,180] };

var clouds = [cloud1, cloud2, cloud3];


function preload() {
    ufo = loadImage('UFO.png')
}

function setup() {
  createCanvas(900, 750);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  noLoop()
}


function draw() {
  background(220);
  noStroke()
  let color1 = color(0,0, score/3)
  let color2 = color(40,80,120,score/4)
  gradientHorizontal(color1, color2,0,0,900,750,750)
  
 
  fill('white')
  textSize(20)
  if (isLooping() == false) {
      text("Dodge the clouds. Click mouse twice to begin", 450,575)
  
}
  cloud1.x += cloud1.s
  
  if (cloud1.x < -1200) {
      cloud1.x = 1000
  }
  drawCloud1(cloud1.x,cloud1.y)
  
  cloud2.x += cloud2.s
  if (cloud2.x <-900) {
      cloud2.x = 1200
  }
  drawCloud2(cloud2.x,cloud2.y)
  
  cloud3.x += cloud3.s
  if (cloud3.x <-800) {
      cloud3.x = 1500
  }
  drawCloud3(cloud3.x,cloud3.y)
  
  
  if(keyIsDown(DOWN_ARROW)){
      ufoY = ufoY + 10
  }
      
  if(keyIsDown(UP_ARROW)){
      ufoY = ufoY - 10
   }
  if (ufoY<-50) {
      ufoY = height - ufo.height
  }
  
   if (ufoY > height - ufo.height) {
       ufoY = -50
   }
 
 
if (score.toFixed(1)%200==0) {
    
    
    
     cloud1.s -=1
   cloud2.s -=1
   cloud3.s -=1
    
}
     
 
  drawUfo()
 
 fill('white') 

 drawScore()
 fill("white")
 textSize(20)
 textFont('Courier')
  text("USE UP AND DOWN ARROWS TO MOVE UFO", 450, 600);
 for (i=0;i<3;i++) {
     hit = collidePointEllipse(223,ufoY + 39,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(289,ufoY + 55,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(310,ufoY + 79,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(289,ufoY + 108,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(229,ufoY + 123,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(169,ufoY + 113,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(124,ufoY + 83,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     || collidePointEllipse(153,ufoY + 59,clouds[i].x + clouds[i].hit[0],clouds[i].hit[1],clouds[i].hit[2],clouds[i].hit[3])
     
     if (hit) {
         
        
    
     cloudColor = 'black'
     noLoop()
     setTimeout(drawGameover,1000)
     if (i==0) {
         drawCloud1(cloud1.x,cloud1.y)
         
     }
    if (i==1){
       drawCloud2(cloud2.x,cloud2.y) 
    }
    if (i==2){
      drawCloud3(cloud3.x,cloud3.y)  
    }
        
    } 
 }





  // Don't delete the following or the sketching code breaks
  //drawMouseLines("black");
  
  
}
function drawGameover(){
    fill('black')
     rect(0,0,900,800)
     textSize(75)
     fill('white')
     push()
     text("YOU LOSE!", 450,275)
     pop()
     textSize(40)
     text('score:', 450,350)
     text(score.toFixed(0), 450,400)
     text('click mouse twice to restart',450,450)
}

function mousePressed() {
    clickCount++
    if(clickCount>=2) {
        resetGame()
        clickCount = 0
    }
   
        
    
}
function resetGame() {
     ufoX = 100
 ufoY = 300


score = 0
 hit = false
 
 cloudColor = "grey"
 
 cloud1 = { x: 1700, y: 0, s: -26, hit: [600,100,200,100] };
 cloud2 = { x: 2200, y: 0, s: -24, hit: [600,350,265,140] };
 cloud3 = { x: 2000, y: 0, s: -30, hit: [600,600,280,180] };

 clouds = [cloud1, cloud2, cloud3];
 loop()
}
function gradientHorizontal(startColor,endColor,startX = 0,startY = 0,w = width,h = height,steps = 100,alpha = 255) {
    
   
    let endY = startY + h
    let stepSize = (endY-startY) / steps

    
    for (let y = startY; y < endY; y += stepSize) {
        let clr = getColor(startColor, endColor, y, startY, endY)
        fill(clr)
        rect(startX,y, w, stepSize)
    }
}

function drawCloud1(x,y) {
    push()
    translate(x,y)
    translate(0,0)
    stroke('black')
    strokeWeight(0)
    fill(cloudColor)
    ellipse(600,100,200,80)
    ellipse(600,100,160,120)
    pop()
   
}

function drawCloud2(x,y) {
    push()
    translate(x,y)
    translate(0,0)
    fill(cloudColor)
    ellipse(600,350,270,140)
    ellipse(600,350,185,180)
    pop()
}

function drawCloud3(x,y) {
   push() 
   translate(x,y)
   translate(0,0)
   fill(cloudColor)
   ellipse(600,600,300,150)
   ellipse(600,600,250,200)
   pop()
}





function drawUfo() {
    push()
    translate(ufoX,ufoY)
    ufo.resize(250,0)
    image(ufo,0,0)
    pop()
}






function drawScore() {
  textSize(25)    
  text('your_score:',780,50)
  textSize(75)
  score += 1/4;  
  
  text(score.toFixed(0), 780,100)
  
  
 
  
}