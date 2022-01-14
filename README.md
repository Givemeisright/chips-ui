# 齿轮UI

- 这是一个基于 Vue3 / TypeScript / Scss 开发的UI库，涵盖了 Button、Switch ... 等常见 UI 组件。

- 预览地址：https://givemeisright.github.io/gearUI-serve/

## 使用方法
### 安装
在项目中，使用终端执行以下命令
```
npm install gears-ui
```
或者
```
yarn add gears-ui
```
### 引入
```
import {Button, Tabs, Tab, Switch, Dialog, BackTop, openDialog, copyDomText} from "gears-ui";
//若发现样式不生效，可手动引入scss
import "gear-ui/dist/lib/gears.css";
```
### 示例
```
<template>
  <Button>按钮</Button>
</template>
<script>
  import {Button, Tabs, Tab, Switch, Dialog, BackTop, openDialog, copyDomText} from "gears-ui";
  export default {
    components: {Button, Tabs, Tab, Switch, Dialog, BackTop}
  }
</script>
```