---
title: "前端实习生面试总结"
description: 这是我第一次面，没有充分的准备，一套流程下来让我觉得就算是实习岗我也相差很远，基础不牢的结果就是面试失败……
date: 2025-10-16T17:37:24+08:00
image: pexels-olly-3760072.jpg
math: false
license: 
hidden: false
comments: true
draft: false
tags: ['日记', '面试']
categories: ['title-tattle']
---

一个阳光明媚到我睁不开眼的中午，我在招聘平台上的沟通有回复了，我像往常一样打开软件把简历投过去，接着说一句“这是我的简历，您看看”后就关闭了软件。

意想不到的是，对方居然马上就回复了我，开始问我可以实习多长时间，一周可以干几天，什么时候开始实习。我回复她我一周我能干五天，可以实习三个月，如果有转正机会的话可以干久一点，从26年后就可以开始实习。她了解完情况后就将我的简历转发给了负责人。

负责人看完我的简历说我的简历可以，要跟我约面试，我们加上微信后，预约的下午五点面试……

预约时间后感觉下午的时间过的飞快，一下子来到了五点，我提前一分钟进入会议，面试官就晚我五秒进入，还是非常准时的。

面试嘛，先是自我介绍，开始问问题，回答问题，反问面试官问题，最后结束。

我相信看这篇文章的人都是想要看面试官问了什么问题，所以这里我也不拖沓了，直接开始！

## 如何做Node版本管理？

