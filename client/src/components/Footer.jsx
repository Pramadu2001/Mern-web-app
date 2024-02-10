import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email,Facebook,Instagram,LinkedIn,YouTube,WhatsApp } from "@mui/icons-material"
const Footer = () => {
  return (
   // ... (your existing code)
      <div className="footer">
        <div className="footer_left">
          <div className="footer_left_socials">
            <h3>Follow Us</h3>
            <div className="links">
              <ul>
                <li>
                  <a href="www.facebook.com">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="www.whatsapp.com">
                    <WhatsApp />
                  </a>
                </li>
                <li>
                  <a href="www.instagram.com">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="www.youtube.com">
                    <YouTube />
                  </a>
                </li>
                <li>
                  <a href="www.linkin.com">
                    <LinkedIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/">
            <img src="/assets/logo.png" alt="logo" />
          </a>
        </div>
  
        <div className="footer_center">
          <h3>Useful Links</h3>
          <ul>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Return and Refund Policy</li>
          </ul>
        </div>
  

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>dreamnest@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />

        <div class="credit">copyright &copy; 2024 by <span>K.P.S Chithakshana</span></div>
      </div>
    </div>
  )
}

export default Footer