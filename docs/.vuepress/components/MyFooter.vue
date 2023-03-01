<!--
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2023-02-28 21:33:19
 * @LastEditors: LWY😊
 * @LastEditTime: 2023-02-28 21:35:24
 * @FilePath: \LWY'blog\docs\.vuepress\components\MyFooter.vue
-->
<template>
  <div class="myfooter">
    <div id="runtime">
      本站勉强运行 <span class="color">{{ A }}</span
      >天<span class="color">{{ B }}</span
      >小时<span class="color">{{ C }}</span
      >分<span class="color">{{ D }}</span
      >秒
    </div>
    <div id="busuanzi">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>
      次 本站访客数 <span id="busuanzi_value_site_uv"></span> 人
    </div>
    <div id="copyright">Copyright © 2022-present Fanhang Zhang</div>
  </div>
</template>

<script>
/* 不蒜子访问量统计 */
import pure from 'busuanzi.pure.js'
export default {
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        pure.fetch()
      }
    },
  },
  data() {
    return {
      A: '',
      B: '',
      C: '',
      D: '',
    }
  },
  methods: {
    show_runtime() {
      window.setTimeout(this.show_runtime, 1000)
      let X, Y, T, M, a, b, c
      X = new Date('2/28/2023 00:00:00')
      Y = new Date()
      T = Y.getTime() - X.getTime()
      M = 24 * 60 * 60 * 1000
      a = T / M
      this.A = Math.floor(a)
      b = (a - this.A) * 24
      this.B = Math.floor(b)
      c = (b - this.B) * 60
      this.C = Math.floor((b - this.B) * 60)
      this.D = Math.floor((c - this.C) * 60)
    },
  },
  mounted() {
    this.show_runtime()
  },
}
</script>
<style scoped>
.myfooter {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px !important;
  margin: 10px 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);
  color: #f1f1f1;
}
#busuanzi_value_site_pv,
#busuanzi_value_site_uv,
#busuanzi {
  margin: 10px 0;
}
/* 移动端  */
@media all and (max-width: 768px) {
  #busuanzi {
    display: none;
  }
}
</style>
