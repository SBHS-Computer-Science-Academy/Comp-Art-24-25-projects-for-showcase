class Gumdrop {
    constructor(x, y, w, h, clr) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = clr
        this.isDragging = false;
    }
    
    show() {
         fill(this.color)
        arc(this.x, this.y,this.w,this.h, 160, 20, CHORD)
    }
    
    checkForDrag() {
        let hit = collidePointEllipse(mouseX, mouseY, this.x, this.y, this.w, this.h)
        this.isDragging = hit && mouseY < this.y + 8;
    }
    drag() {
        this.x += (mouseX - pmouseX);
        this.y += (mouseY - pmouseY);
    }
    
    stopDrag() {
        this.isDragging = false;
    }
}


let gumdrops = []
let backgroundColor
let backgroundColorValue = 0
let backgroundStart
let backgroundEnd
let currentColor;
let circleSizes = [30, 60, 70, 90, 100, 110, 120, 130, 160, 170]; 
let circlePositions = [50, 100, 150, 200, 250, 300, 350, 400, 450]; 
let circleDiameter = 30;
let snowX = []
let snowY = []
let snowD = []
let numberSnow = 14
let snowSpeed = [];

function setup() {
   let myCanvas = createCanvas(700, 570);
  myCanvas.parent("myCanvas");
  
  //createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  let pinkDrop = new Gumdrop(240, 495,30,40, color(242, 121, 230))
  let orangeDrop = new Gumdrop(273, 495,30,40, color(247, 206, 143))
  let purpleDrop = new Gumdrop(427, 495,30,40, color(193, 144, 222))
  let greenDrop = new Gumdrop(457, 495,30,40, color(181, 219, 162))
  
  gumdrops = [pinkDrop, orangeDrop, purpleDrop, greenDrop]
  
  backgroundStart = color(171, 211, 217)
  backgroundEnd = color(33, 32, 79)
  backgroundColor = backgroundStart
      makeSnow()
}

function draw() {
  background(backgroundColor);
  drawHouse1Base();
  drawHouse1Details();
  drawHouse2Base();
  drawLandscape();
  drawHouse3();
  drawHouse3Details();
  drawSnow();
  moveSnow();
    
  
  for (let gumdrop of gumdrops) {
    gumdrop.show();
  
    if (gumdrop.isDragging) {
      gumdrop.drag();
    }
  }
  currentColor = color(get(mouseX, mouseY));
  

 
}
 
function mousePressed() {
     for (let gumdrop of gumdrops) {
        gumdrop.checkForDrag();
     }
     
     
    
     if(currentColor.red == backgroundColor.red && 
     currentColor.green == backgroundColor.green && 
     currentColor.blue == backgroundColor.blue) {
         backgroundColorValue += 0.25
         backgroundColorValue %= 1;
         backgroundColor = lerpColor(backgroundStart, backgroundEnd, backgroundColorValue)
     }
     
 }
 
function mouseReleased() {
     for (let gumdrop of gumdrops) {
        gumdrop.stopDrag();
     }
 }

