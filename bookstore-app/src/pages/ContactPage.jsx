import React, { useState } from 'react';
// import './ContactPage.css'; // Optional CSS for styling

const ContactPage = () => {
    // State to hold the values of the form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // State to track the form submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

    // This function handles changes in any input field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // This function handles the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default browser page reload

        // --- In a real application, you would send the data to a server here ---
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });

        console.log("Form Submitted:", formData);

        // Show the success message
        setIsSubmitted(true);
    };

    // If the form has been submitted, show a thank you message
    if (isSubmitted) {
        return (
            <div className="contact-container">
                <div className="success-message">
                    <h2>Thank You! 🙏</h2>
                    <p>Your message has been sent. We'll get back to you soon.</p>
                    <button onClick={() => setIsSubmitted(false)} className="submit-button">
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    // Otherwise, show the form
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Have a question or some feedback? Drop us a line!</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;