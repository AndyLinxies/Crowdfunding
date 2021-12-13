<template>
  <div class="bf-prog">
    <div class="grid grid-cols-3 gap-4 progress mt-5 text-center">
      <div>
        <p class="text-xl font-black">${{$store.getters.pledgeAdded}}</p>
        <p class="text-sm">of $100,000 backed</p>
      </div>
      <div class="backers">
        <p class="font-black">5,007</p>
        <p>total backers</p>
      </div>
      <div>
        <p class="font-black">56</p>
        <p>days left</p>
      </div>
    </div>
    <progress class="w-full pl-4 pr-4 mt-4" id="file" :value="$store.getters.pourcentage" max="100"> </progress>

  </div>
</template>
<script>
import {  mapState } from 'vuex';

export default {
  name: "ProgressBar",
  props: {
    //vueX pledge
    // pledge: Number
  },
  data() {
    return {
      
    }
  },
  computed:{
    // defaultPledge(){
    //   return this.pledge+10
    // }
    ...mapState(['pledge','basePledge']),
  }
};
</script>
<style>
.bf-prog {
  background-color: white;
}
.backers {
  border-left: solid 1px gray;
  border-right: solid 1px gray;
}
progress::-webkit-progress-value { 
    background: black; 
    border-radius: 20px;
}
progress::-webkit-progress-bar {
    border-radius: 20px;
}
</style>
