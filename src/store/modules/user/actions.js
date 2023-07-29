export default {
  async registerUser(context, payload) {
    const userId = context.rootGetters.userId;
    // console.log(userId);
    const userData = {
      id: context.rootGetters.userId,
      username: payload.username,
      email: payload.email,
    };

    const token = context.rootGetters.token;
    // console.log(token);
    console.log(userData);
    const response = await fetch(
      `https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token,
      // `https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(userData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(response);
      const error = new Error(responseData.message || "Failed to fetch data!");
      throw error;
    }

    context.commit("registerUser", {
      ...userData,
      id: userId,
    });
  },
  async loadUsers(context) {
    // const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`);
    const response = await fetch(
      `https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch data!");
      throw error;
    }

    const users = [
      // {
      //   id: "u1",
      //   email: "testing@gmail.com",
      //   username: "aaaa",
      // },
      // {
      //   id: "u2",
      //   email: "testing2@gmail.com",
      //   username: "zzzz",
      // },
    ];

    for (const key in responseData) {
      const user = {
        id: key,
        username: responseData[key].username,
        email: responseData[key].email,
      };

      users.push(user);
    }

    context.commit("setUsers", users);
  },
  // async loadCurrentUser(context){
  //   const userId = context.rootGetters.userId;
  //   const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`);
  //   const responseData = await response.json();

  //   if (!response.ok) {
  //     const error = new Error(responseData.message || "Failed to fetch data!");
  //     throw error;
  //   }

  //   const users = [];

  //   for (const key in responseData) {
  //     const user = {
  //       id: key,
  //       username: responseData[key].username,
  //       email: responseData[key].email
  //     };

  //     users.push(user);
  //   }

  //   context.commit("setUsers", users);
  // }
};
