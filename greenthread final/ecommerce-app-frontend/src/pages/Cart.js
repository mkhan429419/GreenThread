import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state.auth.cartProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState.length; index++) {
      sum +=
        Number(userCartState[index].quantity) * userCartState[index].price;
    }
    setTotalAmount(sum);
  }, [userCartState]);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    dispatch(getUserCart());
  };

  const updateQuantity = (cartItemId, quantity) => {
    dispatch(updateCartProduct({ cartItemId, quantity }));
    dispatch(getUserCart());
  };

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Products</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState.map((item, index) => (
                <div
                  key={index}
                  className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                >
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img
                        src={item?.productId.images[0]?.url}
                        className="img-fluid"
                        alt="product image"
                      />
                    </div>
                    <div className="w-75">
                      <p>{item?.productId.title}</p>
                      <p className="d-flex gap-3">
                        Color:{" "}
                        <ul className="colors ps-0">
                          <li
                            style={{ backgroundColor: item?.color.title }}
                          ></li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">$ {item?.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        id=""
                        value={item?.quantity}
                        onChange={(e) => {
                          updateQuantity(item?._id, e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <AiFillDelete
                        onClick={() => {
                          deleteACartProduct(item?._id);
                        }}
                        className="text-danger "
                      />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">$ {item?.price * item?.quantity}</h5>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/" className="button">
                Continue To Shopping
              </Link>
              {totalAmount !== null && totalAmount !== 0 && (
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $ {totalAmount}</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
