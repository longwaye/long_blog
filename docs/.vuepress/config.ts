import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
const __dirname = getDirname(import.meta.url)
export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: "LWY's Blog",
  description: '一个专注于编程开发技术的个人知识库博客',
  plugins: [
    removeHtmlExtensionPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  theme,
  shouldPrefetch: false,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    // '@theme-hope/components/PageFooter': path.resolve(
    //   __dirname,
    //   './components/MyFooter.vue'
    // ),
    '@theme-hope/modules/blog/components/BlogHero': path.resolve(
      __dirname,
      './components/MyBlogHero.vue'
    ),
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
})
