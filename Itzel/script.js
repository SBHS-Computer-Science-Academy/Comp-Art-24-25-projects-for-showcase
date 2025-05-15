let Pcoral;
let Pearl;
let Bcoral;
let seaweed;
seahorseX=269
seahorseY=498
facingLeft=true
let showHitboxes = false;
let basketW = 50
let score=0
class Seashell {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 2;
    }
    
    display() {
        fill(252, 178, 104);
       

  push();
   translate(this.x, this.y)
   scale(0.1)
   translate(-30,-30)
beginShape(); 
strokeWeight(10)
  curveVertex(97, 243);  // control point 
  curveVertex(97, 243); 
  curveVertex(80, 260); 
  curveVertex(146, 260); 
  curveVertex(223, 261); 
  curveVertex(205, 244); 
  curveVertex(101, 238); 
  curveVertex(101, 238); // control point 
  endShape(); 
  beginShape(); 
  curveVertex(150, 255);  // control point 
  curveVertex(150, 255); 
  curveVertex(134, 253); 
  curveVertex(99, 240); 
  curveVertex(75, 228); 
  curveVertex(44, 198); 
  curveVertex(22, 154); 
  curveVertex(15, 112); 
  curveVertex(26, 94); 
  curveVertex(48, 93); 
  curveVertex(56, 72); 
  curveVertex(68, 61); 
  curveVertex(87, 59); 
  curveVertex(100, 41); 
  curveVertex(123, 34); 
  curveVertex(145, 34); 
  curveVertex(165, 46); 
  curveVertex(181, 46); 
  curveVertex(197, 50); 
  curveVertex(213, 67); 
  curveVertex(233, 72); 
  curveVertex(254, 82); 
  curveVertex(263, 102); 
  curveVertex(264, 149); 
  curveVertex(249, 198); 
  curveVertex(197, 243); 
  curveVertex(149, 255); 
  curveVertex(149, 255); // control point 
  endShape(); 
 line(212, 69, 197, 191)
 line(49, 95, 109, 194); 
 line(168, 48, 158, 154); 
 line(89, 61, 132, 153); 
pop();
    }
    
    move() {
        this.y+=this.speed
        // use constrain to keep the Seashell in the frame
        this.y = constrain(this.y, 0, height - this.h);
    }
    
    checkForCatch() {
        let basketX = facingLeft ? seahorseX - basketW : seahorseX;
        let hit = collideRectRect(this.x, this.y, this.w, this.h,
                basketX, seahorseY + 32, basketW, 2)
                if (showHitboxes) {
                    rect(this.x, this.y, this.w, this.h,)
                    rect(basketX, seahorseY + 32, basketW, 2)
                }
                if (hit) fill("black")
        return hit;
    }
}
class Rock{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 2;
    }
    
    display(){
        push()
        translate(this.x, this.y)
        translate(-230,-77)
        beginShape(); 
    fill(102, 95, 89)
  vertex(277, 95); 
  vertex(273, 87); 
  vertex(270, 82); 
  vertex(264, 80); 
  vertex(255, 78); 
  vertex(246, 82); 
  vertex(239, 87); 
  vertex(232, 96); 
  vertex(233, 101); 
  vertex(237, 102); 
  vertex(242, 103); 
  vertex(249, 102); 
  vertex(257, 101); 
  vertex(273, 99); 
  vertex(276, 96); 
  vertex(277,95)
  endShape()
    pop()
    }
    move() {
        this.y+=this.speed
        // use constrain to keep the Rock in the frame
        this.y = constrain(this.y, 0, height - this.h);
    }
    checkForHit(){
        let basketX = facingLeft ? seahorseX - basketW : seahorseX;
        let hit = collideRectRect(this.x, this.y, this.w, this.h,
                basketX, seahorseY + 32, basketW, 2)
        if (showHitboxes) {
            rect(this.x, this.y, this.w, this.h,)
            rect(basketX, seahorseY + 32, basketW, 2)
        }
        if (hit) fill("black")
        return hit;
        
    }
    
}
let rocks = []
let seashells = []; 
function preload(){
Pcoral = loadImage("Pcoral.png");
Pearl = loadImage("pearl.png")
Bcoral = loadImage("Bcoral.png")
Seaweed = loadImage("seaweed.png")
font = loadFont("https://codehs.com/uploads/616d27695cec9a96506e6dd7f6410eb9")
}
function setup() {
  createCanvas(600, 600);
  createConsole("lines");
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
 
 
Pcoral.resize(230,0)
Pearl.resize(80,0)
Bcoral.resize(200,0)
Seaweed.resize(260,0)
noLoop()
textFont(font)
}

