// @ts-nocheck

import { md } from "./plugins/md";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";

export default {
  plugins: [md()],
  vueCustomBlockTransforms: {
    // 只要发现有<demo>标签,就把当前源代码除了<demo>标签以外的,放到组件的__sourceCode中
    // __为隐藏属性
    demo: (options) => {
      const { code, path } = options;
      // 读取文件
      const file = fs.readFileSync(path).toString();
      // 找到demo标签
      const parsed = baseParse(file).children.find((n) => n.tag === "demo");
      // 标题为demo标签中内容
      const title = parsed.children[0].content;
      // demo以外内容为源码
      const main = file.split(parsed.loc.source).join("").trim();
      // 获取内容的方法 Component.__sourceCode
      // 获取标题的方法 Component.__sourceCodeTitle
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    },
  },
};
