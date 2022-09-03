/**
 * @author tsurkevych
 * @summary івент скролу
 */
export default function cs(): void {
	const customEvent: Event = new CustomEvent('cs');
	let timer: ReturnType<typeof setTimeout>;

	document.addEventListener('scroll', ({ target }: any) => {
		window.clearTimeout(timer);
		timer = setTimeout(() => {
			target.dispatchEvent(customEvent);
		}, 10);
	});
}
