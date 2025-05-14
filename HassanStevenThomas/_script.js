let char = {x : 100, y : 300, dia : 40, spd : 5, scl : 1, rotation : 0}
let cloud;
let vel;
let y_circle = [];
let life = 10;
let x_circle = [];
let dia_circle = [];
let circNum = 100;
let spd = [];
let gmspd = 1;
let timer = 0;
let pwrtimer = [0,0,0,0];
let fps = 0;
let strtspd = 0;
let lfocus;
let rfocus;
let lfocus2; 
let rfocus2;
let grow = [0,0,0,0,0];
let diff;
let diffVal = 0;
let secret = 0;
let goonX = 575
let goonY = 300; 
let ufoSpc = [];
let skibX = [];
let skibY = [];
let pwrspd;

function setup() {
    createCanvas(600, 600);
    vel = createVector(0,0)
    for(let i = 0; i < circNum; i++) {
        ufoSpc[i] = round(random(0,100))
        spd[i] = skibidi()
        y_circle[i] = skibidiV2()
        dia_circle[i] = 50
    }
    for(let i = 0; i < circNum; i++) {
     x_circle[i] = placement()
    }
    for(let i = 0; i < 4; i++) {
        skibX[i] = skibidiV3()
        skibY[i] = -100
    }
    pwrspd = [skibidiV4(),skibidiV4(),skibidiV4(),skibidiV4()]
    createConsole("lines");
    lfocus = -sqrt(sq(55)-sq(35))
    rfocus = sqrt(sq(55)-sq(35))
    lfocus2 = -sqrt(sq(72.5)-sq(52.5))
    rfocus2 = sqrt(sq(72.5)-sq(52.5))
    
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);
    frameRate(120)
}

function draw() {
    // console.log()
    
    if (gmspd > 0 && strtspd > 0) {
        background('green');
        gradientHorizontal("blue", "orange", 0, 0, 600, 300)
        rizzsun()
        UFO()
        powerup()
        rizzcirc()
        flyingMan()
        tmr()
        health()
        movement()
        pain()
        borders()
        death()
    } else {
        if(gmspd > 0 && diffVal == 0) {
            background('green')
            gradientHorizontal("blue", "orange", 0, 0, 600, 300)
            rizzsun()
            start()
            push()
            fill("yellow")
            translate(300,350)
            scale(2)
            text("use WASD to move and only your head gets hurt",0,0);
            (pop)
        }
        if(gmspd > 0 && diffVal > 0) {
            if(secret == 8) {
            for(let i = 0; i <= 0; i++) {
            createCanvas(600,740)
            textAlign(CENTER, CENTER);
            angleMode(DEGREES);
            frameRate(120)    
            }
            }
            background('green')
            gradientHorizontal("blue", "orange", 0, 0, 600, 300)
            rizzsun()
            selectDiff()
        }
        if(gmspd < 1 && diffVal == 0) {
            background("black")
            endText(timer)
            push()
            fill("yellow")
            translate(300,150)
            scale(8)
            text("Timer : " + timer, 0, 0)
            pop()
            rst()
            gear()
            diffDisplay()
        }
    }
    
    
    

    
    
    
 
  // Don't delete the following or the sketching code breaks
//   drawMouseLines("black");
  
    char.x += vel.x
    char.y += vel.y
    char.rotation = facing(char.x, char.y, mouseX, mouseY)
    fps ++
}

function flyingMan() {
    push()
    stroke('purple')
    fill(255)
    strokeWeight(5)
    translate(char.x,char.y)
    rotate(char.rotation-90)
    scale(char.scl)
    line(30, 0, -75, 0)
    circle(0,0,char.dia)
    line(-75, 0, -100, -5)
    line(-75, 0, -100, 5)
    line(-22, 0, 27, 10)
    pop()
}

function rizzsun() {
  push()
  noStroke()
  translate(300,300)
  fill("yellow")
  arc(0 ,0, 300, 300, 180, 0)
  fill(0) 
  pop()
    hill()
}

