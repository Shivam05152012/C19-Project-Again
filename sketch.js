var cricketBallImg, cricketBall;
var cricketStumpsImg, cricketStumps, cricketStumpsGroup;
var cricketPitchImg, cricketPitch;
var gameState = "play"

function preload(){
  cricketBallImg = loadImage("cricketBall.png");
  cricketStumpsImg = loadImage("cricketStumps.png");
  cricketPitchImg = loadImage("cricketPitch.png");
}

function setup() {
  createCanvas(600,600)
  cricketBall = createSprite(50); 
  cricketBall.addImage("cricketBall",cricketBall);
  cricketBall.velocityY = 1;

  cricketStumps = createSprite(80,100);
  cricketStumps.addImage("cricketStumps", cricketStumpsImg);
  cricketPitch = createSprite(600,1200);
  cricketPitch.addImage("cricketPitch", cricketPitchImg);
    
  cricketStumpsGroup= new Group();
}

function draw() {
    background(0);
    if(gameState==="play"){
        
    if(cricketPitch.x > 400){
        cricketPitch.x = 300
      }
     drawSprites()

      spawnCricketStumps();
      if(keyDown("up"))
      cricketBall.x= cricketBall.x -2

    if(keyDown("space"))
    cricketBall.x= cricketBall.x -2

    cricketBall.velocityY+=0.8
    if(cricketStumpsGroup.isTouching(cricketBall)){
    cricketBall.velocityY=0
    }
    if(cricketStumpsGroup.isTouching(cricketBall)|| cricketBall.x>600){
    cricketBall.destroy();
    gameState="end"
    }
}
    if(gameState==="end"){
    stroke("black")
    fill("red")
    textSize(30)
    text("Game Over", 100, 200)
    }
}
function spawnCricketStumps()
{
    if(frameCount%250===0)
    {
    cricketStumps= createSprite(200,-50)
    cricketStumps.addImage(cricketStumpsImg);
    cricketStumps.x= Math.round(random(60,110));
    cricketStumps.lifetime=600;
    cricketStumpsGroup.add(cricketStumpsImg);     

    cricketBall.depth= cricketStumps.depth;
    cricketBall.depth+=1
    }
}