function drawHouse1Base() {
    fill(181, 140, 94)
    noStroke();
    rect(200,280,300,220)
    //triangle
    beginShape(); 
  vertex(200, 279); 
  vertex(349, 137); 
  vertex(505, 278); 
  vertex(507, 280); 
  vertex(198, 280); 
endShape(); 
//peppermint siding 1
fill('lightPink')
 beginShape(); 
  vertex(198, 280); 
  vertex(197, 499); 
  vertex(208, 499); 
  vertex(207, 270); 
  vertex(197, 281); 
  endShape(); 
  //peppermint siding 2
  beginShape(); 
  vertex(505, 279); 
  vertex(506, 500); 
  vertex(495, 500); 
  vertex(495, 266); 
  vertex(504, 278); 
  endShape(); 
  stroke('red')
  fill('red')
  
 
    //icing
    noStroke();
    fill('white')
    beginShape(); 
  vertex(182, 287); 
  vertex(348, 130); 
  vertex(520, 284); 
  vertex(516, 288); 
  vertex(348, 137); 
  vertex(188, 290); 
  vertex(182, 286); 
  endShape(); 
  //wave
beginShape(); 
  curveVertex(226, 255);  // control point 
  curveVertex(226, 255); 
  curveVertex(244, 261); 
  curveVertex(278, 250); 
  curveVertex(302, 261); 
  curveVertex(331, 250); 
  curveVertex(362, 263); 
  curveVertex(388, 252); 
  curveVertex(418, 262); 
  curveVertex(445, 248); 
  curveVertex(472, 261); 
  curveVertex(480, 259); 
  curveVertex(484, 260); 
  curveVertex(485, 263); 
  curveVertex(477, 271); 
  curveVertex(454, 262); 
  curveVertex(421, 274); 
  curveVertex(390, 264); 
  curveVertex(366, 275); 
  curveVertex(331, 263); 
  curveVertex(306, 274); 
  curveVertex(279, 261); 
  curveVertex(251, 274); 
  curveVertex(221, 260); 
  curveVertex(227, 255); 
  curveVertex(227, 255); // control point 
  endShape(); 
  beginShape(); 
  vertex(225, 251); 
  vertex(228, 258); 
  vertex(220, 257); 
  vertex(226, 251); 
  endShape(); 
  beginShape(); 
  vertex(482, 255); 
  vertex(479, 263); 
  vertex(491, 261); 
  vertex(482, 254); 
  endShape(); 
  //door!
  beginShape(); 
  curveVertex(303, 497);  // control point 
  curveVertex(303, 497); 
  curveVertex(303, 373); 
  curveVertex(382, 364); 
  curveVertex(397, 496); 
  curveVertex(397, 496); // control point 
  endShape(); 
  beginShape(); 
  curveVertex(301, 376);  // control point 
  curveVertex(301, 376); 
  curveVertex(294, 405); 
  curveVertex(297, 499); 
  curveVertex(297, 499); // control point 
  endShape(); 
  beginShape(); 
  vertex(296, 445); 
  vertex(296, 500); 
  vertex(397, 500); 
  vertex(397, 496); 
  vertex(296, 445); 
  endShape(); 
  //chimney
  fill(181, 140, 94)
  beginShape(); 
  vertex(410, 185); 
  vertex(409, 133); 
  vertex(450, 133); 
  vertex(450, 221); 
  vertex(409, 185); 
  endShape(); 
}

