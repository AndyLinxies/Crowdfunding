<template>
  <div id="app">
    <Nav />
    <div class="components">
      <!-- Plus besoin du event car utilisation de vueX -->
      <!-- <BookMark @isClicled="show" /> -->
      <BookMark />
      <ProgressBar :pledge="pledge" />
      <div class="mt-4 bg-white rounded-xl pr-4 pl-4">
        <div class="top-writings">
          <p class="font-bold">About this project</p>
          <p class="mt-4 text-gray-700 text-sm">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p class="mt-2 text-gray-700 text-sm">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      <CrowdFundCard :name="nameTop" :pledge="pledgeTop" :nrLeft="nrLeftTop" :description="descriptionTop" />
      <CrowdFundCard :name="nameMiddle" :pledge="pledgeMiddle" :nrLeft="nrLeftMiddle" :description="descriptionMiddle" />
      <CrowdFundCard :name="nameBottom" :pledge="pledgeBottom" :nrLeft="nrLeftBottom" :description="descriptionBottom"/>

      </div>
    </div>
    <!-- Pick a crownFund Modal -->
    <PickCrowdfundModal 
    :isClicled="click" 
    :display="displayModal1"
    @continueToApp="contCheck"
    />
    <!-- Thanks modal -->
    <ThanksModal :cont="continued"  />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import BookMark from "./components/BookMark.vue";
import ProgressBar from "./components/ProgressBar.vue";
import CrowdFundCard from "./components/CrowdFundCard.vue";
import PickCrowdfundModal from "./components/PickCrowdfundModal.vue";
import ThanksModal from './components/ThanksModal.vue'


export default {
  name: "App",
  components: {
    Nav,
    BookMark,
    ProgressBar,
    CrowdFundCard,
    PickCrowdfundModal,
    ThanksModal
  },
  data() {
    return {
      nameTop:"Bamboo Stand",
      pledgeTop:"$25",
      nrLeftTop: 101,
      descriptionTop: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      nameMiddle:"Black Edition Stand",
      pledgeMiddle:"$75",
      nrLeftMiddle: 64,
      descriptionMiddle:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      nameBottom:"Mahogany Special Edition",
      pledgeBottom:"$200",
      nrLeftBottom: 0,
      descriptionBottom:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      click:false,
      continued:null,
      pledge:null
    }
  },
  methods: {
    //vueX show made me do this
    // show(value){
    //   this.click=value;
    // },
    //On crée la fonction quon va passer en props et qui va changer la valeur d'une de nos variables.??
    displayModal1(){
      this.click=!this.click
    },
    contCheck(value){
      this.continued=value[0],
      this.pledge=value[1]
      // console.log(value);
    },
    
  },
};
</script>

<style>
html {
  font-family: "Commissioner", sans-serif;
  position: relative;
  background-color: hsl(0, 41%, 97%);
}
.components {
  width: 40%;
  margin-left: 30%;
  position: absolute;
  top: 80%;
}
</style>
