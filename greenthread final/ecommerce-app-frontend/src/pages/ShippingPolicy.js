import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Shipping Policy</h2>

              <p>
                At Our Sustainable Thrift Store, we strive to provide you with a
                seamless shopping experience. Please review our shipping policy
                below for information on shipping methods, delivery times, and
                more.
              </p>

              <h3>Shipping Methods</h3>

              <p>
                We currently offer standard shipping for all orders. The
                estimated delivery time is 10 business days from the date of
                purchase. Please note that shipping times may vary based on your
                location.
              </p>

              <h3>Shipping Costs</h3>

              <p>
                Standard shipping is available at a flat rate of Rs.300.
                Shipping costs are calculated at checkout and added to your
                total purchase amount.
              </p>

              <h3>Order Processing Time</h3>

              <p>
                Orders are processed within 10-15 business days of receiving
                payment. Once your order is shipped, you will receive a
                confirmation email with tracking information.
              </p>

              <h3>International Shipping</h3>

              <p>
                We currently do not offer international shipping. We only ship
                to addresses within Pakistan.
              </p>

              <h3>Lost or Damaged Items</h3>

              <p>
                If your order is lost or damaged during transit, please contact
                our customer support team at support@greenthread@gmail.com for
                assistance.
              </p>

              <h3>Contact Us</h3>

              <p>
                If you have any questions or concerns regarding our shipping
                policy, please contact us at support@greenthread@gmail.com or
                call +92 2344652345 .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;