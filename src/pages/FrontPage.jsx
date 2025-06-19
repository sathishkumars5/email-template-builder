import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/common/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  handleSignUpPage,
  handleLoginPage
} from '../components/common/routeFunction';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FrontPage.css';
import { handleLogout } from "../components/common/authHelpers";

const FrontPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("");
  
    useEffect(() => {
      const storedName = sessionStorage.getItem("name");
      if (storedName) {
        setUsername(storedName);
      }
    }, [navigate]);

  useEffect(() => {
    const authentication = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        sessionStorage.setItem('uid', currentUser.uid);
      } else {
        setUser(null);
        sessionStorage.removeItem('uid');
      }
      setLoading(false);
    });
    return () => authentication();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem('uid');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Handle "Start building" button
  const handleStartBuilding = () => {
    const uid = sessionStorage.getItem('uid');
    if (uid) {
      navigate('/dashBoard');
    } else {
      navigate('/login');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header className='header'>
        <div className="logo-area" />
        <div className="button-group">
          {user ? (
            <>
              <h4 className="user-name">
                Hi{username ? `, ${username}` : ""}
              </h4>
              <button className="action-btn" onClick={() => handleLogout(navigate)}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="action-btn" onClick={() => handleSignUpPage(navigate)}>
                Register
              </button>
              <button className="action-btn" onClick={() => handleLoginPage(navigate)}>
                Login
              </button>
            </>
          )}
        </div>
      </header>

      <section className="main-block">
        <div className="color">
          <h1>The go-to HTML email builder that converts</h1>
          <p>Say goodbye to clunky editors! With Slice Mailer, designing and exporting HTML emails is faster, smarter, and easier than ever.</p>
          <button className="action-btnlast" onClick={handleStartBuilding}>
            Start building
          </button>
        </div>
        <video 
          src="/video/tutorial-video.webm" 
          controls 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="mailer-section">
        <h2 className="mailer-heading">SliceMailer – Perfect for Everyone</h2>
        <p className="mailer-description">
          SliceMailer is a user-friendly and powerful platform that empowers anyone to create visually stunning, responsive email templates—no coding required.
        </p>
        <div className="mailer-benefits">
          <div className="benefit-card">
            <span className="emoji">✅</span>
            <h3>For Marketers</h3>
            <p>Easily create custom emails without any coding. Customize modules, launch email campaigns, and export templates to your favorite platform.</p>
          </div>
          <div className="benefit-card">
            <span className="emoji">🎨</span>
            <h3>For Designers</h3>
            <p>SliceMailer works like Figma. Use your existing skills and shortcuts to build emails efficiently—no steep learning curve.</p>
          </div>
          <div className="benefit-card">
            <span className="emoji">💼</span>
            <h3>For Business Owners</h3>
            <p>Design professional communications that engage and convert. Build trust and loyalty with just a few clicks.</p>
          </div>
          <div className="benefit-card">
            <span className="emoji">🌐</span>
            <h3>For Everyone!</h3>
            <p>Create beautiful, personalized emails for friends, family, students, donors, or any community—no experience required.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">SLICE MAILER</div>
          <div className="icon-web">
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li>Demo Editor</li>
              <li>Plugin</li>
              <li>All Features</li>
              <li>Gmail Promo Builder</li>
              <li>Brand Kit Generator</li>
              <li>AMP Examples</li>
              <li>Integrations</li>
              <li>Order a Custom Template</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Education</li>
              <li>Glossary</li>
              <li>Marketing Tools Review</li>
              <li>Email Reviews</li>
              <li>Video Gallery</li>
              <li>Discounts Hub</li>
            </ul>
          </div>
          <div>
            <h4>Localizations</h4>
            <ul>
              <li>Deutsch</li>
              <li>Français</li>
              <li>Español</li>
              <li>Italiano</li>
              <li>Português</li>
              <li>Українська</li>
              <li>Русский</li>
            </ul>
          </div>
          <div>
            <h4>Developers</h4>
            <ul>
              <li>Plugin API</li>
              <li>Stripo API</li>
              <li>Release Notes</li>
              <li>Report Vulnerability</li>
            </ul>
          </div>
          <div>
            <h4>Who we are</h4>
            <ul>
              <li>About</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 EmailBuilder Inc. | <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
