# draggable-wow
## 简介

一款原生js编写的拖拽移动插件。

## 在线Demo

[预览地址](https://codesandbox.io/s/affectionate-merkle-50bl9o?file=/src/App.vue)

## 功能点

- 快速拖动不“掉线”

- 支持拖拽延迟
- 拖拽节流
- 事件自动销毁

## 使用方法

通过new 对象的形式，使用该插件。构造函数接受两个参数：1.一个是必传的dom目标元素。2.另一个是配置项（Object类型）。详情见下方：

参数列表：

| 参数  | 描述               | 数据类型 | 默认值 | 是否必填 |
| ----- | ------------------ | -------- | ------ | -------- |
| 参数1 | 拖拽移动的目标元素 | -        |        | 必传     |
| 参数2 | 配置项             | Object   |        | 否       |

参数2是配置项，Object类型，详情如下：

| 参数  | 描述         | 数据类型 | 默认值 |
| ----- | ------------ | -------- | ------ |
| delay | 拖拽延迟(ms) | Number   | 20     |

## 安装方法

- npm安装

```javascript
// 引入包体
import Draggable from 'draggable-wow' 

const dom = document.getElementsByClassName('box')

new Draggable(dom, {
 delay: 20
})
```

- CDN安装

```javascript
<script src="https://unpkg.com/draggable-wow/dist/index.js"></script>

<script>
    var dom = document.getElementsByClassName('box')
    new Draggable(dom, { delay: 20 })
 </script>
```




