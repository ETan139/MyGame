var score =0;
var gun,bullet, backBoard;

var gunImg, bulletImg, blastImg, backBoardImg, TargetImg,cactusIng;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("boom.png")
  bulletImg = loadImage("Bullet1.png")
 WhitesolidcolorImg= loadImage("Whitesolidcolor.png")
 TargetImg=loadImage("Target.jpg")
 cactusImg=loadImage("cactus.png")
}
function setup() {
  createCanvas(800, 800);



  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2


  bulletGroup = createGroup();   

  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
     
    }

    if (frameCount % 100 === 0) {
      
    }

    if(keyDown("space")){
      shootBullet();
    }

    spawnobstacle()

    drawSprites();
  }
    
  
}




function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

    

  boom= createSprite= (+60, bullet.y, 50,50);
    boom.addImage(blastImg)

  
    blast.scale=0.3
    blast.life=20
    bulletGroup.destroyEach()


    

    if (life === 0) {
      gameState=2
      
      swal({
        title: `Game Over`,
        text: "You lost the game...",
        text: "Your Score is " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing!"
      });
    }
function spawnobstacle(){
if (frameCount%60===0){
  obstacle= createSprite(850,random(0,800),10,10)
  obstacle.velocityX=-5
   obstacle.scale=0.03
   var rand=Math.round(random(1,2))
   switch(rand){
     case 1: obstacle.addImage(TargetImg)
     break;
     case 2: obstacle.addImage(cactusImg)
     break;
   }
}
}
