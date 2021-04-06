<template>
  <div class="account-borad">
    <div class="borad"></div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {};
  },
};
</script>

<style>

@media screen and (max-width: 360px) {
  .account-borad {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
  }
  .borad {
    width: 90vw;
    height: 90vh;
  }
}
@media screen and (min-width: 360px) and (max-width: 960px) {
  .account-borad {
    display: flex;
    justify-content: center;
  }
  .borad {
    width: 80%;
    height: 90vh;
    margin: 10px auto;
  }
}
@media screen and (min-width:960px) {
  .account-borad{
    height:inherit;
   
  }
  .borad {
    width: 80%;
    height: 500px;
    margin: 40px auto;
  }
}
</style>
