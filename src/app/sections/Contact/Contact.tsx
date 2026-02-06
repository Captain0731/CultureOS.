"use client";
import "../../../styles/contact.scss";

export default function ContactPage() {
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
                <div className="contact-form">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name" />

                    <label>Email ID</label>
                    <input type="email" placeholder="Your@email.com" />

                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter Your Phone Number" />

                    <label>Subject</label>
                    <input type="text" placeholder="Enter Your Quiry Releted Subject Name"/>

                    <label>Message</label>
                    <textarea placeholder="Tell us about your Quiry"></textarea>

                    <button className="contact-btn">Send Message</button>
                </div>
            </div>
        </section>
    );
}
