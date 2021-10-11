var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup, obstacleGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var killer;
var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}





function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
   score = 0;  
 redB= new Group();
 
  arrowGroup= new Group()
  obstacleGroup= new Group()
  bow = createSprite(390,200,30,30);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  killer = createSprite(410,-100,1,7000);
}




function draw() {
 background(0);
 //scoring
 if(arrowGroup.isTouching(obstacleGroup)){
  obstacleGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+10;
}
killer.visible=-false;
//ballon missing
if(obstacleGroup.isTouching(killer)){
  obstacleGroup.destroyEach();
  score=score-5;
} 
 if(gameState === PLAY)
 {
      //Uncomment correct option 
      //  according to PLAY state*/  
      // moving ground
       scene.velocityX = -3 
       //reset the background
       if (scene.x < 0){
        scene.x = scene.width/2;
 }
      //moving bow
      bow.y = World.mouseY;      
      //stop background movement
      scene.velocityX = 0;

  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
 }
  if(arrowGroup.isTouching(obstacleGroup)){
  obstacleGroup.destroyEach();
 }

  if (gameState === END) {
    /*Uncomment correct option 
      according to END state*/  
      // // moving ground
      scene.velocityX =-3 
       //destroy bow
      bow.destroy();
       //reset the background
      if (scene.x < 0){
      scene.x = scene.width/2;
      }
      //moving bow
      bow.y = World.mouseY;      
      //stop background movement
      scene.velocityX = 0;
    obstacleGroup.visible=false
  }

if (frameCount>100000) {
  //red.destroyEach();
  gameState=END; 
}

  drawSprites();
  text("Score: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 7;
  red.lifetime = 150;
  red.scale = 0.1;
  obstacleGroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 6;
  blue.lifetime = 150;
  blue.scale = 0.1;
  obstacleGroup.add(blue)
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 7;
  green.lifetime = 150;
  green.scale = 0.1;
  obstacleGroup.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 150;
  pink.scale = 1
  obstacleGroup.add(pink)
}

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -5;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}
