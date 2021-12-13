<template >
    <div class="bookmark text-center rounded-md shadow-md">
        <div>
            <p class="text-2xl pt-4 font-bold">Mastercraft Bamboo Monitor Riser</p>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div class="flex justify-around mt-2">
            <button  @click="show" class="bg-green-700 rounded-3xl btn font-bold text-white">Back this project</button>
            <button class="bg-gray-500 rounded-3xl flex btn font-bold"><svg width="56"  height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg> <div class="pt-3 ml-1">
            Bookmark </div> </button>
        </div>
    </div>
</template>

<script>
import {  mapMutations } from 'vuex';

export default {
    name: 'BookMark',
    data() {
        return {
            //au Clique il renvoit true ou false. Cette variable sera pasée au App.vue(parent), Puis à PickCrowdfund.vue(enfant) 
            //Déplacéau niveau du vueX
            // showModal:false,
        }
    },
    methods: {
        //déplacé au niveau du vueX
        // show(){
        //     this.showModal=!this.showModal
        //     this.$emit('isClicled',this.showModal)
        // }

        //Au click du bouton bookmark on lance la fonction show venant du vueX
        ...mapMutations(['show'])

    },
    computed: {
        
    },
}
</script>

<style scoped>
.bookmark{
    height: 18vh;
    background-color: white;
}
.btn{
    width: 150px
}
</style>