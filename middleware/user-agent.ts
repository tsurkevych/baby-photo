import { Middleware } from '@nuxt/types';

declare module '@nuxt/types' {
	interface Context {
		userAgent: any
	}
}

/**
 * @type {Middleware}
 * @description middleware user-agent
 */
const middleware: Middleware = context => {
	context.userAgent = process.server
		? context.req.headers['user-agent']
		: navigator.userAgent;
};

export default middleware;