function drawHouse1Details() {
    //doorknob
    noStroke();
    fill(41, 70, 117);
    circle(378, 435 ,15)
    //circles above wave
    fill(247, 190, 239);
    circle(244, 252, 10)
    fill(167, 212, 172)
    circle(303,252,10)
    fill(215, 174, 230)
    circle(360,252,10)
    fill(91, 168, 235)
    circle(417,252,10)
    fill(245, 228, 162)
    circle(471,252,10)
  //icing
  fill('white')
  beginShape(); 
  curveVertex(409, 134);  // control point 
  curveVertex(409, 134); 
  curveVertex(410, 145); 
  curveVertex(413, 137); 
  curveVertex(416, 142); 
  curveVertex(420, 138); 
  curveVertex(420, 158); 
  curveVertex(423, 159); 
  curveVertex(423, 144); 
  curveVertex(430, 143); 
  curveVertex(431, 178); 
  curveVertex(437, 181); 
  curveVertex(437, 139); 
  curveVertex(441, 145); 
  curveVertex(445, 139); 
  curveVertex(448, 144); 
  curveVertex(450, 134); 
  curveVertex(409, 134); 
  curveVertex(409, 134); // control point 
  endShape(); 
   beginShape(); 
  vertex(409, 135); 
  vertex(409, 133); 
  vertex(450, 133); 
  vertex(450, 137); 
  vertex(408, 135); 
  endShape(); 
  //peppermint
  circle(350, 200,50)
  fill(235, 92, 89)
  beginShape(); 
  vertex(348, 198); 
  vertex(358, 177); 
  vertex(355, 176); 
  vertex(347, 175); 
  vertex(341, 176); 
  vertex(337, 178); 
  vertex(334, 179); 
  vertex(348, 197); 
  endShape(); 
   beginShape(); 
  vertex(347, 177); 
  vertex(349, 176); 
  vertex(353, 175); 
  vertex(357, 176); 
  vertex(358, 177); 
  vertex(354, 183); 
  vertex(348, 178); 
  endShape(); 
  beginShape(); 
  vertex(349, 198); 
  vertex(374, 195); 
  vertex(375, 200); 
  vertex(375, 204); 
  vertex(375, 207); 
  vertex(373, 211); 
  vertex(370, 214); 
  vertex(349, 198); 
  endShape(); 
  beginShape(); 
  vertex(348, 198); 
  vertex(342, 223); 
  vertex(347, 225); 
  vertex(352, 225); 
  vertex(358, 224); 
  vertex(362, 221); 
  vertex(348, 197); 
  endShape(); 
  beginShape(); 
  vertex(348, 198); 
  vertex(326, 194); 
  vertex(325, 204); 
  vertex(327, 209); 
  vertex(327, 212); 
  vertex(349, 199); 
  endShape(); 
  beginShape(); 
  vertex(327, 196); 
  vertex(325, 197); 
  vertex(326, 207); 
  vertex(328, 210); 
  vertex(335, 204); 
  vertex(326, 196); 
  endShape(); 
   beginShape(); 
  vertex(346, 177); 
  vertex(348, 175); 
  vertex(356, 176); 
  vertex(349, 179); 
  vertex(347, 177); 
  endShape(); 
  //wrapper on peppermint
  fill('white')
   beginShape(); 
  vertex(374, 195); 
  vertex(376, 192); 
  vertex(380, 189); 
  vertex(383, 189); 
  vertex(385, 191); 
  vertex(383, 195); 
  vertex(381, 198); 
  vertex(383, 200); 
  vertex(386, 202); 
  vertex(385, 205); 
  vertex(382, 207); 
  vertex(377, 207); 
  vertex(375, 207); 
  vertex(376, 204); 
  vertex(376, 201); 
  vertex(375, 198); 
  vertex(374, 196); 
  vertex(373, 194); 
  endShape(); 
   beginShape(); 
  vertex(324, 195); 
  vertex(316, 193); 
  vertex(314, 196); 
  vertex(314, 199); 
  vertex(315, 201); 
  vertex(319, 202); 
  vertex(320, 203); 
  vertex(319, 204); 
  vertex(318, 206); 
  vertex(316, 208); 
  vertex(316, 210); 
  vertex(318, 212); 
  vertex(320, 212); 
  vertex(325, 208); 
  vertex(324, 203); 
  vertex(324, 199); 
  vertex(325, 196); 
  endShape(); 
  
  //window 1
  fill('white')
  square(228,315,60)
  square(410,315,60)
  fill(230, 228, 119);
  square(233, 318,23 )
  square(233,347,23)
  square(261,318,23)
  square(261,347,23)
  
  //peppermint windowsill 1
  fill(250, 232, 242)
  rect(223,374,70,15)
  fill(250, 79, 75)
  beginShape(); 
  vertex(224, 375); 
  vertex(235, 389); 
  vertex(223, 389); 
  vertex(223, 376); 
  endShape(); 
  beginShape(); 
  vertex(241, 375); 
  vertex(252, 390); 
  vertex(260, 390); 
  vertex(249, 374); 
  vertex(240, 374); 
  endShape(); 
   beginShape(); 
  vertex(265, 374); 
  vertex(275, 389); 
  vertex(282, 389); 
  vertex(274, 374); 
  vertex(264, 374); 
  endShape(); 
  beginShape(); 
  vertex(284, 374); 
  vertex(292, 384); 
  vertex(293, 384); 
  vertex(292, 375); 
  vertex(284, 374); 
  endShape(); 
  beginShape(); 
  vertex(287, 374); 
  vertex(293, 374); 
  vertex(294, 385); 
  vertex(288, 375); 
  endShape(); 
  beginShape(); 
  vertex(239, 375); 
  vertex(247, 381); 
  vertex(247, 375); 
  vertex(239, 375); 
  endShape(); 
  
  
  //window 2
  fill(230, 228, 119)
  square(414,318,23)
  square(442,318,23)
  square(414,347,23)
  square(442,347,23)
  //peppermint windowsill
  fill(250, 232, 242)
  rect(405,374,70,15)
  fill(250, 79, 75)
  beginShape(); 
  vertex(406, 377); 
  vertex(417, 389); 
  vertex(406, 389); 
  vertex(405, 376); 
  vertex(416, 388); 
  endShape(); 
  beginShape(); 
  vertex(405, 380); 
  vertex(405, 390); 
  vertex(409, 389); 
  vertex(406, 381); 
  endShape();
  beginShape(); 
  vertex(422, 374); 
  vertex(436, 389); 
  vertex(445, 389); 
  vertex(433, 375); 
  vertex(422, 374); 
  endShape(); 
  beginShape(); 
  vertex(448, 373); 
  vertex(461, 389); 
  vertex(470, 389); 
  vertex(459, 375); 
  vertex(449, 375); 
  endShape(); 
  beginShape(); 
  vertex(471, 375); 
  vertex(474, 378); 
  vertex(474, 374); 
  vertex(470, 374); 
  vertex(472, 376); 
  endShape(); 
   beginShape(); 
  vertex(473, 377); 
  vertex(475, 380); 
  vertex(475, 375); 
  vertex(472, 375); 
  endShape(); 
  //circles about window
  fill(186, 227, 225)
  circle(258,305,7)
  fill(101, 119, 252)
  circle(237, 305,7)
  fill(105, 192, 255)
  circle(277, 305 , 7)
  fill(186, 227, 225)
  circle(439,305,7)
  fill(101, 119, 252)
  circle(419,305,7)
  fill(105, 192, 255)
  circle(458,305,7)
 
  
  //christmas tree left
  fill('green')
  beginShape(); 
  vertex(210, 453); 
  vertex(190, 499); 
  vertex(231, 499); 
  vertex(211, 454); 
  endShape(); 
  beginShape(); 
  vertex(199, 472); 
  vertex(224, 472); 
  vertex(210, 445); 
  vertex(194, 472); 
  vertex(202, 472); 
  endShape(); 
  beginShape(); 
  vertex(219, 472); 
  vertex(226, 472); 
  vertex(211, 446); 
  vertex(208, 455); 
  vertex(219, 471); 
  endShape(); 
  beginShape(); 
  vertex(209, 434); 
  vertex(219, 452); 
  vertex(200, 452); 
  vertex(209, 435); 
  endShape(); 
  
  //right tree
  beginShape(); 
  vertex(514, 499); 
  vertex(478, 500); 
  vertex(499, 464); 
  vertex(513, 500); 
  endShape(); 
  beginShape(); 
  vertex(500, 466); 
  vertex(516, 499); 
  vertex(495, 500); 
  vertex(500, 467); 
  endShape(); 
  beginShape(); 
  vertex(487, 478); 
  vertex(512, 478); 
  vertex(497, 451); 
  vertex(485, 478); 
  vertex(493, 478); 
  endShape(); 
  beginShape(); 
  vertex(490, 462); 
  vertex(508, 462); 
  vertex(497, 442); 
  vertex(486, 462); 
  vertex(499, 462); 
  endShape(); 
  beginShape(); 
  vertex(492, 462); 
  vertex(482, 479); 
  vertex(514, 479); 
  vertex(505, 462); 
  vertex(492, 462); 
  endShape(); 
  
  //blue chunk
  fill(171, 211, 217)
  beginShape(); 
  vertex(200, 500); 
  vertex(506, 500); 
  vertex(507, 515); 
  vertex(200, 515); 
  vertex(199, 500); 
  endShape(); 
  
  

    
}

