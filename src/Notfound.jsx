import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 5000);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <img src="imd404.jpg" className="img-fluid mt-3" alt="404 Not Found" />
      <p className="mt-3">Redirecting to home page in 5 seconds...</p>
    </div>
  );
}

export default Notfound;