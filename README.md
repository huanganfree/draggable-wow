# draggable-wow
## 简介

一款原生js编写的拖拽移动插件。

## 在线Demo

[预览地址](https://codesandbox.io/s/affectionate-merkle-50bl9o?file=/src/App.vue)

## 功能点

- 纯js编写，不依赖第三方库
- 快速拖动不“掉线”
- 拖拽节流
- 事件自动销毁

## 使用方法

通过new 对象的形式，使用该插件。构造函数接受参数：有效的CSS字符串选择器。详情见下方：

参数列表：

| 参数  | 描述                | 数据类型 | 默认值 | 是否必填 |
| ----- | ------------------- | -------- | ------ | -------- |
| 参数1 | CSS字符串选择器     | String   |        | 必传     |
| 参数2 | options（选项配置） | Object   | {}     | 否       |

参数2选项配置说明：

| 选项               | 描述                              | 数据类型 |
| ------------------ | --------------------------------- | -------- |
| actualDraggableEle | 实际被移动的元素, CSS字符串选择器。如不传，实际移动元素则为参数1 | String   |

## 安装方法

- npm安装

  安装

  `npm i draggable-wow`

引入

```javascript

// 引入包体
import Draggable from 'draggable-wow' 
// 注意：一定要在元素挂载后，再选取

// Vue中一般放在nextTick中较为稳妥
new Draggable('.child') // new Draggable('.child', {actualDraggableEle: '.parent'}) 元素child在元素parent内
```

- CDN安装

```javascript
<script src="https://unpkg.com/draggable-wow/dist/index.js"></script>

<script>
   // 注意：一定要在元素挂载后，再选取
    new Draggable('.box')
 </script>
```