function drawHouse2Base() {
    noStroke();
    fill(181, 140, 94)
    beginShape(); 
  vertex(528, 183); 
  vertex(530, 527); 
  vertex(699, 527); 
  vertex(700, 174); 
  vertex(529, 174); 
  vertex(528, 171); 
  vertex(528, 197); 
  endShape(); 
  beginShape(); 
  vertex(622, 105); 
  vertex(529, 175); 
  vertex(700, 174); 
  vertex(619, 103); 
  endShape(); 
  beginShape(); 
  vertex(622, 107); 
  vertex(699, 161); 
  vertex(698, 187); 
  vertex(618, 112); 
  vertex(623, 107); 
  endShape(); 
  fill('white')
   //roof lining
  fill('white')
  beginShape(); 
  vertex(621, 107); 
  vertex(521, 181); 
  vertex(517, 174); 
  vertex(617, 100); 
  vertex(621, 96); 
  vertex(700, 154); 
  vertex(700, 162); 
  vertex(621, 107); 
  endShape(); 
  
  //door
  fill(145, 97, 33)
  beginShape(); 
  curveVertex(599, 526);  // control point 
  curveVertex(599, 526); 
  curveVertex(600, 402); 
  curveVertex(635, 355); 
  curveVertex(670, 387); 
  curveVertex(673, 526); 
  curveVertex(673, 526); // control point 
  endShape(); 
  
  //dots around door
  fill('white')
  circle(592, 519,8)
  circle(592,509,5)
  circle(590, 474 ,10)
  circle(591, 434 ,8)
  circle(592, 424,5 )
  circle(594, 396,10 )
  circle(606, 371,8)
  circle(612, 365 ,5)
  circle(630, 350,10)
  circle(658, 354 ,8)
  circle(664, 360 ,5)
  circle(676, 383 ,10)
  circle(679, 408 ,8)
  circle(679, 416, 5)
  circle(681, 441 ,10)
  circle(680, 469,8)
  circle(680, 478 ,5)
  circle(680, 506,10)
  //window
  circle(629,263,70)
  fill(223, 184, 242)
  beginShape(); 
  vertex(623, 230); 
  vertex(624, 296); 
  vertex(624, 297); 
  vertex(629, 298); 
  vertex(631, 298); 
  vertex(637, 297); 
  vertex(635, 230); 
  vertex(634, 229); 
  vertex(629, 228); 
  vertex(622, 229); 
  endShape(); 
  beginShape(); 
  vertex(595, 256); 
  vertex(662, 256); 
  vertex(665, 261); 
  vertex(665, 265); 
  vertex(663, 271); 
  vertex(596, 270); 
  vertex(594, 266); 
  vertex(594, 260); 
  vertex(596, 256); 
  endShape(); 
  beginShape(); 
  vertex(598, 256); 
  vertex(595, 256); 
  vertex(594, 261); 
  vertex(602, 261); 
  vertex(598, 256); 
  endShape(); 
  strokeWeight(5)
  stroke(145, 97, 33)
  line(621, 97, 621, 78); 
  
  //star
  strokeWeight(2)
  stroke(255, 240, 87)
  fill(250, 240, 140)
  beginShape(); 
  vertex(620, 78); 
  vertex(609, 84); 
  vertex(614, 69); 
  vertex(603, 69); 
  vertex(614, 62); 
  vertex(623, 50); 
  vertex(630, 60); 
  vertex(640, 64); 
  vertex(628, 68); 
  vertex(637, 80); 
  vertex(621, 78); 
  endShape(); 
  
  //lights
  noStroke();
  fill('pink')
  ellipse(539, 171,10,15)
  fill(250, 117, 148)
  ellipse(556,157,10,15)
  fill(240, 195, 250)
  ellipse(571, 147,10,15)
  fill(237, 183, 234)
  ellipse(586, 136 ,10,15)
  fill(247, 83, 72)
  ellipse(604, 122 ,10,15)
  fill(158, 132, 191)
  ellipse(631, 118 ,10,15)
  fill(245, 215, 241)
  ellipse(648, 127 ,10,15)
  fill(250, 95, 229)
  ellipse(666,142,10,15)
  fill(250, 117, 148)
  ellipse(686,155,10,15)
  
  //designs on gingerbread
  fill(222, 241, 252)
  
  beginShape(); 
  vertex(655, 213); 
  vertex(682, 180); 
  vertex(675, 168); 
  vertex(666, 175); 
  vertex(671, 182); 
  vertex(674, 179); 
  vertex(670, 175); 
  vertex(674, 172); 
  vertex(678, 180); 
  vertex(651, 211); 
  vertex(655, 213); 
  endShape(); 
  beginShape(); 
  vertex(598, 211); 
  vertex(571, 183); 
  vertex(580, 169); 
  vertex(588, 175); 
  vertex(584, 180); 
  vertex(581, 184); 
  vertex(578, 182); 
  vertex(583, 175); 
  vertex(580, 173); 
  vertex(575, 181); 
  vertex(602, 208); 
  vertex(597, 212); 
  endShape(); 
   beginShape(); 
  curveVertex(623, 191);  // control point 
  curveVertex(623, 191); 
  curveVertex(613, 182); 
  curveVertex(608, 188); 
  curveVertex(624, 205); 
  curveVertex(641, 185); 
  curveVertex(635, 180); 
  curveVertex(624, 190); 
  curveVertex(624, 190); // control point 
  endShape(); 
  beginShape(); 
  curveVertex(660, 446);  // control point 
  curveVertex(660, 446); 
  curveVertex(654, 443); 
  curveVertex(652, 448); 
  curveVertex(661, 454); 
  curveVertex(668, 446); 
  curveVertex(666, 441); 
  curveVertex(661, 447); 
  curveVertex(661, 447); // control point 
  endShape(); 
  
  // snow at base of house
  beginShape(); 
  vertex(531, 524); 
  vertex(531, 540); 
  vertex(700, 540); 
  vertex(699, 524); 
  vertex(697, 522); 
  vertex(691, 524); 
  vertex(689, 525); 
  vertex(681, 525); 
  vertex(677, 523); 
  vertex(672, 519); 
  vertex(667, 518); 
  vertex(664, 518); 
  vertex(662, 518); 
  vertex(660, 519); 
  vertex(658, 521); 
  vertex(657, 522); 
  vertex(656, 523); 
  vertex(650, 522); 
  vertex(643, 521); 
  vertex(636, 521); 
  vertex(629, 522); 
  vertex(625, 522); 
  vertex(622, 522); 
  vertex(620, 520); 
  vertex(615, 519); 
  vertex(613, 519); 
  vertex(610, 521); 
  vertex(609, 523); 
  vertex(605, 519); 
  vertex(602, 519); 
  vertex(599, 520); 
  vertex(598, 521); 
  vertex(598, 522); 
  vertex(597, 523); 
  vertex(589, 522); 
  vertex(585, 521); 
  vertex(562, 514); 
  vertex(553, 513); 
  vertex(546, 514); 
  vertex(538, 515); 
  vertex(533, 517); 
  vertex(530, 518); 
  vertex(531, 525); 
  endShape(); 
  beginShape(); 
  vertex(533, 517); 
  vertex(530, 519); 
  vertex(531, 528); 
  vertex(545, 528); 
  vertex(532, 518); 
  endShape();
  
}

