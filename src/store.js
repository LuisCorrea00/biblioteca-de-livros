import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: '',
        message: {
            text: '',
            type: '',
        },
    },
    mutations: {
        setAuthToken(state, payload) {
            state.authToken = payload;
        },
        showErrorMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'ERROR',
            };
        },
        showSuccessMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'SUCCESS',
            };
        },
    },
});
