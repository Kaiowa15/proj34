const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var player, walkAn,leftwalkAn, jumpimg, idleimg, leftidleimg;
var invisibleground;
var lockyblock, lockyblock2,lockyblock3,lockyblock4, lockyblock5, luckyblockimg;
var block1, block2, blockimg;
var pipe, pipeimg,invisiblepipe;

var bg_img

function preload(){
  bg_img = loadImage('background.png');
  pipeimg = loadImage('cano.png')

  walkAn = loadAnimation("mariowalking.png","mariowalking3.png")
  leftwalkAn = loadAnimation("leftwalk1.png","leftwalk2.png")
  jumpimg = loadAnimation("mariojumping.png")
  idleimg = loadAnimation("marioidle.png")
  leftidleimg = loadAnimation("leftIdle.png")

}




function setup() {
  createCanvas(600,400);

  engine = Engine.create();
  world = engine.world;
  
  player = createSprite(60, 310, 40, 40)
  

  invisibleground = createSprite(300,340,600,10)
  invisibleground.visible = false

  pipe = createSprite(555,308,10,20)
  pipe.addImage('pipe',pipeimg)

  invisiblepipe = createSprite(555,308,45,60)
  invisiblepipe.visible = false

  lockyblock = new Lucky(50,50,width,height)
  

  
  player.addAnimation("walk",walkAn)
  player.addAnimation("jump",jumpimg)
  player.addAnimation("idle",idleimg)
  player.scale = 0.6


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  image(bg_img,0,0,width,height);
  Engine.update(engine);

 if(keyDown(UP_ARROW)){
   player.velocityY = -30
   player.changeAnimation("jump")

  }else{
   player.velocityY = 5

  }

 if(keyDown(RIGHT_ARROW)){
  player.x = player.x +5
  //player.changeAnimation("walk")


 }else{
  player.changeAnimation("idle")

 }

 if(keyDown(LEFT_ARROW)){
  player.x = player.x -5
  

 }else{
  player.changeAnimation("idle")

 }


 player.collide(invisibleground);
 player.collide(invisiblepipe);




   
  luckyblock.dispay()
  drawSprites();
}

