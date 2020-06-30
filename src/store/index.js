import vue from 'vue'; import Vuex from 'vuex'; vue.use(Vuex);
const state = { is_login: false, url_add: false, url_edit: false, url_search: true, url_delete: false, output_url: false, category_add: false, category_edit: false, category_search: true, category_delete: false, output_category: false, username_add: false, username_edit: false, username_search: true, username_delete: false, output_username: false, };
const getters = {
    is_login(state) { return state.is_login; },
    url_add(state) {
        return state.url_add;
    },
    url_edit(state) {
        return state.url_edit;
    },
    url_search(state) {
        return state.url_search;
    },
    url_delete(state) {
        return state.url_delete;
    },
    output_url(state) {
        return state.output_url;
    },
    category_add(state) {
        return state.category_add;
    },
    category_edit(state) {
        return state.category_edit;
    },
    category_search(state) {
        return state.category_search;
    },
    category_delete(state) {
        return state.category_delete;
    },
    output_category(state) {
        return state.output_category;
    },
    username_add(state) {
        return state.username_add;
    },
    username_edit(state) {
        return state.username_edit;
    },
    username_search(state) {
        return state.username_search;
    },
    username_delete(state) {
        return state.username_delete;
    },
    output_username(state) {
        return state.output_username;
    },

};
const mutations = {
    set_is_login(state, value) { state.is_login = value;; },
    set_url_add(state, value) {
        state.url_add = value;
    },
    set_url_edit(state, value) {
        state.url_edit = value;
    },
    set_url_search(state, value) {
        state.url_search = value;
    },
    set_url_delete(state, value) {
        state.url_delete = value;
    },
    set_output_url(state, value) {
        state.output_url = value;
    },
    set_category_add(state, value) {
        state.category_add = value;
    },
    set_category_edit(state, value) {
        state.category_edit = value;
    },
    set_category_search(state, value) {
        state.category_search = value;
    },
    set_category_delete(state, value) {
        state.category_delete = value;
    },
    set_output_category(state, value) {
        state.output_category = value;
    },
    set_username_add(state, value) {
        state.username_add = value;
    },
    set_username_edit(state, value) {
        state.username_edit = value;
    },
    set_username_search(state, value) {
        state.username_search = value;
    },
    set_username_delete(state, value) {
        state.username_delete = value;
    },
    set_output_username(state, value) {
        state.output_username = value;
    },
};
const actions = {

    set_is_login(context, value) { context.commit('set_is_login', value);; },
    set_url_add(context, value) {
        context.commit('set_url_add', value);;
    },
    set_url_edit(context, value) {
        context.commit('set_url_edit', value);
    },
    set_url_search(context, value) {
        context.commit('set_url_search', value);
    },
    set_url_delete(context, value) {
        context.commit('set_url_delete', value);
    },
    set_output_url(context, value) {
        context.commit('set_output_url', value);
    },
    set_category_add(context, value) {
        context.commit('set_category_add', value);
    },
    set_category_edit(context, value) {
        context.commit('set_category_edit', value);
    },
    set_category_search(context, value) {
        context.commit('set_category_search', value);
    },
    set_category_delete(context, value) {
        context.commit('set_category_delete', value);
    },
    set_output_category(context, value) {
        context.commit('set_output_category', value);
    },
    set_username_add(context, value) {
        context.commit('set_username_add', value);
    },
    set_username_edit(context, value) {
        context.commit('set_username_edit', value);
    },
    set_username_search(context, value) {
        context.commit('set_username_search', value);
    },
    set_username_delete(context, value) {
        context.commit('set_username_delete', value);
    },
    set_output_username(context, value) {
        context.commit('set_output_username', value);
    },
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;
