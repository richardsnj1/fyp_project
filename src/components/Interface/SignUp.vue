<template lang="pug">
div
  //- section.vh-100
    .container-fluid.h-100.py-5
      .row 
        .col-sm-6 
          .d-flex.align-items-center.h-custom-2.px-5.ms-xl-4.mt-5.pt-5.pt-xl-0.mt-xl-n5
            h1 SIGN UP
            form(style="width: 23rem;")
              h3.fw-normal.mb-3.pb-3(style="letter-spacing: 1px;") Welcome to Stylr!
              .form-outline.mb-4 
                input.form-control.form-control-lg(type="email" id="email" placeholder="Enter a valid email address")
                label.form-label(for="email") Email Address
              .form-outline.mb-4
                input.form-control.form-control-lg(type="text" id="username" placeholder="Enter your username")
                label.text1.form-label(for="username") Username
              .form-outline.mb-4
                input.form-control.form-control-lg(type="password" id="password")
                label.text1.form-label(for="password") Password
              .pt-1.mb-4 
                button.btn.btn-info.btn-lg.btn-block(type="button") Register
  .d-lg-flex.half
    .bg.order-1.order-md-2(style="")
    .contents.order-2.order-md-1
      .container 
        .row.align-items-center.justify-content-center
          .col-md-7 
            .d-flex.mb-5.justify-content-right.align-items-right 
                  span.ml-auto Already have an account?
                    router-link(to="/signin").back Sign In
            h3 Welcome to <strong>Stylr!</strong>
            p.mb-4 Register your account
            base-dialog(:show="!!error" title="An error occured" @close="handleError")
              p {{ error }}
            base-dialog(:show="isLoading" title="Authenticating..." fixed)
              base-spinner
            form(@submit.prevent="submitForm")
              .form-group.first.mb-4
                label.form-label(for="email") Email Address
                input.form-control.form-control-lg(type="email" id="email" placeholder="Enter a valid email address" v-model="email")
              .form-group.first.mb-4
                label.text1.form-label(for="username") Username
                input.form-control.form-control-lg(type="text" id="username" placeholder="Enter your username" v-model="username")
              .form-group.last.mb-5
                label.text1.form-label(for="password") Password(must at-least be 6 characters)
                input.form-control.form-control-lg(type="password" id="password" v-model="password")
              
              input.btn.btn-block.btn-primary(type="submit" value="Register")
        //- <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      pageTransition: "pageEnter",
      image: "imageEnter2",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    // submitForm(){

    // },
    async submitForm() {
      this.formIsValid = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      this.isLoading = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 ||
        this.username === ""
      ) {
        this.formIsValid = false;
        this.isLoading = false;
        alert("Please check your data");
        return;
      }
      // console.log("hi");
      try {
        await this.$store.dispatch("signup", actionPayload);
        // const redirectUrl = "/" + (this.$route.query.redirect || "signin");
        const formData = {
          username: this.username,
          email: this.email,
        };

        await this.$store.dispatch("users/registerUser", formData);
        this.isLoading = false;
        // alert("Register success, head to the login page");
        this.$router.replace("/signin");
        // this.$router.replace(redirectUrl);
      } catch (err) {
        this.isLoading = false;
        this.error = err.message || "Failed to authenticate, try later";
      }
    },
    handleError() {
      this.error = null;
    },
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.isActiveArray);
    if (
      to.fullPath === "/schedule" ||
      to.fullPath === "/recommendations" ||
      to.fullPath === "/wardrobe" ||
      to.fullPath === "/aboutus" ||
      to.fullPath === "/contact" ||
      to.fullPath === "/home"
    ) {
      // console.log("hahalo")
      next();
    } else if (to.fullPath === "/signin") {
      next();
    } else {
      next();
    }
  },
};
</script>

<style scoped>
/* input,
label {
  display: block;
} */
p {
  color: #b3b3b3;
  font-weight: 300;
}
.image1 {
  position: absolute;
  width: 60%;
  height: 100%;
  right: 50%;
}

.imgsize {
  position: relative;
  left: 55%;
  /* top: 4vh; */
  width: 155% !important;
  height: 95% !important;
  overflow: hidden;
}

.container-fluid {
  width: 100%;
  /* height: 100% !important; */
}

.logintext {
  font-family: Lexend;
  color: #f2f2f2;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: Lexend;
  color: #f2f2f2;
}

a {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}

span {
  font-family: Poppins;
  color: #f2f2f2;
}

/* .container {
  position: fixed;
  top: 10vh;
  margin: auto;
} */

/* .mid {
  margin: auto;
} */

/* .signin {
  font-family: Lexend;
  color: #f2f2f2;
}



.forgot {
  color: #f2f2f2 !important;
} */

input {
  font-family: Lexend;
  background-color: transparent !important;
  border: 1px solid #f2f2f2 !important;
  /* width: 30%; */
  height: 45px !important;
  color: #f2f2f2 !important;
  border-radius: 10px !important;
}

/* .btn-primary {
  background-color: #f2f2f2;
  color: #242424;
  font-family: Poppins;
  border-radius: 20px;
  box-shadow: 10px #242424 !important;
}

.btn-primary:hover {
  background-color: #242424;
}

.btn-secondary {
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  color: #f2f2f2;
}*/

.btn-secondary:hover {
  background-color: #f2f2f2;
  /* border: none; */
  /* color: #242424; */
}

label {
  color: #f2f2f2 !important;
}
.content {
  padding: 7rem 0;
}

h2 {
  font-size: 20px;
}

.half,
.half .container > .row {
  height: 100vh;
  min-height: 700px;
}
@media (max-width: 991.98px) {
  .half .bg {
    height: 200px;
  }
}

.half .contents {
  /* background: #f6f7fc; */
}

.half .contents,
.half .bg {
  width: 50%;
}
@media (max-width: 1199.98px) {
  .half .contents,
  .half .bg {
    width: 100%;
  }
}
.half .contents .form-control,
.half .bg .form-control {
  border: none;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 54px;
  /* background: #fff; */
}
.half .contents .form-control:active,
.half .contents .form-control:focus,
.half .bg .form-control:active,
.half .bg .form-control:focus {
  outline: none;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}

.half .bg {
  background-size: cover;
  background-position: center;
}

.half a {
  /* color: #888; */
  text-decoration: underline;
}

.half .btn {
  height: 54px;
  padding-left: 30px;
  padding-right: 30px;
}

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
}
.control .caption {
  position: relative;
  top: 0.2rem;
  /* color: #888; */
}

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  /* background: #e6e6e6; */
  border-radius: 4px;
}

@media (max-width: 992px) {
  .imgsize {
    position: relative;
    right: 0;
    top: 0;
    width: 100% !important;
    height: 100% !important;
  }
}

.bg {
  background-image: url("../../assets/out/w2.jpg");
}
</style>
