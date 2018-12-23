new Vue({
  el: "#app",
  data: {
    healthLevel: {
      "You": "100%",
      "Monster": "100%"
    }
  },
  methods: {
  	toggle: function(todo){
    	todo.done = !todo.done
    }
  }
})