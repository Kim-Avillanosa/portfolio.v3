import { Container } from "react-grid-system";

const AppFooter: React.FC = () => {
    return (
        <div style={{ height: "50vh", paddingTop: "100px", backgroundColor: "royalblue" }}>
            <Container style={{ marginTop: "50px" }}>
                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="contact-info">
                                <h3>Contact Us</h3>
                                <p>Email: example@email.com</p>
                                <p>Phone: (123) 456-7890</p>
                            </div>
                            <div className="social-links">
                                <h3>Follow Us</h3>
                                <ul className="social-list">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/your-page"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/your-twitter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/your-instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>&copy; {new Date().getFullYear()} kmavillanosa</p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default AppFooter;
