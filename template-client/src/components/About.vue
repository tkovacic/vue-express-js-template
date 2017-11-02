<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-sm navbar-light" style="background-color: #fff; min-height: 80px;">
      <a class="navbar-brand" href="/#/"><img style="width: 30px;" src="static/images/logo.png">
        Title</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link animated rubberBand" href="/#/about">About <span class="sr-only">(current)</span></a>
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
      <div class="container-fluid animated fadeIn">
        <h1 class="display-3">Technologies</h1>
        <hr class="my-4">
        <div class="row">
          <div class="col-sm">
            <a href="https://nodejs.org/en/" target="_blank"><img style="max-height: 180px;" src="static/images/node.png"></a>
          </div>
          <div class="col-sm">
            <a href="https://vuejs.org/" target="_blank"><img style="max-height: 180px;" src="static/images/vueJS.jpg"></a>
          </div>
          <div class="col-sm">
            <a href="https://v4-alpha.getbootstrap.com/" target="_blank"><img style="max-height: 180px;" src="static/images/bootstrap.png"></a>
          </div>
          <div class="w-100" style="margin-top: 100px;"></div>
          <div class="col-sm">
            <a href="https://expressjs.com/" target="_blank"><img style="max-height: 180px;" src="static/images/expressJS.png"></a>
          </div>
          <div class="col-sm">
            <a href="https://www.npmjs.com/package/mysql" target="_blank"><img style="max-height: 180px; margin-top: 10px;" src="static/images/mysql.png"></a>
          </div>
          <div class="col-sm">
            <a href="https://daneden.github.io/animate.css/" target="_blank"><img style="max-height: 180px; margin-top: 50px;" src="static/images/animate.png"></a>
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