function draw() {
  background("LightBlue");
  rectGradient(0, 0, 600, 600,  "lightBlue", "LightSteelBlue"); 
  textSize(30)
  fill('black')
text("Score:"+score, 530,30)
  if(isLooping()==false){
      textSize(17)
      text("Click on the Seahorse to Start \nCollect as many Shells as you can! \n (Use your left and right arrow keys) \nWATCH OUT for the Rocks!!", 300,300)
  }
checkForNewSeashell();
moveSeahorse();

drawSeaweed()
drawBcoral()      
drawsand()
drawPcoral()
drawPearl()
drawseahorse()

checkForNewRock()
runRocks()

drawbasketback();
runShells();
drawbasketfront();

  drawMouseLines("black");
}


function runShells() {
    for (let i = 0; i < seashells.length; i += 1) {
    let shell = seashells[i];
    shell.move();
    if (shell.checkForCatch()) {
        seashells.splice(i, 1);
        i--;
        score+=1
    }
    shell.display();
}
}
function checkForNewSeashell() {
    if (frameCount % 90 == 0) {
          seashells.push(new Seashell(random(550), -20, 20, 20))
    }
}

function moveSeahorse() {
       if(keyIsDown(RIGHT_ARROW)){
        seahorseX+=5
        facingLeft=false
    }
    
    
    if(keyIsDown(LEFT_ARROW)){
       seahorseX-=5
       facingLeft=true
    }

seahorseX=constrain(seahorseX,0,600)
}
function drawseahorse(){
    push()
    translate(seahorseX,seahorseY)
    if(!facingLeft)scale(-1,1)
    translate(-269,-498)
    drawfin()
  fill(245, 173, 199 ); 
 strokeWeight(1)
 stroke('black')
  beginShape(); 
  vertex(220, 471); 
  vertex(231, 466); 
  vertex(233, 454); 
  vertex(239, 440); 
  vertex(246, 433); 
  vertex(255, 429); 
  vertex(256, 429); 
  vertex(269, 427); 
  vertex(279, 428); 
  vertex(291, 433); 
  vertex(300, 442); 
  vertex(302, 449); 
  vertex(304, 458); 
  vertex(303, 466); 
  vertex(298, 477); 
  vertex(294, 487); 
  vertex(287, 497); 
  vertex(283, 501); 
  vertex(282, 505); 
  vertex(281, 510); 
  vertex(281, 516); 
  vertex(287, 526); 
  vertex(292, 534); 
  vertex(297, 544); 
  vertex(299, 549); 
  vertex(299, 558); 
  vertex(298, 568); 
  vertex(293, 576); 
  vertex(288, 579); 
  vertex(276, 583); 
  vertex(270, 583); 
  vertex(262, 582); 
  vertex(257, 579); 
  vertex(253, 574); 
  vertex(251, 568); 
  vertex(251, 560); 
  vertex(252, 552); 
  vertex(257, 548); 
  vertex(263, 546); 
  vertex(269, 546); 
  vertex(276, 549); 
  vertex(279, 555); 
  vertex(279, 560); 
  vertex(277, 564); 
  vertex(273, 566); 
  vertex(269, 564); 
  vertex(266, 561); 
  vertex(270, 558); 
  vertex(272, 558); 
  vertex(269, 558); 
  vertex(266, 560); 
  vertex(265, 563); 
  vertex(268, 566); 
  vertex(272, 567); 
  vertex(275, 567); 
  vertex(278, 565); 
  vertex(280, 562); 
  vertex(280, 557); 
  vertex(279, 552); 
  vertex(276, 550); 
  vertex(273, 548); 
  vertex(270, 547); 
  vertex(264, 546); 
  vertex(261, 546); 
  vertex(256, 545); 
  vertex(252, 543); 
  vertex(247, 537); 
  vertex(244, 532); 
  vertex(242, 526);
  vertex(241,514)
  vertex(243,510)
  vertex(246,503)
  vertex(252, 497);
  vertex(258, 496); 
  vertex(268, 493); 
  vertex(275, 492); 
  vertex(279, 490); 
  vertex(282, 487); 
  vertex(284, 483); 
  vertex(284, 487); 
  vertex(280, 489); 
  vertex(279, 491); 
  vertex(272, 492); 
  vertex(263, 494); 
  vertex(259, 493); 
  vertex(255, 492); 
  vertex(250, 488); 
  vertex(246, 487); 
  vertex(241, 485); 
  vertex(236, 486); 
  vertex(229, 487); 
  vertex(224, 488); 
  vertex(220, 483); 
  vertex(219, 480);
  vertex(220, 471)
  endShape();
  
  beginShape();
fill(252, 214, 116)
  vertex(262, 506); 
  vertex(287, 498); 
  vertex(291, 501); 
  vertex(292, 507); 
  vertex(291, 513); 
  vertex(288, 517); 
  vertex(283, 518); 
  vertex(277, 516); 
  vertex(261, 508); 
endShape()
line(261,507,284,505)
line(261,507,283,512)  
//eye
fill('white')
circle(256,460,15)
 beginShape(); 
 fill('black')
  vertex(253, 453); 
  vertex(257, 454); 
  vertex(259, 456); 
  vertex(260, 459); 
  vertex(260, 462); 
  vertex(258, 465); 
  vertex(257, 466); 
  vertex(255, 467); 
  vertex(252, 466); 
  vertex(249, 462); 
  vertex(249, 457); 
  vertex(251, 454); 
  vertex(254, 453); 
  endShape(); 
  beginShape(); 
  noFill()
  vertex(262, 456); 
  vertex(264, 458); 
  vertex(266, 458); 
  vertex(268, 457); 
  vertex(269, 455); 
  endShape();
  beginShape(); 
  vertex(263, 460); 
  vertex(266, 461); 
  vertex(271, 461); 
  vertex(273, 459); 
  endShape(); 
pop()
} 

