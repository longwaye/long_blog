---
title: VIte环境变量配置
order: 4
category:
  - Vite
tag:
  - 构建工具
comment: false
---

#### 在vite中的环境变量处理

**vite** 内置了 `dotenv` 这个第三方库  
`dotenv` 会自动读取**env**文件并解析这个文件中的对应环境变量并将其注入到 `process` (==node内置管理进程==) 对象下【但是vite考虑到和其他配置的一些冲突问题，他不会直接注入到 `process` 对象下】  

涉及到 **vite.config.js** 中的一些配置:

- **root**
- **envDir**: 用来配置当前环境变量的文件地址

>**vite**给我们提供了一些补偿措施：我们可以调用 **vite** 的 LoadEnv 来手动确认 env 文件  
`process.cwd` 方法：返回当前**node**进程的工作目录  
.env:  所有环境都需要用到的环境变量  
.env.development:  开发环境需要用到的环境变量（默认情况下vite将我们的开发环境取名为development)  
.env.production:  生产环境需要用到的环境变量（默认情况下vite将我们的生产环境取名为production)  

yarn dev-mode development会将mode设置为development传递进来  
当我们调用Loaden的时候，他会做如下几件事：  
1,直接找到.ev文件不解释并解析其中的环境变量并放进一个对象里  
2,会将传进来的mode这个变量的值进行拼接：`.env.development`,·,并根据我们提供的目录(`process.cwd()`)去取对应的配置文件并进行解析，并放进一个对象  
3,我们可以理解为:  

```js
const baseEnvConfig = 读取.env的配置
const modeEnvConfig = 读取env相关配置
const lastEnvConfig = {...baseEnvConfig,...modeEnvConfig}
```  

如果是客户端，**vite**会将对应的环境变量注入到 `import.meta.env` 里去  
**vite**做了一个拦截，他为了防止我们将隐私性的变量直接送进 `import.meta.env` 中，所以他做了一层拦截，如果你的环境变量不是以 ==**VITE**== 开头的，他就不会帮你
注入到客户端中去

补充一个小知识：为什么 **vite.config.js** 可以书写成 `esmodule` 的形式，这是因为 `vite` 他在读取这个 **vite.config.js** 的时候 `node` 会率先去解析文件语法，如果
发现你是 `esmodule` 规范会直接将你的 `esmodule` 规范进行替换变成 `commonjs` 规范
