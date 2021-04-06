<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
export default {
  components: { NavBar },
  data() {
    return {
     
    };
  },
  
};
</script>

<style>
#app{
    width: inherit;
    height: 600px;
}
body,html,ul,a{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html{
  font-size: 16px;
}
</style>
