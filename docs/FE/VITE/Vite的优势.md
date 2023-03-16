---
title: Vite的优势
order: 3
category:
  - Vite
tag:
  - 构建工具
comment: false
---
官方文档：<https://cn.vitejs.dev/guide/why.html#the-problems>  

当我们开始构建越来越大型的应用时，需要处理的JavaScript代码量也呈指数级增长。包含数千干个模块的大型项目相当
普遍。我们开始遇到性能瓶颈  
一使用JavaScript开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，
即使使用HM(热更新)，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。  
如此循环往复，迟钝的反馈会极大地影响开发者的开发效率  

起因：我们的项目越大-->构建工具(webpack)所要处理的js代码就越多
【跟webpack的一个构建过程（工作流程）有关系】
造成的结果：构建工具需要很长时间才能启动开发服务器

- 因为webpack支持多种模块化，他必须要统一模块化代码，所以意味着他需要将所有的依赖全部读一遍

- vite是基于es modules的，侧重点不一样，webpack更多的关注兼容性，而vite关注浏览器端的开发体验
