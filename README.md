# vue-test

移动端适配方案
先明白基本概念
1. viewport 是啥？
用户可视区域

2. 设备像素？
又称物理像素，设备能控制显示的最小单位

3. 设备独立像素？
计算机系统坐标点

4. css像素
逻辑像素单位，做网页使用的px
dom节点的宽度即像素不会变，但像素的大小会变化
宽度 = 100 个px
当网页被放大时 宽度 = 100 个px 但px代表的宽度发生变化

！！！在缩放比例为100%时，1css像素 = 1设备独立像素

5. DPR device pixel ratio 设备像素比
DPR = 设备像素 / 设备独立像素

移动端适配方案
1. media queries
2. flex
3. rem + viewport 缩放
4. rem 方式


// 如何看代码
// 1. 看结构
// 2. 看参数
// 3. 看调用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
