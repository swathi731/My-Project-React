import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Fresh Vegetables", icon: "bi-carrot", image: "vegitabless.jpg", link: "/veg", btnClass: "btn-success" },
    { name: "Milk & Dairy", icon: "bi-cup-straw", image: "milkdairy.png", link: "/milk", btnClass: "btn-warning" },
    { name: "NonVeg Dishes", icon: "bi-egg-fried", image: "nonveg.avif", link: "/nonveg", btnClass: "btn-danger" },
  ];

  // Filtering categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container text-center mb-5">
        <h1 className="display-4 fw-bold text-success">
          <i className="bi bi-shop"></i> Welcome to Grocery Store
        </h1>
        <p className="lead text-muted">Your one-stop shop for fresh and quality groceries.</p>

        <div className="input-group w-50 mx-auto mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => setSearchTerm(searchTerm)}>
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container">
        <h2 className="text-center fw-bold text-success mb-4">Popular Categories</h2>
        <div className="row g-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-lg">
                  <img
                    src={category.image}
                    className="card-img-top"
                    alt={category.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold text-dark">
                      <i className={`bi ${category.icon} me-2`}></i>{category.name}
                    </h5>
                    <Link to={category.link} className={`btn ${category.btnClass} w-100 fw-bold`}>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-danger fw-bold">No categories found!</p>
          )}
        </div>
      </div>

      {/* Fun Food Facts */}
      <div className="container mt-5">
        <h2 className="text-center text-primary fw-bold">🍽 Colorful Bites</h2>
        <p className="text-center text-muted">Brighten your day with amazing food facts and deals!</p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-lg bg-info text-white text-center p-3">
              <h5>Eat the Rainbow!</h5>
              <p>Colorful fruits and veggies boost immunity and health.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg bg-warning text-dark text-center p-3">
              <h5>Special Discount!</h5>
              <p>Buy 1 get 1 free on all organic vegetables this weekend only!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg bg-danger text-white text-center p-3">
              <h5>Superfoods Alert!</h5>
              <p>Berries and nuts are packed with antioxidants for a healthy heart!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Get to Know Us</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Our Services</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Connect with Us</h5>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Make Money with Us</h5>
              <ul className="list-unstyled">
                <li>Sell on Our Platform</li>
                <li>Advertise Your Products</li>
                <li>Affiliate Program</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Let Us Help You</h5>
              <ul className="list-unstyled">
                <li>Your Account</li>
                <li>Returns & Refunds</li>
                <li>Help & Support</li>
              </ul>
            </div>
          </div>
          <hr className="bg-white" />
          <p className="text-center mb-0">© 2025 Grocery Store Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
