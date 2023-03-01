---
title: apply、call、bind
order: 1
category:
  - JavaScript
tag:
  - JavaScript
  - ES5
---

call()、 apply()、 bind() 都是用来重新定义 this 对象的指向

```code
fn.call(obj, 4,2)

fn.apply(obj, [4, 2])

fn.bind(obj, 4, 2)()
fn.bind(obj, [4, 2])()
```

第一个参数都是 this 的指向对象

```code
var obj = {
   name: 'Nanchen'
  }
  function fn(a, b) {
   console.log(this);        //此处的this指向的是obj
   console.log(a + b);
  }
  fn.call(obj, 4,2)
  fn.apply(obj, [4, 2])
  fn.bind(obj, 4, 2)()
        fn.bind(obj, [4, 2])()
```

![输出结果](https://img-blog.csdnimg.cn/20210927145735864.png)

::: tip 由此可见：

1.能够调用函数

2.能够改变普通函数的 this 指向并能够传参

3.这三种方法的使用是一致的 只是传参的方式不同

call()可以直接传参 而 apply()需要传数组

:::

call、apply 和 bind 的区别：<br />

- call 和 apply 改变了函数的 this 上下文后便执行该函数,<br />
- bind 则是返回改变了上下文后的一个函数。

call 和 apply 的区别：<br />

- 他们俩之间的差别在于参数的区别<br />
- call 和 apply 的第一个参数都是要改变上下文的对象，<br />
- call 从第二个参数开始以参数列表的形式展现，<br />
- apply 则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。
