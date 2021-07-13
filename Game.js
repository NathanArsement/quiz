class Game {
  constructor(){
    this.button = createButton('Reset');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
    game.start();
  }

  async start(){
    if(gameState === 0){
      // question = new questions();
      // question.display();
  //     player = new Player();
      var playerCountRef = await database.ref('contenstentCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        ContestantCount.getCount();
      }
      
  //     form = new Form()
  //     form.display();
  //   }
  // }
  // car1=createSprite(200,400,50,50);
  // car2=createSprite(400,400,50,50);
  // car3=createSprite(600,400,50,50);
  // car4=createSprite(800,400,50,50);
  // carA=[car1, car2, car3, car4];

  
    }
  }
  play(){
    ContestantCount.getPlayerInfo();
  }
  //   form.hide();
  //   textSize(30);
  //   text("Game Start", 120, 100)
  //   Player.getPlayerInfo();
  //   var carp = carp+1;
  //   var x = 0;
  //   var y = player.distance;
    
    

  //   if(allPlayers !== undefined){
  //     var display_position = 130;
  //     for(var plr in allPlayers){
  //       if (plr === "player" + player.index){
  //         carA[carp-1].shapeColor("red");
  //       }
        
  //       display_position+=20;

  //       textSize(15);
  //       text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
  //     }
      
       
          
      
  //   }

  //   if(keyIsDown(UP_ARROW) && player.index !== null){
  //     player.distance +=50
  //     player.update();
   
  
}
