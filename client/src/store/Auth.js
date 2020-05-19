import axios from 'axios'
import router from '../router'

// initial state up application
const state = {
    // if there is a token set it to token, if not it will be a empty string
    token: localStorage.getItem('token') || '',
    // user date
    user:{},
    // status of user
    status: ''

};

const getter = {
    //make sure token is not empty
    isLoggedIn: state => !!state.token,
    user: state => state.user,
    authState: state => state.status
};

const mutations = {
    auth_request(state){
        state.staus = 'loading'
    },
    auth_success(state, token, user){
        state.token = token
        state.user = user
        state.status = 'success'
    }
};

const actions = {
    // login action
    async login({ commit }, user){
        commit('auth_request');
        let res = await axios.post('http://localhost:3000/users/login')
        if(res.data.success){
            const token = res.data.token;
            const user = res.data.user;
            // store the token to db
            localStorage.setItem('token', token);
            // set up axios
            axios.defaults.headers.common['token'] = token;
            commit('auth_success', token, user); 
        }
        return res;
    }
};

export default {
    state,
    getter,
    mutations,
    actions
}