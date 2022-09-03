/**
 * @author tsurkevych
 * @summary івент ресайзу
 */
export default function cr(): void {
	const customEvent: Event = new CustomEvent('cr');
	let timer: ReturnType<typeof setTimeout>;

	window.addEventListener('resize', ({ target }: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			target.dispatchEvent(customEvent);
		}, 300);
	});
}
