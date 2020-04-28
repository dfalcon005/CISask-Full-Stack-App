import axios from 'axios';

const state = {
    post: [],
    onepost: [],
    status: '',
    error: null
};

export const getters = {
    post: state => state.post,
    onepost: state => state.onepost
};

export const actions = {
    // get all post
    async getPost({ commit }) {
        const res = await axios.get('http://localhost:3000/posts');

        commit('setPost', res.data)
    },

    // get single post
    async getOnePost({ commit }) {
        const res = await axios.get('http://localhost:3000/posts/:id');

        commit('setOnePost', res.data)
        console.log(res)
    },

    // create posts
    async createPost({ commit }, postData) {
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
    setPost: (state, post) => (state.post = post),

    setOnePost: (state, onepost) => (state.onepost = onepost),

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