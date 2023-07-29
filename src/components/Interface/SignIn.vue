<template lang="pug">
div
  section.vh-100
    .container-fluid.py-5.h-100
      .row.d-flex.justify-content-center.align-items-center.h-100 
        .col-md-9.col-lg-6.col-xl-5
          //- transition(:name="image" appear)
          base-spinner(v-if="isLoading2" onload="loaded")
          img.imgsize(v-else src="../../assets/out/w1.png")
        .col-md-8.col-lg-6.col-xl-4.offset-xl-1
          //- transition(:name="pageTransition" appear)
          //- div(v-if ="pageTransition === 'pageEnter'")
          h1.signin.d-flex.justify-content-center.align-items-center.gapbot SIGN IN
          base-dialog(:show="!!error" title="An error occured" @close="handleError")
              p {{ error }}
          base-dialog(:show="isLoading" title="Authenticating..." fixed)
            base-spinner
          form(@submit.prevent="submitForm")
            .form-outline.mb-4 
              label.text1.form-label(for="email") E-mail
              input.form-control.form-control-lg(type="email" id="email" placeholder="Enter your email" v-model="email")
            .form-outline.mb-3 
              label.text1.form-label(for="password") Password
              input.form-control.form-control-lg(type="password" id="password" v-model="password")
            .d-flex.justify-content-between.align-items-center
              .form-check.mb-0
            .text-center.text-lg-start.mt-4.pt-2
              button.btn.btn-primary.btn-md.fw-bold(type="submit") Login
              p.logintext.small.mt-2.pt-1.mb-0 Don't have an account yet?
                router-link.btn.btn-secondary(to="/signup") Sign Up
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      pageTransition: "pageEnter",
      image: "imageEnter2",
      formIsValid: true,
      isLoading: false,
      isLoading2: true,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", actionPayload);
        console.log("hi")
        this.$router.replace("/wardrobes");
        console.log("hi2")
        // const redirectUrl = "/" + (this.$route.query.redirect || "schedule");
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try again later";
      }

      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        // console.log(this.password);
        // console.log(this.password.length);
        return;
      }
      this.isLoading = true;

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  // beforeRouteEnter(to, from) {
  //   // console.log(to);
  //   console.log(from);
  //   if (from.fullPath === "/signup") {
  //     return;
  //   }
    
  //   const isReloaded = sessionStorage.getItem("isReloaded");
  //   if (!isReloaded) {
  //     sessionStorage.setItem("isReloaded", true);
  //     window.location.reload();
  //   } else {
  //     sessionStorage.removeItem("isReloaded");
  //   }

  // },
  // beforeEnter(_) {

  // },
  mounted() {
    this.isLoading2 = false;
  },
  watch: {
    // username(value) {
    //   console.log(value);
    // },
  },
};
</script>

<style scoped>
/* input,
label {
  display: block;
} */

.gapbot {
  margin-bottom: 2rem;
}

.image1 {
  position: absolute;
  width: 60%;
  height: 100%;
  right: 50%;
}

.imgsize {
  position: relative;
  right: 55%;
  /* top: 4vh; */
  width: 155% !important;
  height: 95% !important;
}

.container-fluid {
  width: 100%;
  /* height: 100% !important; */
}

.logintext {
  font-family: Lexend;
  color: #f2f2f2;
}

/* .container {
  position: fixed;
  top: 10vh;
  margin: auto;
} */

.mid {
  margin: auto;
}

.signin {
  font-family: Lexend;
  color: #f2f2f2;
  /* margin: auto; */
}

label {
  color: #f2f2f2 !important;
}

.forgot {
  color: #f2f2f2 !important;
}

input {
  font-family: Lexend;
  background-color: transparent !important;
  border: 1px solid #f2f2f2 !important;
  /* width: 30%; */
  /* height: 35px; */
  color: #f2f2f2 !important;
  border-radius: 30px;
}

.btn-primary {
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
}

.btn-secondary:hover {
  background-color: #f2f2f2;
  /* border: none; */
  color: #242424;
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
</style>
