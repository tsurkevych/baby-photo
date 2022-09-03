import { Middleware } from '@nuxt/types';

/**
 * @type {Middleware}
 * @description middleware редиректів
 */
const middleware: Middleware = ({ route, redirect, req }) => {
	if (process.server) {
		if (route.path === '/ua' || route.path === '/ua/') redirect(301, '/');
		if (
			route.path !== '/'
			&& !route.path.endsWith('/')
			&& !route.path.includes('.html')
		) {
			const { path, query, hash } = route;
			const nextPath = path + '/';
			const nextRoute = { path: nextPath, query, hash };

			redirect(301, nextRoute);
		}
		if (req?.headers?.host?.match(/^www/) !== null) redirect(301, process.env.APP_URL + route.fullPath);
	}
	else if (
		route.path !== '/'
			&& !route.path.endsWith('/')
			&& !route.path.includes('.html')
	) {
		const { path, query, hash } = route;
		const nextPath = path + '/';
		const nextRoute = { path: nextPath, query, hash };

		redirect(301, nextRoute);
	}
};

export default middleware;
