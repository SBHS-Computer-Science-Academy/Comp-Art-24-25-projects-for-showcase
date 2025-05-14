let topColor = "blue"
let middleColor = "white"
let bottomColor = "blue"
let h = 300
let circleY = [];
let circleX = [];
let circleYMiddle = []
let gameSpeed = 5
let backgroundX = 0
let boatX = 212
let boatY = 372
let chestX = 300
let chestY = 200
let numBombs = 15;
let gameIsPlaying = true;
let isExploding = true;
let hasWon = false
let explosionX = []
let explosionY = [];
let coinX = []
let coinY = [];
let coinAngle = [];
let explosionColors = [];
let explosionAngle = [];
let craterSize = 0;
let showHitboxes = false;
let bulletYSpeed = 1;
let levelIndicator = 1
function preload(){
    bomb = loadImage("bulletBill.png")
    boat = loadImage("boat.png")
    sand = loadImage("sand.jpg")
    bubbles = loadImage("bubbles.png")
    chest = loadImage("chest.png")
    coin = loadImage("coin.png")

}

function setup() {
    bomb.resize(100, 0)
    boat.resize(145, 0)
    sand.resize(400, 600)
    bubbles.resize(500, 200)
    coin.resize(40, 0)
    chest.resize(100, 0)
    createCanvas(600, 600);
    
    createConsole("lines");
    
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);
    noLoop()
    draw();
    resetGame();

}

function resetGame() {
    backgroundX = 0
    boatY = 372
    for (let i = 0; i < numBombs; i++) {
        circleX[i] = map(i, 0, numBombs, 400, 2100)
        circleYMiddle[i] = random(height);
        circleY[i] = circleY[i];
    }
    gameIsPlaying = true;
    isExploding = false;
    hasWon = false
    h=150*sin(frameCount)+300
    moveBombs();

}

function gameOver() {
    
    text("OH NO!!!!", 300, 300)
    gameIsPlaying = false;
    isExploding = true;
    makeExplosions();
}

function draw() {

background("skyblue")
    
    rectGradient(0, 0, 600, h, topColor,middleColor);
    rectGradient(0, h, 600, 600-h, middleColor,bottomColor);
    drawBackground(backgroundX,0)
    fill('black')
    textSize(20)
    text('BulletSpeed: ' + bulletYSpeed, 100, 50)
    textSize(30)
    text('level ' + levelIndicator, 300, 50)
    stroke("black")
    strokeWeight(1)
    textSize(25)
    if (isLooping() == false) {
            text("Use up and down arrows to avoid bombs until you reach the end. Click mouse key to start/restart.", 0, 100, 600);
    }
    
    
    if (gameIsPlaying) {
        h=150*sin(frameCount)+300
        moveBoat();
        moveBombs();
        drawBombs();
        drawBoat();
        
        checkForCollision();
        backgroundX -= gameSpeed
         if(backgroundX < -2200+250){
            winLevel();
        }
    }

    

    if( isExploding) {
         drawBombs()
        drawExplosions();
    }
    if (hasWon) {
        fill("yellow")
    text('GOOD JOB! CLICK YOUR MOUSE TO GO TO THE NEXT LEVEL', 100, 150, 400)
    image(chest, chestX, chestY)
            drawBombs();
        drawBoat();
        drawCoins()
    }
    else {
        // drawBoat()
    }

    // Don't delete the following or the sketching code breaks
    // drawMouseLines("black");
}

function winLevel() {
    
    gameIsPlaying = false;
    levelIndicator += 1
    chestY = boatY - 50
    makeCoins()
    // bulletYSpeed = sqrt(levelIndicator)
    bulletYSpeed = levelIndicator
    hasWon = true
}

function drawBackground(x, y) { 
    push(); 
    translate(x, y);
    
    drawBeach();
    
    pop();
    
    function drawBeach(){
    
        
        image(sand, 2200, 0)
    
    
    function drawbubbles(){
       
        image(bubbles, 10, 10)
    }
}
}

