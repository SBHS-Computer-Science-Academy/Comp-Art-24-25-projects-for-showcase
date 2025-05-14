let y2 = 0
let x2 = 0

let FishX = 10
let FishY = 10

let Fish2X = 10
let Fish2Y = 10

// let confettiX1 = []
// let confettiY1 = []
// let confettiD = []
// let numberConfetti = []
// let confettiSpeed = []

class Block {
    constructor(x1, y1, w, h, level, isFalling = false) {
        this.x = x1;
        this.y = y1;
        this.w = w;
        this.h = h;
        
        
        
        
    let colors = [color(245, 42, 157), color(245, 177, 61), color(255, 222, 38), 
    color(87, 242, 203), color(51, 135, 245)];

        let colorIndex = int(random(colors.length));
        this.color = colors[colorIndex];
        while(colorIndex == lastColor) {
            colorIndex = int(random(colors.length));
            this.color = colors[colorIndex];
            printToConsole("aha!")
        }
        lastColor = colorIndex;
        this.speed = 5;
        this.level = level;
        this.isFalling = isFalling;
        this.xMovement = 500;
    }
    
    display() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
        
    }
    
    fall() {
   
     
       this.y += 10
        
       
       if (this.y > 500) {
           textSize(50)
           textFont('Georgia')
           fill('red')
        text("you lose😓",250,250)
    
        
        frameRate(500)
        
        translate(x2,y2)
        gradientHorizontal("MidnightBlue","cyan",0,-1200,600,1200)
        x2 = x2 +0
        y2 = y2 +5
   
      setTimeout(restart, 4000)
        gameIsOver = true;
       }
       
    }
    

    move() {
        if(this.isFalling) this.fall()
        else this.x = 250 + this.xMovement / 2 * sin(frameCount * this.level)
    }
    checkForCollisions(x1, y1) {
        for (let oldBlock of oldBlocks) {
            let hit = collideRectRect(x1, y1, this.w, this.h,
                oldBlock.x, oldBlock.y, oldBlock.w, oldBlock.h)
            if (hit) return true;
        }
        return false;
    }
    checkForClick() {
        // hitbox code
        
        let hit = collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h)
        if (hit) {
            if (this.checkForFall() == false) {
                oldBlocks.push(activeBlock)
                activeBlock = new Block(0,this.y - 100,100,100, this.level + 1)
                     

            }
        }
    }
    checkForFall() {
        if (oldBlocks.length == 0) {
            return false
        }
        let lastBlock = oldBlocks[oldBlocks.length - 1]
        // compare middle of this to left and right edges of last block
        let middleX = this.x + this.w/2
        if (middleX < lastBlock.x || middleX > lastBlock.x + lastBlock.w) {
            this.isFalling = true
            return true;
        }
        return false;
    }
}



let activeBlock
let oldBlocks = []
let lastColor = -1;
let gameIsOver = false;
function setup() {
  createCanvas(600, 600);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  activeBlock = new Block(0,500,100,100, 1)
}

function restart() {
    if (gameIsOver) {
        activeBlock = new Block(0,500,100,100,1)
        oldBlocks = []
        lastColor = -1;
        gameIsOver = false;
    }
}
function gradientHorizontal(startColor,endColor,startX = 0, startY = 0,
w = 150,h = 600,stepSize = 2,alpha){
    
    let endY = startY + h;
    
    for (let y = startY; y < endY; y += stepSize) {
        let clr = getColor(startColor, endColor, y, startY, endY);
        fill(clr);
        rect(startX, y, w, stepSize);
    
    }
}

function draw() {
  background(220);
  noStroke()
  
  gradientHorizontal("PowderBlue", "DeepSkyBlue",0,0,600,600)
  drawCloud1()
  drawCloud2()
  drawCloud3()
    for (let oldBlock of oldBlocks) {
      oldBlock.display();
  }
  
  
      if (activeBlock.y < 0) {
          textSize(50)
           textFont('Georgia')
           fill('green')
        text("you win🎉",250,250)
         
         
        drawFish(FishX,FishY);
  FishX += 2
  FishY = 500 + 5 * sin(FishX * 5);
  
  drawFish2(FishX,FishY);
  Fish2X -= 2
  Fish2Y = 0 - 5 * -sin(Fish2X * -5);
  
  setTimeout(restart, 8000)
         gameIsOver = true;
         
      } else {
            activeBlock.move()
  activeBlock.display()
  
  
      }
     
 
  //text("Create your final project using everything you've learned in the class", 300, 300);
  fill('black')
  textSize(40)
  textFont('Georgia')
  text("click the blocks to stack!",250,50)
  // Don't delete the following or the sketching code breaks
  //drawMouseLines("black");
}

 function drawFish(x,y) {
      //beginShape()
     
  //fish
  push();
  translate(x,y)
  translate(-100, -520)
  
  fill('orange')
  triangle(40,500,80,520,40,540)
  ellipse(100,520,80,50)
  fill('black')
  circle(120,515,10)
  
  pop();
}

