import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
      <BreadCrumb title="Terms And Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Terms And Conditions</h2>

              <p>
                Welcome to Our Sustainable Thrift Store. By accessing our
                website, you agree to comply with and be bound by the following
                terms and conditions of use. Please review the terms outlined
                below carefully. If you do not agree to these terms, please do
                not use this website.
              </p>

              <h3>Use of Website</h3>

              <p>
                The content of this website is for general information and use
                only. It is subject to change without notice. Your use of any
                information or materials on this website is entirely at your own
                risk, for which we shall not be liable.
              </p>

              <h3>Intellectual Property</h3>

              <p>
                This website contains material that is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance, and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </p>

              <h3>Privacy Policy</h3>

              <p>
                Your use of this website is also governed by our Privacy Policy.
                Please review our Privacy Policy to understand our practices.
              </p>

              <h3>Limitation of Liability</h3>

              <p>
                In no event will we be liable for any loss or damage including,
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arising out of, or in connection with, the use of this
                website.
              </p>

              <h3>Governing Law</h3>

              <p>
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of Pakistan.
              </p>

              <h3>Contact Us</h3>

              <p>
                If you have any questions or concerns regarding our Terms and
                Conditions, please contact us at support@greenthread@gmail.com
                or call +92 2344652345.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;