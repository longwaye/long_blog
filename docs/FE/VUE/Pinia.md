---
title: 1. Pinia
order: 3
category:
  - VUE3
tag:
  - Vue2
  - VueX
  - Pinia
  - Vue3
comment: false
---

### Pinia 与 Vuex 区别

- pinia 中没有了 mutations 和 modules
- pinia 不必以嵌套（通过 modules 引入）的方式引入模块，因为它的每个 store 便是一个模块，如 storeA，storeB... 。
- pinia 不再需要 mutations，同步异步都可在 actions 进行操作
- 相比于vuex，pinia对于typescript的支持性更好，友好的devTools支持，pinia只有1kb，简化了很多方法的写法。

### 安装及挂载

```nodejs
npm i pinia -S
```

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
```

### 创建 Store

::: info
Store 是用defineStore()定义的，它的第一个参数是一个独一无二的id，也是必须传入的，Pinia 将用它来连接 store 和 devtools。

defineStore()第二个参数可接受两类值：Setup函数或Options对象

state 属性： 用来存储全局的状态的，这里边定义的，就可以是为SPA里全局的状态了。

getters属性：用来监视或者说是计算状态的变化的，有缓存的功能。

actions属性：对state里数据变化的业务逻辑，需求不同，编写逻辑不同。说白了就是修改state全局状态数据的。

:::

```javascript
import { defineStore } from 'pinia'

// 第一种Options式写法：
export const storeA = defineStore('storeA', {
 state: () => {
  return {
   piniaMsg: 'hello pinia',
   name: 'long',
  }
 },
 getters: {},
 actions: {},
})
// 在Options式中:Store 的数据(data)，getters 是 Store 的计算属性(computed)
// 而actions则是 Store 的方法（methods）。


// 第二种Setup式写法：
import { defineStore } from 'pinia'
//  `defineStore()` 的返回值命名最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾
export const useStudyStore = defineStore('studyId', ()=>{
  const piniaMsg = ref('hello pinia')
  const name = ref('long')
  const count = ref(0)
  const computedTest= computed(() => count.value * 99)
  function int() {
    count.value++
  }
  return { count, name, computedTest, int}
 
})
// 在Setup式中：ref()成为state属性，computed()变成getters,function变成actions
```

### 页面使用

```vue
<template>
 <div></div>
</template>
<script setup>
  import { storeA } from '@/piniaStore/storeA'
  let piniaStoreA = storeA()
  console.log(piniaStoreA.piniaMsg) //hello pinia
</script>
```

### 修改状态

#### 1.直接修改

相比于 Vuex，Pinia 是可以直接修改状态的，并且调试工具能够记录到每一次 state 的变化

```vue
<template>
 <div>{{ piniaStoreA.piniaMsg }}</div>
</template>
<script setup>
  import { storeA } from '@/piniaStore/storeA'
  let piniaStoreA = storeA()
  console.log(piniaStoreA.piniaMsg) //hello pinia

  piniaStoreA.piniaMsg = 'hello nginx'
  console.log(piniaStoreA.piniaMsg) //hello nginx
</script>
```

#### 2.$patch

```vue
<script setup>
  import { storeA } from '@/piniaStore/storeA'
  let piniaStoreA = storeA()
  console.log(piniaStoreA.name) //long
  // piniaStoreA.$patch({
  // name: 'nginx'
  // })
  // 可以修改单个或多个值
  piniaStoreA.$patch({
  piniaMsg: 'hello nginx',
  name: 'nginx',
  })
  // $patch还可以使用函数的方式进行修改状态
  piniaStoreA.$patch((state) => {
  state.name = 'nginx'
  state.piniaMsg = 'hello nginx'
  })

  console.log(piniaStoreA.name) //nginx
</script>
```

#### 3.在 actions 中进行修改

```js
// Pinia去掉了mutations，所以在actions中修改state
import { defineStore } from 'pinia'
export const storeA = defineStore('storeA', {
 state: () => {
  return {
   piniaMsg: 'hello pinia',
   name: 'long',
  }
 },
 actions: {
  setName(data) {
   this.name = data
  },
 },
})
```

##### 1) 组件 App.vue 中调用不需要再使用 dispatch 函数，直接调用 store 的方法即可

```vue
<script setup>
  import { storeA } from '@/piniaStore/storeA'
  let piniaStoreA = storeA()
  piniaStoreA.setName('nginx')
</script>
```

##### 2) 重置 state

`Pinia可以使用$reset将状态重置为初始值`

```vue
<script setup>
  import { storeA } from '@/piniaStore/storeA'
  let piniaStoreA = storeA()
  piniaStoreA.$reset()
</script>
```

#### 4.Pinia 解构(storeToRefs)

当我们组件中需要用到 state 中多个参数时，使用解构的方式取值往往是很方便的，但是传统的 ES6 解构会使 state 失去响应式.Pinia 提供了一个结构方法 storeToRefs，我们将组件 App.vue 使用 storeToRefs 解构

```vue
<template>
 <div>{{ name }}</div>
</template>
<script setup>
  import { storeA } from '@/piniaStore/storeA'
  import { storeToRefs } from 'pinia'
  let piniaStoreA = storeA()
  let { piniaMsg, name } = storeToRefs(piniaStoreA)
  piniaStoreA.$patch({
  name: 'nginx',
  })
</script>
```

#### 5.Pinia 模块化

`store/index.js`

```javascript
import useUserStore from './user'
import useCounterStore from './counter'
 
// 统一导出useStore方法
export default function useStore() {
  return {
    user: useUserStore(),
    counter: useCounterStore(),
  }
}

```

#### 6.Pinia 数据持久化

```node
yarn add pinia-plugin-persistedstate
or
npm i  pinia-plugin-persistedstate
```

`使用插件 在main.ts中注册`

```ts
import { createApp } from "vue";
import App from "./App.vue";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App).use(pinia);
```

`模块开启持久化`

```ts
const useHomeStore = defineStore("home",{
  // 开启数据持久化
  persist: true
  // ...省略
});

```

- 进阶用法

`需求：不想所有数据都持久化处理，能不能按需持久化所需数据，怎么办？`  

`可以用配置式写法，按需缓存某些模块的数据。`

```ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', s{
  state: () => {
    return {
      someState: 'hello pinia',
      nested: {
        data: 'nested pinia',
      },
    }
  },
  // 所有数据持久化
  // persist: true,
  // 持久化存储插件其他配置
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'storekey',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组
    // []意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['nested.data'],
  },
})

```
