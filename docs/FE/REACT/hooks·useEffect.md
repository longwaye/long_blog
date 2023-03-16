---
title: hooks·useEffect
order: 7
category:
  - REACT
tag:
  - REACT
  - Hooks
comment: false
---

#### **`useEffect`他被官方定义为是用来处理副作用的**

副作用：完全不依赖 React 功能的外部操作【这些外部操作不经过 react 的手 但是却让对 react 产生了一些影响】  
1,http 请求  
2.dom 操作  
3,异步操作多数都是会产生副总用的

虽然我们不是所有的副作用操作都在 useEffect 里进行，但是官方建议我们尽可能的将副作用处理放在 useEffect 中运行

**因为副作用操作他是会产生意料之外的结果的，如果我们想更好的去追踪我们的副作用执行时机，就可以将他们都归纳进`useEffect`里方便追踪**

- 不一定将所有的操作都放在 useEffect.里，但是如果你使用到 useEffect,就一定要用他来处理副作用不然的话不要随便用

#### **`useEffect` 接受两个参数**

- **_setup_**: 初始化的意思
- **_dependencies?_**: 依赖,必须是一个数组

主要是因为`useEffect`的执行时机决定了他的第一个参数会起名为 setup

#### **`useEffect`的执行时机**

1. 当我们使用 useEffect 去注册了 setup 以后，React 会在该组件每次挂载【挂载完毕】到页面中时都会执行对应的 setup 函数，但是是异步执行的 setup, useLayoutEffect

   - - 挂载：React 将一个组件渲染到页面中的过程叫做挂载，渲染完毕叫做挂载完毕【vue,react 的类组件是不是生命周期函数，onMounted,onComponentDidMount,很多同学会把没有依赖的 useEffect 去直接对标这些生命周期函数】

2. 当依赖项发生变更的时候，useEffect 会重新执行对应的 setup 函数

#### **关于副作用的清除**

setup 函数有一个返回值，这个返回值被称之为清理函数，清理函数会在组件卸载时被执行 beforeDestroy  
但是如果是下面这些场景，副作用则需要我们自行去清除

1.dom 事件的绑定

- http请求
- 访问真是DOM