function drawfin() { 
fill(252, 214, 116);
strokeWeight(1)
stroke('black')
  beginShape(); 
  vertex(256, 429); 
  vertex(255, 423); 
  vertex(254, 419); 
  vertex(257, 416); 
  vertex(262, 416); 
  vertex(266, 418); 
  vertex(268, 415); 
  vertex(271, 415); 
  vertex(275, 416); 
  vertex(276, 418); 
  vertex(279, 416); 
  vertex(283, 416); 
  vertex(286, 417); 
  vertex(286, 418); 
  vertex(290, 418); 
  vertex(293, 419); 
  vertex(295, 422); 
  vertex(295, 424); 
  vertex(297, 423); 
  vertex(301, 424); 
  vertex(303, 427); 
  vertex(303, 430); 
  vertex(305, 429); 
  vertex(308, 431); 
  vertex(309, 435); 
  vertex(308, 440); 
  vertex(301, 444); 
  vertex(276, 450); 
  vertex(256, 428); 
  endShape(); 
 
  beginShape(); 
  vertex(288, 527); 
  vertex(294, 519); 
  vertex(302, 523); 
  vertex(305, 529); 
  vertex(308, 536); 
  vertex(308, 543); 
  vertex(307, 551); 
  vertex(299, 549); 
  vertex(282, 546); 
  vertex(283, 538); 
  vertex(287, 528); 
  endShape(); 
  line(260,419,263,428)
  line(270,418,271,428)
  line(280,419,279,428)
  line(289,422,286,430)
  line(297,428,293,435)
  line(303,434,298,440)
  
  line(291,532,296,526)
  line(297,542,304,543)
  line(293,536,301,533)
} 
function drawsand() { 
 fill(244, 215, 157); 
  beginShape(); 
  vertex(598, 542); 
  vertex(573, 541); 
  vertex(535, 545); 
  vertex(506, 556); 
  vertex(470, 570); 
  vertex(434, 570); 
  vertex(394, 575); 
  vertex(364, 583); 
  vertex(331, 591); 
  vertex(299, 594); 
  vertex(271, 591); 
  vertex(235, 588); 
  vertex(190, 588); 
  vertex(153, 578); 
  vertex(107, 578); 
  vertex(70, 578); 
  vertex(18, 562); 
  vertex(0, 562); 
  vertex(0, 598); 
  vertex(600, 599); 
  vertex(599, 542); 
  endShape(); 
}
function drawbasketfront(){
        push()
    translate(seahorseX,seahorseY)
    if(!facingLeft)scale(-1,1)
    translate(-269,-498)
  beginShape()
  fill(115, 84, 54)
  vertex(267, 510); 
  vertex(264, 524); 
  vertex(257, 535); 
  vertex(248, 541); 
  vertex(230, 541); 
  vertex(218, 537); 
  vertex(210, 531); 
  vertex(204, 525); 
  vertex(196, 508); 
  endShape(); 
  pop()
}