function drawLandscape() {
    //moon
    let mouseIsOnMoon =  collidePointCircle(mouseX, mouseY, 70,62,80);
    let mouseIsOnCover =  collidePointCircle(mouseX, mouseY, 99,62,70);
    if (mouseIsOnMoon && !mouseIsOnCover) {
        fill(108, 148, 230)
    
    }
    else {
        fill(222, 241, 252)
    }
    circle(70, 62,80)
    fill(backgroundColor)
    circle(99,62,70)
    
    //text
    fill('navy')
    textSize(18)
    text("Interactive Gingerbread House!", 358,25) 
    textSize(12)
    text("Click on the sky to turn the scene into night, hover over the moon to change its color,", 360,45)
    text("and drag the gumdrops to move them to a different house.",358,60)
    
    //big snow
    fill('white')
    beginShape();
  curveVertex(174, 518); // control point
  curveVertex(174, 518);
  curveVertex(201, 502);
  curveVertex(211, 498);
  curveVertex(225, 499);
  curveVertex(252, 502);
  curveVertex(264, 498);
  curveVertex(270, 495);
  curveVertex(274, 497);
  curveVertex(276, 499);
  curveVertex(284, 500);
  curveVertex(285, 498);
  curveVertex(295, 495);
  curveVertex(320, 502);
  curveVertex(332, 501);
  curveVertex(336, 499);
  curveVertex(339, 498);
  curveVertex(342, 497);
  curveVertex(347, 499);
  curveVertex(355, 496);
  curveVertex(365, 499);
  curveVertex(378, 495);
  curveVertex(392, 503);
  curveVertex(408, 494);
  curveVertex(428, 493);
  curveVertex(442, 500);
  curveVertex(465, 496);
  curveVertex(483, 496);
  curveVertex(502, 496);
  curveVertex(512, 505);
  curveVertex(519, 504);
  curveVertex(521, 514);
  curveVertex(529, 509);
  curveVertex(535, 516);
  curveVertex(697, 540);
  curveVertex(699, 568);
  curveVertex(151, 566);
  curveVertex(174, 518);
  curveVertex(174, 518); // control point
  endShape();
  beginShape();
  curveVertex(309, 499); // control point
  curveVertex(309, 499);
  curveVertex(388, 486);
  curveVertex(390, 506);
  curveVertex(400, 491);
  curveVertex(405, 502);
  curveVertex(390, 524);
  curveVertex(310, 518);
  curveVertex(312, 497);
  curveVertex(312, 497); // control point
  endShape();
  beginShape();
  curveVertex(197, 504); // control point
  curveVertex(197, 504);
  curveVertex(206, 494);
  curveVertex(210, 496);
  curveVertex(213, 499);
  curveVertex(218, 493);
  curveVertex(227, 500);
  curveVertex(241, 494);
  curveVertex(266, 501);
  curveVertex(288, 495);
  curveVertex(292, 503);
  curveVertex(224, 517);
  curveVertex(200, 501);
  curveVertex(200, 501); // control point
  endShape();
 beginShape();
  curveVertex(378, 501); // control point
  curveVertex(378, 501);
  curveVertex(403, 491);
  curveVertex(415, 503);
  curveVertex(378, 500);
  curveVertex(378, 500); // control point
  endShape();
   beginShape();
  vertex(398, 498);
  vertex(399, 511);
  vertex(377, 507);
  vertex(382, 495);
  vertex(398, 499);
  endShape();
  beginShape();
  vertex(698, 553);
  vertex(700, 569);
  vertex(623, 570);
  vertex(632, 558);
  vertex(698, 553);
  endShape();
  beginShape();
  curveVertex(506, 500); // control point
  curveVertex(506, 500);
  curveVertex(518, 504);
  curveVertex(532, 515);
  curveVertex(555, 513);
  curveVertex(594, 523);
  curveVertex(601, 519);
  curveVertex(606, 519);
  curveVertex(609, 523);
  curveVertex(613, 518);
  curveVertex(622, 520);
  curveVertex(626, 523);
  curveVertex(643, 520);
  curveVertex(656, 523);
  curveVertex(667, 517);
  curveVertex(681, 523);
  curveVertex(690, 524);
  curveVertex(697, 523);
  curveVertex(699, 542);
  curveVertex(505, 518);
  curveVertex(508, 501);
  curveVertex(508, 501); // control point
  endShape();
  
  //pathway
  stroke('green');
  beginShape();
  curveVertex(309, 502); // control point
  curveVertex(309, 502);
  curveVertex(320, 540);
  curveVertex(287, 567);
  curveVertex(287, 567); // control point
  endShape();
  beginShape();
  curveVertex(382, 500); // control point
  curveVertex(382, 500);
  curveVertex(399, 534);
  curveVertex(371, 569);
  curveVertex(371, 569); // control point
  endShape();
  
  //coverup bottom rigth corner
  noStroke();
  fill('white')
   beginShape();
  vertex(697, 553);
  vertex(701, 570);
  vertex(651, 570);
  vertex(700, 553);
  endShape();
  
  noStroke();
}

