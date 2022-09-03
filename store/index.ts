import { GetterTree, MutationTree, ActionTree } from 'vuex';

export const state = (): any => ({
	ww:        0,
	wh:        0,
	scrollTop: 0,
	loading:   false
});

export const getters: GetterTree<any, any> = {
	ww:        state => state.ww,
	wh:        state => state.wh,
	scrollTop: state => state.scrollTop,
	loading:   state => state.loading
};

export const mutations: MutationTree<any> = {
	setWw:        (state, payload) => (state.ww = payload),
	setWh:        (state, payload) => (state.wh = payload),
	setScrollTop: (state, payload) => (state.scrollTop = payload),
	setLoading:   (state, payload) => (state.loading = payload)
};

export const actions: ActionTree<any, any> = {
};

export const strict = false;
