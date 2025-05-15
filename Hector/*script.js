let CarX=200, CarY=500
let carSpeed = 5;
let obstacles = []
let roadLeftX = 150
let roadRightX = 500

class Sprite {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 13;
    }
    
    display() {
        fill(this.color);
        push();
        translate(this.x, this.y);
        circle(0, 0, this.w);
        translate(-100, -100);
        drawDetail();
        pop();
        
        function drawDetail() { 

            fill("black"); 
            // noFill();
            beginShape(); 
            vertex(91, 89); 
            vertex(86, 95);
            vertex(85, 103); 
            vertex(88, 108); 
            vertex(87, 103); 
            vertex(87, 97); 
            vertex(91, 89); 
            endShape(); 
            
             beginShape(); 
             
  vertex(113, 101); 
  vertex(110, 106); 
  vertex(107, 115); 
  vertex(112, 109); 
  vertex(114, 102); 
  vertex(113, 103); 
  endShape(); 
  
  beginShape(); 
  vertex(93, 79); 
  vertex(99, 81); 
  vertex(103, 86); 
  vertex(106, 87); 
  vertex(102, 83); 
  vertex(93, 78); 
  endShape(); 
  
    beginShape(); 
  vertex(96, 110); 
  vertex(87, 116); 
  vertex(93, 114); 
  vertex(95, 110); 
  endShape();
  
  beginShape(); 
  vertex(120, 78); 
  vertex(97, 94); 
  vertex(96, 100); 
  vertex(93, 102); 
  vertex(92, 103); 
  vertex(91, 105); 
  vertex(91, 109); 
  vertex(92, 114); 
  vertex(97, 103); 
  vertex(100, 100); 
  vertex(103, 93); 
  vertex(107, 92); 
  vertex(112, 88); 
  vertex(114, 84); 
  vertex(118, 82); 
  vertex(119, 80); 
  vertex(119, 78); 
  endShape(); 
  
   beginShape(); 
  vertex(95, 113); 
  vertex(106, 119); 
  vertex(107, 117); 
  vertex(110, 112); 
  vertex(102, 113); 
  vertex(98, 114); 
  vertex(91, 113); 
  vertex(106, 116); 
  endShape(); 
  
  beginShape(); 
  vertex(104, 120); 
  vertex(105, 128); 
  vertex(106, 124); 
  vertex(107, 120); 
  vertex(107, 118); 
  vertex(104, 118); 
  vertex(101, 118); 
  vertex(104, 124); 
  vertex(102, 118); 
  endShape(); 

        } 
    }
    
    move() {
        this.y += this.speed
        if (this.y > 600) {
            this.y = -this.h;
            this.x = random(roadLeftX, roadRightX - this.w)
        }
    }
    
    checkForCollisions() {
        
        let hit = collideRectCircle(CarX, CarY, Car.width, Car.height, this.x, this.y, this.w)
        if (hit) return true;
        
        return false;
    }
}

function preload() {
    Car = loadImage("Car.png")

}

function setup() {
  createCanvas(600, 600);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  Car.resize(50,0)
  textSize(20)
  obstacles.push(new Sprite(230,115, 70, 70, "grey"));
  noLoop();
}

function draw() {
    background(220);
    drawRoad();
    drawRoad2();
    drawRoad3();
    drawDessert();
    drawDessert2();
    
    moveCar();  
    image(Car,CarX,CarY)
    if (isLooping() == false) {
        fill("white")
        rect(150, 30, 340, 60);
        fill("black")
        text("Press right and left arrows to dodge.\nClick to start", 325, 60)
    }
    
    for(let obstacle of obstacles) {
        obstacle.move();
        obstacle.display();
        if (obstacle.checkForCollisions()) {
            gameOver();
        }
    }
    drawMouseLines("black");
  
}

function gameOver() {
    noLoop();
}

function drawRoad() { 
  fill("black"); 
  beginShape(); 
  vertex(153, 0); 
  vertex(160, 599); 
  vertex(490, 600); 
  vertex(487, 0); 
  vertex(153, 0); 
  endShape(); 
} 

function drawRoad2() { 
  fill("yellow"); 
  beginShape(); 
  vertex(295, 0); 
  vertex(300, 600); 
  vertex(353, 600); 
  vertex(350, 0); 
  vertex(295, 0); 
  endShape(); 
} 

function drawRoad3() { 
  fill("black"); 
  beginShape(); 
  vertex(313, 1); 
  vertex(316, 600); 
  vertex(340, 600); 
  vertex(333, 0); 
  vertex(313, 0); 
  endShape(); 
}

function drawDessert() { 
  fill("orange"); 
  beginShape(); 
  vertex(145, 0); 
  vertex(152, 600); 
  vertex(0, 600); 
  vertex(0, 0); 
  vertex(145, 0); 
  endShape(); 
} 

function drawDessert2() { 
  fill("orange"); 
  beginShape(); 
  vertex(494, 0); 
  vertex(500, 600); 
  vertex(599, 600); 
  vertex(599, 0); 
  vertex(494, 0); 
  endShape(); 
}



function moveCar() {
    if(keyIsDown(RIGHT_ARROW)) {
        CarX+=carSpeed
    }
    if(keyIsDown(LEFT_ARROW)) {
        CarX-=carSpeed
    }
    CarX=constrain(CarX,roadLeftX,roadRightX-Car.width)
}

function mouseClicked() {
    loop();
}