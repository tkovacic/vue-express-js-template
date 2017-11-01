<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <footer class="footer">
      <a class="float-right" href="https://www.linkedin.com/in/timothy-kovacic-7731129a/">Tim Kovacic 2017</a>
    </footer>
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
