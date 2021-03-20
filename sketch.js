var block1, block2, block3, block4, ball;
var canvas, edges;
var music;

function preload(){
 //loading sound
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1536,753);

 //create 4 different blocks
    block1=createSprite(160,720,350,50);
    block1.shapeColor="red";

    block2=createSprite(560,720,350,50);
    block2.shapeColor="blue";

    block3=createSprite(960,720,350,50);
    block3.shapeColor="yellow";

    block4=createSprite(1360,720,350,50);
    block4.shapeColor="green";

 //create ball sprite and give velocity
    ball=createSprite(random(20,600),random(20,600),60,60);
    ball.shapeColor="white";
    ball.velocityX=5.5;
    ball.velocityY=5.5;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();

 //playing the music when ball touches block 3
    if(block3.isTouching(ball)){
        music.play();
    }

 //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
 //add condition to check if ball touching block and make it ball
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor="red";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor="blue";
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor="yellow";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor="green";
    }
}


function isTouching(object1, object2){
    if(object1.x-object2.x < object1.width/2+object2.width/2
     && object2.x-object1.x < object1.width/2+object2.width/2
     && object1.y-object2.y < object1.height/2+object2.height/2
     && object2.y-object1.y < object1.height/2+object2.height/2){
        return true;
     }
     else {
        return false;
    }
}


function bounceOff(object1, object2){
    if(object1.x-object2.x < object1.width/2+object2.width/2
     && object2.x-object1.x < object1.width/2+object2.width/2){
         object1.velocityX=object1.velocityX*(-1);
         object2.velocityX=object2.velocityX*(-1);
     }
     
    if(object1.y-object2.y < object1.height/2+object2.height/2
     && object2.y-object1.y < object1.height/2+object2.height/2){
         object1.velocityY=object1.velocityY*(-1);
         object2.velocityY=object2.velocityY*(-1);

     }    
     
    }