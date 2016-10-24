function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  background( 255 , 255 , 255 , 40 )
  ellipse( mouseX , mouseY , 75 , 75 );
  fill( 255 , 2 , 255 );
  
  ellipse( mouseX , mouseY , 75 , 75 );
  fill( 255 , 0 , 0 );
}
