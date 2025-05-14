let grid, ground;
let tiles;
let tileCount = 0;
let spacing = 90;
let xOffSet = 115;
let yOffSet = 210;
let theTileSize = 65;
let squareSize = 75;
let paused = false;
let spawningTiles = [];
let spawningScale = 1;
let unlockedXOffSet = 25;
let unlockedYOffSet = 565;
let unlockedSize = 40;
let imgs = [];

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

class Tile {
    constructor(row, col) {
        this.value = ""; //orgin there was a space
  
        let borderGap = (squareSize - theTileSize) / 2;
        this.image = imgBlank;
        this.x = spacing * col + xOffSet + borderGap;
        this.y = spacing * row + yOffSet + borderGap;
        this.scale = 1;
      
    }
    
    show() {
        
        //image(this.image, this.x, this.y)
        if(this.scale < 1){
            this.scale += 0.2;
            let theSize = theTileSize * this.scale;
            image(this.image, this.x + (theTileSize - theSize) / 2, this.y + (theTileSize - theSize) / 2,  theSize, theSize)
        }
         else {
             image(this.image, this.x, this.y, theTileSize, theTileSize) //tf u mean string???
         }
    }
    
    updateImage() {
        let imageIndex = 0;
        
        if (this.value != "") {
            for (let i = this.value; i > 1; i /= 2) {
                imageIndex ++;
            }
        }
        this.image = imgs[imageIndex];
          
    }
    
    makeBlank() {
        this.value = "";
        this.updateImage();
        this.scale = 1;
    }
    
    updateValue(newValue) {
        this.value = newValue;
        this.updateImage();
        this.scale = 1;
    }
    
    isBlank() {
        return this.value === ""
    }
}

 //sky colors
//#EEE2DF light sat.red cause color theory????
//#DEC1DB dusty pink
//#5B61B2 purple
//#2F80E4 azure blue
//#6DA0E1 lighht blue

function preload(){
    img2 = loadImage('img2.png');
    img4 = loadImage('img4.png');
    img8 = loadImage('img8.png');
    img16 = loadImage('img16.png');
    img32 = loadImage('img32.png');
    img64 = loadImage('img64.png');
    img128 = loadImage('img128.png');
    img256 = loadImage('img256.png');
    img512 = loadImage('img512.png');
    img1024 = loadImage('img1024.png');
    img2048 = loadImage('img2048.png');
    imgBlank = loadImage("Blank.png") 
}

function setup() {
    createCanvas(800, 600);
   imgs = [imgBlank, img2, img4, img8, img16, img32, img64, img128, img256, img512, img1024, img2048]
  
 tiles = [[null, null, null, null], 
          [null, null, null, null], 
          [null, null, null, null], 
          [null, null, null, null]] 
  
  for(let row = 0; row <= 3; row++){
      for(let col = 0; col <= 3; col++){
          let tile = new Tile(row, col);
          tiles[row][col] = tile;
      }
  }
    spawnTile();
    spawnTile();
  //imgBlank.resize(theTileSize, theTileSize);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
    clear();
  background('#2F80E4');
  
  //design
  drawLayout();
  
  GameDesign();
  functionallyWorking();
  
  drawChibi();
  
  //drawMouseLines("black");
}



function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) { //def works
     moveTilesLeft();
  }
  
  if (keyIsDown(RIGHT_ARROW)) { //why wre you so difficult?
      moveTilesRight();
  }

  if (keyIsDown(UP_ARROW)) { //sorta works
      moveTilesUp();
  }
  
  if (keyIsDown(DOWN_ARROW)) { //suprisingly no? now yes
      moveTilesDown();
  }
  
  if (tileCount == 16){
      
      let movesAvailable = 0;
      
      for (let row = 0; row <= 3; row++){
          for (let col = 0; col <= 3; col++){
              
              if(row < 3 && tiles[row][col].value == tiles[row + 1][col].value){
                  
                  movesAvailable++;
              }
              
              if(row < 3 && tiles[row][col].value == tiles[row][col + 1].value){
                  
                  movesAvailable++;
              }
          }
      }
      if(movesAvailable == 0){ //u dont even work why are you here?
          fill('black');
          square(0, 0, 1000); //nvm will move to diff funct.
          textSize(100);
          fill('white');
          text('You Lose', width/2, height/2);
      }
      
      
  }
  
   if(keyIsDown(84)){
       spawnTile();
   }
  
} //end of function


function drawLayout(){
    push();
    // scale(0.95);
    // translate(21, 21);
    
    
    noStroke();
    let base = [255, 255, 255, 40];
    
    fill(base);
    square(250, 90, 500); // game
    square(273, 113, 454); //game part2
    rect(760, 10, 30, 580); //vines R
    rect(10, 10, 30, 580); //vines L
    rect(250, 10, 500, 70); //title card
    rect(50, 10, 190, 60); //points
    square(50, 400, 190); //arrows
    rect(50, 370, 190, 25); //use ur keys
    rect(94, 80, 100, 285); //block designs
    
    pop();
}


