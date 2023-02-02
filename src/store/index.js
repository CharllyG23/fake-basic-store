import { createStore } from 'vuex'

export default createStore({
  state: {
    allProducts: [],
    quantity: localStorage.getItem("quantity"),
    totalUnit: localStorage.getItem("total"),
    price: null,
  },

  getters: {
    getAllProducts: ({state}) => state.allProducts,
    getQuantity: ({state}) => state.quantity, 
    getQuantity: ({state}) => state.quantity,
  },

  mutations: {
    setAllProduct: ( state, payload ) =>{
        fetch(`https://fakestoreapi.com/products/category/${payload}`)
          .then((res) => res.json())
          .then((json) => {
              state.allProducts = json
        })
    },

    incrementItem: (state) =>{
        state.quantity += 1
    },
  },
  actions: {}
});