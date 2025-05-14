//snowflake traced from Pixabay pngs
class Snowflake {
  constructor() {
    this.size = random(15, 50)
    this.x = random(this.size,width - this.size)
    this.y = random(this.size,height - this.size)
    
    while(this.checkForCollect()){
        this.x = random(this.size,width - this.size)
        this.y = random(this.size,height - this.size)
    }
  }

display() {
    noStroke()
    push()
    translate(this.x, this.y)
    scale(this.size/175)
    translate(-189, -183 )
    fill('red')
    // circle(189, 183 ,175)
    fill(255)
   beginShape(); 
  vertex(191, 91); 
  vertex(186, 91); 
  vertex(183, 94); 
  vertex(182, 102); 
  vertex(183, 115); 
  vertex(183, 118); 
  vertex(179, 112); 
  vertex(174, 108); 
  vertex(170, 107); 
  vertex(165, 110); 
  vertex(162, 114); 
  vertex(164, 121); 
  vertex(181, 145); 
  vertex(181, 172); 
  vertex(158, 159); 
  vertex(144, 131); 
  vertex(142, 128); 
  vertex(139, 127); 
  vertex(134, 126); 
  vertex(131, 129); 
  vertex(129, 136); 
  vertex(132, 143); 
  vertex(133, 146); 
  vertex(120, 138); 
  vertex(114, 135); 
  vertex(109, 136); 
  vertex(106, 139); 
  vertex(106, 147); 
  vertex(125, 159); 
  vertex(115, 159); 
  vertex(110, 162); 
  vertex(108, 165); 
  vertex(112, 174); 
  vertex(118, 176); 
  vertex(150, 174); 
  vertex(174, 187); 
  vertex(150, 201);
  vertex(116, 198); 
  vertex(113, 199); 
  vertex(111, 203); 
  vertex(110, 210); 
  vertex(118, 215); 
  vertex(125, 215); 
  vertex(112, 222); 
  vertex(106, 226); 
  vertex(105, 234); 
  vertex(109, 238); 
  vertex(115, 240); 
  vertex(134, 229); 
  vertex(129, 237); 
  vertex(130, 244); 
  vertex(135, 248); 
  vertex(143, 248); 
  vertex(159, 215); 
  vertex(182, 201); 
  vertex(181, 230); 
  vertex(164, 254); 
  vertex(163, 261); 
  vertex(166, 266); 
  vertex(171, 268); 
  vertex(176, 266); 
  vertex(182, 257); 
  vertex(182, 278); 
  vertex(185, 283); 
  vertex(190, 285); 
  vertex(195, 284); 
  vertex(198, 280); 
  vertex(199, 268); 
  vertex(198, 255); 
  vertex(204, 266); 
  vertex(210, 267); 
  vertex(216, 265); 
  vertex(219, 257); 
  vertex(212, 247); 
  vertex(199, 230); 
  vertex(199, 203); 
  vertex(224, 217); 
  vertex(236, 246); 
  vertex(241, 248); 
  vertex(248, 247); 
  vertex(252, 240); 
  vertex(246, 228); 
  vertex(264, 240); 
  vertex(271, 239); 
  vertex(274, 235); 
  vertex(275, 228); 
  vertex(257, 216); 
  vertex(265, 215); 
  vertex(269, 212); 
  vertex(270, 202); 
  vertex(266, 199); 
  vertex(256, 199); 
  vertex(229, 200); 
  vertex(208, 186); 
  vertex(228, 175); 
  vertex(232, 173); 
  vertex(267, 175); 
  vertex(270, 170); 
  vertex(270, 165); 
  vertex(267, 160); 
  vertex(253, 159); 
  vertex(274, 148); 
  vertex(276, 142); 
  vertex(273, 134); 
  vertex(264, 133); 
  vertex(246, 145); 
  vertex(251, 135); 
  vertex(250, 130); 
  vertex(244, 127); 
  vertex(238, 126); 
  vertex(222, 158); 
  vertex(199, 172); 
  vertex(199, 146); 
  vertex(218, 118); 
  vertex(217, 112); 
  vertex(216, 111); 
  vertex(215, 109); 
  vertex(210, 107); 
  vertex(203, 109); 
  vertex(198, 117); 
  vertex(198, 96); 
  vertex(196, 92); 
  vertex(190, 91);
  endShape(); 
  pop()
  }
  
  checkForCollect() {
    //stroke('black')
    //noFill()
    //rect(PenguinX-25, PenguinY-90, 50, 145)
  let hit = collideRectCircle(PenguinX-25, PenguinY-90, 50, 145, this.x, this.y, this.size)
  return hit
}
}
class Obstacle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = random(3, 7);
    }
    
    display() {
        fill('white')
        stroke('black')
      circle(this.x, this.y, this.w); 

      
    }
    moveLeft() {
        this.x -= this.speed;
        if (this.x < -this.w) {
            this.x = width;
            this.y = random(height)
        }
    }
    
    checkForPeguinCollision() {
        let hit = collideRectCircle(PenguinX-25, PenguinY-90, 50, 145,
        this.x, this.y, this.w)
        return hit;
    }
    
}
PenguinX=300
PenguinY=545
let snowflakes = []
let snowballs = []
let score=0