function spawnTile(){
    if(tileCount == 16){
        return;
    }
    
    let tileNum = 0;
    while(true){
        let row = random([0, 1, 2, 3]);
        let col = random([0, 1, 2, 3]);
        let tile = tiles[row][col];
        if (tile.isBlank()){
            let spawnNum = random([2, 2, 2, 2, 2, 2, 2, 2, 2, 4])
            tile.updateValue(spawnNum);
            tile.scale = 0;
            // spawningTiles.push(tile);
            // spawningScale = 0;
            tileCount++;
            break;
        }
    }
     

}


function moveTilesLeft() {
     let isMoving = false;
      
      for(let row = 0; row <= 3; row++){ //og x = 0;
          for(let col = 1; col <= 3; col++){
              
              if (tiles[row][col].value != "") {
                  for(let newCol = col - 1; newCol >= 0; newCol--){
                      let oldCol = newCol + 1;
                      if (checkForSlide(row, oldCol, row, newCol)) isMoving = true;
                      else if(checkForMerge(row, oldCol, row, newCol)) {
                          isMoving = true;
                          break;
                      }
                      else break;
                  }
                  
              }

          }
          
      }
      
      
      if (isMoving){
          paused = true;
      }
        
}

function moveTilesRight(){
    let isMoving = false;
      
      for(let row = 0; row <= 3; row++){ //og x = 0;
          for(let col = 2; col >= 0; col--){
              
              if (tiles[row][col].value != "") {
                  for(let newCol = col + 1; newCol <= 3; newCol++){
                      let oldCol = newCol - 1;
                      if (checkForSlide(row, oldCol, row, newCol)) isMoving = true;
                      else if(checkForMerge(row, oldCol, row, newCol)) {
                          isMoving = true;
                          break;
                      }
                      else break;
                  }
                  
              }

          }
          
      }
      
      
      if (isMoving){
          paused = true;
      }
      
}

function moveTilesUp(){
    let isMoving = false;
      
      for(let row = 1; row <= 3; row++){ //og x = 0;
          for(let col = 0; col <= 3; col++){
              
              if (tiles[row][col].value != "") {
                  for(let newRow = row - 1; newRow >= 0; newRow--){
                      let oldRow = newRow + 1;
                      if (checkForSlide(oldRow, col, newRow, col)) isMoving = true;
                      else if(checkForMerge(oldRow, col, newRow, col)) {
                          isMoving = true;
                          break;
                      }
                      else break;
                  }
              }
          }
      }
      
      if (isMoving){
          paused = true;
      }
}

function moveTilesDown(){
    let isMoving = false;
      
      for(let row = 2; row >= 0; row--){ //og x = 0;row = 0
          for(let col = 0; col <= 3; col++){ //col = 0
              
              if (tiles[row][col].value != "") {
                  for(let newRow = row + 1; newRow <= 3; newRow++){
                      let oldRow = newRow - 1;
                      if (checkForSlide(oldRow, col, newRow, col)) isMoving = true;
                      else if(checkForMerge(oldRow, col, newRow, col)) {
                          isMoving = true;
                          break;
                      }
                      else break;
                  }
              }
          }
      }
      
      if (isMoving){
          paused = true;
      }
}


function functionallyWorking(){
    push(); //i forgot this function
    translate(180, -80);
    scale(1.1);
    strokeWeight(2);
    stroke('#fceccf');
    
    if (spawningScale <= 1){
      for(tile of spawningTiles){
          tile.scale = spawningScale;
      }
      
      spawningScale += 0.2;
  }
  
  else{
      spawningTile = [];
  }
  
  for(let x = 0; x <= 3; x++){
      for(let y = 0; y <= 3; y++){
          fill("#DEC1DB"); //#EEE2DF
          square(spacing * x + xOffSet, spacing * y + yOffSet, squareSize);
          tiles[y][x].show();
      }
  }
  
  if(paused == true){
      let currentTime = millis();
      while (millis() - currentTime < 50){
          
      }
      
      spawnTile();
      paused = false;
  }
  pop();
}