function hill() {
    push()
    stroke(0,150,0)
    strokeWeight(3)
    fill("green")
    arc(180,400,200,70,180,0)
     arc(140,400,200,70,180,0)
    arc(130,550,200,70,180,0)
    arc(440,360,200,70,180,0)
    arc(440,500,200,70,180,0)
    
    pop()
}

function UFO() {
    

    for(let i = 0; i < circNum; i++) {
        
        x_circle[i]-=spd[i]
        if(ufoSpc[i] >= 10 && ufoSpc[i] < 20) {
            fill(0,0,255)
        } else if(ufoSpc[i] == 100) {
            fill("purple")
        } else {
            fill(150)
        }
        ellipse(x_circle[i], y_circle[i], 70, 30);
        noFill()
        stroke(100)
        ellipse(x_circle[i], y_circle[i], 70,30)
        noStroke()
        fill(255,255,255, 130)
        arc(x_circle[i],y_circle[i], 30, 40, 180, 0)
        arc(x_circle[i],y_circle[i], 30, 5, 0, 180)
        
        
        
        if(x_circle[i] < -100) {
            x_circle[i] = 700
            spd[i] = skibidi()
            y_circle[i] = skibidiV2()
            ufoSpc[i] = round(random(0,100))
        }
        
    }
}

function rizzcirc() {
    if(secret == 8 && diff == 4) {
        noFill()
        circle(goonX,goonY,75)
        goonY += int(random(-7,7))
        if(goonY > 550) {
            goonY = 550
        }
        if(goonY < 50) {
            goonY = 50
        }
    }
    
}

function movement() {
    if (keyIsDown(87) && keyIsDown(65)) {
        vel.x = -char.spd
        vel.y = -char.spd
    }
    else if (keyIsDown(87) && keyIsDown(68)) {
        vel.x = char.spd
        vel.y = -char.spd
    }
    else if (keyIsDown(83) && keyIsDown(65)) {
        vel.x = -char.spd
        vel.y = char.spd
    }
    else if (keyIsDown(83) && keyIsDown(68)) {
        vel.x = char.spd
        vel.y = char.spd
    }
    else if (keyIsDown(87)) {
        vel.x = 0
        vel.y = -char.spd
    }
    else if (keyIsDown(65)) {
        vel.y = 0
        vel.x = -char.spd
    }
    else if (keyIsDown(83)) {
        vel.y = char.spd
        vel.x = 0
    }
    else if (keyIsDown(68)) {
        vel.y = 0
        vel.x = char.spd
    }
    else {
        vel.x = 0
        vel.y = 0
    }
}

function health() {
    
    fill(255,0,0)
    text("Lives : " + life, 50, 30)
}
function collide(x1,y1,x2,y2,x3,y3,num,spc) {
    let intersect = dist(x1,y1,x2,y2) + dist(x1,y1,x3,y3)
    let hit = dist(55, 0, lfocus, 0) + dist(55, 0, rfocus, 0)
    // push()
    // stroke('red')
    // fill('red')
    // strokeWeight(2)
    // line(x1,y1,x2,y2)
    // pop()
    if (intersect <= hit) {
        if(spc >= 10 && spc < 20) {
           life -= 2 
        } else if (spc == 100) {
            life -= 5
        } else {
            life -= 1
        }
        x_circle[num] = 700
        spd[num] = skibidi()
        y_circle[num] = skibidiV2()
        ufoSpc[num] = round(random(0,100))
    }
    
}

function collide2(x1,y1,x2,y2,x3,y3,num) {
    let intersect = dist(x1,y1,x2,y2) + dist(x1,y1,x3,y3)
    let hit = dist(72.5, 0, lfocus2, 0) + dist(72.5, 0, rfocus2, 0)
    // push()
    // stroke('red')
    // fill('red')
    // strokeWeight(2)
    // line(x1,y1,(x2+x3)/2,(y2+y3)/2)
    // pop()
    
    if (intersect <= hit) {
        x_circle[num] = 700
        spd[num] = skibidi()
        y_circle[num] = skibidiV2()
    }
    
}

function collide3(x1,y1,x2,y2,num) {
    let intersect = dist(x1,y1,x2,y2)
    let hit = dist(45,0,0,0)
    // push()
    // stroke('red')
    // fill('red')
    // strokeWeight(2)
    // line(x1,y1,x2,y2)
    // pop()
    
    if (intersect <= hit) {
        skibX[num] = -300
        life += 2
    }
    
}

