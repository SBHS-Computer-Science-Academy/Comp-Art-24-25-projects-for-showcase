let ballX = 100
let ballY = 65
let ballSpeed = 5

let appleX = 100
let appleY = 100
let appleR = 25
let appleXMoves = []
let appleYMoves = []
let appleMoveIndex = 0
let appleSpeed = 5

let level = 1;

let platforms = [];
let player;

let enableMove = false;


class Sprite {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = ballSpeed;
    }
    
   ball(){
   push()
   translate(this.x, this.y)
   rotate(this.x + this.y - 165)
   fill(91, 235, 52)
   if (this.checkForCollisions(this.x, this.y)) fill("red")
   circle(0,0,this.w)
   fill("black")
   circle(0 + 10, 0 - 5, 3)
   circle(0 - 10, 0 - 5, 3)
   fill("white")
   arc(0, 0, 10, 15, 0, 180)
   stroke("black")
   line(0, 0 + 7.5, 0, 0)
   

    pop()
}

    display() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
    
    move() {
        if (enableMove == false) {
            return;
        }
        
        // define key codes for WASD movement
        let w = 87, a = 65, s = 83, d = 68;
        
        // use a for loop to keep moving sprite until it collides with a platform
        for (let i = 0; i < this.speed; i++) {
            let rightMove = 0;
            
            if (keyIsDown(a)) rightMove -= 1;
            if (keyIsDown(d)) rightMove += 1;
            
            if (this.checkForCollisions(this.x + rightMove, this.y )) {
                this.x = this.x - rightMove;
                break;
            } else {
                this.x = this.x + rightMove;
            }
        }
        
        for (let i = 0; i < this.speed; i++) {
            let downMove = 0;
            
            if (keyIsDown(w)) downMove -= 1;
            if (keyIsDown(s)) downMove += 1;
            
            if (this.checkForCollisions(this.x, this.y + downMove)) {
                this.y = this.y - downMove;
                break;
            } else {
                this.y = this.y + downMove;
            }
           
        }
        // use constrain to keep the sprite in the frame
        this.x = constrain(this.x, 0, width - this.w);
        this.y = constrain(this.y, 65, height - this.h);
    }
    
    moveTo(x,y) {
        this.x = x;
        this.y = y;
    }
    
    checkForCollisions(x, y) {
        for (let platform of platforms) {
            let hit = collideRectCircle(
                platform.x, platform.y, platform.w, platform.h, this.x, this.y, this.w)
            if (hit) return true;
        }
        return false;
    }
}
// function gameFinished() {
// if 
// }
function setup() {
  createCanvas(600, 600);
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
   player = new Sprite(100, 65, 25, 25, "blue");
  makeLevel();
}

function draw() {
  background("magenta");
  if (isLooping() == false) {
      textSize(30)
      text("MAZE", 300,100)
      text("START", 300,300)
      text("USE WASD", 300,200)
      fill(85, 230, 53)
      circle(500,100, 25)
  }
 stroke(2)
 apple();
 moveApple();
 if (isLooping()) {
 fill("magenta")
 rect(81,55,39,20)
 stroke(2) 
  player.move();
 player.ball();
  for (let platform of platforms) {
      platform.display();
  }
     gameWon();
 }
}


function apple() {
    fill(91, 235, 52)
 circle(appleX, appleY, appleR)
}

function moveApple(){
  let nextX = appleXMoves[appleMoveIndex];
  let nextY = appleYMoves[appleMoveIndex];
  
  if (appleX == nextX && appleY == nextY) {
      appleMoveIndex += 1;
      if (appleMoveIndex >= appleXMoves.length) gameOver();;
      return;
  }
  
  if (nextX > appleX) appleX += appleSpeed;
  else if (nextX < appleX) appleX -= appleSpeed;
  
  if (nextY > appleY) appleY += appleSpeed;
  else if (nextY < appleY) appleY -= appleSpeed;
  
  
}

function makeLevel() {
    platforms = [];
    
    player.moveTo(100, 65)
    
    appleX = 100
    appleY = 100 
    appleMoveIndex = 0
    noLoop();
    if (level == 1) {
        
       
        platforms.push(new Sprite(60,55,20,520, "blue"));
        platforms.push(new Sprite(120,55,20,425, "blue"));
        platforms.push(new Sprite(80,555,450,20, "blue"));
        platforms.push(new Sprite(180,150,20,425, "blue"));
        platforms.push(new Sprite(140,55,400,20, "blue"));
        platforms.push(new Sprite(240,55,20,425, "blue"));
        platforms.push(new Sprite(300,150,20,425, "blue"));
        platforms.push(new Sprite(360,55,20,425, "blue"));
        platforms.push(new Sprite(420,150,20,425, "blue"));
        platforms.push(new Sprite(480,55,20,425, "blue"));
        
        appleXMoves = [100, 100, 160, 160, 220, 220, 280, 280, 340, 340, 400, 400, 460, 460, 525]
        appleYMoves = [100, 530, 530, 100, 100, 530, 530, 100, 100, 530, 530, 100, 100, 530, 530]
     
        
    }
    
    if (level == 2){
    
     
        platforms.push(new Sprite(60,55,20,465, "blue"));
        platforms.push(new Sprite(80,160,425,20, "blue"));
        platforms.push(new Sprite(565,90,20,430, "blue"));
        platforms.push(new Sprite(120,55,20,55, "blue"));
        platforms.push(new Sprite(140,90,425,20, "blue"));
        platforms.push(new Sprite(140,230,425,20, "blue"));
        platforms.push(new Sprite(80,295,425,20, "blue"));
        platforms.push(new Sprite(140,360,425,20, "blue"));
        platforms.push(new Sprite(80,420,425,20, "blue"));
        platforms.push(new Sprite(140,500,425,20, "blue"));
       
        
        appleXMoves = [100, 100, 545, 545, 115, 115, 535, 535, 100, 100, 540, 540, 100, 110]
        appleYMoves = [100, 135, 135, 210, 210, 270, 270, 340, 340, 400, 400, 460, 460, 515]
    }
    if (level == 3){
        fill(128,128,128)
        square(0,0,600)
        fill("green")
        textSize(30)
        text("CONGRATS YOU HAVE FINISHED MAZE",300,300)
    }
}

function enablePlayerMove() {
    enableMove = true;
}
    

function gameWon(){
    d = dist(player.x, player.y, appleX, appleY)
    if(d < player.w ){
        fill(255,255,255)
        square(0, 0, 600)
        fill("Green")
        textSize(50)
        text("WINNER",300, 300)
        noLoop();
        level += 1
        if (level > 3) level = 1;
        
    }
}

function gameOver(){

    fill(0,0,0)
    square(0, 0, 600)
    fill("red")
    textSize(50)
    text("GAME OVER",300, 300)
    noLoop();
    
}

function mouseClicked() {
        if (isLooping() == false) {
            makeLevel()
            enableMove = false;
            setTimeout(enablePlayerMove, 500)
        }
        loop()
}