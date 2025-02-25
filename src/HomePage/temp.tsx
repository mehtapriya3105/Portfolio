import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("service_gzk36ao", "template_7uy7au3", formData, "bMJuXq_zhiYCEkMg0")
      .then(() => {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send email. Please try again."));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 col-lg-5 p-4 bg-white shadow rounded">
        <h2 className="text-center mb-4">Lets Connect!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-Mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send
          </button>
        </form>
        {status && <p className="mt-3 text-center text-muted">{status}</p>}
      </div>
    </div>
  );
}
