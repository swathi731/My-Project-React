import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Milk from "./Milk";
import Order from "./Order";
import Contactus from "./Contactus";
import Notfound from "./Notfound";
import { Logout } from "./Store";
import Login from "./Login";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Veg from "./Veg";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ background: "#1e3a5f" }}>
        <div className="container">
          <Link
            className="navbar-brand fw-bold text-white"
            to="/home"
            style={{ fontSize: "1.8rem" }}
          >
            🛒 <span style={{ color: "#ffcc00" }}>Grocery</span> Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold" to="/home">
                  🏠 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/veg">
                  🥦 Veg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger fw-bold" to="/nonveg">
                  🍗 NonVeg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary fw-bold" to="/milk">
                  🥛 Milk
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/cart">
                  🛒 Cart{" "}
                  <span className="badge bg-danger ms-1">{totalItems}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold" to="/order">
                  📜 Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/about">
                  ℹ About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/contactus">
                  📞 Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-light me-2">
                    Welcome, {user?.name}!
                  </span>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => dispatch(Logout())}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-outline-light">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div
        className="container-fluid py-5"
        style={{ background: "linear-gradient(to bottom, #e3f2fd, #ffffff)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-12 p-4 rounded shadow"
              style={{ minHeight: "80vh", backgroundColor: "#f3e5f5" }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/veg" element={<Veg />} />
                <Route path="/nonveg" element={<Nonveg />} />
                <Route path="/milk" element={<Milk />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