function drawHouse3() {
    //house base
    fill(181, 140, 94)
    rect(2, 234 ,160,300)
    triangle(3,234,80,171,162,235)
    stroke('white')
    strokeWeight(2)
    fill(181, 140, 94)
    beginShape();
  vertex(12, 233);
  vertex(80, 177);
  vertex(156, 237);
  endShape();
  beginShape();
  vertex(7, 235);
  vertex(7, 528);
  endShape();
  beginShape();
  vertex(157, 241);
  vertex(157, 528);
  endShape();
  // window 2
  circle(118,297,14)
  circle(138,297,14)
  circle(118,317,14)
  circle(138,317,14)
  //window 3
  fill(181, 140, 94)
  stroke('white')
  circle(30,297,14)
  circle(50,297,14)
  circle(30,317,14)
  circle(50,317,14)
  //door
  fill(30, 76, 156)
  stroke(168, 207, 230)
   beginShape();
  curveVertex(49, 533); // control point
  curveVertex(49, 533);
  curveVertex(51, 425);
  curveVertex(83, 382);
  curveVertex(111, 402);
  curveVertex(119, 446);
  curveVertex(120, 533);
  curveVertex(120, 533); // control point
  endShape();
  //fill in
  noStroke();
   beginShape();
  vertex(50, 534);
  vertex(120, 534);
  vertex(115, 529);
  vertex(58, 525);
  vertex(51, 533);
  endShape();
  //icing
  fill('white')
  beginShape();
  curveVertex(32, 209); // control point
  curveVertex(32, 209);
  curveVertex(72, 178);
  curveVertex(81, 172);
  curveVertex(95, 183);
  curveVertex(116, 200);
  curveVertex(133, 214);
  curveVertex(134, 227);
  curveVertex(127, 217);
  curveVertex(123, 221);
  curveVertex(120, 217);
  curveVertex(121, 250);
  curveVertex(110, 253);
  curveVertex(109, 220);
  curveVertex(102, 218);
  curveVertex(102, 227);
  curveVertex(96, 228);
  curveVertex(96, 220);
  curveVertex(89, 219);
  curveVertex(89, 228);
  curveVertex(89, 236);
  curveVertex(85, 236);
  curveVertex(83, 221);
  curveVertex(80, 224);
  curveVertex(80, 236);
  curveVertex(75, 235);
  curveVertex(76, 225);
  curveVertex(71, 222);
  curveVertex(71, 231);
  curveVertex(72, 247);
  curveVertex(65, 247);
  curveVertex(65, 222);
  curveVertex(53, 219);
  curveVertex(53, 229);
  curveVertex(48, 228);
  curveVertex(48, 217);
  curveVertex(34, 217);
  curveVertex(35, 250);
  curveVertex(19, 252);
  curveVertex(20, 224);
  curveVertex(12, 227);
  curveVertex(33, 209);
  curveVertex(33, 209); // control point
  endShape();
 
}

