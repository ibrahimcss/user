<template>
  <div class="card">
    <div class="navbar">
      <SideNav></SideNav>
    </div>
    <router-view></router-view>
    <div class="card-footer">
      <Footer></Footer>
    </div>
  </div>

</template>

<script>


import SideNav from "./components/SideNav";
export default {
  name: 'App',
  components: {
    SideNav

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