function drawFish2(x,y) {
      
  //fish2
  push();
  translate(-x,-y)
  translate(500, 420)
  
  fill('orange')
  triangle(550,480,530,490,550,500)
  ellipse(505,490,70,40)
  fill('black')
  circle(490,485,10)
  
  pop();
}
//   function makeConfetti() {
//     for (let i = 0 < numberConfetti; i++) {
//         confettiX1[i] = random(width)
//         confettiY1[i] = ramdom(-height)
//         confettiD[i] = random(4,9)
//         confettiSpeed[i] = random(4,8)
//     }
// } 
//   function drawConfetti() {
//       fill('black')
//       for(let i = 0 < confettiX1.length; i++ ) {
//           square(confettiX1[i],confettiY1[i],confettiD[i])
//       }
//   }
//   function moveConfetti() {
//       for (let i = 0; i < confettiX1.length; i++) {
//           confettiX1[i] += cos(frameCount * confettiSpeed[i])
//           confettiY1[i] += confettiSpeed [i]
//           if (confettiY1[i] > height) {
//               confettiY1[i] = 0
//           }
//       }
//   }

function mousePressed() {
      activeBlock.checkForClick()
}

function gradientHorizontal(startColor,endColor,startX = 0, startY = 0,
w = 600,h = 600,stepSize = 2,alpha){
    
    let endY = startY + h;
    
    for (let y1 = startY; y1 < endY; y1 += stepSize) {
        let clr = getColor(startColor, endColor, y1, startY, endY);
        fill(clr);
        rect(startX, y1, w, stepSize);
    
    }
}

function drawCloud1() { 
  fill("white"); 
  beginShape(); 
  curveVertex(36, 169);  // control point 
  curveVertex(36, 169); 
  curveVertex(31, 153); 
  curveVertex(36, 140); 
  curveVertex(59, 134); 
  curveVertex(68, 143); 
  curveVertex(78, 120); 
  curveVertex(102, 112); 
  curveVertex(135, 117); 
  curveVertex(147, 90); 
  curveVertex(178, 82); 
  curveVertex(203, 86); 
  curveVertex(216, 107); 
  curveVertex(221, 121); 
  curveVertex(224, 115); 
  curveVertex(238, 108); 
  curveVertex(263, 108); 
  curveVertex(284, 119); 
  curveVertex(285, 135); 
  curveVertex(281, 151); 
  curveVertex(309, 149); 
  curveVertex(315, 174); 
  curveVertex(300, 182); 
  curveVertex(264, 183); 
  curveVertex(237, 179); 
  curveVertex(210, 175); 
  curveVertex(173, 185); 
  curveVertex(156, 186); 
  curveVertex(128, 186); 
  curveVertex(105, 181); 
  curveVertex(82, 176); 
  curveVertex(51, 173); 
  curveVertex(36, 170); 
  curveVertex(36, 170); // control point 
  endShape(); 
} 

function drawCloud2() { 
  fill("white"); 
  beginShape(); 
  curveVertex(356, 300);  // control point 
  curveVertex(356, 300); 
  curveVertex(356, 282); 
  curveVertex(378, 274); 
  curveVertex(393, 280); 
  curveVertex(403, 249); 
  curveVertex(425, 237); 
  curveVertex(443, 239); 
  curveVertex(459, 269); 
  curveVertex(475, 260); 
  curveVertex(493, 259); 
  curveVertex(499, 264); 
  curveVertex(506, 287); 
  curveVertex(525, 281); 
  curveVertex(542, 286); 
  curveVertex(545, 304); 
  curveVertex(527, 311); 
  curveVertex(515, 313); 
  curveVertex(497, 313); 
  curveVertex(474, 311); 
  curveVertex(446, 304); 
  curveVertex(425, 303); 
  curveVertex(410, 307); 
  curveVertex(398, 309); 
  curveVertex(385, 310); 
  curveVertex(380, 310); 
  curveVertex(373, 310); 
  curveVertex(366, 309); 
  curveVertex(355, 300); 
  curveVertex(355, 300); // control point 
  endShape(); 
} 

function drawCloud3() { 
  fill("white"); 
  beginShape(); 
  curveVertex(110, 451);  // control point 
  curveVertex(110, 451); 
  curveVertex(107, 433); 
  curveVertex(117, 422); 
  curveVertex(131, 422); 
  curveVertex(140, 403); 
  curveVertex(154, 392); 
  curveVertex(164, 389); 
  curveVertex(179, 387); 
  curveVertex(189, 392); 
  curveVertex(198, 408); 
  curveVertex(205, 383); 
  curveVertex(220, 367); 
  curveVertex(237, 361); 
  curveVertex(262, 360); 
  curveVertex(284, 374); 
  curveVertex(297, 395); 
  curveVertex(309, 387); 
  curveVertex(330, 390); 
  curveVertex(363, 421); 
  curveVertex(374, 440); 
  curveVertex(384, 438); 
  curveVertex(408, 449); 
  curveVertex(405, 462); 
  curveVertex(334, 471); 
  curveVertex(288, 466); 
  curveVertex(242, 473); 
  curveVertex(194, 464); 
  curveVertex(156, 468); 
  curveVertex(140, 467); 
  curveVertex(118, 461); 
  curveVertex(110, 451); 
  curveVertex(110, 451); // control point 
  endShape(); 
}