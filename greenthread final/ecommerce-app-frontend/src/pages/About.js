import React from "react";
import test2final from "../images/test2final.jpg";
import test5final from "../images/test5final.jpg";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#333" }}>
        Welcome to Our Sustainable Thrift Store!
      </h2>
      <p style={{ color: "#777", lineHeight: "1.6" }}>
        We are an online thrift store that provides a platform for sustainable
        brands and small businesses, supporting environmentally friendly
        fashion.
      </p>
      <img
        src={test2final}
        alt="Description for test2final"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ color: "#555" }}>Affordable Sustainable Fashion</h3>
      <p style={{ color: "#777", lineHeight: "1.6" }}>
        Our project is dedicated to offering affordable prices, making
        sustainable fashion accessible to a broader audience. We understand that
        many sustainable brands can be on the expensive side, and we aim to
        change that narrative.
      </p>
      <img
        src={test5final}
        alt="Description for test5final"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ color: "#555" }}>Supporting Small Businesses</h3>
      <p style={{ color: "#777", lineHeight: "1.6" }}>
        We believe in supporting small businesses. By offering a marketplace for
        sustainable and environmentally conscious entrepreneurs, we contribute
        to the growth of this community.
      </p>
    </div>
  );
};

export default About;