import scroll from './scroll';
import resize from './resize';

/**
 * @author tsurkevych
 * @summary запуск івентів scroll і resize
 */
export default function events(): void {
	scroll();
	resize();
}
