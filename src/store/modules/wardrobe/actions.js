
// export default {
//   addOutfit(context, payload){
//     const newItem ={
//       id: new Date().toISOString(),
//       userId: payload.userId,
//       userOutfit: payload.userOutfit,
//       title: payload.title,
//     };

//     console.log("reached here");
//     context.commit("addOutfit", newItem);
//   }
// };

export default {
  async addOutfit(context, payload) {
    const newItem = {
      image: payload.image,
      userOutfit: payload.userOutfit,
      title: payload.title
    };
    const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/wardrobe/${payload.userId}.json`, {
      method: 'POST',
      body: JSON.stringify(newItem)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send item.');
      throw error;
    }

    newItem.id = responseData.name; 
    newItem.userId = payload.userId;

    context.commit('addOutfit', newItem);
  },
  async fetchItems(context) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/wardrobe/${userId}.json?auth=` + token);
    // const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/wardrobe/${userId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to get items.');
      throw error;
    }

    const items = [
      //{id : "aaaa"}
    ];

    // const key = []
    for (const key in responseData) {
      const item = {
        id: key,
        userId: userId,
        image: responseData[key].image,
        userOutfit: responseData[key].userOutfit,
        title: responseData[key].title
      };
      items.push(item);
    }

    // console.log(items);
    context.commit('setItems', items);
  },
  async deleteItem(context, payload){
    const userId = context.rootGetters.userId;
    const selectedItem = payload;
    const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/wardrobe/${userId}/${selectedItem}.json`, {
      method: 'DELETE',
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to delete item.');
      throw error;
    }

    context.commit('deleteOutfit');
    context.dispatch("fetchItems");
  },
  async editOutfit(context, payload) {
    // console.log(payload);
    const newItem = {
      image: payload.image,
      userOutfit: payload.userOutfit,
      title: payload.title
    };
    const response = await fetch(`https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app/wardrobe/${payload.userId}/${payload.id}.json`, {
      method: 'PATCH',
      body: JSON.stringify(newItem)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send item.');
      throw error;
    }
    console.log(responseData);

    
    newItem.id = payload.id; 
    newItem.userId = payload.userId;
    console.log(responseData);
    
    context.commit('editOutfit', newItem);
    // context.dispatch("addItems");
  },

};