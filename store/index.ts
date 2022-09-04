import { GetterTree, MutationTree, ActionTree } from 'vuex';

export const state = (): any => ({
	ww:        0,
	wh:        0,
	scrollTop: 0,
	margin:    '0',
	loading:   false
});

export const getters: GetterTree<any, any> = {
	margin:    state => state.margin,
	ww:        state => state.ww,
	wh:        state => state.wh,
	scrollTop: state => state.scrollTop,
	loading:   state => state.loading
};

export const mutations: MutationTree<any> = {
	setWw:        (state, payload) => (state.ww = payload),
	setWh:        (state, payload) => (state.wh = payload),
	setScrollTop: (state, payload) => (state.scrollTop = payload),
	setMargin:    (state, payload) => (state.margin = payload),
	setLoading:   (state, payload) => (state.loading = payload)
};

export const actions: ActionTree<any, any> = {

	/**
	 * @param {object} ctx ctx
	 * @param {object} ctx.state state
	 * @param {Function} ctx.commit commit
	 * @description Блокування скролу сторінки
	 */
	bodyScrollRemove({ state, commit }) {
		commit('setMargin', `${window.innerWidth - document.documentElement.clientWidth}px`);
		document.body.style.paddingRight = state.margin;
		document.body.classList.add('tatag-blocked-scroll');
	},

	/**
	 * @param {object} ctx ctx
	 * @param {object} ctx.state state
	 * @param {Function} ctx.commit commit
	 * @description Розблокування скролу сторінки
	 */
	bodyScrollAdd({ state, commit }) {
		commit('setMargin', '0');
		document.body.style.paddingRight = state.margin;
		document.body.classList.remove('tatag-blocked-scroll');
	}
};

export const strict = false;
