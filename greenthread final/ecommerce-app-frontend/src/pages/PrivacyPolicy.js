import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Privacy Policy</h2>

              <p>
                At Our Sustainable Thrift Store, we are committed to
                safeguarding your privacy. This Privacy Policy explains how we
                collect, use, and protect your personal information. By using
                our website, you agree to the terms outlined in this policy.
              </p>

              <h3>Information We Collect</h3>

              <p>
                We may collect the following types of information when you
                interact with our website:
              </p>
              <ul>
                <li>Personal information (e.g., name, email, address)</li>
                <li>Payment details for transactions</li>
                <li>Device information (e.g., IP address, browser)</li>
                <li>Information provided voluntarily (e.g., surveys)</li>
              </ul>

              <h3>How We Use Your Information</h3>

              <p>
                We use the collected information for various purposes,
                including:
              </p>
              <ul>
                <li>Processing and fulfilling orders</li>
                <li>Personalizing user experience</li>
                <li>Improving our products and services</li>
                <li>Sending relevant marketing communications</li>
              </ul>

              <h3>Information Security</h3>

              <p>
                We prioritize the security of your information and employ
                measures to protect it from unauthorized access or disclosure.
                However, no online method is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;