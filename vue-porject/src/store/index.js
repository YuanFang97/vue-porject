import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        classifyIdx:0,
    },
    mutations:{
        chanfeClassifyIdx(state,idx){
            state.classifyIdx = idx;
        }
    }
})

export default store;