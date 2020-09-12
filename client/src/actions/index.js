import axios from "axios";
const SERVER_ADDRESS = "http://localhost:3001";

// aca van los actions del GET
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORY_PRODUCTS = "GET_CATEGORY_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ORDER = "GET_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const GET_CARTUSER = "GET_CARTUSER";
export const GET_USER = "GET_USER";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const GET_USERS = "GET_USERS";
// aca van los actions del POST/CREATE
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_USER = "CREATE_USER";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_PRODUCT_CATEGORY = "CREATE_PRODUCT_CATEGORY";
export const ADD_TO_CART = "ADD_TO_CART";
// aca van los actions del UPDATE/MODIFICAR
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_ORDER_AMOUNT = "UPDATE_ORDER_AMOUNT";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const CLOSE_CART = "CLOSE_CART"
// aca van los actions del DELETE/REMOVE
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const REMOVE_PRODUCT_CATEGORY = "REMOVE_PRODUCT_CATEGORY";
export const REMOVE_CART = "REMOVE_CART";
export const REMOVE_USER = "REMOVE_USER";

export function getProduct(productId) {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/products/${productId}`)
      .then((res) => {
        dispatch({ type: GET_PRODUCT, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getProducts() {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/products`)
      .then((res) => {
        dispatch({ type: GET_PRODUCTS, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getCategories() {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/products/categories`)
      .then((res) => {
        dispatch({ type: GET_CATEGORIES, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getCategoryProducts(categoryName) {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/products/category/${categoryName}`)
      .then((res) => {
        dispatch({ type: GET_CATEGORY_PRODUCTS, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getOrder(orderId) {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/order/${orderId}`)
      .then((res) => {
        dispatch({ type: GET_ORDER, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getOrders(cartState) {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/orders/?status=${cartState}`)
      .then((res) => {
        dispatch({ type: GET_ORDERS, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function searchProducts(value) {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/products/search/?query=${value}`)
      .then((res) => {
        dispatch({ type: SEARCH_PRODUCTS, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getCartUser(userId) {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/users/${userId}/cart`)
      .then((res) => {
        dispatch({ type: GET_CARTUSER, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function getUser() {
  return function (dispatch) {
    /* axios
      .get(`${SERVER_ADDRESS}/users/me`)
      .then((res) => { */
    dispatch({ type: GET_USER }); // dispatch({ type: GET_USER, payload: res.data });

    /* })
    .catch((error) => alert(error, "error")); */
  };
}
export function getUsers() {
  return function (dispatch) {
    axios.get(`${SERVER_ADDRESS}/users`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function createProduct(product) {
  return function (dispatch) {
    axios.post(`${SERVER_ADDRESS}/products/`, product)
      .then((res) => {
        dispatch({ type: CREATE_PRODUCT, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function createUser(user) {
  return function (dispatch) {
    axios.post(`${SERVER_ADDRESS}/users/`, user)
      .then((res) => {
        dispatch({ type: CREATE_USER, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function createCategory(category) {
  return function (dispatch) {
    axios.post(`${SERVER_ADDRESS}/products/category`, category)
      .then((res) => {
        dispatch({ type: CREATE_CATEGORY, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function createProductCategory(productId, categoryId) {
  return function (dispatch) {
    axios.post(`${SERVER_ADDRESS}/products/${productId}/category/${categoryId}`)
      .then((res) => {
        dispatch({ type: CREATE_PRODUCT_CATEGORY, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function addtoCart(userId, product) {
  return function (dispatch) {
    axios.post(`${SERVER_ADDRESS}/users/${userId}/cart`, product)
      .then((res) => {
        dispatch({ type: ADD_TO_CART, payload: res.data });
      })
      .catch((error) => alert(error, "error"));
  };
}
export function updateProduct(product) {
  return function (dispatch) {
    axios.put(`${SERVER_ADDRESS}/products/${product.id}`, product)
      .then((res) => {
        dispatch({ type: UPDATE_PRODUCT, payload: product });
      }).then(() => alert("Se modifico el producto"))
      .catch((error) => alert(error, "error"));
  };
}
export function updateCategory(category) {
  return function (dispatch) {
    axios.put(`${SERVER_ADDRESS}/products/category/${category.id}`, category)
      .then((res) => {
        dispatch({ type: UPDATE_CATEGORY, payload: category });
      }).then(() => alert("Se modifico la categoria"))
      .catch((error) => alert(error, "error"));
  };
}
export function updateUser(user) {
  return function (dispatch) {
    axios.put(`${SERVER_ADDRESS}/users/${user.id}`, user)
      .then((res) => {
        dispatch({ type: UPDATE_USER, payload: user });
      }).then(() => alert("Se modifico el usuario"))
      .catch((error) => alert(error, "error"));
  };
}
export function updateOrderAmount(userId, order) {
  return function (dispatch) {
    axios.put(`${SERVER_ADDRESS}/users/${userId}/cart/`, order)
      .then((res) => {
        dispatch({ type: UPDATE_ORDER_AMOUNT, payload: order });
      }).then(() => alert("Se cambio la cantidad"))
      .catch((error) => alert(error, "error"));
  };
}
export function updateOrder(order) {
  return function (dispatch) {
    axios.put(`${SERVER_ADDRESS}/orders/${order.id}`, order)
      .then((res) => {
        dispatch({ type: UPDATE_ORDER, payload: order });
      }).then(() => alert("Se modifico la orden"))
      .catch((error) => alert(error, "error"));
  };
}
export function closeCart(cartId) {
  return function (dispatch) {
    axios.patch(`${SERVER_ADDRESS}/orders/${cartId}`)
      .then((res) => {
        dispatch({ type: CLOSE_CART, payload: cartId });
      }).then(() => alert("Se cerro el carrito"))
      .catch((error) => alert(error, "error"));
  };
}
export function removeProduct(productId) {
  return function (dispatch) {
    axios.delete(`${SERVER_ADDRESS}/products/${productId}`)
      .then((res) => {
        dispatch({ type: REMOVE_PRODUCT, payload: productId });
      }).then(() => alert("Se elimino el producto"))
      .catch((error) => alert(error, "error"));
  };
}
export function removeCategory(categoryId) {
  return function (dispatch) {
    axios.delete(`${SERVER_ADDRESS}/products/category/${categoryId}`)
      .then((res) => {
        dispatch({ type: REMOVE_CATEGORY, payload: categoryId });
      }).then(() => alert("Se elimino la categoria"))
      .catch((error) => alert(error, "error"));
  };
}
export function removeProductCategory(productId, categoryId) {
  return function (dispatch) {
    axios.delete(`${SERVER_ADDRESS}/products/${productId}/category/${categoryId}`)
      .then((res) => {
        dispatch({ type: REMOVE_PRODUCT_CATEGORY, payload: res.data });
      }).then(() => alert("Se le elimino la categoria al producto"))
      .catch((error) => alert(error));
  };
}
export function removeCart(userId) {
  return function (dispatch) {
    axios.delete(`${SERVER_ADDRESS}/users/${userId}/cart`)
      .then((res) => {
        dispatch({ type: REMOVE_CART, payload: res.data });
      }).then(() => alert("Se le elimino el carrito al usuario"))
      .catch((error) => alert(error, "error"));
  };
}
export function removeUser(userId) {
  return function (dispatch) {
    axios.delete(`${SERVER_ADDRESS}/users/${userId}`)
      .then((res) => {
        dispatch({ type: REMOVE_USER, payload: userId });
      }).then(() => alert("Se elimino el usuario"))
      .catch((error) => alert(error, "error"));
  }

}
