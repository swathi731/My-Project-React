import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
    let nonvegItems = useSelector(state => state.products.nonveg);
    let dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [priceFilter, setPriceFilter] = useState("all");
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
    const itemsPerPage = 5;
    const maxPages = 6;

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
        return `${hours}h ${minutes}m ${secs}s`; // Corrected the string interpolation
    };

    const filteredItems = nonvegItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (priceFilter === "all" ||
        (priceFilter === "200-400" && item.price >= 200 && item.price <= 400) ||
        (priceFilter === "400-800" && item.price > 400 && item.price <= 800) ||
        (priceFilter === "800-1000" && item.price > 800 && item.price <= 1000))
    );

    const totalPages = Math.min(Math.ceil(filteredItems.length / itemsPerPage), maxPages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-danger fw-bold">Welcome To Nonveg Dishes</h2>

            <div className="text-center mb-3">
                <h5 className="fw-bold text-danger">
                    {timeLeft > 0 ? (
                        <>HURRY! LAST FEW HOURS: <span className="badge bg-danger">{formatTime(timeLeft)}</span></>
                    ) : (
                        <span className="badge bg-warning text-dark">HURRY! Delicious Fastfood expiring!</span>
                    )}
                </h5>
            </div>
            
            <div className="d-flex justify-content-center mb-3">
                <div className="input-group w-50 shadow-sm">
                    <span className="input-group-text bg-danger text-white" id="search-icon">🔎</span>
                    <input 
                        type="text" 
                        className="form-control border border-danger rounded-3" 
                        placeholder="Search fresh non-veg dishes..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: "250px" }} 
                        aria-label="Search"
                        aria-describedby="search-icon"
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center mb-3">
                <label className="fw-bold me-2">Filter by Price:</label>
                <select 
                    className="form-select w-auto border border-danger shadow-sm" 
                    onChange={(e) => setPriceFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="200-400">$200 - $400</option>
                    <option value="400-800">$400 - $800</option>
                    <option value="800-1000">$800 - $1000</option>
                </select>
            </div>

            <div className="row">
                {displayedItems.length > 0 ? (
                    displayedItems.map((item, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card shadow-lg border-0">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="card-img-top rounded-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-danger fw-bold">{item.name}</h5>
                                    <p className="card-text text-danger fw-bold fs-5">${item.price}</p>
                                    <button 
                                        className="btn add-to-cart-btn w-100 fw-bold"
                                        onClick={() => dispatch(addToCart(item))}
                                    >
                                        <i className="bi bi-cart-plus me-2"></i> Add to Cart
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
                        className={`btn mx-1 ${currentPage === index + 1 ? "btn-danger" : "btn-outline-danger"}`} // Fixed template literal here
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
            
            <footer className="text-center mt-5 p-3 bg-danger text-white rounded">
                <p className="mb-0">&copy; 2025 Nonveg Bites. All Rights Reserved.</p>
                <p className="mb-0">Enjoy the best non-veg delicacies at unbeatable prices!</p>
            </footer>
        </div>
    );
}

export default Nonveg;
