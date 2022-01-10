<template>
  <div class="backup" v-show="visible" @click="backTop">回到过去</div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    
    var timer = null;
    window.onscroll = function () {
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度
      var scrollTop = undefined;
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop <= 500
        ? context.emit("update:visible", false)
        : context.emit("update:visible", true);
    };
    const backTop = () => {
      // window.scrollTo(0, 0);
      cancelAnimationFrame(timer);
      //获取当前毫秒数
      var startTime = +new Date();
      //获取当前页面的滚动高度
      var b = document.body.scrollTop || document.documentElement.scrollTop;
      var d = 500;
      var c = b;
      timer = requestAnimationFrame(function func() {
        var t = d - Math.max(0, startTime - +new Date() + d);
        document.documentElement.scrollTop = document.body.scrollTop =
          (t * -c) / d + b;
        timer = requestAnimationFrame(func);
        if (t == d) {
          cancelAnimationFrame(timer);
        }
      });
    };
    return {
      backTop,
    };
  },
};
</script>
<style lang="scss" scoped>
.backup {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  &:hover {
    cursor: pointer;
  }
}
</style>
