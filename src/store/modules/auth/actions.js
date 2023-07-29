let timer;

export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload, //spread operator
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    console.log(mode);
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArE0p4I2D7oDrG2Oe-ZVudjtgHVvhpF-Y";

    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArE0p4I2D7oDrG2Oe-ZVudjtgHVvhpF-Y";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    // console.log(returnSecureToken);

    console.log(url);
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      console.log(payload.email);
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your data."
      );
      console.log(error);
      throw error;
    }
    // console.log(responseData);

    // console.log(responseData.idToken);
    const expiresIn = responseData.expiresIn * 1000;
    // console.log(expiresIn);
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;



    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    // context.commit("setUser", {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   // tokenExpiration: expirationDate,
    // });
    if (mode === "signup") {
      context.commit("signUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        // tokenExpiration: expirationDate,
      });
    } else if(mode === "login") {
      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("tokenExpiration", expirationDate);
      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        // tokenExpiration: expirationDate,
      });
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        // tokenExpiration: null
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
      // tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
