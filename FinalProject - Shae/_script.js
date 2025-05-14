let showsClue1 = false
let showsPhone = false
let showsSafe = false
let showsDrawer = false
let showsWardrobe = false
let showsClue3 = false
let showsClock = false
let showsDoorLock = false
let showsOpensafe = false
let showsOpenDoor = false

let numbersPressed = ""
let buttons = [];
let buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let rightCombo = "9308";
let rightLockCombo = "321";
let startTime = 0
let doorScale = 1

let stage = ["clue1", "phone", "safe", "drawer", "wardrobe", "clue3", "clock", "doorlock", "restart"]

let nowIsShowing = "none"

let stageIndex = 0;

let lockButtons = []

class Button {
    constructor(x, y, w, h, val) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.val = val;
    }
    
    display() {
        noFill();
        rect(this.x, this.y, this.w, this.h)
        fill("white")
        text(this.val, this.x + this.w/2, this.y + this.h/2)
    }
    
    checkForClick() {
        if( mouseIsInRect(this.x, this.y, this.w, this.h)) {
            if (numbersPressed.length < 4) {

                numbersPressed += this.val.toString();
                if (numbersPressed.length > 3) {
                    setTimeout(checkAnswer, 500);
                }
            } 
        }
    }
    checkForClickOnLock() {
        if( mouseIsInRect(this.x, this.y, this.w, this.h)) {
            this.val += 1
            
            if (this.val == 10) {
                this.val = 0
            }
             checkLockAnswer() 
        }
    }
    
}

function checkAnswer() {
    if (numbersPressed == rightCombo) {
        numbersPressed = "CORRECT!"
        setTimeout(openTheSafe, 1000);

    } else  {
        numbersPressed = "INCORRECT!"
        setTimeout(resetCombo, 1000);
    }
}

function checkLockAnswer() {
    let answer = lockButtons[0].val.toString() + lockButtons[1].val.toString() + lockButtons[2].val.toString()
    if (rightLockCombo == answer) {
        showsDoorLock = false
        showsOpenDoor = true
        nowIsShowing = "openDoor"
        stageIndex +=1
    }
}

function openTheSafe() {
    showsOpensafe = true
}

function resetCombo() {
    numbersPressed = "";
}
function makeButtons() {
    let i = 0;
    for (let row = 0; row < 5; row += 1) {
      buttons.push(new Button(222, 285 + row * 30, 71, 30, buttonValues[i]))
      i += 1;
      buttons.push(new Button(293, 285 + row * 30, 71, 30, buttonValues[i]))
      i += 1;
    }
}

function makeLockButtons() {
    lockButtons = []
    lockButtons.push(new Button(206,308,50,80,0))
    lockButtons.push(new Button(266,308,50,80,0))
    lockButtons.push(new Button(326,308,50,80,0))
    
}

function drawLockButtons() {
    for (let button of lockButtons) {
        button.display();
    }
}

function drawButtons() {
    for (let button of buttons) {
        button.display();
    }
}

function checkButtons() {
    for (let button of buttons) {
        button.checkForClick();
    }
}

function checkLockButtons() {
    for (let button of lockButtons) {
        button.checkForClickOnLock();
    }
}

function drawCombination() {
    fill("lime");

    text(numbersPressed, 290, 238);
    
}

function setup() {
  createCanvas(600, 600);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  makeButtons();
  makeLockButtons();
  noLoop()
}

function draw() {
     background(247, 233, 218);
     
  drawRoom();
  drawShadow();
  drawRug();
  drawDoorframe();
  if (showsOpenDoor) {
      animateDoor();
    }
  else drawDoor();
  drawDesk();
  drawWardrobe();
  drawClock();
  drawPot();
  drawPlant();
  drawStool();
  drawShelves();
  drawPicture();
  drawDecor();
  timer();
  
 
  noStroke()
  fill(59, 38, 20,20)
  triangle(0,0,0,350,450,0)
  
  drawText();
  
  function drawText() {
  push()
     noStroke()
     if (isLooping() == false) {
     fill('white')
     rect(33,33,250,100,20)
    textSize(17)
    noStroke()
    fill(0)
    text("Escape as fast as you can!", 154,64)
    text("Click on clue 1 to start", 154,89)
     }
         textSize(17)
    noStroke()
    fill(0)
  text(((millis() - startTime)/1000).toFixed(0),539,43)
  
    pop()
  }
    
  
  if (showsPhone) {
  phone();
  }
  
  if (showsClue1) {
  clue1();
  }
  
  if (showsSafe) {
  if (showsOpensafe) {
    Opensafe();
  } else {
      safe();
      drawButtons();
      drawCombination();
  }
  }
  
  if (showsDrawer) {
  drawer();
  }
  
  if (showsWardrobe) {
  wardrobe();
  }
  
  if(showsClue3) {
      clue3();
  }
  
  if (showsClock) {
      clock();
  }
  
  if (showsDoorLock) {
      doorLock();
      drawLockButtons();
  }
 
  
  // Don't delete the following or the sketching code breaks
  //drawMouseLines("black");
}


