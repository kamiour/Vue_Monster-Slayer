new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameisRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameisRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
  },
});
