import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, addtoCart, getReviews, userLogin } from "../actions";
import './Product.css';
import Review from "./Review";

// Este componente envia informacion al ProductCard que le dará una maquetacion de tarjeta...

const Product = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct(props.match.match.params.id));
    dispatch(getReviews(props.match.match.params.id));
  }, []);

  function agregarAlCarrito(product) {
    // Carrito LocalStore 
    if (!user.id) {
      let myCart = JSON.parse(localStorage.getItem('myCart'));
      const producto = (element) => element["id"] === product.id;
      if (!myCart.some(producto)) localStorage.setItem('myCart', JSON.stringify(myCart.concat([{ "id": product.id, "amount": 1 }])));
    } else {
      dispatch(
        addtoCart(1, { productId: product.id, price: product.price, amount: 1 })
      );
    }
  }

  console.log(document.body.style.overflow)
  return (
    product && (
      <div className="container">
        <Link to="/products">
          <h5 className=" volver">Volver a Productos</h5>
        </Link>
        <div className="row">
          <div id="description" className="col-6">
            <img src={product.image} className="img-fluid" alt="img" />
          </div>
          <div className="col-6"
          // style={{ borderLeft: "2px solid #F1F1F1" }}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>Precio: {product.price}</h4>
            <h4>Stock: {product.stock}</h4>
            <h4>Size: {product.size}</h4>
            <div>
              <Link to="/cart">
                <button
                  // style={{ margin: 0 }}
                  onClick={() => agregarAlCarrito(product)}
                  className={
                    product.stock === 0
                      ? "btn btn-secondary"
                      : "btn btn-success"
                  }
                  disabled={product.stock === 0 ? true : false}
                >
                  {product.stock === 0 ? "No disponible" : "Agregar a Carrito"}
                </button>
              </Link>
            </div>
            <Review />
          </div>
        </div>
      </div>
    )
  );
};
export default Product;
