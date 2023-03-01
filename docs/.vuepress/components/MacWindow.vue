<template>
	<div class="window">
		<atropos class="my-atropos" :alwaysActive="true">
			<img class="bg1" src="../public/bg.jpg">
			<div class="bg2">
				<div class="stars">
					<div v-for="(item, index) in starCount" :key="index" class="star"></div>
				</div>
			</div>
			<MyFooter />
		</atropos>
	</div>
</template>

<script setup>
import Atropos from 'atropos/vue'
import MyFooter from './MyFooter.vue'
import {ref} from 'vue'

const starCount = ref(800)
const distance = ref(800)
</script>

<style scoped>
.window {
	width: 100%;
	height: 100vh;
	background-color: #080C10;
}

.my-atropos {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.bg2 {
	display: none;

}

/* 移动端  */
@media all and (max-width: 720px) {
	.my-atropos {
		width: 92vw;
		height: 92vh;
	}

	.bg1 {
		display: none;
	}

	.bg2 {
		display: block;
		height: 100%;
	}
}

/* PC端 */
@media all and (min-width: 1200px) {
	.my-atropos {
		width: 92vw;
		height: 92vh;

	}
}

@keyframes rotate {
	0% {
		transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
	}

	100% {
		transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
	}
}

.stars {
	transform: perspective(500px);
	transform-style: preserve-3d;
	position: absolute;
	perspective-origin: 50% 100%;
	animation: rotate 90s infinite linear;
	bottom: 0;
}

.star {
	width: 2px;
	height: 2px;
	background: #f7f7b6;
	position: absolute;
	left: 0;
	top: 0;
	backface-visibility: hidden;
}
</style>