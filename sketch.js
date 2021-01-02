var goku
var frieza
var kamehameha,beam,kiBlast,deathBeam
var gokuPose
var gokuSuperSaiyan
var gokuAttack
var gokuKamehameha
var gokuSaiyanKamehameha

var friezaPose
var friezaBeam
var goldenFriezaPose
var friezaDeathBeam
var friezaGoldenBeam

var backgroundImage


function preload(){
  backgroundImage=loadImage("fighting background.jpg")
  gokuPose=loadAnimation("gokupose.png")
  gokuSuperSaiyan=loadAnimation("gokusupersaiyan.png")
  gokuAttack=loadAnimation("gokuattack.png")
  gokuKamehameha=loadAnimation("gokukamehameha.png")
  gokuSaiyanKamehameha=loadAnimation("gokusaiyankamehameha.png")
  friezaPose=loadAnimation("friezapose.png")
  friezaBeam=loadAnimation("friezabeam.png")
  goldenFriezaPose=loadAnimation("goldenfriezapose.png")
  friezaGoldenBeam=loadAnimation("friezagoldenbeam.png")
  friezaDeathBeam=loadAnimation("friezadeathbeam.png")

  
}

function setup(){
  createCanvas(displayWidth,displayHeight)
  goku=createSprite(130,500,35,50);
  goku.addAnimation("gokuPose",gokuPose)
  goku.addAnimation("gokuAttack",gokuAttack)
  goku.addAnimation("gokuKamehameha",gokuKamehameha)
  goku.addAnimation("gokuSuperSaiyan",gokuSuperSaiyan)
  goku.addAnimation("gokuSaiyanKamehameha",gokuSaiyanKamehameha)

  frieza=createSprite(1300,500,25,40);
  frieza.addAnimation("friezaPose",friezaPose)
  frieza.addAnimation("friezaBeam",friezaBeam)
  frieza.addAnimation("goldenFriezaPose",goldenFriezaPose)
  frieza.addAnimation("friezaGoldenBeam",friezaGoldenBeam)
  frieza.addAnimation("friezaDeathBeam",friezaDeathBeam)
  
}



function draw(){

  background(backgroundImage);
  if(keyDown("w")){
    goku.y=goku.y-10
  }
  if(keyDown("s")){
    goku.y=goku.y+10
  }
  if(keyDown("d")){
    goku.x=goku.x+10
  }
  if(keyDown("a")){
    goku.x=goku.x-10
  }
  if(keyDown("space")){
    goku.velocityY=-10
  }
  goku.velocityY=goku.velocityY+0.6
  drawSprites();
  
}
