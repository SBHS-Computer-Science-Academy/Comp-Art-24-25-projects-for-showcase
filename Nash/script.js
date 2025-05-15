let ante = 5
let score = 100;

let gravity = 0.8;
let ballist =[]
let bumpers = []
let startX =350
let startY = 50
let rows = 16
let space = 40
let absMaxSpeed = 4; // smaller = player advantage
let minSpeed = 0.96; // bigger = player advantage
let bounceFactor = 0.3512; // bigger = player advantage
let autoSpawn = true;

// let antes = [];
// let anteNumbers [1, 10, 50, 100, 225, 500, 750, 100];


let boxes = [];
let values = [1000, 130, 26, 9, 4, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 4, 9, 26, 130, 1000];
let boxColors = []

class Ball{
    constructor(x, y, d, hue = random(30, 330)) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.hue = hue;
        this.speedY = 0;
        this.speedX = 0;
    }
    
    display() {
        colorMode(HSB);
        fill(this.hue, 100, 100);
        colorMode(RGB);
        circle(this.x, this.y, this.d);
    }
    
    move() {
       
        let hitX = false;
        // use a for loop to keep moving sprite until it collides with a platform
        let nextX = this.x += this.speedX;
        
        
        for (let y = 0; y < this.speedY; y++) {
            let nextY = this.y + y;
            hitX = this.checkForCollisions(nextX,nextY);
           if(hitX){
                this.speedY *= -bounceFactor;
                let maxSpeed = max(abs(map(this.x, 0, width, -absMaxSpeed, absMaxSpeed)), minSpeed)
                if (this.x < hitX) {
                    if (this.x < width/2) maxSpeed = minSpeed;
                    this.speedX = random(-1 * maxSpeed, 0);
                }
                else if (this.x > hitX) {
                    if (this.x > width/2) maxSpeed = minSpeed;
                    this.speedX = random(0, maxSpeed);
                }
                else this.speedX = random(-minSpeed, minSpeed);
                
                
                this.y = nextY  - 1;
                break;
           }
        }
        if (!hitX) {
            this.speedY += gravity
            this.x += this.speedX
            this.y += this.speedY
        }
    }
    
    checkForRemoval() {
       return this.y > height;
    }
    
    checkForCollisions(x, y) {
        for (let bumper of bumpers) {
            let hit = collideCircleCircle(x, y, this.d,
                bumper.x, bumper.y, bumper.d)
            if (hit) return bumper.x;
        }
        return false;
    }
    
    checkForBoxHit() {
        for (let box of boxes) {
            let hit = collideRectCircle(box.x, box.y, box.w, box.h, this.x, this.y, this.d)
            if (hit) return box.value;
        }
        return false;
    }
}

class Sprite {
    constructor(x, y, w, h, color = random(0,300), value) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 5;
        this.value = value
    }
    
    display() {
        colorMode(HSB)
        let hue = map(this.x + frameCount * 10, 0, width, 0, 360) % 360;
        fill(hue, 100, 100);
        rect(this.x, this.y, this.w, this.h);
        fill("black")
        text(this.value + "x", this.x + this.w/2, this.y + this.h/2);
    }
    
   
    
    checkForCollisions(x, y) {
        for (let platform of platforms) {
            let hit = collideRectRect(x, y, this.w, this.h,
                platform.x, platform.y, platform.w, platform.h)
            if (hit) return true;
        }
        return false;
    }
}


function preload(){
    gradient = loadImage("background.png")
}

function setup() {
  createCanvas(700, 800);
  startX = width/2
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  makePlinkoPyramid()
  makeBoxes();
  gradient.resize(width,height)
}

function draw() {
  //image(gradient,0,0)
  background("black")
  for (let bumper of bumpers) {
      bumper.display()
  } 
  for(let i = 0; i < ballist.length; i++){
      let ball = ballist[i];
      ball.display()
      ball.move()
      if (ball.checkForRemoval()) {
          ballist.splice(i, 1);
          i--;
      }
      let boxHit = ball.checkForBoxHit();
      if (boxHit) {
          score += boxHit *ante;
          ballist.splice(i, 1);
          i--;
      }
  }
  
  for (let box of boxes) {
      box.display();
  }
  fill("white")
  textSize(25)
  text("Cash: $" + score.toFixed(2), 100, 760)
  //text("Total: $" + (score + ante * ballist.length).toFixed(2), 100, 760);
    textSize(12)
  //if(autoSpawn) spawnBall();
}

function makeBoxes() {
    for(let i = 0; i < values.length; i += 1) {
        let gap = 2
      let boxX = map(i, 0, values.length, gap, width - gap);
      let boxW = (width - gap * values.length) / values.length;
    boxes.push(new Sprite(boxX, startY + rows * space, boxW, 30, "white", values[i]));
  }
}

function makePlinkoPyramid(){
   
    for(i = 0; i < rows; i++){
        let col = i + 3
       for(j = 0; j < col; j++){
           bumpers.push(new Ball(startX + space/2 - col/2 * space + j * space, startY + i * space, 10, 0));
          
       } 
    }
}

function keyPressed(){
     spawnBall();
}

function spawnBall() {
    if (score >= ante) {
        ballist.push(new Ball(startX,10,10))
        score -=ante
    }
}