使用 NVM，这个不用多说了，就是一个工具，想要了解的可以点击这个[链接](https://juejin.cn/post/7199891764151992376)

## CSS 让一个盒子垂直水平居中的方式有哪些？

当时我脑子里面只有 Flex 布局，平时用顺手了，就不喜欢用其他的方式进行水平垂直居中了。不过我水平居中还是比较喜欢用 `margin: 0 auto;` 的。

接下来看看具体还有哪些方式吧。

### 第一种 absolute + transform

```css
.container {
  position: relative;
  height: 100vh;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 第二种 Flex 布局

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### 第三种 Grid 布局

```css
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

### 第四种 绝对定位和负边距

```css
.container {
  position: relative;
  height: 100vh;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px; /* 元素高度的一半 */
  margin-left: -50px; /* 元素宽度的一半 */
  width: 100px;
  height: 100px;
}
```

### 第五种 使用表格布局

```css
.container {
  display: table;
  width: 100%;
  height: 100vh;
}

.card {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

### 第六种 line-height 和 text-align

适用于单行文本或内联元素的居中。

```css
.container {
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.card {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
```

### 第七种 margin: auto;

```css
.container {
  height: 100vh;
  display: flex;
}

.card {
  margin: auto;
  width: 100px;
  height: 100px;
}
```

### 总结

Flex 布局和 Grid 布局是最推荐也是最常用的方式，使用方便简单快捷。
绝对定位+Transform适用于未知元素尺寸的情况。
绝对定位+负边距适用于已知元素尺寸的情况。
表格布局和line-height适用于特定场景。

## 标准盒模型和怪异盒模型的区别

当我面试完从晚上到答案的时候我都窒息了，居然是我最常用的 `box-sizing` 属性...

不想多说了，给你们[链接](https://blog.csdn.net/karlaofsky/article/details/140264692)自己去看看吧，我偷偷哭会哈哈哈

## JS 有哪些数据类型?

JS 的数据类型分为两类，分别是基本数据类型（原始类型）和引用数据类型（对象类型）

基本数据类型有：

- Boolean 布尔类型：仅有两个值分别为 `True` 和 `False`。
- Number 数字：包含整数、浮点数及特殊值（Infinity、-Infinity，NaN），JS不区分整型和浮点型，均以64位浮点数存储。
- String 字符串：表示文本数据，用单引号或双引号包裹。支持转义字符和模板字符串。
- Null 空值：常用于显示清空变量引用。
- Undefined：表示变量已经声明但未赋值，或对象属性不存在时的默认值。
- Symbol 符号（ES6新增）：唯一且不可变的值，常用做对象属性的唯一标识符。
- BigInt 大整数（ES2020新增）：用于表示超出 Number 精度范围的大整数，后缀加n。

引用数据类型有：

- Object 对象：键值对的集合，可包含任意数据类型（包括其他对象）
- Array 数组：有序集合，元素为任意类型。通过索引访问，支持动态长度。
- Function 函数：可执行代码块，本质是“可调用对象”
- 其他内置对象：Date（日期）、RegExp（正则表达式）、Map/Set（ES6新增数据结构）等。

建议看看[博客园的这篇文章](https://www.cnblogs.com/dreamtt/p/18432928)，写的很好。

## null 和 undefined 的区别

因为上上一个问题过于的悲伤，突然悲从心来，忍不住了，想哭……绝对不是因为我偷懒不想码字，算了不解释了，给你们[链接](https://juejin.cn/post/7524557803395760128)自己看

## 什么是闭包？闭包的弊端？

闭包的本质就是在函数内部创建另一函数。闭包有三个特性：

- 函数嵌套函数
- 函数内部可以引用函数外部的参数和变量
- 参数和变量不会被垃圾回收机制回收

闭包的弊端：

- 引用的私有变量无法被销毁，增大了内存消耗，造成内存泄漏。
- 因为闭包的跨域访问，所以会导致性能损失。

## 节流和防抖

防抖：适用于需要在事件触发后等待一段时间，等待期间如果再次触发则重新计时的场景，如搜索框输入联想。

节流：适用于需要限制事件触发频率的场景，如滚动事件、鼠标移动、按钮的重复点击事件。

|比较维度|防抖（Debounce）|节流（Throttle）
|:--|:--|:--|
|定义|延迟执行，在指定时间内不再触发事件才会执行|限制执行频率，每隔一定时间执行一次
|触发时机|最后一次触发事件后|按照固定的时间间隔执行
|适用场景|输入框搜索、表单验证、窗口调整|页面滚动、按钮点击、游戏动画
|控制频率|事件停止后执行一次|固定时间间隔内执行一次

## 谈对 Promise 的理解，以及在项目中是如何使用的

这里我就不多说了，内容非常多，所以老样子，上[链接！](https://vue3js.cn/interview/es6/promise.html)

## Vue2 和 Vue3 的区别

老样子，[走你！](https://juejin.cn/post/7502246437372346409)

## Vue3 中子传父、父传子怎么做

这个没有什么多少的，就是 `defineProps`，以及 `defineEmits`，还有 `defineExpose`。

- `defineProps`: 接受父组件传递给子组件的数据
- `defineEmits`: 子组件向父组件传值
- `defineExpose`: 像父组件暴露属性和方法

## 路由传参的方式有哪些？如果我在 A 页面有一个参数想要带给 B 页面如何利用路由传参来完成

在 Vue3 中使用 vue-router v4 时，路由传参的核心逻辑与 Vue2 类似，但语法上因 Composition API 的引入有所调整。以下是具体的传参方式和实现步骤：


### 一、Query 参数（URL 显式传递）
参数以 `?key=value` 形式拼接在 URL 中，适合传递非敏感参数。

#### 实现步骤：
1. **A 页面跳转传参**  
   使用 `useRouter` 钩子获取路由实例，调用 `push` 方法：
   ```javascript
   // A.vue
   import { useRouter } from 'vue-router'
   
   export default {
     setup() {
       const router = useRouter()
       
       const goToB = () => {
         router.push({
           path: '/B', // 或 name: 'B'（需路由配置name）
           query: {
             id: 123,
             name: '张三'
           }
         })
       }
       
       return { goToB }
     }
   }
   ```

2. **B 页面接收参数**  
   使用 `useRoute` 钩子获取当前路由信息：
   ```javascript
   // B.vue
   import { useRoute } from 'vue-router'
   
   export default {
     setup() {
       const route = useRoute()
       
       // 访问参数
       console.log(route.query.id) // 123
       console.log(route.query.name) // '张三'
     }
   }
   ```

3. **URL 表现**  
   跳转后 URL：`/B?id=123&name=张三`


### 二、Params 参数（动态路径传递）
参数作为 URL 路径的一部分（如 `/B/123`），适合传递标识性参数（如 ID）。

#### 实现步骤：
1. **配置路由规则**  
   在 `router/index.js` 中定义动态参数：
   ```javascript
   // router/index.js
   import { createRouter, createWebHistory } from 'vue-router'
   import B from '../views/B.vue'
   
   const routes = [
     {
       path: '/B/:id/:name', // 动态参数用:标识
       name: 'B',
       component: B
     }
   ]
   
   const router = createRouter({
     history: createWebHistory(),
     routes
   })
   ```

2. **A 页面跳转传参**  
   需通过 `name` 匹配路由（不能用 `path` 直接拼接）：
   ```javascript
   // A.vue
   import { useRouter } from 'vue-router'
   
   export default {
     setup() {
       const router = useRouter()
       
       const goToB = () => {
         router.push({
           name: 'B', // 必须使用name
           params: {
             id: 123,
             name: '张三'
           }
         })
       }
       
       return { goToB }
     }
   }
   ```

3. **B 页面接收参数**  
   通过 `useRoute` 获取 `params`：
   ```javascript
   // B.vue
   import { useRoute } from 'vue-router'
   
   export default {
     setup() {
       const route = useRoute()
       
       console.log(route.params.id) // 123
       console.log(route.params.name) // '张三'
     }
   }
   ```

4. **URL 表现**  
   跳转后 URL：`/B/123/张三`


### 三、Props 传递（路由解耦）
通过路由配置将参数以 props 形式注入组件，避免组件直接依赖 `$route`，更符合 Composition API 思想。

#### 实现步骤：
1. **配置路由（开启 props）**  
   ```javascript
   // router/index.js
   const routes = [
     {
       path: '/B/:id',
       name: 'B',
       component: B,
       props: true // 开启props传递
     }
   ]
   ```

2. **A 页面跳转（同 params 方式）**  
   ```javascript
   // A.vue
   router.push({
     name: 'B',
     params: { id: 123 }
   })
   ```

3. **B 页面通过 props 接收**  
   在组件中定义 props 接收参数：
   ```javascript
   // B.vue
   export default {
     props: {
       id: {
         type: String, // params参数默认是字符串类型
         required: true
       }
     },
     setup(props) {
       console.log(props.id) // 123
     }
   }
   ```

### 四、关键区别与注意事项
1. **Query vs Params**  
   - Query 参数刷新页面不会丢失，Params 参数刷新后会保留（需路由配置动态参数）。
   - Query 适合可选参数，Params 适合必填的标识性参数。

2. **Vue3 特有**  
   - 必须通过 `useRouter` 和 `useRoute` 钩子获取路由实例。
   - 组合式 API 中，参数获取需在 `setup` 函数内处理。

根据参数类型和场景选择合适的方式即可，简单参数用 Query/Params，组件化场景用 Props，复杂数据用状态管理。

## 设计商品选择列表，全选功能

比如我有五个商品，我选中这五个商品，全选按钮的状态就变为选中，我取消了其中一个全选状态变为未选中，这个你要如何设计呢？

这最后一个问题就留给各位来完成喽~

好吧，我还是给代码吧。

```vue
<template>
  <div>
    <!-- 全选按钮 -->
    <div>
      <input 
        type="checkbox" 
        v-model="allChecked" 
        @change="handleAllCheck"
        id="select-all"
      >
      <label for="select-all">全选</label>
    </div>

    <!-- 商品列表 -->
    <ul>
      <li v-for="product in products" :key="product.id">
        <input 
          type="checkbox" 
          v-model="product.checked" 
          @change="handleItemCheck"
          :id="`product-${product.id}`"
        >
        <label :for="`product-${product.id}`">{{ product.name }}</label>
      </li>
    </ul>

    <!-- 已选商品统计 -->
    <div>
      已选中 {{ selectedCount }} 件商品
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// 1. 初始化商品数据（含选中状态）
const products = ref([
  { id: 1, name: '商品1', checked: false },
  { id: 2, name: '商品2', checked: false },
  { id: 3, name: '商品3', checked: false },
  { id: 4, name: '商品4', checked: false },
  { id: 5, name: '商品5', checked: false },
]);

// 2. 全选状态
const allChecked = ref(false);

// 3. 计算已选中商品数量
const selectedCount = computed(() => {
  return products.value.filter(item => item.checked).length;
});

// 4. 监听商品选中状态变化，更新全选按钮
watch(
  // 监听所有商品的checked属性
  () => products.value.map(item => item.checked),
  (newVal) => {
    // 当所有商品都选中时，全选按钮为true
    allChecked.value = newVal.every(checked => checked);
  }
);

// 5. 全选按钮变化时，更新所有商品的选中状态
const handleAllCheck = () => {
  products.value.forEach(item => {
    item.checked = allChecked.value;
  });
};

// 6. 单个商品选中状态变化时，触发watch更新全选按钮
const handleItemCheck = () => {
  // 无需额外逻辑，watch会自动检测并更新allChecked
};
</script>
```

## 最后我想说

我要感谢面试官，给我一个认清自己的机会，要不然我还一直基础不牢靠，死劲开发呢，面试结束后了解了这么多的细节，我才明白，基础是多么重要！

之前我还看不起八股文，但回想起来我高中的时候如果不是因为基础牢靠，怎么可能获得编程比赛省级第二名呢。