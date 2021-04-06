<template>
  <div class="nav-container">
    <div class="nav-bar">
      <ul class="nav-user">
        <li>头像</li>
        <li>用户名</li>
      </ul>
      <ul class="nav-setting">
        <li>小账本</li>
        <li>设置</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-container {
  border-bottom: lavender solid 1px;
}
@media screen and (max-width: 1960px) and (min-width:360px) {
  .nav-bar {
    overflow: hidden;
    margin: 0 10%;
    height: 2.8rem;
    line-height: 2.8rem;
  }
  .nav-user {
    float: left;
  }
  .nav-user > li {
    float: left;
    margin-right: 1rem;
  }
  .nav-setting {
    float: right;
  }
  .nav-setting > li {
    float: left;
    margin-left: 1rem;
  }
}

@media screen and (max-width: 360px) {
  .nav-bar {
    display: flex;
    margin: 0 10%;
    height: auto;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    font-size: 0.8rem;
  }
  .nav-user,.nav-setting{
    
  }
 
}
</style>
