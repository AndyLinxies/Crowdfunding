//Vuex Code
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    //les variables
    state:{
        showModal:false,
        continueClicked:false,
        pledge:1,
        basePledge: 89914
    },
    //les methodes
    mutations:{
    show(state){
        state.showModal=!state.showModal
    },

    final(state){
        state.continueClicked=true;
        //pour que le modal se ferme
        state.showModal=false
        state.pledge=parseInt(state.pledge)
    }
    },
    //les computed
    getters:{
        pourcentage(state){
            return (((state.basePledge+state.pledge)/100000)*100)
        },
        pledgeAdded(state){
            return parseInt(state.basePledge+state.pledge) 
        }
    }
})