function drawExplosions() {
    noStroke()
    craterSize += 10;
    fill("black")
    circle(boatX, boatY, craterSize);
    for (let i = 0; i < explosionX.length; i += 1){
        fill(explosionColors[i]);
        explosionX[i] += 5 * cos(explosionAngle[i]);
        explosionY[i] += 5 * sin(explosionAngle[i]);
        circle(explosionX[i], explosionY[i], 20)
    }
}

function drawCoins() {
    noStroke()
    for (let i = 0; i < coinX.length; i += 1){
        // fill(coinColors[i]);
        coinX[i] += 5 * cos(coinAngle[i]);
        coinY[i] += 5 * sin(coinAngle[i]);
        image(coin, coinX[i], coinY[i])
    }
}

function makeCoins() {
    craterSize =0;
    for (let i = 0; i < 100; i +=1) {
        coinX[i] =  chestX;
        coinY[i] = chestY;
        // coinColors[i] = ("yellow");
      coinAngle[i] = 360 * i /100;
    }
}

function makeExplosions() {
craterSize =0;
    for (let i = 0; i < 200; i +=1) {
        let clr = int(random(3));
        if (clr == 0) clr = "red";
        if (clr == 1) clr = "yellow"
        if (clr == 2) clr = "orange"
        explosionX[i] =  boatX;
        explosionY[i] = boatY;
        explosionColors[i] = clr;
        explosionAngle[i] = 360 * i /200;
    }
}

function drawBombs(){
    fill('red')
    for (let i = 0; i < circleX.length; i++) {
    
    if (showHitboxes) ellipse(circleX[i] + 55, circleY[i] + 35, 100, 80)
        image(bomb, circleX[i] , circleY[i])
    }
}

function moveBombs() {
    for (let i = 0; i < circleX.length; i++) {
        circleY[i] = 100 * sin(frameCount * bulletYSpeed + circleYMiddle[i]) + circleYMiddle[i]
        
        circleX[i]-= gameSpeed;
    }
}

function checkForCollision() {
    // circle(x+50, y-15, 10);
    if (showHitboxes) {
        fill("yellow")
        circle(boatX + 40, boatY+5, 10); // bottom
        circle(boatX -45, boatY - 45, 10) // top
        circle(boatX -35, boatY + 10, 10) // left
        circle(boatX + 70, boatY - 27, 10); // right
    }
    for (let i = 0; i < circleX.length; i++) {
    
        let doesHitBottom= collidePointEllipse(boatX + 40, boatY + 5, circleX[i] + 55, circleY[i] + 35, 100, 80)
        let doesHitTop= collidePointEllipse(boatX - 45, boatY - 45,circleX[i] + 55, circleY[i] + 35, 100, 80)
        let doesHitLeft = collidePointEllipse(boatX - 35, boatY + 10,circleX[i] + 55, circleY[i] + 35, 100, 80)
        let doesHitRight = collidePointEllipse(boatX + 70, boatY - 27,circleX[i] + 55, circleY[i] + 35, 100, 80)
        
        if (doesHitTop || doesHitRight || doesHitBottom || doesHitLeft) {
            gameOver();
            
        }
    }
}

function drawBoat(){
    fill('saddlebrown')
    push();
    translate(boatX, boatY)
    translate(-212, -372)
    image(boat, 150, 250)
    pop()
}

function moveBoat() {

    if(keyIsDown(DOWN_ARROW)){
        boatY += 7
    
    
    }
    if(keyIsDown(UP_ARROW)){
      boatY -= 7
    
    }

    boatY = constrain(boatY, 100, 600);
    
    }

function mouseReleased(){

    if (gameIsPlaying == false) {
        resetGame();
    
    }
    loop()
}

function pointIsInCircle(x, y, circleX, circleY, d) {
    return dist(x, y, circleX, circleY) < d / 2;
}