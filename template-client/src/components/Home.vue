<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light animated slideInDown">
      <a class="navbar-brand" href="/#/"><img class="animated zoomIn" style="width: 30px;" src="static/images/logo.png">
        Template</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/#/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
    <img class="animated slideInDown" style="height: 40px; width: 100%;" src="static/images/banner.jpg">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
