import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
      name: 'Watcharaphat',
      lastName: 'Manosatiankul',
      birthDate: '16 May 1996 (21 years old)',
      age: 21,
      address: '8/118 Ngamwongwan 54 Chatuchak Bangkok 10900',
      img: 'https://watcharaphat.com/img/coffee_circle.png',
      contact: {
        phone: '093 559 7337',
        email: 'watcharaphat.m@ku.th',
        github: 'github.com/watcharaphat',
      },
    },
  },
  mutations: {
    changeProfile(state, profile) {
      this.state.profile = profile;
    },
  },
});
