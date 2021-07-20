var bgImage,Bground;
var ground;
var player,playerImage;
var coin,coinImage;

function preload(){
bgImage = loadImage("BG.jpeg")
playerImage = loadAnimation("Run-1.png","Run-2.png","Run-3.png")
coinImage = loadImage("Golden-Coin.png")
}

function setup(){
  createCanvas(800, 600);

  Bground = createSprite(500,300);
  Bground.addImage("ground",bgImage);
  Bground.velocityX = -2;

  ground = createSprite(400,590,800,20);
  ground.shapeColor = rgb(109,54,54);
  
  player = createSprite(50,535,40,20);
  player.addAnimation("Boy",playerImage);





  coinsGroup = new Group();

}

function draw(){
  background(0)
  console.log(Bground.x)
  if(Bground.x<300){
    Bground.x=500;
  }

  spawnCoins();
  drawSprites();
}



function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    coin = createSprite(600,400,40,10);
    coin.y = Math.round(random(200,450));
    coin.addImage(coinImage);
    coin.scale = 0.2;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    //coin.lifetime = 200;
    
    //adjust the depth
    //coin.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    coinsGroup.add(coin);
  }
  
}