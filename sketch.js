var bgImg
var cat, mouse


function preload() {
   bgImg = loadImage("garden.png")
   catImg = loadAnimation("cat1.png")
   catImg2 = loadAnimation("cat2.png","cat3.png","cat4.png")
   mouseImg = loadAnimation("mouse1.png")
   mouseImg2 = loadAnimation("mouse2.png","mouse3.png","mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(200,200,10,10)
    cat.addAnimation(catImg)
    
    mouse = createSprite(600,300,10,10)
    mouse.addAnimation(mouseImg)

}

function draw() {

    background(255);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning")
        mouse.addAnimation("happy",mouseImg2)
        mouse.addAnimation("happy")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW)
  cat.velocityX = -3
  mouse.addAnimation("mouseTeasing", mouseImg2)
  mouse.changeAnimation("mouseTeasing")
  mouse.frameDelay = 25


}
