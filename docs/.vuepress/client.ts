import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'
export default defineClientConfig({
  enhance({ app }) {},
  setup() {
    onMounted(() => {
      // dom相关操作
    })
  },
})
