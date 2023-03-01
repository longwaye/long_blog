---
title: 1. Vue2与Vue3对比
order: 2
category:
  - VUE
tag:
  - Vue2
  - Vue3
comment: false
---

<br />

### 1、 Vue2 和 Vue3 的双向数据绑定原理发生了改变

- vue2 的双向数据绑定利用 ES5 的一个 API ==**Object.defineProperty()**== 对数据进行劫持  
  结合发布订阅模式的方式来实现的
- vue3 使用 ES6 的 ==**Proxy**== API 对数据代理
- 详细介绍 [Proxy 与 Object.defineProperty 介绍](https://www.jianshu.com/p/d16565c6b6ee)

### 2、 Vue3 支持碎片（Fragments）

- 就是在组件中放置多个根节点

### 3、 Vue 文件结构

- vue2 使用选项型 API（Options API）
- Vue3 使用的是合成型 API（Composition API）

### 4、 建立数据

- Vue2 放在 data 的属性中
- Vue3 setup 里面

### 5、 生命周期

::: info Vue2
beforeCreate  
created  
beforeMounted  
mounted  
beforeUpdate  
updated  
beforeDestroy  
destroyed  
activated (被 keep-alive 缓存的组件激活时调用)  
deactivated (被 keep-alive 缓存的组件失活时调用)  
:::
::: info Vue3
**1、setup()**:  
开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method  
**2、onBeforeMount():**  
组件挂载到节点上之前执行的函数  
**3、onMounted():** 组件挂载完成后执行的函数  
**4、onBeforeUpdate():** 组件更新之前执行的函数  
**5、onUpdated():** 组件更新完成之后执行的函数  
**6、onBeforeUnmount():** 组件卸载之前执行的函数  
**7、onUnmounted():** 组件卸载完成后执行的函数  
**8、onActivated():** 被包含在==**keep-alive**==中的组件，会多出两个生命周期钩子函数，被激活时执行  
**9、onDeactivated():** 比如从 A 组件，切换到 B 组件，A 组件消失时执行  
**10、onErrorCaptured():** 当捕获一个来自子孙组件的异常时激活钩子函数  
:::

### 6、 父子传值方式不同

### 7、 Vue3 新增 Teleport 瞬移组件

```vue
<Teleport to="body">
</Teleport>

to 允许接收值：
期望接收一个 CSS 选择器字符串或者一个真实的 DOM 节点。
**提示**：
<Teleport>挂载时，传送的 to 目标必须已经存在于 DOM 中。理想情况下，
这应该是整个 Vue 应用 DOM 树外部的一个元素。
如果目标元素也是由 Vue 渲染的，你需要确保在挂载<Teleport> 之前先挂载该元素。
```
