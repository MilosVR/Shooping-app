import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_newsletter">
        <div className="footer_newsletter_description">
          <h3>NEWS LETTER</h3>
          <p>Join us now to get all news and special offers</p>
        </div>
        <div className="footer_newsletter_from">
          <i className="far fa-envelope"></i>
          <form>
            <input type="text" placeholder="type your email here" />
          </form>
          <button>join us</button>
        </div>
      </div>
      <div className="footer_body">
        <div className="footer_body_copyright">
          <div className="logo">
            <div className="logo_header">
              <h2>SH</h2>
              <div className="logo_inner">
                <i className="fas fa-shopping-basket"></i>
              </div>
              <h2>PY</h2>
            </div>
            <p>shope anywhere</p>
          </div>
          <div>Shopy c. 2020 Milos Novovic</div>
        </div>
        <div className="footer_body_links">
          <ul>
            <li>about us</li>
            <li>contact</li>
            <li>support</li>
            <li>our fedd</li>
            <li>terms and conditions</li>
            <li>our privacy</li>
            <li>join us</li>
            <li>live support</li>
          </ul>
        </div>
        <div className="footer_body_payments">
          <h4>Payments Method</h4>
          <div className="footer_body_payments_imgs">
            <img alt="" src="/assets/payments/card-1.png" />
            <img alt="" src="/assets/payments/card-2.png" />
            <img alt="" src="/assets/payments/card-3.png" />
            <img alt="" src="/assets/payments/card-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
