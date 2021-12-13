<template>
    <div 
    class="thanks bg-gray-400 bg-opacity-10 min-h-screen w-full"
    :class="[(continueClicked ? 'flex': 'hidden')]"
    >
        <div class="bg-white text-center justify-center realThank">
            <svg class="thankSvg" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
            <p class="font-bold mt-3">Thanks For your support!</p>
            <p class="p-4">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.</p>
            <button @click="$store.state.continueClicked=false" class="rounded-2xl bg-green-500 p-2 text-white">Got it! </button>
        </div>
    </div>
</template>

<script>
import {  mapState } from 'vuex';

export default {
    name: "ThanksModal",
    props: {
        //on Recois le continue de RadioPick.vue. S'il est true on montre le ThanksModal

        //warning car au clique de Got it je change la valeur de la props

        //vue X continueClicked
        // // cont: Boolean,
        
    },
    data() {
        return {
            //ok: true fait que le modal reste fermé
            // ok: true
        }
    },
    //Pas pour update la valeur de continueClicked. Pour se faire il faut utiliser le bon vieux $store.state
    computed: {
        ...mapState(['continueClicked'])
    },
    
}

</script>

<style>
.thanks {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 2;
}

.realThank{
    height: 40vh;
    margin-top: 20%;
    width: 40%;
}
.thankSvg{
    margin-left: 40%;
    margin-top: 7%;
}
</style>