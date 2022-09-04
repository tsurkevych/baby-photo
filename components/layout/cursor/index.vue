<template lang="pug">
	div(
		v-if='ww > $size.md'
		ref='cursor'
		:class='$style.cursor'
	)
		layout-cursor-dot(
			v-for='(item, index) in dots'
			:key='index'
			:index='index'
			:width='width'
			:sineDots='sineDots'
			:idle='idle'
			:x='item.x'
			:y='item.y'
			:draw-update='item.drawUpdate'
			:lock-update='item.lockUpdate'
		)
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			amount:    20,
			sineDots:  0,
			width:     16,
			timeoutID: undefined,
			lastFrame: 0,
			x:         0,
			y:         0,
			dots:      [],
			idle:      false
		};
	},
	computed: mapGetters({
		ww: 'ww'
	}),
	watch: {
		idle() {
			for (const iterator of this.dots)
				iterator.idle = this.idle;
		}
	},
	created() {
		this.sineDots = Math.floor(0.3 * this.amount);
	},
	mounted() {
		if (this.ww > this.$size.md) {
			window.addEventListener('mousemove', this.onMouseMove);
			this.lastFrame += new Date();

			this.buildDots();
			this.render();
		}
	},
	methods: {
		goInactive() {
			this.idle = true;
			for (const e of this.dots)
				e.lockUpdate = Math.random();
		},
		startIdleTimer() {
			this.timeoutID = setTimeout(this.goInactive, 150);
			this.idle = false;
		},
		resetIdleTimer() {
			clearTimeout(this.timeoutID);
			this.startIdleTimer();
		},
		onMouseMove(e) {
			this.x = e.clientX - (this.width / 4);
			this.y = e.clientY - (this.width / 4);
			this.resetIdleTimer();
		},
		buildDots() {
			for (let e = 0; e < this.amount; e++) {
				this.dots.push({
					x: 0,
					y: 0
				});
			}
		},
		positionCursor() {
			let t = this.x;
			let i = this.y;

			this.dots.forEach((o, s, n) => {
				const h = n[s + 1] || n[0];

				o.x = t;
				o.y = i;
				o.drawUpdate = t * i;
				if (!this.idle || s <= this.sineDots) {
					t += 0.35 * (h.x - o.x);
					i += 0.35 * (h.y - o.y);
				}
			});
		},
		render() {
			this.positionCursor(this.lastFrame);
			requestAnimationFrame(this.render);
		}
	}
};
</script>

<style lang="scss" module>
.cursor {
	position: fixed;
	z-index: 9999999;
	top: 0;
	left: 0;
	transform-origin: center center;
	pointer-events: none;
}
</style>
