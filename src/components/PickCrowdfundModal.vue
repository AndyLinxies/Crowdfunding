<template>
  <!-- Si isClicked est true alors on voit le modal. Par defaut on ne le voit pas -->
  <div
    :class=" showModal == true ? 'flex' : 'hidden' "
    class="radioPick bg-gray-400 bg-opacity-10 min-h-screen w-full"
    
  >
  <!-- <div
    :class="[(isClicled == true  ? 'flex':''),(close==true ?'hidden':'flex')]"
    class="radioPick bg-gray-400 bg-opacity-10 min-h-screen w-full"
    
  > -->
    <div class="glob-pick rounded-md p-4">
      <div class="flex justify-between">
        <p class="font-black mt-5">Back this project</p>
        <!-- Close -->
        <button @click="$store.state.showModal=false">
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".4"
            />
          </svg>
        </button>
      </div>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <!-- Close -->
      <!-- <RadioPick 
            :title="titleFirst" 
            :desc="descFirst" 
            :amountLeft="amountLeftFirst"
            :price="priceFirst"
            /> -->
      <!-- Renvoie un objet au props -->

      <!-- VueX continueClicked & pledge -->
      <!-- <RadioPick 
      v-for="data in datas" 
      :key="data.title" 
      :elems="data" 
      @continued="contPick"
      /> -->

      <RadioPick 
      v-for="data in datas" 
      :key="data.title" 
      :elems="data" 
      />
    </div>
    
  </div>
</template>

<script>
import RadioPick from "./Radios/RadioPick.vue";
import {  mapState } from 'vuex';


export default {
  name: "PickCrowdfundModal",
  components: {
    RadioPick,
  },
  props: {
    //vuex show made me dothis
    // isClicled: Boolean,
    display: Function
  },
  data() {
    return {
      //les propriétés des Objets doivent etre la même pour pouvoir y acceder. Seuls les données peuvent etre différents
      datas: [
        {
          title: "Pledge with no Reward",
          description:
            "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
          amountLeft: null,
          price: null,
        },
        {
          title: "Bamboo Stand",
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          amountLeft: 100,
          price: 25,
        },
        {
          title: "Black Edition Stand",
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          amountLeft: 64,
          price: 75,
        },
        {
          title: "Mahogany Special Edition",
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          amountLeft: 0,
          price: 75,
        },
      ],
      close: false,
      isContinued:null,
      pledge:null
      
    };
  },
  methods: {
      closeModal(){
          this.close=!this.close;
          console.log(this.close,this.isClicled);
      },
      //vuex continueClicked & pledge
      // // contPick(value){
      // //     //isContinued doit passer à app
      // //     this.isContinued=value[0];
      // //     this.pledge=value[1]
      // //   //   console.log(this.isContinued);
      // //     if (this.isContinued==true) {
      // //         //fonction display recu en parametre du parent
      // //         this.display()
      // //     }
      // //     //Continue recue de l'enfant, maintenant il passe au App.vue
      // //     this.$emit('continueToApp',[this.isContinued,this.pledge])
      // // }
  },
  //Le computed Copie la valeur du isClicled car dans les datas closed: isclicled n'assignera pas la derniere valeur de isClicked a closed. Il sera affiché pour afficher ou cacher le modal

  computed:{
      //vuex show made me do this
      // open(){
      //     return this.isClicled
      // }

      //On récupère les variables du vueX
      ...mapState(['showModal'])

  }
};
</script>

<style>
.glob-pick {
  width: 40%;
  background-color: white;
}
.radioPick {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
}


</style>
