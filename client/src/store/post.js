import axios from 'axios';

const state = {
    post: {},
    status: '',
    error: null
};

export const getters = {
    post: state => state.post
};

export const actions = {
    // get posts
    async getPost({
        commit
    }) {
        commit('getpost_request');
        let res = await axios.get('http://localhost:3000/posts')
        commit('getpost', res.data.post)
        return res;
    },

    // create posts
    async createPost({
        commit
    }, postData) {
        try {
            commit('newpost_request');
            let res = await axios.post('http://localhost:3000/posts', postData);
            if (res.data.success !== undefined) {
                commit('newpost_success');
            }
            return res;
        } catch (err) {
            commit('newpost_error', err)
        }
    }

};

export const mutations = {
    // get post
    getpost_request(state) {
        state.status = 'loading'
    },
    getpost(state, post){
        state.post = post
    },

    // create post
    newpost_request(state) {
        state.error = null
        state.status = 'loading'
    },
    newpost_success(state) {
        state.error = null
        state.status = 'success'
    },
    newpost_error(state, err) {
        state.error = err.response.data.msg
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};