function drawHouse3Details() {
    //doorknob
    circle(107,465,14)
    //snow
    fill('white')
    beginShape();
  curveVertex(-1, 533); // control point
  curveVertex(-1, 533);
  curveVertex(21, 514);
  curveVertex(37, 527);
  curveVertex(46, 526);
  curveVertex(51, 525);
  curveVertex(70, 525);
  curveVertex(72, 529);
  curveVertex(76, 532);
  curveVertex(84, 523);
  curveVertex(95, 532);
  curveVertex(118, 523);
  curveVertex(139, 528);
  curveVertex(156, 526);
  curveVertex(164, 528);
  curveVertex(173, 539);
  curveVertex(187, 549);
  curveVertex(211, 550);
  curveVertex(223, 557);
  curveVertex(232, 566);
  curveVertex(235, 568);
  curveVertex(0, 569);
  curveVertex(0, 528);
  curveVertex(0, 528); // control point
  endShape();
  beginShape();
  vertex(236, 565);
  vertex(250, 569);
  vertex(191, 570);
  vertex(170, 570);
  vertex(171, 561);
  vertex(235, 565);
  endShape();
   beginShape();
  vertex(239, 565);
  vertex(255, 570);
  vertex(202, 570);
  vertex(221, 566);
  vertex(240, 565);
  endShape();
   //designs
   fill(250, 157, 238)
   circle(35,410,10)
   fill(245, 172, 113)
   circle(54,385,10)
   fill(221, 178, 247)
   circle(72,370,10)
   fill(245, 113, 119)
   circle(93,370,10)
   fill(158, 219, 218)
   circle(113,385,10)
   fill(115, 181, 112)
   circle(126,410,10)
   //star
   fill(224, 222, 139)
  beginShape();
  vertex(77, 342);
  vertex(83, 332);
  vertex(88, 341);
  vertex(98, 341);
  vertex(89, 347);
  vertex(94, 354);
  vertex(83, 347);
  vertex(74, 353);
  vertex(76, 345);
  vertex(66, 345);
  vertex(77, 341);
  endShape();
  
  //pathway for second house
  fill('white')
  stroke(223, 184, 242)
  beginShape();
  curveVertex(603, 519); // control point
  curveVertex(603, 519);
  curveVertex(608, 542);
  curveVertex(581, 570);
  curveVertex(581, 570); // control point
  endShape();
  beginShape();
  curveVertex(669, 519); // control point
  curveVertex(669, 519);
  curveVertex(673, 537);
  curveVertex(650, 569);
  curveVertex(650, 569); // control point
  endShape();
  //pathway for third hosue
  stroke(30, 76, 156)
  beginShape();
  curveVertex(55, 524); // control point
  curveVertex(55, 524);
  curveVertex(58, 539);
  curveVertex(74, 566);
  curveVertex(74, 566); // control point
  endShape();
   beginShape();
  curveVertex(107, 528); // control point
  curveVertex(107, 528);
  curveVertex(117, 546);
  curveVertex(132, 566);
  curveVertex(132, 566); // control point
  endShape();
  noStroke();
}

function makeSnow() {
   for(let i = 0; i< numberSnow; i++ ) {
       snowX[i] = random(width)
       snowY[i] = random(-height)
       snowD[i] = random(4,9)
       snowSpeed[i] = random(4,8)
   } 
}

 function drawSnow() {
     fill('white')
     for(let i = 0; i < snowX.length; i++) {
         circle(snowX[i],snowY[i],snowD[i])
     }
 }

function moveSnow() {
     for(let i = 0; i < snowX.length; i++) {
         snowX[i] += cos(frameCount * snowSpeed[i])
         snowY[i] += snowSpeed[i]
         if (snowY[i] > height) {
             snowY[i] = 0
         }
     }
 }