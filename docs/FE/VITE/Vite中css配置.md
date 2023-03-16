---
title: Vite中css配置
order: 5
category:
  - Vite
tag:
  - 构建工具
comment: false
---

<br />

### 1. css 配置(modules 篇)

**在 vite,config,js 中我们通过 css 属性去控制真个 vite 对于 css 的处理行为**  
-localConvention: 修改生成的配置对象的 key 的展示形式（驼峰还是中划线形式）

scopeBehaviour: 配置当前的模块化行为是模块化还是全局化（有 hash 就是开启了模块化的一个标志，因为他可以保证产生不同的 hash 值来控制
我们的样式类名不被覆盖)

-generateScopedName: 生成的类名的规则（可以配置为函数，也可以配置成字符串规则：https:/github.com/webpack./
loader-utils#interpolatename)

-hashPrefix: 生成 hash 会根据你的类名+一些其他的字符串（文件名+他内部随机生成一个字符串）去进行生成，如果你想要你生成 hash 更加的
独特一点，你可以配置 nashPrefix,你配置的这个字符串会参与到最终的 hash 生成，（hash:只要你的字符串有一个字不一样，那么生成的 hash 就
完全不一样，但是只要你的字符串完全一样，生成的 hash 就会一样)

### 2. css 配置(preprocessorOptions 篇)

主要是用来配置 css 预处理的一些全局参数  
假设没有使用构建工具，我们又想去编译 less 文件的话  
你只要安装了 node,你就可以使用 node index.js  
你只要安装了 Less 你就可以使用 lessc 去编译 less 文件  
Less 是可以定义变量的  

#### sourceMap

文件之间的索引:  

- 假设我们的代码被压缩或者被编译过了，这个时候假设程序出错，他将不会产生正确的错误位置信息  
如果设置了sourceMap,他就会有一个索引文件

### 3. VITE中配置 css 配置  

直接在 `css.postcss` 中进行配置，该属性直接配置的就是 `postcss` 的配置  
postcss-preset--env:  支持css变量和一些未来css语法扫动补全(autoprefixer)

```js
import postcssPresetEnv from 'postcss-preset--env'

css: {
  postcss: {
    plugins: [postcssPresetEnv()]
  }
}
```

单独配置  

```js
// 根目录新建 postcss.config.js 自动读取
import postcssPresetEnv from 'postcss-preset--env'

module.exports = {
  plugins: {
    // autoprefixer: {},
    postcssPreset()
  },
};
```