function GameDesign(){
    push(); //C = 800, 600
    rectGradient(0, 0, 800, 600, '#DEC1DB', '#6DA0E1');
    
    noStroke();
    
    
    fill('#fce6a7'); //#6da7ed
    square(292, 135, 410);
    
    fill('white'); //game part
    circle(295, 135, 50);
    circle(370, 145, 125);
    circle(300, 190, 80);
    circle(300, 240, 35);
    circle(435, 140, 35);
    
    circle(699, 545, 50); //hatred of flipping y's & x's
    circle(624, 530, 125); //fp = 297, 140, Lp = 697, 540
    circle(694, 490, 80); //mid is 497, 340
    circle(694, 440, 35); //697 - 138, 689 - 130
    circle(559, 540, 35); //woooo, i hate math
    
    //fill('#2F80E4'); //#6da7ed
    fill('#9a95de');
    square(297, 140, 400);
    rectGradient(20, 260, 235, 235, '#9a95de', '#5B61B2');
    //title
    fill('#fce6a7');
    rect(472, 37, 186, 81);
    
    fill('white');
    circle(485, 50, 60);
    circle(463, 72, 40);
    circle(520, 37, 30);
    circle(472, 97, 50);
    circle(556, 50, 70);
    circle(495, 115, 30);
    circle(515, 115, 20);
    
    rectGradient(475, 40, 180, 75, '#DEC1DB', '#5B61B2');
    
    fill('white');
    circle(140, 260, 80);
    circle(85, 255, 40);
    circle(65, 265, 20);
    circle(188, 265, 30);
    
    circle(140, 495, 80);
    circle(85, 500, 40);
    circle(65, 490, 20);
    circle(188, 490, 30);
    
    fill('#DEC1DB'); //instructor
    square(25, 265, 225); //change color???
    
    fill('white');
    textStyle(BOLD); //couldnt get a font
    textSize(60); //nah to lazy to import
    text('2048', 565, 80); //yk i couldve made this in procreate
    textSize(18);
    text('2048 is a game about \n'+
    'combining tiles \n' +
    'Starting with 2s and 4s, \n' +
    'you slide tiles \n'+
    'of the same number \n'+ //listen the amount of trouble
    'together on a 4x4 grid \n' + //this text caused me
    'to double their value, \n' + //was not worth it
    'working your way up \n' +
    'to that elusive 2048 tile', 140, 380);
    
    //vine thingy
    circle(745, 45, 20);
    circle(745, 95, 40);
    circle(745, 145, 20);
    circle(505, 575, 15); //2
    circle(25, 575, 20); //2
    circle(60, 575, 10); //2
    circle(185, 575, 20); //2
    circle(145, 575, 10); //2
    circle(105, 575, 30); //2
    stroke('white');
    strokeWeight(5);
    line(745, 175, 745, 395);
    line(480, 575, 230, 575); //2
    noStroke();
    circle(745, 425, 20);
    
    
    pop();
}

function drawChibi(){
    push(); //gotta add my name
    noFill();
    strokeWeight(3);
    stroke('white');
    
    beginShape(); 
  vertex(18, 40);
  vertex(26, 130);
  vertex(47, 126); 
  vertex(37, 90); 
  vertex(73, 124); 
  vertex(92, 122); 
  vertex(37, 70);
  vertex(61, 38);
  vertex(38, 39); 
  vertex(30, 59); 
  vertex(25, 33); 
  vertex(18, 39); 
  endShape(); 
  
  beginShape(); 
  vertex(66, 90);
  vertex(78, 35); 
  vertex(95, 35); 
  vertex(125, 122); 
  vertex(105, 122); 
  vertex(97, 80); 
  vertex(81, 80); 
  vertex(77, 97); 
  endShape(); 
  
  beginShape();
  vertex(110, 67); 
  vertex(111, 35); 
  vertex(123, 34); 
  vertex(124, 43); 
  vertex(138, 33); 
  vertex(160, 46); 
  vertex(163, 67); 
  vertex(146, 80); 
  vertex(129, 81); 
  vertex(164, 123); 
  vertex(140, 124); 
  vertex(118, 81); 
  vertex(119, 90); 
  endShape();
    
  beginShape(); 
  vertex(174, 122); 
  vertex(221, 119); 
  vertex(217, 105); 
  vertex(171, 107); 
  vertex(174, 28); 
  vertex(154, 27); 
  vertex(154, 36); 
  endShape(); 
  
  line(154, 80, 153, 101); 
  line(20, 144, 238, 133);
  line(36, 161, 222, 153); 
    
    pop();
}

function checkForSlide(oldRow, oldCol, newRow, newCol) {
    if(tiles[newRow][newCol].value === ""){
        tiles[newRow][newCol].updateValue(tiles[oldRow][oldCol].value)
        tiles[oldRow][oldCol].makeBlank();              
        return true;
    }
    return false;
    
}

function checkForMerge(oldRow, oldCol, newRow, newCol) {
    if(tiles[oldRow][oldCol].value == tiles[newRow][newCol].value){
        tiles[newRow][newCol].updateValue(tiles[newRow][newCol].value * 2);
        tiles[oldRow][oldCol].makeBlank();
    
        tileCount--;
        return true;
        
    }
    return false;
}