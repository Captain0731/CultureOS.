"use client";
import { useState } from "react";
import "../../../styles/contact.scss";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setStatusMessage("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setStatus("error");
                setStatusMessage(data.error || "Something went wrong");
            }
        } catch (error) {
            setStatus("error");
            setStatusMessage("Failed to send message. Please try again.");
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus("idle");
            setStatusMessage("");
        }, 5000);
    };

    return (
        <section className="contact-wrapper" id="contact">
            <div className="contact-container">

                {/* LEFT SIDE CONTENT */}
                <div className="contact-left">

                    <h4 className="contact-subtitle">Liko Studio</h4>
                    <h1 className="contact-title">Get in touch</h1>

                    <div className="message-box">
                        <h3>SEND A MESSAGE</h3>
                        <p>CONTACT US</p>
                        <p>+1 234 567 890</p>
                        <p>hello@likostudio.com</p>
                    </div>

                    {/* Social Icons */}
                    <div className="social-bar">
                        <h3>Follow Us</h3>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Instagram">◎</a>
                        <a href="#" aria-label="Facebook">f</a>

                        {/* <div className="follow-text">Follow us</div> */}
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name" 
                        required
                    />

                    <label>Email ID</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your@email.com" 
                        required
                    />

                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Your Phone Number" 
                    />

                    <label>Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter Your Quiry Releted Subject Name"
                    />

                    <label>Message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your Quiry"
                        required
                    ></textarea>

                    {statusMessage && (
                        <p className={`form-status ${status}`}>{statusMessage}</p>
                    )}

                    <button 
                        className="contact-btn" 
                        type="submit"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}
