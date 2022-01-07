// 被渲染的组件
import Dialog from "./Dialog.vue";

// 用于渲染vue组件,h函数可以接受多个参数，在渲染时传入
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { visible,title, content, ok, cancel, closeOnClickOverlay } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  //   将Dialog渲染并挂载到div上
  const app = createApp({
    render() {
      // {渲染组件},{传入值},{插槽}
      return h(
        Dialog,
        {
          visible,
          //   监听"update:visible"，会得到false
          "onUpdate:visible": (value) => {
            if (!value) {
              close();
            }
          },
          ok,
          cancel,
          closeOnClickOverlay,
        },
        { title, content }
      );
    },
  });
  app.mount(div);
};