function drawbasketback() {
        push()
    translate(seahorseX,seahorseY)
    if(!facingLeft)scale(-1,1)
    translate(-269,-498)
    
    beginShape(); 
  fill(94, 69, 45)
  vertex(268, 510); 
  vertex(262, 513); 
  vertex(250, 515); 
  vertex(226, 515); 
  vertex(209, 511); 
  vertex(197, 507); 
  vertex(202, 503); 
  vertex(206, 503); 
  vertex(215, 504); 
  vertex(235, 505); 
  vertex(253, 506); 
  vertex(263, 508); 
  endShape()
  pop()
}
function drawSeaweed(){
    image(Seaweed,-50,340)
}

function drawPcoral(){
    image(Pcoral, 15,390)
}
function drawPearl(){
    image(Pearl,510,500)
}
function drawBcoral(){
    image(Bcoral,380, 400)
}
function drawRock(){
    beginShape(); 
    fill(102, 95, 89)
  vertex(277, 95); 
  vertex(273, 87); 
  vertex(270, 82); 
  vertex(264, 80); 
  vertex(255, 78); 
  vertex(246, 82); 
  vertex(239, 87); 
  vertex(232, 96); 
  vertex(233, 101); 
  vertex(237, 102); 
  vertex(242, 103); 
  vertex(249, 102); 
  vertex(257, 101); 
  vertex(273, 99); 
  vertex(276, 96); 
  vertex(277,95)
  endShape()
}
function checkForNewRock(){
    if (frameCount % 130 == 0) {
          rocks.push(new Rock(random(550), -30, 50, 30))
    }
}
function runRocks() {
    for (let i = 0; i < rocks.length; i += 1) {
    let rock = rocks[i];
    rock.move();
    if (rock.checkForHit()) {
        drawGameOver()
    }
    rock.display();
}
}
function drawGameOver(){
   noLoop()
   textSize(50)
   text("Game Over", 300,300)
   textSize(20)
   text("Click your Mouse to Start Again",300,350)
   
   //reset stuff
}

function mousePressed(){
    if(isLooping()==false){
     rocks = []
 seashells = []; 
 score= 0
 
    }
    loop()
}