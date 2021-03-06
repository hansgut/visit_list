import axios from 'axios';
import router from "../router";

const url = ()=> {
    let url = '';
    if(process.env.NODE_ENV === 'development'){
        url = 'http://localhost:5000';
    }
    return url;
}

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    admin: false,
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    isAdmin: function (state) {
        if(state.user !== undefined){
            return state.user.admin;
        } else {
            return false;
        }
    },
    user: state => state.user,
    error: state => state.error
};

const actions = {
    async login({ commit }, user){
        commit('auth_request');
        try {
            let res = await axios.post(url() + '/api/users/login', user);
            if(res.data.success){
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem('token', token);

                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    async register({ commit }, userData) {
        commit('register_request');
        try {
            let res = await axios.post(url() + '/api/users/register', userData);
            if(res.data.success !== undefined){
                commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err);
        }
    },
    async getProfile({ commit }){
        commit('profile_request');
        let res = await axios.get(url() + '/api/users/profile');
        commit('user_profile', res.data.user);
        return res;
    },

    async logout({ commit }){
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {
    auth_request(state){
        state.error = null;
        state.status = 'loading';
    },
    auth_success(state, token, user){
        state.token = token;
        state.user = user;
        state.status = 'success';
        state.error = null;
        state.admin = false;
    },
    auth_error(state, err){
        state.error = err.response.data.msg;
    },
    register_request(state){
        state.error = null;
        state.status = 'loading';
    },
    register_success(state){
        state.status = 'success';
        state.error = null;
    },
    logout(state){
        state.error = null;
        state.status = '';
        state.token = '';
        state.user = '';
        state.admin = false;
    },
    register_error(state, err){
        state.error = err.response.data.msg;
    },
    profile_request(state){
        state.status = 'loading';
    },
    user_profile(state, user){
        state.user = user;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};