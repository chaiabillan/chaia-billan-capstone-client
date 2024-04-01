import './Footer.scss'

function Footer() {

    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: contact@myallergycompass.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div class="social-links">
                    <h3>Follow Us</h3>
                    <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <p class="copyright">&copy; 2024 My Allergy Compass. All rights reserved.</p>
        </footer>
    )
}

export default Footer