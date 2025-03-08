import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <div className="p-4 text-center bg-warning text-dark rounded shadow-lg">
        <h1>
          <i className="bi bi-envelope-fill"></i> Contact Us
        </h1>
        <p>We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      <div className="row mt-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4 bg-light border border-primary rounded">
            <h4 className="text-center text-primary mb-3">
              <i className="bi bi-chat-dots"></i> Send us a Message
            </h4>
            <img
              src="https://source.unsplash.com/500x200/?customer-service"
              className="img-fluid rounded mb-3"
              alt="Customer Support"
            />
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send"></i> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4 bg-secondary text-light border border-dark rounded">
            <h4 className="text-center mb-3">
              <i className="bi bi-info-circle"></i> Contact Information
            </h4>
            <img
              src="https://source.unsplash.com/500x200/?grocery-store"
              className="img-fluid rounded mb-3"
              alt="Store"
            />
            <ul className="list-group">
              <li className="list-group-item bg-dark text-light">
                <i className="bi bi-geo-alt-fill text-danger"></i> 123 Grocery St, New York, USA
              </li>
              <li className="list-group-item bg-dark text-light">
                <i className="bi bi-telephone-fill text-success"></i> +1 234 567 890
              </li>
              <li className="list-group-item bg-dark text-light">
                <i className="bi bi-envelope-fill text-primary"></i> support@grocerystore.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Store Timings */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card shadow-lg p-4 bg-info text-dark border border-dark rounded">
            <h4 className="text-center mb-3">
              <i className="bi bi-clock"></i> Store Timings
            </h4>
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Day</th>
                  <th>Opening Time</th>
                  <th>Closing Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-light">
                  <td>Monday - Friday</td>
                  <td>9:00 AM</td>
                  <td>8:00 PM</td>
                </tr>
                <tr className="bg-light">
                  <td>Saturday</td>
                  <td>10:00 AM</td>
                  <td>6:00 PM</td>
                </tr>
                <tr className="bg-light">
                  <td>Sunday</td>
                  <td className="text-danger">Closed</td>
                  <td className="text-danger">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card shadow-lg p-3 bg-danger text-light border border-dark rounded">
            <h4 className="text-center mb-3">
              <i className="bi bi-map"></i> Our Location
            </h4>
            <div className="ratio ratio-16x9">
              <iframe
                title="Grocery Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9168765398627!2d-74.0060152845933!3d40.71277607933088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMDUuNCJX!5e0!3m2!1sen!2sus!4v1636496369911!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;