function skibidi() {
    if(diff == 4) {
        spdy = 5
    } else {
        spdy = round(random(3,10))
    }
    return spdy
}

function skibidiV2() {
    updwn = round(random(15,585))
    return updwn
}

function skibidiV3() {
    leftright = round(random(25,575))
    return leftright 
}

function skibidiV4() {
    speder = round(random(5,15))
    return speder
}

function pain() {
    for(let i = 0; i < circNum; i++) {
        collide(char.x, char.y, x_circle[i]+lfocus, y_circle[i], x_circle[i]+rfocus, y_circle[i],i,ufoSpc[i])
    }
    if(secret == 8 && diff == 4) {
        for(let i = 0; i < circNum; i++) {
            collide2(goonX, goonY, x_circle[i]+lfocus2, y_circle[i], x_circle[i]+rfocus2, y_circle[i],i,ufoSpc[i])
        }
    }
}


function gradientHorizontal(startColor,endColor,startX = 0, startY = 0, w = width, h = height, steps = 100, alpha = 255){
    let endY = startY + h;
    let stepSize = (endY - startY) / steps
    
        
    noStroke();
    for (let y = startY; y < endY; y += stepSize) {
    let clr = getColor(startColor, endColor, y, startY, endY);  
    fill(clr);
    rect(startX, y, w, stepSize);
    
    }
    
}

function borders() {
    if(char.x < 25) {
        char.x = 25
    } else if(char.x > 575) {
        char.x = 575
    }
    if(char.y < 25) {
        char.y = 25
    } else if(char.y > 575) {
        char.y = 575
    }
}

function death() {
    if(life <= 0) {
        life = 0
        gmspd = 0
    }
}

function tmr() {
    fill("red")
        text("Timer : " + timer, 500, 30)
    if (fps >= 60) {
        fps = 0
        timer ++
        for(let i = 0; i < 4; i ++) {
            pwrtimer[i] ++
        }
    }
    
}

function rst() {
    fill('purple')
    buttonGrow(80,400,440,120)
    rect(80-(grow[0]/2),400-(grow[0]/2),440+grow[0],120+grow[0])
    push()
    fill("yellow")
    translate(300,460)
    scale(4)
    text("Reset", 0, 0)
    pop()
}

function mouseReleased() {
    //secret button
    if(abs(dist(mouseX,mouseY,300,300)) < 150 && mouseY <= 300) {
            if(strtspd < 1 && diffVal < 1 && secret <= 8) {
                secret ++
            }
    }
    if(abs(dist(mouseX,mouseY,300,300)) < 300 && mouseY <= 300) {
            if(gmspd > 0 && strtspd > 0 && secret <= 8) {
                secret ++
            }
    }
    //reset button
    if(mouseX >= 80 && mouseX <= 520) {
        if(mouseY >= 400 && mouseY <= 520) {
            if(gmspd < 1) {
                restart()    
            }
        }
    }
    
    // easy to imposs buttons
    if(mouseX >= 80 && mouseX <= 520) {
        if(mouseY >= 40 && mouseY <= 140) {
            if(strtspd < 1 && diffVal == 1) {
                diff = 0
                difficulty()
                strtspd = 1
                restart()
            }
        }
    }
    if(mouseX >= 80 && mouseX <= 520) {
        if(mouseY >= 180 && mouseY <= 280) {
            if(strtspd < 1 && diffVal == 1) {
                diff = 1
                difficulty()
                strtspd = 1
                restart()
            }
            }
    }
    if(mouseX >= 80 && mouseX <= 520) {
        if(mouseY >= 320 && mouseY <= 420) {
            if(strtspd < 1 && diffVal == 1) {
                diff = 2
                difficulty()
                strtspd = 1
                restart()
            }
        }
    }
    if(mouseX >= 80 && mouseX <= 520) {
        if(mouseY >= 460 && mouseY <= 560) {
            if(strtspd < 1 && diffVal == 1) {
                diff = 3
                difficulty()
                strtspd = 1
                restart()
            }
        }
    }
    if(mouseX >= 80 && mouseX <= 520) {
        if(mouseY >= 600 && mouseY <= 700) {
            if(strtspd < 1 && diffVal == 1) {
                diff = 4
                difficulty()
                strtspd = 1
                restart()
            }
        }
    }
    // settings
    if(mouseX >= 500 && mouseX <= 600) {
        if(mouseY >= 0 && mouseY <= 100) {
            if(gmspd < 1) {
                diffVal = 1
                strtspd = 0
                gmspd = 1
            }
        }
    }
    //start button
    if(mouseX >= 125 && mouseX <= 475) {
        if(mouseY >= 400 && mouseY <= 520) {
            if(strtspd < 1 && diffVal < 1) {
                diffVal = 1
            }
        }
    }
    
}
  
