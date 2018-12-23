

new Vue({
  el: "#app",
  data: {
    healthLevel: {
      "You": "100",
      "Monster": "100"
    },
    gameStatus: false,
    playHistory: []
  },
  methods: {
    startGame: function(){
      this.gameStatus = true;
    },
    quitGame: function(){
      this.gameStatus = false;
      this.healthLevel.You = "100";
      this.healthLevel.Monster = "100";
      this.playHistory = [];
    },
    attack: function(e, playerPlayed, monsterPlayed, heal){
      let playerPlay = playerPlayed || this.randomPlay(1,11);
      heal ? playerPlay = 0 : null;
      let monsterPlay = monsterPlayed || this.randomPlay(1,11);
      this.healthLevel.Monster -= playerPlay;
      this.healthLevel.You -= monsterPlay;
      if(this.healthLevel.You <= 0){
        alert("Monster Wins!");
      }else if(this.healthLevel.Monster <= 0){
        alert("You won!");
      }else{
        heal ? null : this.playHistory.push({'player': `Player Hits Monster for ${playerPlay}`, 'turnPlayer': true});
        this.playHistory.push({'player': `Monster Hits Player for ${monsterPlay}`, 'turnMonster': true});
      }
    },
    specialAttack: function(){
      let playerPlay = this.randomPlay(11,21);
      let monsterPlay = this.randomPlay(11,21);
      this.attack(0,playerPlay, monsterPlay);
    },
    heal: function(){
      let healPlayer = this.randomPlay(5,16);
      this.healthLevel.You += healPlayer;
      this.healthLevel.You >= 100 ? this.healthLevel.You = 100 : this.healthLevel.You = this.healthLevel.You;
      this.playHistory.push({'player': `Player Heals Himself for ${healPlayer}`, 'turnPlayer': true});
      this.attack(0,0,0, true)
      
    },
    randomPlay: function(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },

})