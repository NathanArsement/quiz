class ContestantCount {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('contentestCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contentestCount: count
      });
    }
  
    update(a,b){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:a,
        answer:b
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  