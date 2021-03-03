var app = new Vue({
    el: '#app',
    data: {
      compteur: 0,
      borderRaduis : "border-radius : 50%;"
    },
    methods: {
        incrementation: function(){
          this.compteur++;
          console.log("this.i"+this.compteur);
          if (this.compteur>=10){
              //changer le style border-radius: 50%;
              this.borderRaduis = "border-radius: 40% / 50%;background-color: rgba(253, 84, 87, 0.85);" 
          }
        }
    }
  });