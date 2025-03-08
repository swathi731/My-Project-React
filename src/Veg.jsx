import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
    let vegItems = useSelector(state => state.products.veg);
    let dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [priceFilter, setPriceFilter] = useState("all");
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
    const itemsPerPage = 5;
    const maxPages = 5;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours}h ${minutes}m ${secs}s`; // Corrected string interpolation
    };

    const filteredItems = vegItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (priceFilter === "all" ||
        (priceFilter === "0-100" && item.price >= 0 && item.price <= 100) ||
        (priceFilter === "100-200" && item.price > 100 && item.price <= 200) ||
        (priceFilter === "200-300" && item.price > 200 && item.price <= 300))
    );

    const totalPages = Math.min(Math.ceil(filteredItems.length / itemsPerPage), maxPages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mt-4 bg-light p-4 rounded shadow-lg">
            <h2 className="text-center mb-4 text-success fw-bold">🥦 Welcome To Fresh Vegetables</h2>

            {/* Expiry Timer */}
            <div className="text-center mb-3">
                <h5 className="fw-bold text-danger">
                    {timeLeft > 0 ? (
                        <>All Vegetables expire in: <span className="badge bg-danger">{formatTime(timeLeft)}</span></>
                    ) : (
                        <span className="badge bg-warning text-dark">HURRY! LAST FEW HOURS!</span>
                    )}
                </h5>
            </div>
            
            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-3">
                <div className="input-group w-50 shadow-sm">
                    <input 
                        type="text" 
                        className="form-control border border-success rounded-3 bg-white text-dark"
                        placeholder="🔍 Search fresh vegetables..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: "250px", borderColor: "#28a745", boxShadow: "0 0 8px rgba(40, 167, 69, 0.5)" }} 
                    />
                </div>
            </div>

            {/* Price Filter */}
            <div className="d-flex justify-content-center mb-3">
                <label className="fw-bold me-2 text-success">Filter by Price:</label>
                <select 
                    className="form-select w-auto border border-success shadow-sm text-success fw-bold"
                    onChange={(e) => setPriceFilter(e.target.value)}
                    style={{ backgroundColor: "#e9f5e9", borderColor: "#28a745" }}
                >
                    <option value="all">All</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                </select>
            </div>

            {/* Vegetable Cards */}
            <div className="row">
                {displayedItems.length > 0 ? (
                    displayedItems.map((item, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card shadow-lg border-0 bg-white">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="card-img-top rounded-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-success fw-bold">{item.name}</h5>
                                    <p className="card-text text-success fw-bold fs-5">${item.price}</p>
                                    <button 
                                        className="btn w-100 fw-bold text-white d-flex align-items-center justify-content-center"
                                        onClick={() => dispatch(addToCart(item))}
                                        style={{
                                            background: "linear-gradient(to right, #ff8c00, #ff4500)",
                                            border: "none",
                                            padding: "10px",
                                            borderRadius: "30px",
                                            transition: "0.3s",
                                            boxShadow: "0 4px 6px rgba(255, 140, 0, 0.3)"
                                        }}
                                        onMouseOver={(e) => e.target.style.background = "#ff4500"}
                                        onMouseOut={(e) => e.target.style.background = "linear-gradient(to right, #ff8c00, #ff4500)"}
                                    >
                                        <i className="bi bi-cart-fill me-2"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-danger fw-bold">
                        No items available in this price range.
                    </p>
                )}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
                <button 
                    className="btn btn-warning me-2" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <i className="bi bi-arrow-left"></i> Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        key={index} 
                        className={`btn mx-1 ${currentPage === index + 1 ? "btn-success" : "btn-outline-success"}`} // Fixed dynamic className usage
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button 
                    className="btn btn-warning ms-2" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next <i className="bi bi-arrow-right"></i>
                </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-4 text-success fw-bold">
                🥦 Welcome To Fresh Organic Vegetables<br/>
                🌱 Eat Fresh, Stay Healthy! 🌿<br/>
                Get farm-fresh organic veggies delivered to your doorstep. Taste the purity! 🥕🥬<br/>
                <br/>
                © 2025 Fresh Organic. All Rights Reserved.<br/>
                <br/>
                Enjoy the best hand-picked vegetables with love! ❤
            </div>
        </div>
    );
}

export default Veg;
