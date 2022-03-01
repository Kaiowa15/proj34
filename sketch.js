const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var player, walkAn,leftwalkAn, jumpimg, idleimg, leftidleimg;
var invisibleground;
var lockyblock, lockyblock2,lockyblock3,lockyblock4, lockyblock5,lockyblock6, luckyblockimg;
var block1, block2,block3, blockimg;
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

  lockyblock = new Lucky(130,220)
  lockyblock2 = new Lucky(240,220)
  lockyblock3 = new Lucky(300,220)
  lockyblock4 = new Lucky(360,220)
  lockyblock5 = new Lucky(420,220)
  lockyblock6 = new Lucky(330,100)

  //block1 = new Block(270,220)
  //block2 = new Block(270,220)
  //block3 = new Block(270,220)

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

 if(keyDown(UP_ARROW)&&player.y >100){
   player.velocityY = -30
   player.changeAnimation("jump",jumpimg)

  }else{
   player.velocityY = 10
   player.changeAnimation("idle",idleimg)

  }

 if(keyDown(RIGHT_ARROW)){
  player.x = player.x +10
 }

 if(keyDown(LEFT_ARROW)){
  player.x = player.x -10
 }


 player.collide(invisibleground);
 player.collide(invisiblepipe);
 



   
  lockyblock.display()
  lockyblock2.display()
  lockyblock3.display()
  lockyblock4.display()
  lockyblock5.display()
  lockyblock6.display()

  //block1.display()
  //block2.display()
  //block3.display()


  drawSprites();
}

