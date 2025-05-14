let chromakopia;
let callme;
let flowerboy;
let igor;
let grinch;
let maxPixelSize = 50;
let album= 0
let pixelSize = 8;
let albumlist
let isPlaying = false;

let tyler; // declare the image object
let tyler2;

function preload() {
    
    chromakopia = loadImage("chromakopia.jpeg"); // assign the image using the file name or URL in quotes
    callme=loadImage("call me if you get lost.jpg")
    flowerboy=loadImage("flowerboy2.jpg")
    igor=loadImage("igor.jpeg")
    grinch=loadImage("grinch.jpg")
    
    chromaAudio = '<iframe src="https://www.youtube.com/embed/uGf_u0Uco5I?si=y1__mOe8uDjV-9An&autoplay=1" allow="autoplay" style="position: absolute;width:0;height:0;border:0;"></iframe>'
    callmeAudio = '<iframe src="https://www.youtube.com/embed/mnm0AfGTVoQ?si=AISqdwY1Sz8hiLQh&autoplay=1" allow="autoplay" style="position: absolute;width:0;height:0;border:0;"></iframe>'
    flowerboyAudio = '<iframe src="https://www.youtube.com/embed/vRWShkVEUPY?si=qvGdMw_GOVcCoiem&autoplay=1" allow="autoplay" style="position: absolute;width:0;height:0;border:0;"></iframe>'
    igorAudio='<iframe src="https://www.youtube.com/embed/hDYHw4m__2E?si=FboaMdDPTIag4k_6&autoplay=1" allow="autoplay" style="position: absolute;width:0;height:0;border:0;"></iframe>'
    grinchAudio = '<iframe src="https://www.youtube.com/embed/by92FrA5sQM?si=vSOgNEScA15tXe-J&autoplay=1" allow="autoplay" style="position: absolute;width:0;height:0;border:0;"></iframe>'
    
    tyler = loadImage("tyler collage.png"); // assign the image using the file name or URL in quotes
   //tyler2 = loadImage("tyler2.jpeg");

    

}


function setup() {
  createCanvas(600, 600);
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  chromakopia.resize(600, 600);
  callme.resize(600,600);
 flowerboy.resize(600,600);
  igor.resize(600,600);
 grinch.resize(600,600);
 albumlist=[chromakopia,callme,flowerboy,igor,grinch]
 audiolist=[chromaAudio, callmeAudio, flowerboyAudio, igorAudio, grinchAudio]
 
 
  background("black");
      tyler.resize(1200,1200)
  image(tyler, 0, 0)
 textSize(30);
 fill("green");
  text("Click here for tyler", 450, 70);
 fill("yellow")
   text("Click to pause or \n start music",136, 165,30);
   fill("pink")
   text("Left and right arrows \n to change albums",450, 312,30);
   fill("red")
   text(" Up and down arrows \n no change pixelation",150, 500 ,30);
//text("Click here for tyler.  \nClick to pause or start the music.  \nLeft and right arrows to change albums.  \n Up and down arrows to change pixelation.", 300, 300); 
 
 
}


function draw() {
    
    if (keyIsDown(UP_ARROW) && pixelSize < maxPixelSize) {
        pixelSize += 1;
        pixelize(albumlist[album], pixelSize);
    }
    if (keyIsDown(DOWN_ARROW) && pixelSize > 1 ) {
        pixelSize -= 1;
        pixelize(albumlist[album], pixelSize);
    }
  
   
  
}
function keyPressed(){
    if (keyCode==RIGHT_ARROW) {
        album += 1;
        album %= albumlist.length
        pixelize(albumlist[album], pixelSize);
        playAudio();
  
    }
    if (keyCode==LEFT_ARROW) {
        album -= 1;
        if (album < 0) album = albumlist.length - 1;
        pixelize(albumlist[album], pixelSize);
        playAudio();
    }
}

function mousePressed() {
    pixelize(albumlist[album], pixelSize);
    changeAudio();
}
function stopAudio() {
    document.getElementById("audioPlayer").innerHTML = ""
}

function playAudio() {
    if (isPlaying) {
        document.getElementById("audioPlayer").innerHTML = audiolist[album]
    } else {
        stopAudio();
    }
}

function changeAudio() {
    isPlaying = !isPlaying;
    playAudio();
}








function pixelize(pic, pixelSize) {
 	//create a new image of the same size as pic.  all pixels will be black.

    pic.loadPixels();
    noStroke();
	
	for (let x = 0; x < pic.width; x += pixelSize) {
	    for (let y = 0; y < pic.height; y += pixelSize) {
	        let rval = 0;
	        let gval = 0;
	        let bval = 0;
	        let num = 0;
	        for (let i = 0; i < pixelSize; i += 1) {
	            for (let j = 0; j < pixelSize; j += 1) {
	                let index =  4 * ((y + j) * width + (x + i));
            		rval +=  pic.pixels[index]; // red
            		gval += pic.pixels[index + 1]; // green
            		bval += pic.pixels[index + 2]; // blue
            		num += 1;
	            }
	        }
	        
	        fill(rval / num, gval / num, bval / num);
	        square(x, y, pixelSize);
	    }
	}
}