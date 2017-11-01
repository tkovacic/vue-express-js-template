<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-sm navbar-light" style="background-color: #fff; min-height: 80px;">
      <a class="navbar-brand animated rubberBand" href="/#/"><img style="width: 30px;" src="static/images/logo.png">
        Template</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link animated pulse" href="/#/about">About <span class="sr-only">(current)</span></a>
          </li>
        </ul>
				<ul class="navbar-nav ml-auto">
					<a href="/#/login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></a>
					<a href="/#/register"><button class="btn btn-outline-primary my-2 my-sm-0" type="submit" style="margin-left: 15px;">Register</button></a>
				</ul>
      </div>
    </nav>
    <img style="height: 40px; width: 100%;" src="static/images/banner.jpg">
    <div style="margin-top: 80px;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <a href="https://expressjs.com/" target="_blank"><img style="height: 260px;" src="static/images/expressJS.png"></a>
          </div>
          <div class="col-sm">
            <a href="https://vuejs.org/" target="_blank"><img style="height: 260px;" src="static/images/vueJS.jpg"></a>
          </div>
          <div class="col-sm">
            <a href="https://v4-alpha.getbootstrap.com/" target="_blank"><img style="height: 260px;" src="static/images/bootstrap.png"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
