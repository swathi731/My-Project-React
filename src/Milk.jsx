import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
    let milkItems = useSelector(state => state.products.milk);
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
        return `${hours}h ${minutes}m ${secs}s`;  {/* Fixed the template literal */}
    };

    const filteredItems = milkItems.filter(item => 
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
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-primary fw-bold">Welcome To Milk Items</h2>
            
            <div className="text-center mb-3">
                <h5 className="fw-bold text-danger">
                    HURRY! LAST FEW HOURS: <span className="badge bg-danger">{formatTime(timeLeft)}</span>
                </h5>
            </div>
            
            <div className="d-flex justify-content-center mb-3">
                <div className="input-group w-50 shadow-sm">
                    <span className="input-group-text bg-primary text-white"><i className="bi bi-search"></i></span>
                    <input 
                        type="text" 
                        className="form-control border border-primary rounded-3" 
                        placeholder="Search fresh milk..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: "250px" }} 
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center mb-3">
                <label className="fw-bold me-2">Filter by Price:</label>
                <select 
                    className="form-select w-auto border border-primary shadow-sm" 
                    onChange={(e) => setPriceFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
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
                                    <h5 className="card-title text-primary fw-bold">{item.name}</h5>
                                    <p className="card-text text-success fw-bold fs-5">${item.price}</p>
                                    <button 
                                        className="btn btn-primary w-100 fw-bold"
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
                <button className="btn btn-warning me-2" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    <i className="bi bi-arrow-left"></i> Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} className={`btn mx-1 ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button className="btn btn-warning ms-2" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next <i className="bi bi-arrow-right"></i>
                </button>
            </div>

            <div className="text-center mt-5 p-3 bg-primary text-white rounded shadow-lg">
                <h4 className="fw-bold">Enjoy Our Fresh Milk!</h4>
                <p className="fs-5">Indulge in the richness of fresh dairy products. Order now for a creamy delight!</p>
            </div>
        </div>
    );
}

export default Milk;