function setup() {
  createCanvas(600, 600);
  createConsole("lines");
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  textFont('Times New Roman')
  
  for (let i = 0; i < 15; i++) {  
  snowflakes.push(new Snowflake())
}

for (let i = 0; i < 3; i++) {  
   snowballs.push(new Obstacle(600, random(height), 25, 'white'))
}

noLoop();
}

function draw(){
  background(220)
  gradientHorizontal("lightsteelblue","powderblue",0,0,600,600)
  textSize(25)
  fill('black')
  text("Score:"+score, 530, 50)
  if (isLooping() == false) {
    fill('black')
      text("Dodge snowballs and collect the snowflakes!\nUse arrows to move.\nClick to begin.",  300, 300)
  }
  
  drawPenguin()
  
   if(keyIsDown(RIGHT_ARROW)){
    PenguinX += 5
    }
    if(keyIsDown(LEFT_ARROW)){
    PenguinX -= 5
    }
    if(keyIsDown(DOWN_ARROW)){
    PenguinY += 5
    }
    if(keyIsDown(UP_ARROW)){
    PenguinY -= 5
    }
    
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    let snowflake = snowflakes[i];
  snowflake.display()
  if (snowflake.checkForCollect()) {
    snowflakes.splice(i, 1)
    score+=1
    if(snowflakes.length == 0){
        for (let i = 0; i < 3; i++) {  
  snowflakes.push(new Snowflake())
}
    }
  }
}
    for (let i = snowballs.length - 1; i >= 0; i--) {
    let snowball = snowballs[i];
    snowball.display();
    snowball.moveLeft();
  if (snowball.checkForPeguinCollision()) {
       noLoop();
      text("Game Over\nClick with mouse to start over!", 300, 300)
      for (let i = 0; i < 3; i++) {  
    let snowball = new Obstacle(600, random(height), 25, 'white')
  snowball.push(new Obstacle(600, random(height), 25, 'white'))
  }
  //drawMouseLines('black');
}
}
}

function drawPenguin() {
    push()
    translate(PenguinX, PenguinY)
    translate(-102, -374)
    //feet
    noStroke()
    fill('orange')
    beginShape(); 
  curveVertex(97, 422);  // control point 
  curveVertex(97, 422); 
  curveVertex(88, 420); 
  curveVertex(79, 420); 
  curveVertex(71, 425); 
  curveVertex(98, 427); 
  curveVertex(134, 427); 
  curveVertex(116, 419); 
  curveVertex(92, 422); 
  curveVertex(92, 422); // control point 
  endShape();
  
    fill('white')
    stroke('black')
    ellipse(104, 371, 55, 115)//body
    fill('black')
    circle(104, 310, 50)//face
    fill('white')
    circle(104, 315, 40)//face
    fill('black')
    //arms
    ellipse(80, 375, 25, 65)
    ellipse(130, 375, 25, 65)
    //nose
    noStroke()
    fill('orange')
    beginShape(); 
  vertex(95, 316); 
  vertex(115, 316); 
  vertex(105, 330); 
  vertex(95, 316); 
  endShape();
  //eyes
    fill('white')
    stroke('black')
    ellipse(94, 305,10,13)
    ellipse(115, 305,10,13)
    fill('black')
    circle(94, 305,7)
    circle(115, 305,7)
    pop()
}
function gradientHorizontal(startColor,endColor,startX = 0,startY = 0,
 w = width, h = height, steps = 100, alpha = 225) {
     
     let endY = startY + h
     let stepSize = h / steps
     
     push();
     noStroke();
    for (let y = startY; y < endY; y += stepSize) {
        let thisColor = getColor(startColor, endColor, y, startY, endY - stepSize)
        thisColor.setAlpha(alpha)
        fill(thisColor)
        rect(startX, y, width, stepSize)
     
 }
 pop();
}
function getColor(startColor, endColor, val, startVal, endVal) {
	if (typeof startColor === "string") startColor = color(startColor);
	if (typeof endColor === "string") endColor = color(endColor);

	let scaledValue = map(val, startVal, endVal, 0, 1);
	let thisColor = lerpColor(startColor, endColor, scaledValue);
	return thisColor;
	
}
function mouseClicked() {
    if (isLooping()==false){
    PenguinX = 300;
    PenguinY = 545;
    snowflakes = []
     score=0
     for (let i = 0; i < 15; i++) {
      snowflakes.push(new Snowflake())
    }
     snowballs = [];
    for (let i = 0; i < 3; i++) {
      snowballs.push(new Obstacle(600, random(height), 25, 'white'))
    
    loop()
    }
    }
}