function restart() {
    gmspd = 1;
    life = 10;
    timer = 0;
    fps = 0;
    char.x = 75
    char.y = 300
    createCanvas(600, 600);
    vel = createVector(0,0)
    for(let i = 0; i < circNum; i++) {
        ufoSpc[i] = round(random(0,100))
        spd[i] = skibidi()
        y_circle[i] = skibidiV2()
        dia_circle[i] = 50
    }
    for(let i = 0; i < circNum; i++) {
        x_circle[i] = placement()
    }
    for(let i = 0; i < 4; i++) {
        skibX[i] = skibidiV3()
        skibY[i] = -100
    }
    createConsole("lines");
    lfocus = -sqrt(sq(55)-sq(35))
    rfocus = sqrt(sq(55)-sq(35))
    lfocus2 = -sqrt(sq(72.5)-sq(52.5))
    rfocus2 = sqrt(sq(72.5)-sq(52.5))
  
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);
    frameRate(120)    
}

function start() {
    let clr = { r : 128, g : 0, b : 128}
    
    fill(clr.r,clr.g,clr.b)
    buttonGrow(125,400,350,120)
    rect(125-(grow[1]/2),400-(grow[1]/2),350+grow[1],120+grow[1])
    push()
    fill("yellow")
    translate(300,460)
    scale(6)
    text("Start ", 0, 0)
    pop()
    push()
    fill("yellow")
    translate(300,75)
    scale(6)
    text("Steven Even!",0,0)
    pop()
    
}



function facing(x1,y1,X2,Y2) {
    let xdis = x1-X2
    let ydis = y1-Y2
    let slope = xdis/ydis
    let invSlope = ydis/xdis
    let ud = 0
    let lr = 0
    
    // console.log(slope)
    
        
        // flip for up and down
        if (ydis < 0) {
            ud = 180
        }
        else {
            ud = 0
        }
        
        //flip for left and right
        if (xdis < 0) {
            lr = 0
        }
        else {
            lr = 180
        }
        
        //rotates to mouse
        if (1 >= slope && slope >= -1) {
            rotateval = map(slope,1,-1,-45,45,true)+ud
            return rotateval
        }
        
        else {
        rotateval = map(invSlope,-1,1,45,135,true)+lr
        return rotateval
        }

}

function buttonGrow(x,y,w,h, v = 0) {
    if(mouseX >= x && mouseX <= x+w) {
        if(mouseY >= y && mouseY <= y+h) {
            if(v == 0) {
                grow[0] = 30
                grow[1] = 20
                grow[2] = 20
            } else if(v == 1) {
                grow[3] = 20
            } else if(v == 2) {
                grow[4] = 60
            }
        } else {
            grow[0] = 0
            grow[1] = 0
            grow[2] = 0
            grow[3] = 0
            grow[4] = 0
        }
    }
}

function selectDiff() {
    for(let i = 0; i < 6; i++) {
        fill(diffCallV3(i))
        buttonGrow(80,40+140*i,440,100)
        rect(80-(grow[2]/2),40+140*i-grow[2]/2,440+grow[2],100+grow[2])
        push()
        translate(300,90+140*i)
        fill('yellow')
        scale(4)
        text(diffCall(i),0,0)
        pop()
    }
}

