var backgroundImg, background
var player_shipImg, player_ship
var enemy_shipImg, enemy_ship, enemy_ship2,enemy_ship3, enemy_shipGroup
var boss_shipImg, boss_ship
var bala_Img, bala
var score=0

function preload(){
  backgroundImg = loadImage("./assets/fundo.png");
  player_shipImg = loadImage("./assets/nave_do_jogador.png")
  enemy_shipImg = loadImage("./assets/nave_inimiga.png");
  boss_shipImg = loadImage("./assets/nave_do_chefe.png")
  bala_Img = loadImage("./assets/bala.png")
  gunshotSound = loadSound("./sound/cartoon_tiro.mp3");
  themeSong = loadSound("./sound/thefatrat_unity_mp3_77941.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 

  player_ship = createSprite(300,450)
  player_ship.addImage("player_ship",player_shipImg)
  player_ship.scale=0.5
 
 // back = createSprite(windowWidth/2, 290);
 // back.addImage("back",backgroundImg);
 // back.scale=4

  enemyG = new Group();
  balaG = new Group()
  bossG = new Group()
}

function draw() {
  background(backgroundImg); 

  
 // back.velocityY = -3 

 // if (back.y < 0){
 //   back.y = back.width/1;
 // }
 
  player_ship.x = World.mouseX

  if (keyWentDown("space")) {
    createBullet();
    gunshotSound.play()
  }

  var select_enemy = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
    switch(select_enemy ){
      case 1: wave1();
      break;
      case 2: wave2();
      break;
      case 3: wave3();
      break;
      default:break;
    }
  }

  if (balaG.isTouching(enemyG)) {
    enemyG.destroyEach();
    balaG.destroyEach();
    gunshotSound.play()
    score=score+3
  }

  text("Pontuação: "+ score, 300,50);
  drawSprites();
}


  function wave1() {
    if (frameCount % 60 === 0) {
     var enemy_ship = createSprite(300,Math.round(random(0)), 10, 10);
      enemy_ship.addImage(enemy_shipImg);      
      enemyG.add(enemy_ship);
      enemy_ship.scale = 0.3;
    }
  }
  function wave2() {
    if (frameCount % 60 === 0) {
     var enemy_ship2 = createSprite(150,Math.round(random(0)), 10, 10);
      enemy_ship2.addImage(enemy_shipImg);
      enemyG.add(enemy_ship2);
      enemy_ship2.scale = 0.3;
    }
  }  
  function wave3() {
    if (frameCount % 60 === 0) {
     var enemy_ship3 = createSprite(450,Math.round(random(0)), 10, 10);
      enemy_ship3.addImage(enemy_shipImg);
      enemyG.add(enemy_ship3);
      enemy_ship3.scale = 0.3;
    }
  }

  function createBullet() {
    var bala = createSprite(300, 100, 60, 10);
    bala.addImage(bala_Img);
    //bala.y = 360;
    bala.x=player_ship.x;
    bala.y=player_ship.y-50;
    bala.velocityY = -4;
    bala.lifetime = 100;
    bala.scale = 0.5;
    balaG.add(bala);
     
  }

  function boss() {
    var boss_ship = createSprite(100, 100, 60, 10);
    boss_ship.addImage(boss_shipImg);
    boss_ship.lifetime = 150;
    bossG.add(boss_ship);
    boss_ship.scale = 0.3;
  }

 






