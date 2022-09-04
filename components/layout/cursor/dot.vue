<template lang="pug">
	span(ref='dot' :class='$style.dot')
</template>

<script>
import gsap from 'gsap';

export default {
	props: {
		index:      Number,
		width:      Number,
		sineDots:   Number,
		idle:       Boolean,
		x:          Number,
		y:          Number,
		drawUpdate: Number,
		lockUpdate: Number
	},
	data() {
		return {
			anglespeed: 0.05,
			scale:      null,
			range:      null,
			limit:      null,
			lockX:      null,
			lockY:      null,
			angleX:     null,
			angleY:     null
		};
	},
	watch: {
		drawUpdate() {
			this.draw();
		},
		lockUpdate() {
			this.lock();
		}
	},
	mounted() {
		this.scale = 1 - (0.05 * this.index);
		this.range = (this.width / 2) - (this.width / 2 * this.scale) + 2;
		this.limit = 0.75 * this.width * this.scale;
		gsap.set(this.$refs.dot, {
			scale: this.scale
		});
	},
	methods: {
		lock() {
			this.lockX = this.x;
			this.lockY = this.y;
			this.angleX = 2 * Math.PI * Math.random();
			this.angleY = -2 * Math.PI * Math.random();
		},

		draw() {
			if (!this.idle || this.index <= this.sineDots) {
				gsap.set(this.$refs.dot, {
					x: this.x,
					y: this.y
				});
			}
			else {
				this.angleX += this.anglespeed;
				this.angleY += this.anglespeed;
				gsap.set(this.$refs.dot, {
					x: this.lockX + (Math.sin(this.angleX) * this.range),
					y: this.lockY + (Math.sin(this.angleY) * this.range)
				});
			}
		}
	}
};
</script>

<style lang="scss" module>
.dot {
	position: absolute;
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
	transform: translate(-50%, -50%);
	transform-origin: center center;
	border: {
		radius: 20px;
	}
	background: {
		color: var(--secondary);
	}
}
</style>
