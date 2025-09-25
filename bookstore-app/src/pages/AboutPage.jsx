import React from 'react';
import { Link } from 'react-router-dom';
// import './AboutPage.css'; // Optional CSS for styling

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Bookworm Haven</h1>
                <p>Your friendly neighborhood digital bookstore.</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission 🎯</h2>
                    <p>
                        Our mission is to connect readers with the books they'll love. We believe that reading is a powerful tool for growth, empathy, and adventure. In a world full of digital distractions, we aim to create a quiet corner where book lovers can discover new stories, revisit old classics, and share their passion with a like-minded community.
                    </p>
                </div>



                <div className="about-section">
                    <h2>Our Story 📜</h2>
                    <p>
                        Bookworm Haven was founded in 2024 by a group of avid readers who were tired of algorithmic recommendations that just didn't get it. We wanted to build a platform that felt more like a conversation with a knowledgeable friend at a local bookstore. Starting from a small passion project, we've grown into a community-focused hub for discovering fiction, science, biographies, and more.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Meet the Team 👋</h2>
                    <p>
                        We're a small but dedicated team of developers, designers, and bibliophiles. We spend our days coding, curating book lists, and, of course, reading! We're always here to help, so feel free to reach out.
                    </p>
                    <Link to="/contact" className="contact-button">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;