function animateDoor() {
    push();
    translate(244, 400);
    scale(doorScale, 1);
    translate(-244, -400);
    drawDoor();
    
    if (doorScale <= 0) doorScale = 0;
    else doorScale -= (1 / 60);
    pop();
}

    function mouseClicked () {
  if (mouseIsInRect(380,391,20,9) && (nowIsShowing == "none" || nowIsShowing == "clue1")) {
        
        if (isLooping() == false) {
            startTime = millis()
        }
        
        loop()
        if (showsClue1) {
            showsClue1 = false;
            nowIsShowing = "none"
        } else {
            showsClue1 = true;
            nowIsShowing = "clue1"
            
        }

        if (stage[stageIndex] == "clue1" ) {
            stageIndex += 1
        }
  }
  
  if (mouseIsInRect(443,376,27,15) && stageIndex > 0 && (nowIsShowing == "none" || nowIsShowing == "phone")){
        if (showsPhone) {
            showsPhone = false;
            nowIsShowing = "none"
        } else {
            showsPhone = true;
            nowIsShowing = "phone"
        }
        
        if (stage[stageIndex] == "phone" ) {
            stageIndex += 1
  }
  }
  

  
  if(mouseIsInRect(25,275,35,35) && stageIndex > 1 && (nowIsShowing == "none" || nowIsShowing == "safe")) {
      if (showsSafe) {
            showsSafe = false;
            nowIsShowing = "none"
        } else {
            showsSafe = true;
            nowIsShowing = "safe"
        }
        
        if (stage[stageIndex] == "safe" ) {
            stageIndex += 1
  }
  }
  
  if(mouseIsInRect(365,406,115,13) && stageIndex > 2 && (nowIsShowing == "none" || nowIsShowing == "drawer")) {
      if (showsDrawer) {
            showsDrawer = false;
            nowIsShowing = "none"
        } else {
            showsDrawer = true;
            nowIsShowing = "drawer"
        }
        
        if (stage[stageIndex] == "drawer" ) {
            stageIndex += 1
  }
  }
  
  if(mouseIsInRect(80,332,10,180) && stageIndex > 3 && (nowIsShowing == "none" || nowIsShowing == "wardrobe")){
      if (showsWardrobe) {
            showsWardrobe = false;
            nowIsShowing = "none"
        } else {
            showsWardrobe = true;
            nowIsShowing = "wardrobe"
        }
        
        if (stage[stageIndex] == "wardrobe" ) {
            stageIndex +=1
  }
  }
  
  
  if(mouseIsInRect(540,288,30,45) && stageIndex > 4 && (nowIsShowing == "none" || nowIsShowing == "clue3")){
      if (showsClue3) {
            showsClue3 = false;
            nowIsShowing = "none"
        } else {
            showsClue3 = true;
            nowIsShowing = "clue3"
        }
        
        if (stage[stageIndex] == "clue3" ) {
            stageIndex +=1
  }
  }
  
  if(mouseIsInRect(165,312,40,40) && stageIndex > 5 && (nowIsShowing == "none" || nowIsShowing == "clock")){
      if (showsClock) {
            showsClock = false;
            nowIsShowing = "none"
        } else {
            showsClock = true;
            nowIsShowing = "clock"
        }
        
        if (stage[stageIndex] == "clock" ) {
            stageIndex +=1
  }
  }
  
  if(mouseIsInRect(331,413,5,8) && stageIndex > 6 && (nowIsShowing == "none" || nowIsShowing == "doorlock")){
      if (showsDoorLock) {
            showsDoorLock = false;
            nowIsShowing = "none"
        } else {
            showsDoorLock = true;
            nowIsShowing = "DoorLock"
        }
        
        if (stage[stageIndex] == "DoorLock" ) {
            stageIndex +=1
  }
  }
  
  if(mouseIsInRect(262,403,70,20) && stageIndex > 7 && (nowIsShowing == "none" || nowIsShowing == "openDoor")){
      
 numbersPressed = ""
makeLockButtons()
 startTime = millis()
 doorScale = 1
 nowIsShowing = "none" 
      showsOpenDoor = false
        
            stageIndex = 0
  
  
  noLoop() 
  draw()
  }
  
  if (showsSafe) {
      checkButtons();
  }
  
  if(showsDoorLock) {
      checkLockButtons();
  }
    }
    
    

  
  function mouseIsInRect(x, y, w, h) {
    let isInLeft = mouseX > x;
    let isInRight = mouseX < x + w;
    let isInTop = mouseY > y;
    let isInBottom = mouseY < y + h;
    
    return isInLeft && isInRight && isInTop && isInBottom;
    
    
}