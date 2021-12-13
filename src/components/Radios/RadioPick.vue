<template>
    <!-- Select Modal -->
    <div class="radio p-2 mt-2" :class="[(elems.amountLeft ==0 && 'text-gray-400'),(isChecked && 'border-green-500')] ">
        <div class="flex">
            <div class="pr-4">
            <input type="radio" name="radio" @click="isChecked=!isChecked" :checked="isChecked">
            </div>
            <div>
                <div class="flex justify-between">
                <p class="text-green-400 ">{{elems.title}}</p>
                <p v-if="elems.price">Pledge ${{elems.price}} or more</p>
                <p v-if="elems.amountLeft" class="font-semibold">{{elems.amountLeft}} <span>left</span></p>
                </div>
                <p>{{elems.description}}</p>
                <div :class="isChecked ? 'flex' : 'hidden' ">
                    <span>Enter your pledge</span>
                    <input type="number" class="border-green-500 border input ml-10 mr-2  rounded-2xl pl-3" v-model="$store.state.pledge">
                    <button class="bg-green-500 rounded-2xl p-1 text-white" @click="final">Continue</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations} from 'vuex';

export default {
    name: "RadioPick",
    props: {
        // title: String,
        // desc: String,
        // amountLeft: Number,
        // price: Number
        elems: Object
    },
    data() {
        return {
            isChecked: false,
            // pledge:null,
            //vueX
            // continueClicked:false
        }
    },
    methods: {
        //vueX continueClicked & pledge
        // // final(){
        // //     this.continueClicked=true,
        //     // this.pledge=this.pledge+10
        //     // console.log(this.continueClicked);
        //     //La variable du continue est passé au parent PickCrowdfundModal.vue, puis au grand Parent App puis à Thanks.vue 

        //     //on passe aussi le pledge au Parent PickCrowdfundModal puis au App.vue pour aller dans le progressBar.vue
        // //     this.$emit('continued',[this.continueClicked,parseInt(this.pledge) ])
        // // }

        //Au click de continue on lance la methode final venant de vueX
        ...mapMutations(['final'])
    },
    //Pas pour reassigner la valeur d'une variable
    // computed: {
    //     ...mapState(['pledge'])
    // },
}
</script>

<style>
.radio{
   border: solid 0.5px gray;
   border-radius: 10px;
  
}
.input{
    width:20%
    
}
</style>