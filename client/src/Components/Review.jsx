import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Rate } from "antd";
import "antd/dist/antd.css";
import "../Components/FormCRUD/CreateProduct.css";
import { createReview, getReviews } from "../redux/actions";

const desc = ["Malo", "Regular", "Bueno", "Muy Bueno", "Excelente !!"];

const Review = (props) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.product);
  const [myreview, setMyreview] = useState(
    reviews.filter((rev) => rev.productId === props.id && rev.userId) ?? {
      score: null,
      description: null,
      productId: props.id,
    }
  );

  const total =
    reviews.reduce((prev, cur) => {
      return prev + cur.score;
    }, 0) / reviews.length;

  useEffect(() => {
    dispatch(getReviews(props.id));
  }, []);

  return (
    product &&
    reviews && (
      <React.Fragment>
        <hr />
        <h5>Valoración promedio del producto</h5>
        <Rate disabled value={total} />
        {total ? <span className="ant-rate-text">{desc[total - 1]}</span> : ""}
        <hr />
        {user.id ? (
          <div className="containerAll">
            <form
              className="containerPro"
              onSubmit={(e) => {
                setMyreview({
                  ...myreview,
                  userId: user.id,
                  productId: props.id,
                });
                dispatch(createReview(myreview));
              }}
            >
              <h5>Tu valoración sobre el producto</h5>
              <Rate
                allowClear={false}
                tooltips={desc}
                onChange={(s) => {
                  setMyreview({ ...myreview, score: s });
                }}
                value={myreview.score}
              />
              {myreview.score ? (
                <span className="ant-rate-text">
                  {desc[myreview.score - 1]}
                </span>
              ) : (
                ""
              )}
              <hr />
              <input
                className="form-control"
                type="text"
                id="description"
                name="description"
                placeholder="¿Qué dirias del producto?"
                value={myreview.description}
                onChange={(e) =>
                  setMyreview({ ...myreview, description: e.target.value })
                }
                required
              />
              <button
                className="btn btn-primary"
                type="submit"
                value="Crear"
                style={{ margin: 0 }}
              >
                Valorar Producto
              </button>
            </form>
          </div>
        ) : (
          <div className="login">
            No tenes cuenta ?
            <Link className="nav-link" to="/users">
              Registrate acá 
            </Link>
          </div>
        )}
      </React.Fragment>
    )
  );
};

export default Review;
