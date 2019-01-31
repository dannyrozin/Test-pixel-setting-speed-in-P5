

function setup() {
  createCanvas(1000, 700);
}

function draw() {
 loadPixels();
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
			 var thisDist = dist(x, y, mouseX, mouseY);
			thisDist= map(thisDist,0,width,0,255);
      set(x, y, [thisDist, thisDist, 255, 255]);
    }
  }
  updatePixels();
  rect(80,80, 140, 40);
  text(frameRate(), 100,100);
}
