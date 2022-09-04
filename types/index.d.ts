import { GetterTree, MutationTree, ActionTree } from 'vuex';

export interface TataModuleGTM {
	enabled?: boolean | undefined;
	id: string | undefined;
	layer?: string;
	autoInit: boolean;
	variables?: {};
	scriptId?: string;
	scriptDefer?: boolean;
	dev?: boolean;
	scriptURL?: string;
	noScript?: boolean;
	noScriptId?: string;
	noScriptURL?: string;
}

export interface TataRootStates {
	ww: number; // ширина вікна
	wh: number; // висота вікна
	scrollTop: number; // позиція від верху сторінки
	loading: boolean; // перехід між сторінками
	margin: string; // відступ з правої сторони при блокуванні скролу
}
export type TataRootGetters = GetterTree<TataRootStates, TataRootStates>;
export type TataRootMutations = MutationTree<TataRootStates>;
export type TataRootActions = ActionTree<TataRootStates, TataRootStates>;
