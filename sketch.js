
var PLAY = 1
var END = 0
var gameState=1
var score = 0
var sword, swordImg,hitS;
var fruits, fruits1, fruits2, fruits3, fruits4;
var fruitsGroup, enemyGroup;
var enemy, enemyImg, gameOverImg,gameOverS;

function preload(){
  swordImg = loadImage ("sword.png")
  fruits1 = loadImage ("fruit1.png")
  fruits2 = loadImage ("fruit2.png")
  fruits3 = loadImage ("fruit3.png")
  fruits4 = loadImage ("fruit4.png")
  enemyImg=loadAnimation ("alien1.png", "alien2.png")
  
  gameOverImg = loadImage("gameover.png")
  gameOverS = loadSound("gameover.mp3")
  hitS = loadSound("knifeSwooshSound.mp3")
}

function setup(){
  createCanvas (400,400);
  sword=createSprite(40,200,20,20);
sword.addImage(swordImg)
sword.scale=0.7
  
  enemyGroup = new Group();
  fruitsGroup = new Group();
  
  
}

function draw(){
  background(180);
  
  text("score : "+ score,325,30)
  if(gameState===PLAY){
  sword.y = mouseY
  sword.x = mouseX
  
    
     fruits();
    enemy();
  
    if(sword.isTouching(fruitsGroup)){
      hitS.play();
      score = score + 2 
      fruitsGroup.destroyEach();
    }
    
  else{ 
    if(sword.isTouching(enemyGroup)){
     gameState=END
      gameOverS.play();
      enemyGroup.destroyEach();
      fruitsGroup.destroyEach();
      enemyGroup.setVelocityXEach(0)
      fruitsGroup.setVelocityXEach(0)
      sword.addImage(gameOverImg)
      
      
    }
  }
  }
    
    
  
    


  

  drawSprites();
}

function fruits(){
  if(frameCount%100===0){
 var fruits=createSprite(400,200,20,20);
    fruits.scale = 0.2
    r = Math.round(random(1,4));
    if(r==1){
      fruits.addImage(fruits1);
    }else if (r==2){
      fruits.addImage(fruits2);
    }else if (r==3){
      fruits.addImage(fruits3);
    }else{
      fruits.addImage(fruits4)
    }
    fruits.y=Math.round(random(50,350))
    fruits.velocityX = (-7+(score/2));
    fruits.setLifetime = 100
    fruitsGroup.add(fruits)
  }
  
 
    
    
  
  
}

function enemy(){
  if(frameCount%200===0){
    var enemy=createSprite(400,200,20,20);
  enemy.addAnimation("defeat",enemyImg);
  enemy.velocityX = -(8+(score/2));
  enemy.setLifetime=120;
  enemyGroup.add(enemy)
  }

  
  
  
  
}
