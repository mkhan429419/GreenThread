import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/products/productSlice";
const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    getblogs();
    getallProducts();
  }, []);
  const getblogs = () => {
    dispatch(getAllBlogs());
  };
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWish(id));
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/test2final.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/test5final.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/test8final.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/test7final.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/test9final.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div className="text-center">
                  <h6>Tops</h6>
                  <p>2 Items</p>
                </div>
                {/* <img src="images/camera.jpg" alt="camera" /> */}
              </div>
              <div className="d-flex gap align-items-center ">
                <div className="text-center">
                  <h6>Bottoms</h6>
                  <p>1 Item</p>
                </div>
                {/* <img src="images/tv.jpg" alt="tv" /> */}
              </div>
              <div className="d-flex gap align-items-center">
                <div className="text-center">
                  <h6>Dresses</h6>
                  <p>4 Items</p>
                </div>
                {/* <img src="images/headphone.jpg" alt="watch" /> */}
              </div>
              <div className="d-flex gap align-items-center">
                <div className="text-center">
                  <h6>Jackets</h6>
                  <p>2 Items</p>
                </div>
                {/* <img src="images/camera.jpg" alt="camera" /> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div
                      className="product-card position-relative"
                    >
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url}
                          className="img-fluid mx-auto"
                          alt="product image"
                          width={160}
                        />
                        <img
    src={item?.images[0].url}
    className="img-fluid mx-auto"
    alt="product image"
    width={160}
  />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Rs.{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
        <h3 className="section-heading">Our Famous Products</h3>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/67.jpg"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From Rs.399 or Rs.16.62/mon for 24 mo.*</p>
              </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/68.jpg"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/69.jpg"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/70.jpg"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
     
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags == "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div
                      className="product-card position-relative"
                    >
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url}
                          className="img-fluid mx-auto"
                          alt="product image"
                          width={160}
                        />
                        <img
    src={item?.images[0].url}
    className="img-fluid mx-auto"
    alt="product image"
    width={160}
  />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Rs.{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img onClick={()=> navigate('/product/'+item?._id)} src={view} alt="view" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/stella-mccartney.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/1.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/2.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/3.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/4.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/5.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/1.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/2.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
