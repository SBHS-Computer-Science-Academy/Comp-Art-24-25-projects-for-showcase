let track;
let mario;
let luigi;
let marioKart;
let luigiKart;
let walls = [];
let checkPoints = [];


class Kart {
    constructor(img, x, y, forwardKey, leftKey, backKey, rightKey) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.forwardKey = forwardKey;
        this.backKey = backKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.angle = 90
        this.maxTurnSpeed = 4;
        this.driveSpeed = 4;
        this.d = 30;
        this.checkPointIndex = 0 
        this.lap = 0
    }
    
    addOtherKart(otherKart) {
        this.otherKart = otherKart;
    }
    
    show() {
        push();
        imageMode(CENTER);
        translate(this.x, this.y)
        rotate(this.angle);
        image(this.img, 0, 0)
        noFill()
        // rect(-this.img.width * this.widthScale / 2, -this.img.height * this.heightScale / 2, 
        //     this.img.width * this.widthScale, this.img.height * this.heightScale)
        
        imageMode(CORNER);
        pop();
      
    }
    
    move() {
        this.turnSpeed = this.maxTurnSpeed;
        if (keyIsDown(this.forwardKey)) {
           this.moveForward(this.angle);
        }
        if (keyIsDown(this.leftKey)) {
            this.angle -= this.turnSpeed;
        }
        if (keyIsDown(this.backKey)) {
            this.moveForward(this.angle + 180);
        }
        if (keyIsDown(this.rightKey)) {
            this.angle += this.turnSpeed;
        }
    }
    
    moveForward(angle) {

        for (let i = 0; i < this.driveSpeed; i++) {
            let nextX = this.x - cos(angle);
            let nextY = this.y - sin(angle);

            if (this.checkForCollisions(nextX, this.y) == false) this.x = nextX;
            if (this.checkForCollisions(this.x, nextY) == false) this.y = nextY;
        }
        
        this.checkForCheckPoints()
    }
    
    checkForCheckPoints(){
        let checkPoint = checkPoints[this.checkPointIndex]
        if (checkPoint.checkForCollision(this.x, this.y, this.d)) {
            if (this.checkPointIndex == 0) {
                this.lap += 1 
            }
            this.checkPointIndex +=1
        if(this.checkPointIndex==checkPoints.length){
            this.checkPointIndex = 0 
        }
        }
    }
    
    checkForCollisions(x, y) {
        for (let wall of walls) {
            if (wall.checkForCollision(x, y, this.d)) {
                return true;
            }
        }
        return collideCircleCircle(x, y, this.d, this.otherKart.x, this.otherKart.y, this.otherKart.d);
    }
}

class Wall{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    checkForCollision(x, y, d){
        let hit = collideRectCircle(this.x, this.y, this.w, this.h, x, y, d)
        return hit;
    }
    
    display() {
        noFill();
        rect(this.x, this.y, this.w, this.h)
    }
    
}




function preload() {
    track = loadImage ("track.jpeg")
    mario = loadImage ("mario.png")
    luigi = loadImage ("luigi.png")    
}

function setup() {
     createCanvas(800, 700);

    createConsole("rect");
    textAlign(CENTER, CENTER);
    
    disableArrowKeyScrolling()
    
    angleMode(DEGREES);

    track.resize(0,700)
    mario.resize(0,35)
    luigi.resize(0,30)

       // define key codes for WASD movement
        let w = 87, a = 65, s = 83, d = 68;
    marioKart = new Kart(mario, 45, 390, w, a, s, d)
    luigiKart = new Kart(luigi, 75, 390,UP_ARROW,LEFT_ARROW,DOWN_ARROW,RIGHT_ARROW)
    marioKart.addOtherKart(luigiKart);
    luigiKart.addOtherKart(marioKart);
    
    walls.push(new Wall(117, 134, 115, 470))
    walls.push(new Wall(233, 247, 340, 10))
    walls.push(new Wall(343, 363, 355, 13)) 
    walls.push(new Wall(344, 363, 355, 13))  
    walls.push(new Wall(349, 32, 124, 110))  
    walls.push(new Wall(270, 481, 318, 10))  
    walls.push(new Wall(0, 636, 11, 61))  
    walls.push(new Wall(345, 598, 11, 101))  
    walls.push(new Wall(2, 24, 9, 610))  
    walls.push(new Wall(3, 23, 693, 10))  
    walls.push(new Wall(578, 131, 10, 127))  
    walls.push(new Wall(2, 694, 700, 2))  
    walls.push(new Wall(693, 20, 6, 700))  
    walls.push(new Wall(461, 485, 130, 125))  
    
    //finish line
    checkPoints.push(new Wall(4, 372, 113, -5))  
    checkPoints.push(new Wall(229, 362, 155, 8))  

}



function draw() {
 image (track,0,20)
  marioKart.move();
  marioKart.show();
  luigiKart.move();
  luigiKart.show();
  noFill();
  strokeWeight(4)




fill("black")
text("Mario Lap #: " + marioKart.lap, 136, 183, 71);

text("luigi Lap #: " + luigiKart.lap, 136, 230, 71, );
}
  
function disableArrowKeyScrolling() {
    // disable arrow key scrolling
    window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);
}