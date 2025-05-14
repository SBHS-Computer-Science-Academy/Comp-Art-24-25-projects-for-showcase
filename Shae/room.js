function drawRoom() {
  strokeWeight(3)
  stroke(215, 189, 158)
  noFill()
 rect(100,100,400,370)
 line(0,0,100,100)
 line(600,0,500,100)
 line(600,600,500,470)
 line(0,600,100,470)
  }
  
  function drawShadow() {
  noStroke()
  fill(59, 38, 20,20)
      beginShape(); 
  vertex(100, 401); 
  vertex(137, 402); 
  vertex(150, 443); 
  vertex(168, 444); 
  vertex(202, 391); 
  vertex(224, 446); 
  vertex(501, 444); 
  vertex(500, 470); 
  vertex(96, 470); 
  vertex(101, 400); 
  endShape(); 
  beginShape(); 
  vertex(97, 448); 
  vertex(24, 528); 
  vertex(0, 455); 
  vertex(0, 599); 
  vertex(93, 470); 
  endShape(); 
  }
  
  function drawRug() {
      push()
      strokeWeight(2)
      stroke(160, 198, 208)
      fill(195, 224, 231)
  ellipse(297,530,320,100)
  strokeWeight(10)
  noFill()
  ellipse(297,530,250,70)
  pop()
  }
  
  function drawDoorframe() {
      strokeWeight(5)
      stroke(73, 44, 27)
      fill(0)
      rect(245,305,100,165)
      
      noStroke()
      fill(255)
      textSize(15)
      text("You", 295,368)
      text("Escaped!", 295,385)
      strokeWeight(3)
      stroke('DarkRed')
      fill('red')
      rect(262,403,70,20)
      noStroke()
      fill(255)
      textSize(15)
      text("restart", 295,413)
  }
  
  function drawDoor() {
      stroke(73, 44, 27)
      fill(113, 71, 46)
    rect(245,305,100,165)
    strokeWeight(2)
    rect(258,320,30,50)
    rect(302,320,30,50)
    rect(258,384,30,80)
    rect(302,384,30,80)
    stroke(224, 162, 66)
    strokeWeight(1)
    fill(250, 191, 100)
    circle(333,398,10)
    stroke(104, 104, 104)
    fill(172, 172, 172)
    beginShape(); 
  vertex(330, 410); 
  vertex(330, 404); 
  vertex(332, 404); 
  vertex(332, 412); 
  vertex(335, 412); 
  vertex(335, 403); 
  vertex(337, 402); 
  vertex(337, 420); 
  vertex(330, 420); 
  vertex(330, 410); 
  endShape();
  strokeWeight(2)
  circle(333.5,415,2)
  //line(333.5, 415, 333.5, 418); 
  }
  
  function drawDesk() {
      strokeWeight(2)
      stroke(73, 44, 27)
      fill(113, 71, 46)
      beginShape(); 
  vertex(360, 400); 
  vertex(365, 389); 
  vertex(480, 389); 
  vertex(485, 400); 
  endShape(); 
      rect(360,400,125,25)
      rect(360,425,5,50)
      rect(480,425,5,50)
      rect(365,406,115,13)
    stroke(224, 162, 66)
    strokeWeight(2)
    fill(250, 191, 100)
    line(411, 413, 431, 413);
    strokeWeight(1)
    stroke(104, 104, 104)
    fill(172, 172, 172)
    beginShape(); 
  vertex(410, 413); 
  vertex(409, 426); 
  vertex(415, 428); 
  vertex(417, 414); 
  vertex(415, 414); 
  vertex(414, 421); 
  vertex(411, 420); 
  vertex(411, 414); 
  endShape(); 
  line(412, 423, 412, 425); 
  }
  
  function drawWardrobe() {
      stroke(73, 44, 27)
      fill(113, 71, 46)
   beginShape();
  vertex(13, 315); 
  vertex(53, 292); 
  vertex(91, 292); 
  vertex(63, 585); 
  vertex(13, 315); 
  endShape(); 
  rect(13,315,50,270)
     beginShape(); 
     vertex(63, 315); 
  vertex(91, 292); 
  vertex(91, 520); 
  vertex(63, 585); 
  endShape(); 
  line(91, 493, 63, 555); 
  fill(0)
  beginShape(); 
  vertex(90, 324); 
  vertex(81, 337); 
  vertex(83, 510); 
  vertex(91, 491); 
  vertex(90, 325); 
  endShape(); 
  strokeWeight(2)
  stroke(224, 162, 66)
    fill(250, 191, 100)
    line(78, 411, 78, 436); 
    line(76, 539, 83, 523); 

  }
  
  function drawClock() {
       strokeWeight(2)
      stroke(73, 44, 27)
      fill(113, 71, 46)
      circle(184,332,40)
       beginShape(); 
  vertex(171, 346); 
  vertex(167, 432); 
  vertex(206, 432); 
  vertex(198, 346); 
  endShape(); 
  rect(162,432,50,40)
  noFill()
  rect(169,440,35,25)
  line(177, 355, 193, 355); 
  line(171, 425, 201, 425); 
  line(177,355,171,425)
  line(193,355,201,425)
  stroke(224, 162, 66)
  fill(238, 238, 238)
  circle(184,332,30)
  stroke(1)
  line(184, 332, 184, 321); 
  line(184, 333, 194, 333); 
  stroke(52, 24, 12)
  fill(52, 24, 12)
  line(185, 357, 186, 402); 
  circle(186,402,5)
      
  }
  
  function drawPot() {
      stroke(220, 220, 220)
      fill(255)
      beginShape(); 
  vertex(95, 422); 
  vertex(95, 485); 
  vertex(102, 489); 
  vertex(110, 491); 
  vertex(120, 491); 
  vertex(130, 491); 
  vertex(135, 489); 
  vertex(142, 484); 
  vertex(142, 420); 
  vertex(95, 422); 
  endShape(); 
      fill(80, 50, 17)
      ellipse(119,421,50,10)
      noStroke()
      fill(36, 92, 128)
      beginShape(); 
  vertex(95, 448); 
  vertex(102, 451); 
  vertex(111, 453); 
  vertex(127, 453); 
  vertex(133, 452); 
  vertex(143, 447); 
  vertex(143, 458); 
  vertex(135, 462); 
  vertex(130, 463); 
  vertex(110, 463); 
  vertex(103, 462); 
  vertex(94, 457); 
  vertex(94, 447); 
  endShape(); 
  }
  
  function drawPlant() {
      strokeWeight(1)
      stroke(107, 154, 70)
      fill(135, 189, 92)
      beginShape(); 
  vertex(115, 422); 
  vertex(118, 413); 
  vertex(120, 404); 
  vertex(116, 389); 
  vertex(113, 365); 
  vertex(117, 354); 
  vertex(117, 340); 
  vertex(117, 323); 
  vertex(118, 326); 
  vertex(120, 352); 
  vertex(118, 361); 
  vertex(116, 369); 
  vertex(117, 383); 
  vertex(120, 391); 
  vertex(122, 404); 
  vertex(120, 413); 
  vertex(119, 422); 
  endShape(); 
    beginShape(); 
  vertex(121, 402); 
  vertex(127, 396); 
  vertex(128, 389); 
  vertex(133, 385); 
  vertex(142, 386); 
  vertex(137, 392); 
  vertex(131, 393); 
  vertex(128, 397); 
  vertex(122, 403); 
  endShape(); 
  beginShape(); 
  vertex(115, 384); 
  vertex(109, 379); 
  vertex(104, 377); 
  vertex(99, 378); 
  vertex(97, 382); 
  vertex(101, 381); 
  vertex(103, 383); 
  vertex(108, 382); 
  vertex(111, 383); 
  vertex(115, 385); 
  endShape(); 
   beginShape(); 
  vertex(116, 366); 
  vertex(125, 360); 
  vertex(133, 359); 
  vertex(137, 367); 
  vertex(132, 363); 
  vertex(129, 365); 
  vertex(123, 363); 
  vertex(116, 367); 
  endShape(); 
  beginShape(); 
  vertex(116, 359); 
  vertex(111, 352); 
  vertex(109, 344); 
  vertex(103, 344); 
  vertex(99, 342); 
  vertex(100, 348); 
  vertex(109, 351); 
  vertex(116, 361); 
  endShape(); 
   beginShape(); 
  vertex(118, 416); 
  vertex(112, 411); 
  vertex(112, 406); 
  vertex(108, 403); 
  vertex(102, 401); 
  vertex(101, 399); 
  vertex(100, 404); 
  vertex(102, 408); 
  vertex(110, 411); 
  vertex(117, 417); 
  endShape(); 
  beginShape(); 
  vertex(118, 341); 
  vertex(124, 335); 
  vertex(125, 331); 
  vertex(131, 327); 
  vertex(136, 325); 
  vertex(135, 332); 
  vertex(133, 337); 
  vertex(125, 336); 
  vertex(118, 344); 
  endShape(); 
  beginShape(); 
  vertex(117, 326); 
  vertex(116, 319); 
  vertex(111, 318); 
  vertex(108, 314); 
  vertex(108, 307); 
  vertex(112, 312); 
  vertex(119, 313); 
  vertex(118, 319); 
  vertex(117, 327); 
  endShape(); 
  beginShape(); 
  vertex(117, 333); 
  vertex(113, 327); 
  vertex(110, 323); 
  vertex(104, 326); 
  vertex(109, 326); 
  vertex(112, 328); 
  vertex(116, 333); 
  endShape(); 
  beginShape(); 
  vertex(121, 408); 
  vertex(125, 405); 
  vertex(125, 408); 
  vertex(124, 411); 
  vertex(121, 413); 
  endShape(); 
  beginShape(); 
  vertex(117, 393); 
  vertex(114, 390); 
  vertex(108, 390); 
  vertex(110, 393); 
  vertex(114, 392); 
  vertex(116, 393); 
  endShape(); 
  beginShape(); 
  vertex(117, 374); 
  vertex(120, 371); 
  vertex(120, 376); 
  vertex(120, 379); 
  vertex(117, 382); 
  endShape(); 
  }
  
  function drawStool() {
      strokeWeight(2)
      stroke(115, 73, 51)
      fill(147, 95, 68)
       beginShape(); 
  vertex(460, 461); 
  vertex(456, 493); 
  vertex(458, 497); 
  vertex(461, 498); 
  vertex(465, 462);
  vertex(485, 464); 
  vertex(486, 501); 
  vertex(489, 504); 
  vertex(492, 500); 
  vertex(490, 463); 
  vertex(504, 462); 
  vertex(509, 496); 
  vertex(511, 498); 
  vertex(513, 495); 
  vertex(507, 458); 
  endShape(); 
      beginShape(); 
  vertex(459, 449); 
  vertex(459, 459); 
  vertex(468, 463); 
  vertex(479, 465); 
  vertex(493, 464); 
  vertex(502, 462); 
  vertex(507, 459); 
  vertex(508, 447); 
  endShape(); 
      stroke(36, 74, 90)
      fill(54, 109, 131)
      ellipse(483,447,49,17)
  }
  
  function drawShelves() {
  noStroke()
      fill(113, 71, 46)
      beginShape(); 
  vertex(532, 305); 
  vertex(596, 344); 
  vertex(596, 350); 
  vertex(581, 357); 
  vertex(518, 314); 
  vertex(518, 309); 
  vertex(533, 305); 
  endShape(); 
      stroke(73, 44, 27)
      noFill()
      beginShape(); 
  vertex(518, 309); 
  vertex(582, 350); 
  vertex(596, 344); 
  vertex(532, 305); 
  vertex(518, 309); 
  endShape(); 
  beginShape(); 
  vertex(518, 309); 
  vertex(518, 314); 
  vertex(581, 357); 
  vertex(581, 351); 
  vertex(581, 357); 
  vertex(596, 350); 
  vertex(596, 344); 
  vertex(581, 351); 
  endShape();
  }
  
  function drawPicture() {
      //pic 1
      stroke(73, 44, 27)
      fill(113, 71, 46)
      rect(385,317,70,50)
      noFill()
      rect(388,321,63,43)
      fill(250, 240, 230)
      rect(392,325,55,35)
      stroke(160, 57, 18)
      fill(219, 87, 37)
      beginShape(); 
  vertex(401, 337); 
  vertex(404, 334); 
  vertex(405, 335); 
  vertex(408, 338); 
  vertex(413, 341); 
  vertex(412, 344); 
  vertex(410, 347); 
  vertex(409, 351); 
  vertex(406, 351); 
  vertex(402, 347); 
  vertex(399, 347); 
  vertex(397, 343); 
  vertex(400, 341); 
  vertex(401, 336); 
  endShape(); 
  circle(405,344,2)
  line(404, 340, 404, 338); 
  line(408, 344, 411, 343); 
  line(401, 345, 401, 345); 
  line(405, 347, 408, 350); 
  beginShape(); 
  strokeWeight(2.5)
  stroke(45, 71, 19)
  noFill()
  vertex(411, 346); 
  vertex(418, 347); 
  vertex(427, 347); 
  vertex(434, 343); 
  vertex(438, 341); 
  endShape(); 
  //pic 2
  stroke(73, 44, 27)
  fill(113, 71, 46)
  beginShape(); 
  vertex(536, 346); 
  vertex(566, 367); 
  vertex(567, 431); 
  vertex(536, 407); 
  vertex(536, 347); 
  endShape();
  strokeWeight(1.5)
  stroke(73, 44, 27)
 fill(250, 240, 230)
      beginShape(); 
  vertex(540, 356); 
  vertex(561, 370); 
  vertex(562, 421); 
  vertex(540, 405); 
  vertex(540, 356); 
  endShape(); 
  stroke(45, 71, 19)
  noFill()
  beginShape(); 
  vertex(550, 385); 
  vertex(553, 397); 
  vertex(552, 405); 
  vertex(548, 406); 
  vertex(544, 405); 
  endShape(); 
  stroke(167, 110, 156)
  fill(208, 140, 195)
   beginShape(); 
  vertex(549, 380); 
  vertex(548, 373); 
  vertex(555, 373); 
  vertex(553, 381); 
  vertex(557, 381); 
  vertex(558, 390); 
  vertex(554, 386); 
  vertex(555, 395); 
  vertex(551, 393); 
  vertex(551, 385); 
  vertex(548, 392); 
  vertex(545, 388); 
  vertex(550, 383); 
  vertex(544, 381); 
  vertex(544, 375); 
  vertex(549, 380); 
  endShape(); 
  }
  
  function drawDecor() {
      //phone
      stroke(50)
      fill(100)
      beginShape(); 
  vertex(444, 375); 
  vertex(468, 375); 
  vertex(477, 392); 
  vertex(437, 392); 
  vertex(444, 375); 
  endShape();
  strokeWeight(6.5)
  noFill()
  beginShape(); 
   vertex(445, 372); 
  vertex(452, 366); 
  vertex(461, 366); 
  vertex(469, 373); 
  endShape();
  strokeWeight(2)
  fill(50)
  circle(444,375,10)
  circle(468,375,10)
  strokeWeight(1.5)
  fill(150)
  ellipse(456.5,383,15,12)
  noFill()
  beginShape(); 
  vertex(476, 390); 
  vertex(480, 387); 
  vertex(478, 385); 
  vertex(476, 386); 
  vertex(479, 391); 
  vertex(485, 392); 
  vertex(486, 389); 
  vertex(483, 388); 
  vertex(482, 392); 
  vertex(487, 396); 
  vertex(490, 394); 
  vertex(487, 392); 
  vertex(484, 398); 
  endShape(); 
  // clue 1
  stroke(225, 213, 193)
  fill(248, 237, 219)
  beginShape(); 
  vertex(376, 397); 
  vertex(383, 392); 
  vertex(403, 392); 
  vertex(396, 397); 
  vertex(376, 397); 
  endShape(); 
  stroke(0)
  line(390, 393, 386, 396); 
  //box
  push()
  noStroke()
  fill(176, 131, 85)
  triangle(68, 281, 83, 281, 66, 294); 
  stroke(142, 103, 65)
  fill(176, 131, 85)
  beginShape(); 
 vertex(68, 281); 
  vertex(83, 280); 
  vertex(70, 290); 
  vertex(70, 300); 
  vertex(83, 291); 
  vertex(84, 280); 
  endShape(); 
  pop()
  //safe
  noFill()
  fill(160)
   beginShape(); 
  vertex(26, 274); 
  vertex(39, 264); 
  vertex(68, 265); 
  vertex(68, 300); 
  vertex(60, 310); 
  vertex(26, 310); 
  vertex(26, 274); 
  endShape(); 
  beginShape();
  vertex(68, 265); 
  vertex(40, 264); 
  vertex(26, 273); 
  vertex(60, 273); 
  vertex(26, 273); 
  vertex(26, 310); 
  vertex(60, 310); 
  vertex(60, 273); 
  vertex(68, 266); 
  vertex(68, 300); 
  vertex(60, 310); 
  endShape();
  stroke(50)
  beginShape(); 
  vertex(51, 289); 
  vertex(49, 290); 
  vertex(49, 302); 
  vertex(51, 303); 
  endShape(); 
  stroke(0)
  fill(3)
  circle(36,297,8)
  fill(70)
  circle(35,297,6)
  //shelves
  
  //plant
  
  stroke(181, 207, 211)
  fill(211, 238, 241,100)
   beginShape(); 
  vertex(578, 318); 
  vertex(573, 339); 
  vertex(581, 345); 
  vertex(591, 341); 
  vertex(584, 318); 
  vertex(581, 320); 
  vertex(578, 318); 
  vertex(582, 316); 
  vertex(585, 319); 
  endShape(); 
  strokeWeight(1)
      stroke(107, 154, 70)
      fill(135, 189, 92)
      beginShape(); 
  vertex(581, 318); 
  vertex(578, 310); 
  vertex(571, 323); 
  vertex(574, 337); 
  vertex(584, 338); 
  vertex(591, 352); 
  vertex(589, 366); 
  vertex(579, 372); 
  vertex(582, 387); 
  vertex(592, 392); 
  vertex(595, 389); 
  vertex(593, 387); 
  vertex(591, 388); 
  vertex(591, 390); 
  vertex(585, 386); 
  vertex(581, 373); 
  vertex(591, 368); 
  vertex(594, 351); 
  vertex(585, 336); 
  vertex(576, 336); 
  vertex(573, 323); 
  vertex(578, 315); 
  vertex(582, 321); 
  vertex(580, 330); 
  vertex(578, 331); 
  vertex(581, 334); 
  vertex(583, 322); 
  endShape(); 
  beginShape(); 
  vertex(572, 324); 
  vertex(565, 321); 
  vertex(561, 325); 
  vertex(566, 329); 
  vertex(573, 326); 
  endShape(); 
  beginShape(); 
  vertex(592, 347); 
  vertex(598, 339); 
  vertex(598, 349); 
  vertex(592, 347); 
  endShape(); 
  beginShape(); 
  vertex(581, 382); 
  vertex(574, 382); 
  vertex(573, 388); 
  vertex(579, 389); 
  vertex(584, 383); 
  endShape(); 
   beginShape(); 
  vertex(590, 361); 
  vertex(583, 354); 
  vertex(576, 356); 
  vertex(580, 361); 
  vertex(590, 363); 
  endShape(); 
  beginShape(); 
  vertex(579, 314); 
  vertex(583, 306); 
  vertex(580, 299); 
  vertex(587, 295); 
  vertex(586, 303); 
  vertex(583, 306); 
  endShape(); 
  //books
  stroke(206, 189, 173)
  fill(234, 218, 204)
  beginShape(); 
  vertex(525, 288); 
  vertex(539, 287); 
  vertex(543, 288); 
  vertex(543, 289); 
  vertex(548, 290); 
  vertex(556, 294); 
  vertex(565, 298); 
  vertex(571, 301); 
  vertex(570, 308); 
  vertex(574, 310); 
  vertex(567, 316); 
  vertex(565, 318);
  vertex(525, 295); 
  endShape();
  line(532, 292, 543, 291); 
  line(544, 296, 552, 293); 
  line(553, 302, 562, 298); 
  line(560, 307, 570, 302); 
  line(560, 313, 571, 309); 
  stroke(101, 32, 24)
  fill(184, 56, 41)
  beginShape(); 
  vertex(526, 311); 
  vertex(525, 288); 
  vertex(532, 293); 
  vertex(533, 297); 
  vertex(542, 302); 
  vertex(543, 299); 
  vertex(559, 307); 
  vertex(559, 313); 
  vertex(566, 316); 
  vertex(565, 335); 
  vertex(565, 317); 
  vertex(565, 317); 
  vertex(575, 311); 
  vertex(575, 331); 
  vertex(565, 336); 
  endShape(); 
  line(532, 299, 532, 312); 
  line(542, 305, 542, 317); 
  line(552, 308, 551, 323); 
  line(560, 318, 560, 331);
  //clue -
  stroke(225, 213, 193)
  fill(248, 237, 219)
  beginShape(); 
  vertex(553, 303); 
  vertex(557, 291); 
  vertex(563, 297); 
  vertex(553, 303); 
  endShape(); 
  }

  function clue1() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(3)
      stroke(225, 213, 193)
  fill(248, 237, 219)
  rect(64,88,250,150)
  fill(0)
  textSize(25)
  text("clue 1", 190,110)
  textSize(12)
  text("I can connect you to friends far and wide", 186,162) 
  text("with just a few buttons, I'm your guide.", 186,182)
  }
  
  function phone() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(5)
  stroke(0)
  fill(150)
  stroke(30)
      circle(294,314,300)
      strokeWeight(40)
      noFill()
      circle(294,314,220)
      strokeWeight(3)
      fill(120)
      circle(295,207,50)
      circle(220,237,50)
      circle(180,306,50)
      circle(209,390,50)
      circle(295,420,50)
      circle(370,231,50)
      circle(408,306,50)
      
      textSize(20)
      fill(50)
      text("1", 295,207)
      text("2", 220,237)
      text("4", 209,390)
      fill(100)
      text("9", 370,231)
      text("3", 180,306)
      text("0", 295,420)
      text("8", 408,306)
  }
  
  function safe() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(10)
      stroke(0)
      fill(100)
  rect(194,177,200,300)
  strokeWeight(6)
  stroke(40)
  fill(0)
  rect(222,210,142,50)
  strokeWeight(4)
  fill(70)
