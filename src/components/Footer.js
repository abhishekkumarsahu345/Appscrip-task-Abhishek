import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className={styles.footer}>
      {/* Top footer */}
      <div className={styles.footerTop}>
        <div className={styles.footerNewsletter}>
          <h3 className={styles.footerNewsletterTitle}>BE THE FIRST TO KNOW</h3>
          <p className={styles.footerNewsletterText}>
            Sign up for updates from mettā muse.
          </p>
          <div className={styles.footerSubscribe}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.footerInput}
            />
            <button className={styles.footerBtn}>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.footerContact}>
          <h3 className={styles.footerContactTitle}>CONTACT US</h3>
          <p className={styles.footerContactText}>+44 221 133 5360</p>
          <p className={styles.footerContactText}>customercare@mettamuse.com</p>
          <h3 className={styles.footerContactTitle}>CURRENCY</h3>
          <p className={styles.footerContactText}>🇺🇸 • USD</p>
          <p className={styles.footerCurrencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <div className={styles.footerDivider} />

      {/* Bottom footer */}
      <div className={styles.footerBottom}>
        <div className={styles.footerCol}>
          <h4 className={styles.footerColTitle}>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerColTitle}>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.footerColTitle}>FOLLOW US</h4>
          <div className={styles.footerSocial}>
            <span className={styles.socialIcon}>📷</span>
            <span className={styles.socialIcon}>in</span>
          </div>
          <h4 className={styles.footerColTitle} style={{marginTop: '24px'}}>
            mettā muse ACCEPTS
          </h4>
          <div className={styles.footerPayments}>
            <span className={styles.paymentIcon}>GPay</span>
            <span className={styles.paymentIcon}>MC</span>
            <span className={styles.paymentIcon}>PP</span>
            <span className={styles.paymentIcon}>Amex</span>
            <span className={styles.paymentIcon}>⊕Pay</span>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}