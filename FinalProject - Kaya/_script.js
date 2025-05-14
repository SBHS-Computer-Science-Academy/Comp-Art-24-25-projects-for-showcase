let hairChosen = 0;
let hairButtons = [];
let clothesChosen = 0 ;
let clothesButtons = [];
let isFinished = false
let finishButton = new Button(498,396, 90,40, "red")

//confetti when finish is pressed?

function setup() {
  createCanvas(600, 600);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  hairButtons.push(new Button(10, 533, 50, 50, "red"))
    hairButtons.push(new Button(85, 533, 50, 50, "orange")) 
    hairButtons.push(new Button(140, 533, 35, 50, "yellow"))
     hairButtons.push(new Button(180, 533, 50, 50, "green"))
      hairButtons.push(new Button(240, 533, 40, 50, "blue"))
      
       clothesButtons.push(new Button(295, 533, 60, 50, "purple"))
    clothesButtons.push(new Button(370, 523, 60, 55, "pink")) 
    clothesButtons.push(new Button(450, 516, 43, 70, "white"))
     clothesButtons.push(new Button(500, 523, 50, 50, "gray"))
      clothesButtons.push(new Button(565, 523, 40, 55, "black"))
     
}


function draw() {
  background(198, 192, 171)
  
    drawCurtains()
    drawChair()
    drawBody()
    drawShirtA()
    
    if (hairChosen == 1) drawHair1();
    if (hairChosen == 2) drawHair2();
    if (hairChosen == 3) drawHair3();
    if (hairChosen == 4) drawHair4();
    if (hairChosen == 5) drawHair5();
    
     if (clothesChosen == 1) drawShirt1();
    if (clothesChosen == 2) drawShirt2();
    if (clothesChosen == 3) drawShirt3();
    if (clothesChosen == 4) drawShirt4();
    if (clothesChosen == 5) drawShirt5();
    //drawShirt1()
    //drawShirt2()
    //drawShirt3()
    //drawShirt4()
    //drawShirt5()
   // finishButton.display()
    if (isFinished==false) {
        drawDone()
        drawGui()
        for (hairButton of hairButtons) {
            //hairButton.display();
        }
        for (clothesButton of clothesButtons) {
            //clothesButton.display();
        }
        fill(16, 124, 129)
      noStroke()
      text("Finish!", 538,412)
      
    
        
        
        drawButton1()
        drawButton2()
        drawButton3()
        drawButton4()
        drawButton5()
        drawButtonA()
        drawButtonB()
        drawButtonC()
        drawButtonD()
        drawButtonE()
    
    
        fill(255)
       noStroke()
       textSize(20)
        text("give her hair and an outfit", 150,50)
        text("click on the clothes and hair to customize", 200,100)
        text("Hair:", 30,490)
        text("Clothes:", 320, 490)
        
    }else{
        drawDone()     
        fill(16, 124, 129)
      noStroke()
      text("Reset", 538,412)
    }
  // Don't delete the following or the sketching code breaks
  //drawMouseLines("black");
}

function mouseClicked() {
    // enter hitbox code here:
    if (finishButton.checkForClick()) {
        if (isFinished) {
            isFinished = false;
            clothesChosen = 0;
            hairChosen = 0;
           
        }
        else {
            isFinished = true
        }
    }


    if(isFinished)return
    for (let i = 0; i < hairButtons.length; i += 1) {
        let hairButton = hairButtons[i];
        if (hairButton.checkForClick()) {
            hairChosen = i + 1;
        }
    }
    
    for (let i = 0; i < clothesButtons.length; i += 1) {
        let clothesButton = clothesButtons[i];
        if (clothesButton.checkForClick()) {
            clothesChosen = i + 1;
        }
    }
}
  
  

function mouseIsInRect(x, y, w, h) {
    let isInLeft = mouseX > x;
    let isInRight = mouseX < x + w;
    let isInTop = mouseY > y;
    let isInBottom = mouseY < y + h;
    
    return isInLeft && isInRight && isInTop && isInBottom;
}