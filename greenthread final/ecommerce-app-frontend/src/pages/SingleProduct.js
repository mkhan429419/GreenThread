import React, { useDebugValue, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color,setColor]=useState(null)
  const [quantity,setQuantity]=useState(1)
  const [alreadyAdded,setAlreadyAdded]=useState(false)
  const location = useLocation();
  const navigate=useNavigate();
  const getProductId=location.pathname.split("/")[2];
  const dispatch=useDispatch();
  const productState=useSelector(state=>state.product.singleproduct);
  const cartState=useSelector(state=>state.auth.cartProducts)
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart())
  }, []);
  useEffect(() => {
    if (cartState) {
      for (let index = 0; index < cartState.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true);
        }
      }
    }
  }, [cartState, getProductId]);
  
  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose a color!");
      return false;
    } else {
      console.log('Adding to Cart...');
      dispatch(addProdToCart({ productId: productState?._id, quantity, color, price: productState?.price }))
      navigate('/cart')
    }
  };
  
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url ? productState?.images[0]?.url : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
            {productState?.images.map((item,index)=>{
              return(<div>
                <img
                  src={item?.url}
                  className="img-fluid"
                  alt=""
                />
              </div>)
            })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                {productState?.title}
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">{productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalratings}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge  border  border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge  border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border  border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge  border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                {
                  alreadyAdded===false && <>
                  <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color setColor={setColor} colorData={productState?.color}/>
                </div>
                  </>
                }
                <div className="d-flex align-items-center gap-15 flex-row  mt-2 mb-3">
                  {
                    alreadyAdded===false&&<>
                    <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                      onChange={(e)=>setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                    </>
                  }
                  <div className={alreadyAdded?"ms-0":"ms-5"+"d-flex align-items-center gap-30 ms-5"}>
                    <button
                      className="button border-0"
                      /*data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"*/
                      type="button"
                      onClick={()=>{alreadyAdded? navigate('/cart'):uploadCart()}}
                    >
                      {alreadyAdded?"Go to Cart":"Add to Cart"}
                    </button>
                    {/* <button className="button signup">Buy It Now</button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        window.location.href
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Aimen</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque sapiente sequi aliquid tempora esse harum debitis
                    culpa saepe quidem eaque! Reiciendis aspernatur facilis,
                    error saepe fuga officia quaerat ullam ab!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img src={watch} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">Apple Watch</h6>
                  <p className="mb-1">Quantity: asgfd</p>
                  <p className="mb-1">Color: asgfd</p>
                  <p className="mb-1">Size: asgfd</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                View My Cart
              </button>
              <button type="button" className="button signup">
                Checkout
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Continue To Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
