var question, Contestantcount, contentestCount, playerCount, game;
var gameState;
var database;

function setup() {
  createCanvas(innerWidth,innerHeight);
  gameState=0;
  database = firebase.database();
  Contestantcount = new ContestantCount();
  question = new questions();
  game = new Game();

}

function draw() {
  // question.display();
  // game.update(0);
  
      question.display()
 
  background("cyan");
  drawSprites();
}