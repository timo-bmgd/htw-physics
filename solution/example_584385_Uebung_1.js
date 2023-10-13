/* template GTAT2 Game Technology & Interactive Systems */
/* Autor: Timo Boomgaarden */
/* Übung Nr. 1 */
/* Datum: 11.10.23 */

/* declarations */ 
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var y = 500;

/* prepare program */
function setup() {								
  createCanvas(windowWidth, windowHeight);
}
/* run program */
function draw() {									
  background("white");

  //Create World
  buildGround();

  /* cannon */
  rotatedRect(100,y-50,100,8,frameCount,"gray")





  pop();
/* display */
}

/* isr */
function windowResized() {						/* responsive design */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
