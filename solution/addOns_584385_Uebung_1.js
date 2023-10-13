/* template GTAT2 Game Technology & Interactive Systems - addOns */
/* Autor:  */
/* Übung Nr. */
/* Datum: */

fill("red");
rect(20,20,40,40);

/* draw red rectangle */
function rotatedRect(sx,sy,width,height,angle,color){
	push();
	fill(color)
	let transOffset = -height/2
	
	//Reset to Origin
	translate(sx,sy)

	//Rotate by Angle Amount (converted from degrees to radians)
	rotate(radians(angle));

	//Center pivot
	translate(0,transOffset)

	//Draw
	rect(0,0,width,height)
	pop();
}

function buildGround(){
	/* blue ground floor */
	fill("blue");
	noStroke();
	rectMode(CORNERS);
	rect(100,y,840,y-50);
	rect(840,y,860,y-25)
	rect(860,y,1100,y-50);
	triangle(1000,y-50,1100,y-50,1100,y-100)
	/* wall */
	fill("gray");
	rect(1100,y,1200,0);
	/* zero point */
  fill("black")
  circle(100,y-50,10)
  /* flag */
  rect(875,y-50,879,y-200)
  fill("yellow")
  stroke("grey")
  triangle(879,y-200,879,y-150,929,y-175)
  noStroke();
  /* enemy ball */
  fill("red")
  circle(400,y-60,20)
  /* player ball*/
  fill("green")
  circle(500,y-60,20)		
}
