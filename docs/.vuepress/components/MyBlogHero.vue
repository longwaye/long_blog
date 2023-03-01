<template>
  <div class="window">
    <atropos class="my-atropos" :alwaysActive="true">
      <img class="bg1" src="../public/bg.jpg" />
      <div class="bg2">
        <div class="stars">
          <div v-for="(item, index) in starCount" :key="index" class="star" ref="star"></div>
        </div>
      </div>
      <MyFooter />
    </atropos>
  </div>
</template>
<script>
import Atropos from 'atropos/vue'
export default {
  components: {
    Atropos,
  },
  data () {
    return {
      starCount: 800,
      distance: 800,
    }
  },
  methods: {},
  computed: {},
  mounted () {
    let _this = this
    let starArr = this.$refs.star
    starArr.forEach(item => {
      let speed = 0.2 + (Math.random() * 1);
      let thisDistance = this.distance + (Math.random() * 300);
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`;
    })
  },
}
</script>
<style scoped>
.window {
  width: 100%;
  height: 100vh;
  background-color: #080c10;
}

.my-atropos {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bg2 {
  position: absolute;
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
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
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
