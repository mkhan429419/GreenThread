import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Refund Policy</h2>

              <p>
                At Our Sustainable Thrift Store, we want you to be completely
                satisfied with your purchase. If you have any concerns or
                issues, please review our refund policy below.
              </p>

              <h3>Refund Eligibility</h3>

              <p>
                To be eligible for a refund, the item must be in its original
                condition and packaging. We only process refunds for items
                within 10 days of the original purchase.
              </p>

              <h3>Refund Process</h3>

              <p>
                To initiate a refund, please contact our customer support team
                at support@ourthriftstore.com. Include your order number and a
                detailed explanation of the reason for the refund request.
              </p>

              <h3>Refund Timeline</h3>

              <p>
                Once your request is received and approved, we will process the
                refund. The refund will be credited to your original method of
                payment within 10 business days.
              </p>

              <h3>Exchanges</h3>

              <p>
                We do not currently offer exchanges. If you need a different
                item, please follow the refund process and place a new order.
              </p>

              <h3>Contact Us</h3>

              <p>
                If you have any questions about our refund policy, please
                contact us at support@greenthread@gmail.com or call +92
                2344652345.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;