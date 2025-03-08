import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 p-4 bg-light text-dark rounded shadow-lg">
      <h1 className="text-center text-light bg-primary p-3 rounded shadow-lg">
        <i className="bi bi-info-circle-fill"></i> About Us
      </h1>
      <p className="text-center text-secondary fs-5">Discover our mission, values, and commitment to excellence.</p>

      <div className="row mt-4 align-items-center">
        {/* About Image */}
        <div className="col-md-6 p-3 rounded border border-primary shadow bg-white">
          <img src="groceries.webp" className="img-fluid rounded shadow-lg" alt="Grocery Store" />
        </div>

        {/* About Text */}
        <div className="col-md-6 p-4 rounded border border-primary shadow bg-gradient text-light" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}>
          <h3 className="text-light bg-dark p-2 rounded">
            <i className="bi bi-shop"></i> Who We Are
          </h3>
          <p>
            Grocery Store is your one-stop shop for fresh produce, dairy, and non-veg items.
            We provide high-quality groceries at the best prices, ensuring an easy and convenient shopping experience.
          </p>

          <h3 className="text-light bg-danger p-2 rounded">
            <i className="bi bi-heart-fill"></i> Our Mission
          </h3>
          <p>
            We aim to make grocery shopping hassle-free, affordable, and efficient.
            With a wide variety of products and express delivery, we bring freshness straight to your doorstep.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-5 g-3">
        <div className="col-md-4">
          <div className="card shadow-lg p-4 bg-info text-light border border-dark rounded-lg">
            <i className="bi bi-truck display-4"></i>
            <h5 className="mt-3 fw-bold">Fast Delivery</h5>
            <p>Swift and reliable grocery delivery at your convenience.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg p-4 bg-warning text-dark border border-dark rounded-lg">
            <i className="bi bi-tags display-4"></i>
            <h5 className="mt-3 fw-bold">Best Prices</h5>
            <p>Enjoy unbeatable discounts on your favorite grocery items.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg p-4 bg-success text-light border border-dark rounded-lg">
            <i className="bi bi-award display-4"></i>
            <h5 className="mt-3 fw-bold">Premium Quality</h5>
            <p>Only the finest, hand-picked products for you and your family.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-5 p-4 bg-light shadow-lg rounded">
        <h2 className="text-center text-primary fw-bold mb-4">What Our Customers Say</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-3 shadow-lg border-success">
              <p className="text-secondary">"The freshest produce and fastest delivery! Highly recommended!"</p>
              <h6 className="text-success">- Sarah J.</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-lg border-primary">
              <p className="text-secondary">"Amazing prices and quality products. My go-to grocery store!"</p>
              <h6 className="text-primary">- Michael B.</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-lg border-danger">
              <p className="text-secondary">"Excellent customer service and a great selection of items!"</p>
              <h6 className="text-danger">- Emily R.</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-4">
        <button onClick={() => navigate("/contact")} className="btn btn-lg text-white fw-bold shadow-lg" style={{ background: "linear-gradient(to right, #ff416c, #ff4b2b)", borderRadius: "30px" }}>
          <i className="bi bi-envelope"></i> Get In Touch
        </button>
      </div>
    </div>
  );
};

export default About;