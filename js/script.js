var app = new Vue({
  el: '#app',
  data: {
    showCompteurs : false,
    nbreCompteurs: 0,
    compteurs : [
      {
        compteur: 0,
        borderRaduis : "border-radius : 50%;"
      }
    ]
  },
  methods: {
      incrementation: function(compt){
        compt.compteur++;
        console.log("this.i"+compt.compteur);
        if (compt.compteur>=10){
            //changer le style border-radius: 50%;
            compt.borderRaduis = "border-radius: 40% / 50%;background-color: rgba(253, 84, 87, 0.85);margin-right: -1.9%;padding-right: 13px;"; 
        }
        this.nbreCompteurs++;
      },
      addCompteur:function(){
        this.compteurs.push({
          compteur: 0,
          borderRaduis : "border-radius : 50%;"
        });
        this.showCompteurs = true;
      }
  }
});