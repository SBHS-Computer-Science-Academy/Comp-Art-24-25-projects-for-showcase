let paddleX = 200
let gravity = 0.5
let speedX =0
let ballX =300
let ballY =0
let speedY =0
let score = 0
bouncespeed =-18

let ballArray = [];

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.d = 45;
        this.speedX = 0;
        this.speedY = 0;
    }
    
    move() {
        this.x += this.speedX
        this.y += this.speedY;
        this.speedY += gravity;
        
        
      
      if(this.x <this.d/2 && this.speedX < 0){
          this.speedX *=-1 //left
      }
      if(this.x >width - this.d/2 && this.speedX > 0) {
          this.speedX *=-1
      }
      

      
     let hit = collideRectCircle(paddleX, 500, 200, 30,this.x,this.y, this.d);
     if (hit) {
         this.speedY = bouncespeed
         score += 100
         this.speedX =random(- sqrt(score/10), sqrt(score/10))
         if (score %1000 ==0){
              ballArray.push(new Ball(300, -45));
         }
         this.y = 500 - this.d/2;
     }
     
    }
          
     display() {
               fill('orange')
      circle(this.x, this.y, this.d)
     }
    checkIfOffBottom() {
        return this.y > 650;
        
     
    }
}

function setup() {
  createCanvas(600, 600);
  
  createConsole("lines");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
    textSize(40)
  noLoop();
  
  //scratch pong game
  
  ballArray.push(new Ball(300, 0));
 
}

function draw() {
    // background(220)
    
   
    
    rectGradient(0, 0, width, height,"red","grey");
    if (isLooping() == false) {
      text("Use the arrow keys to move the paddle and keep the ball in the air.  Click to begin.", 0, 300, 600)
      
    }
    drawPaddle()
    movePaddle()
    fill(0)
    text(score, 60, 40) 
    reset()
    
    for (let i = 0; i < ballArray.length; i += 1) {
    let ball = ballArray[i];
    ball.move();
    ball.display();
    if(ball.checkIfOffBottom()) {
          ballArray.splice(i, 1);
          i--;
    
      }
    }
    
    if (ballArray.length == 0) {
    noLoop()
    fill("black")
    text("try again", 300, 300)
    paddleX =200
    
    score = 0
    ballArray.push(new Ball(300, -45));
    }

  // Don't delete the following or the sketching code breaks
  
    drawMouseLines("black");
    
    function drawPaddle() {
        fill('skyblue')
        rect(paddleX, 500, 200, 30)
     rectGradient(paddleX, 500, 200, 30, "lightblue", "darkblue", direction = "vertical", numSteps = 100)
    }
  
  function movePaddle() {
      if(keyIsDown(LEFT_ARROW)) {
          paddleX -= 7
      }
      paddleX =constrain(paddleX,0,400)
      if(keyIsDown(RIGHT_ARROW)) {
          paddleX += 7
      }
      paddleX =constrain(paddleX, 0, 400)
  }
   



   function reset() {
       fill('red')
    rect(0, 575, 600, 30)
   }
  
  
}

function mousePressed() {
    loop()
}


 
 function gradientHorizontal(startColor, endColor, startX = 0, startY = 0,  w = width, h = height, steps = 100, alpha = 255) {
        let endY = startY + h;
        let stepSize = (endY - startY) / steps;
    
    
   noStroke();
   for(let y = startY; y < endY; y+= stepSize) {
        let cir =  getColor(startColor, endColor, y, startY, endY);
        fill(cir);
      rect(startX, y, w, stepSize);
   }  
     }
      
      
      function getColor(startColor, endColor, val, startVal, endVal) {
	if (typeof startColor === "string") startColor = color(startColor);
	if (typeof endColor === "string") endColor = color(endColor);

	let scaledValue = map(val, startVal, endVal, 0, 1);
	let thisColor = lerpColor(startColor, endColor, scaledValue);
	return thisColor;
}