function difficulty() {
    //easy
    if(diff == 0) {
        circNum = 5
        life = 10
        diffVal = 0
    } //medium
    else if(diff == 1) {
        circNum = 12
        life = 10
        diffVal = 0
    } //hard
    else if(diff == 2) {
        circNum = 30
        life = 10
        diffVal = 0
        
    } //impossible 
    else if(diff == 3) {
        circNum = 100
        life = 10
        diffVal = 0
    } //possible
    else if(diff == 4) {
        circNum = 300
        life = 10
        diffVal = 0
    }
}


function gear() {
    buttonGrow(500,0,100,100,2)
    push()
    translate(500,0)
    scale(1/6)
    translate( 300, 300)
    fill('grey')
    square (-300-(grow[4]/2), -300-(grow[4]/2),600+grow[4])  
    fill('black')
    circle(0,0, 360)
    for (let i = 0; i < 8; i++) {
        rect(-50,-225,100,100)
        rotate(45)
    }
    fill('grey')
    circle(0, 0, 200)
    pop()

}

function diffDisplay() {
    push()
    translate(300,50)
    scale(3.5)
    fill(diffCallV2(diff))
   text("Difficulty: " + diffCall(diff) ,0,0)
   pop()

    
    
}

function diffCall(diffi) {
    if(diffi == 0) {
        return "Easy"
    }
    if(diffi == 1) {
        return "Medium"
    }
    if(diffi == 2){
        return "Hard"
    }
    if(diffi == 3) {
    return "Impossible"
    }
    if(diffi == 4) {
        return "Possible"
    }
    if(diffi == 5) {
        return "Fake"
    }
}

function diffCallV2(diffi) {
    if(diffi == 0) {
        return "Green"
    }
    if(diffi == 1) {
        return "Orange"
    }
    if(diffi == 2) {
        return "Red"
    }
    if(diffi == 3) {
        return "White"
    }
    if(diffi == 4) {
        return "purple"
    }
}

function diffCallV3(diffi) {
    if(diffi == 0) {
        return "Green"
    }
    if(diffi == 1) {
        return "Orange"
    }
    if(diffi == 2) {
        return "Red"
    }
    if(diffi == 3) {
        return "black"
    }
    if(diffi == 4) {
        return "purple"
    }
    if(diffi == 5) {
        return "green"
    }
}

function endText(time) {
    if(time <= 10) {
        push()
        fill('red')
        translate(300,300)
        scale(5)
        text('You Suck Kid',0,0)
        pop()
    }
    if(time > 10 && time <= 30) {
        push()
        fill('red')
        translate(300,300)
        scale(5)
        text('Get Better Kid',0,0)
        pop()
    }
    if(time > 30 && time <= 50) {
        if(diff == 4) {
            push()
            fill('red')
            translate(300,300)
            scale(4)
            text("You found the secret",0,0)
            pop()
        }
    } else if(time > 30 && time <= 50) {
        push()
        fill('red')
        translate(300,300)
        scale(4)
        text('Click on the Sun 8 times',0,0)
        pop()
    }
    if(time > 50 && time <= 100) {
        push()
        fill('red')
        translate(300,300)
        scale(5)
        text('Skill Issue',0,0)
        pop()
    }
    if(time > 100 && time <= 250) {
        push()
        fill('red')
        translate(300,300)
        scale(5)
        text('Your Adopted',0,0)
        pop()
    }
    if(time > 250) {
        push()
        fill('red')
        translate(300,300)
        scale(5)
        text('Touch Grass Kid',0,0)
        pop()
    }
}

function placement() {
    if(diff == 4) {
        return round(random(650,1250))
    } else {
        return 650
    }
}

function powerup() {
    for(let i = 0; i < 4; i++) {
        fill("red")
        circle(skibX[i],skibY[i],50)
        if(pwrtimer[i] >= 20) {
            skibY[i] += pwrspd[i]
        } else {
            skibY[i] += 0
        }
        collide3(char.x,char.y,skibX[i],skibY[i],i)
        
        if(skibY[i] > 700) {
            skibY[i] = -100
            skibX[i] = skibidiV3()
            pwrtimer[i] = 0
            pwrspd[i] = skibidiV4()
        }
    }
    
}