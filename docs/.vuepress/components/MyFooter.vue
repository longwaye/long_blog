<!--
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2023-02-28 21:33:19
 * @LastEditors: LWYð
 * @LastEditTime: 2023-02-28 21:35:24
 * @FilePath: \LWY'blog\docs\.vuepress\components\MyFooter.vue
-->
<template>
  <div class="myfooter">
    <div id="runtime" style="margin-right: 27px;">
      æ¬ç«åå¼ºè¿è¡ <span class="color">{{ A }}</span>å¤©<span class="color">{{ B }}</span>å°æ¶<span class="color">{{ C
      }}</span>å<span class="color">{{ D }}</span>ç§
    </div>
    <div id="busuanzi" style="margin-right: 27px;">
      æ¬ç«æ»è®¿é®é
      <span id="busuanzi_value_site_pv"></span>
      æ¬¡
    </div>
    <div id="copyright" style="margin-right: 27px;">Copyright Â© 2022-present WEIYI LONG</div>
  </div>
</template>

<script>
/* ä¸èå­è®¿é®éç»è®¡ */
import pure from 'busuanzi.pure.js'
export default {
  // çå¬,å½è·¯ç±åçååçæ¶åæ§è¡
  watch: {
    $route (to, from) {
      if (to.path != from.path) {
        pure.fetch()
      }
    },
  },
  data () {
    return {
      A: '',
      B: '',
      C: '',
      D: '',
    }
  },
  methods: {
    show_runtime () {
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
  mounted () {
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
  font-size: 14px !important;
  margin: 10px 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);
  color: #f1f1f1;
  display: flex;
  justify-content: flex-end;
}

#busuanzi_value_site_pv,
#busuanzi_value_site_uv,
#busuanzi {
  margin: 10px 0;
}

/* ç§»å¨ç«¯  */
@media all and (max-width: 768px) {
  #busuanzi {
    display: none;
  }
}
</style>
