
function setup() {
  createCanvas(1000, 700); 
}

function draw() {
 loadPixels();
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
      var randomR= random(255);
      var randomG= random(255);
      var randomB= random(255);
      set(x, y, [randomR, randomG, randomB, 255]); 
    }
  }
  updatePixels();
  rect(80,80, 100, 40);
  text(frameRate(), 100,100);
}