//Create variables here
var dog, happyDog, database, foodS, foodStock
var dogImg
var dogImg1
function preload()
{
  //load images here
  dogImg=loadImage('images/dogImg.png');
  dogImg1=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  database=firebase.database();
  foodStock=database.ref('food')
  foodStock.on('value',readStock)
  textSize=20
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg1);
}

  drawSprites();
  //add styles here
fill(255,255,255)
stroke('black')
text('foodRemaning: '+foodS,170,200)
textSize(15)
text('Note: Press up arrow key to feed Dream milk.',130,10,300,20)
}
function readStock(data) {
  foodS=data.val()
}
function writeStock(x) {
if(x<=0){
  x=0
}  
else{
 x=x-1
}
database.ref('/').update({
  food:x
})
}

