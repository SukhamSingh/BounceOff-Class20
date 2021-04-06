var fixedrectangle, movingrectangle;


function setup() {
  createCanvas(1200,800);
  // for createSprite
  fixedrectangle = createSprite(400, 100, 50, 80);
  movingrectangle = createSprite(400,800,80,30);
 
  // for shapeColor
  fixedrectangle.shapeColor = "green";
  movingrectangle.shapeColor = "green";

  // for velocity
  movingrectangle.velocityY = -5;
  fixedrectangle.velocityY = 5;

  //
}

function draw() {
  background(255,255,255);  
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
  fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 ){
    movingrectangle.velocityX = movingrectangle.velocityX * (-1);
   fixedrectangle.velocityX = fixedrectangle.velocityX * (-1);
  }
  if(fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
      movingrectangle.velocityY = movingrectangle.velocityY * (-1);
   fixedrectangle.velocityY = fixedrectangle.velocityY * (-1);

    }
  drawSprites();
}