//   rect(222,285,142,150)
//   line(293, 287, 293, 436); 
//   line(222, 314, 363, 314); 
//   line(222, 344, 363, 344); 
//   line(222, 374, 363, 374); 
//   line(222, 404, 363, 404);
  
  }
  
  function drawer() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      stroke(224, 162, 66)
    fill(250, 191, 100)
    beginShape(); 
  vertex(234, 426); 
  vertex(234, 468); 
  vertex(376, 468); 
  vertex(376, 429); 
  vertex(391, 429); 
  vertex(391, 478); 
  vertex(220, 478); 
  vertex(220, 430); 
  vertex(234, 430); 
  endShape(); 
      stroke(73, 44, 27)
      fill(113, 71, 46)
      rect(125,188,350,250)
      fill(73,44,27)
      rect(145,209,310,210)
      strokeWeight(3)
      stroke(225, 213, 193)
  fill(248, 237, 219)
  rect(181,245,200,120)
  fill(0)
  textSize(20)
  text("Clue 2", 277,267)
  textSize(10)
  text("I'm not a shelf, but I have one inside,", 279,297) 
  text("for clothes and shoes, with a door for hiding.", 279,310)
  }
  
  function wardrobe() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(3)
      stroke(73, 44, 27)
      fill(113, 71, 46)
      rect(183,116,270,450)
      fill(84, 51, 35)
      rect(193,126,250,430)
      stroke(73, 44, 27)
      noFill()
      rect(230,160,170,360)
      stroke(73, 44, 27)
      fill(113, 71, 46)
      beginShape(); 
  vertex(192, 319); 
  vertex(231, 295); 
  vertex(400, 295); 
  vertex(442, 317); 
  vertex(192, 317); 
  vertex(192, 328); 
  vertex(444, 328); 
  vertex(444, 319); 
  endShape();
  beginShape(); 
  vertex(193, 476); 
  vertex(230, 451); 
  vertex(400, 451); 
  vertex(442, 479); 
  vertex(191, 479); 
  vertex(191, 488); 
  vertex(442, 488); 
  vertex(442, 481); 
  endShape(); 
  //book
  strokeWeight(2)
  stroke(206, 189, 173)
  fill(234, 218, 204)
   beginShape(); 
  vertex(341, 460); 
  vertex(359, 445); 
  vertex(361, 458); 
  vertex(349, 474); 
  vertex(344, 476); 
  vertex(340, 461); 
  endShape(); 
  strokeWeight(4)
  stroke(101, 32, 24)
  fill(184, 56, 41)
  beginShape(); 
  vertex(254, 471); 
  vertex(254, 458); 
  vertex(346, 463); 
  vertex(346, 476); 
  vertex(254, 470); 
  endShape(); 
  beginShape(); 
  vertex(254, 458); 
  vertex(346, 463); 
  vertex(346, 476); 
  vertex(254, 470); 
  vertex(254, 459); 
  vertex(286, 441); 
  vertex(360, 445); 
  vertex(345, 463); 
  vertex(256, 458); 
  endShape();
   line(347, 477, 362, 457); 
   //web
   strokeWeight(2)
   stroke(190)
   noFill()
   beginShape(); 
  vertex(224, 155); 
  vertex(224, 249); 
  vertex(234, 233); 
  vertex(244, 228); 
  vertex(256, 229); 
  vertex(259, 220); 
  vertex(272, 212); 
  vertex(282, 213); 
  vertex(286, 202); 
  vertex(295, 194); 
  vertex(304, 195); 
  vertex(306, 185); 
  vertex(315, 173); 
  vertex(324, 174); 
  vertex(325, 162); 
  vertex(328, 155); 
  vertex(224, 155); 
  endShape(); 
  beginShape(); 
  vertex(255, 230); 
  vertex(225, 157); 
  vertex(282, 212); 
  vertex(285, 203); 
  vertex(294, 193); 
  vertex(301, 193); 
  vertex(228, 157); 
  vertex(322, 172); 
  endShape(); 
  beginShape(); 
  vertex(223, 211); 
  vertex(228, 198); 
  vertex(235, 195); 
  vertex(241, 197); 
  vertex(243, 191); 
  vertex(249, 187); 
  vertex(254, 187); 
  vertex(256, 181); 
  vertex(259, 177); 
  vertex(265, 176); 
  vertex(265, 171); 
  vertex(269, 166); 
  vertex(275, 165); 
  vertex(274, 161); 
  vertex(278, 155); 
  endShape(); 
  
  }
  
  function clue3() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(3)
      stroke(225, 213, 193)
  fill(248, 237, 219)
  rect(64,88,250,150)
  fill(0)
  textSize(25)
  text("clue 3", 190,110)
  textSize(12)
  text("I have a face but lack a nose,", 183,148)
  text("With hands that sweep and numbers neat", 183,160)
  }
  
  function clock() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(9)
      stroke(73, 44, 27)
      fill(113, 71, 46)
      beginShape(); 
  vertex(313, 350); 
  vertex(283, 600); 
  vertex(553, 600); 
  vertex(493, 342); 
  endShape(); 
  strokeWeight(5)
  fill(73, 44, 27,140)
  beginShape(); 
  vertex(318, 599); 
  vertex(336, 439); 
  vertex(478, 439); 
  vertex(515, 595); 
  endShape();
  strokeWeight(9)
 fill(113, 71, 46)
      circle(402,278,250)
      fill(73, 44, 27)
      rect(386,442,45,200)
      strokeWeight(11)
      stroke(224, 162, 66)
  fill(238, 238, 238)
  circle(402,278,200)
  
  strokeWeight(4)
  stroke(5)
  fill(3)
  line(402, 278, 402, 222); 
  line(403, 278, 463, 278); 
  circle(402,278,7)
  strokeWeight(2)
  stroke(5)
  stroke(1)
  fill(1)
  textSize(20)
  text("12", 402,208)
  text("6", 402,348)
  text("3", 474, 278)
  text("9", 332,278)
  }
  
  function Opensafe() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(8)
      stroke(0)
      fill(100)
      square(150,188,300)
      strokeWeight(3)
      fill(80)
      square(208,244,180)
      line(150, 190, 208, 244); 
      line(450, 187, 389, 244); 
      line(150, 489, 208, 423); 
      line(389, 424, 451, 490); 
      
      stroke(224, 162, 66)
    fill(250, 191, 100)
       beginShape(); 
  vertex(284, 453); 
  vertex(360, 439); 
  vertex(364, 443); 
  vertex(287, 457); 
  vertex(284, 453); 
  endShape();
  beginShape(); 
  vertex(365, 444); 
  vertex(379, 458); 
  vertex(370, 461); 
  vertex(366, 456); 
  vertex(370, 455); 
  vertex(360, 445); 
  endShape(); 
      beginShape(); 
  vertex(344, 449); 
  vertex(350, 456); 
  vertex(354, 455); 
  vertex(358, 460); 
  vertex(348, 462); 
  vertex(338, 449); 
  endShape(); 
   beginShape(); 
  vertex(283, 453); 
  vertex(277, 450); 
  vertex(270, 452); 
  vertex(267, 457); 
  vertex(269, 463); 
  vertex(274, 466); 
  vertex(280, 466); 
  vertex(284, 462); 
  vertex(285, 457); 
  vertex(284, 455); 
  vertex(281, 459); 
  vertex(278, 463); 
  vertex(274, 462); 
  vertex(272, 458); 
  vertex(275, 455); 
  vertex(279, 454); 
  vertex(282, 457); 
  endShape();
  
  strokeWeight(2)
  stroke(206, 189, 173)
  fill(234, 218, 204)
  beginShape(); 
  vertex(275, 460);
  vertex(266, 460); 
  vertex(250, 444); 
  vertex(205, 443); 
  vertex(205, 468); 
  vertex(252, 471); 
  vertex(266, 463); 
  vertex(275, 461); 
  endShape(); 
  
  textSize(15)
  fill(0)
  text("desk",228,456)
  
  }
  
  function doorLock() {
      noStroke()
      fill(59, 38, 20,60)
      rect(0,0,600,600)
      strokeWeight(5)
      stroke(104, 104, 104)
    fill(172, 172, 172)
    beginShape(); 
  vertex(201, 246); 
  vertex(200, 140); 
  vertex(228, 90); 
  vertex(355, 90); 
  vertex(381, 140); 
  vertex(381, 247); 
  vertex(359, 248); 
  vertex(361, 148); 
  vertex(340, 107); 
  vertex(245, 106); 
  vertex(222, 142); 
  vertex(223, 254); 
  endShape(); 
    rect(201,245,180,200)
    
    strokeWeight(3)
    stroke(100)
    fill(120)
    rect(206,308,50,80)
    rect(266,308,50,80)
    rect(326,308,50,80)
    
  }
  
  function timer() {
      strokeWeight(5)
      stroke(107, 166, 179)
      fill(177, 225, 236)
      rect(518,30,40,25)
  }