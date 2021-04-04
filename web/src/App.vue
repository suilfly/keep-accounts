<template>
  <div id="app">
      {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "你好啊",
    };
  },
};
</script>

<style>
#app{
    width: 300px;
    height: 500px;
}
</style>
