<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light animated slideInDown" style="background-color: #fff; height: 80px;">
      <a class="navbar-brand animated zoomIn" href="/#/"><img class="animated zoomIn" style="width: 30px;" src="static/images/logo.png">
        Template</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav animated zoomIn">
          <li class="nav-item active">
            <a class="nav-link" href="/#/about">About</a>
          </li>
        </ul>
				<ul class="navbar-nav ml-auto">
					<a href="/#/login"><button class="btn btn-outline-success my-2 my-sm-0 animated zoomIn" type="submit">Login</button></a>
					<a href="/#/register"><button class="btn btn-outline-primary my-2 my-sm-0 animated zoomIn" type="submit" style="margin-left: 15px;">Register</button></a>
				</ul>
      </div>
    </nav>
    <img class="animated slideInDown" style="height: 40px; width: 100%;" src="static/images/banner.jpg">
    <div class="animated slideInLeft" style="margin-top: 80px;">
      <h1 class="display-3">Registration</h1>
      <hr class="my-4">
      <div style="display: inline-flex; align-items: center;">
        <div style="width: 600px;">
          <div class="form-group">
            <label class="float-left" for="usrEmail">Email</label>
            <input type="email" v-model="usrEmail" class="form-control" id="usrEmail" name="usrEmail" aria-describedby="emailHelp" placeholder="example@email.com" required>
          </div>
          <small id="emailHelp" class="form-text text-muted float-left">We will never share your email or password.</small>
          <br>
          <br>
          <button type="submit" v-on:click="register" class="btn btn-primary float-left">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '@/services/authService'

export default {
  name: 'Register',
  data () {
    return {
      usrEmail: ''
    }
  },
  methods: {
    async register() {
      const response = await authService.register({
        usrEmail: this.usrEmail
      })
      alert(response.data);
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
