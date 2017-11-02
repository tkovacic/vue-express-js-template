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
            <a class="nav-link" href="/#/about">About</a>
          </li>
        </ul>
				<ul class="navbar-nav ml-auto">
					<a href="/#/login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></a>
					<a href="/#/register"><button class="btn btn-outline-primary animated rubberBand my-2 my-sm-0" type="submit" style="margin-left: 15px;">Register</button></a>
				</ul>
      </div>
    </nav>
    <img style="height: 40px; width: 100%;" src="static/images/banner.jpg">
    <div class="animated fadeIn" style="margin-top: 80px;">
      <h1 class="display-3">Register Validation</h1>
      <hr class="my-4" style="height: 2px;">
      <form @submit.prevent="validateForm" style="display: inline-flex; align-items: center;" novalidate>
        <div style="width: 600px;">
          <div class="form-group">
            <label class="float-left" for="usrCode">Validation Code</label>
            <input type="text" v-model="usrCode" id="usrCode" name="usrCode" v-validate="'required|alpha_num'" class="form-control" v-bind:class="{ 'input': true, 'has-error animated shake': errors.has('usrCode') }" placeholder="abcd1234">
            <span v-show="errors.has('usrCode')" class="help is-danger">{{ errors.first('usrCode') }}</span>
          </div>
          <br>
          <button type="submit" class="btn btn-primary float-left">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import authService from '@/services/authService';

Vue.use(VeeValidate);

export default {
  name: 'Validate',
  data () {
    return {
      usrCode: ''
    }
  },
  methods: {
    validateForm(e) {
      this.$validator.validateAll().then(function(result) {
        if(!this.errors.any()) {
          if(!result) {
            //failed
          } else {
            this.errors.clear();
            this.validate();
          }
        }
      });
    },
    async validate() {
      const response = await authService.validate({
        usrCode: this.usrCode
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
