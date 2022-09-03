import { GetterTree, MutationTree, ActionTree } from 'vuex';

export const state = (): any => ({
	loading:          false,
});

export const getters: GetterTree<any, any>  = {
	loading: state => state.loading,
};

export const mutations: MutationTree<any> = {
	setLoading: (state, payload) => (state.loading = payload),
};

export const actions: ActionTree<any, any> = {
};

export const strict = false;
