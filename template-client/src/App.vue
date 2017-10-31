<template>
  <div id="app">
    <router-view/>
    <nav class="navbar fixed-bottom navbar-light animated slideInUp" style="height: 40px; background-color: #f2f2f2; border-top: 1px solid #e4e4e4;">
      <ul class="navbar-nav ml-auto">
        <a class="navbar-brand" href="https://www.linkedin.com/in/timothy-kovacic-7731129a/">Tim Kovacic 2017</a>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
