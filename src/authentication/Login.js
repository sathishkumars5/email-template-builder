import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/common/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Auth.css';
import Notification from '../components/common/Notification'; 
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../components/common/firebase';
import { handleLandingPage } from "../components/common/routeFunction";
import useHead from '../hooks/useHead';

const Login = () => {
  // Set meta tags for the login page
  useHead({
    title: 'Login - Email Template Builder',
    description: 'Sign in to your Email Template Builder account to create and manage your email templates.',
    keywords: 'login, sign in, email template builder, user account',
    author: 'Email Template Builder Team'
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
    isVisible: false,
  });

  const navigate = useNavigate();

  const showNotification = (message, type = "success") => {
    setNotification({ message, type, isVisible: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};
  if (!formData.email) newErrors.email = 'Email is required';
  if (!formData.password) newErrors.password = 'Password is required';

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;
    const uid = user.uid;

    showNotification('Login successful!', 'success');

    setTimeout(() => navigate('/dashBoard'), 1000);

    
    const userDocRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      sessionStorage.setItem('name', userData.username); 
    }

    sessionStorage.setItem('uid', uid);
    sessionStorage.setItem('loginTime', Date.now().toString());

    

    // Clear session after 8 hours
    setTimeout(() => {
      sessionStorage.clear();
      navigate('/login');
    }, 8 * 60 * 60 * 1000);

  } catch (error) {
    console.error(error);
    showNotification('Login failed. Please check your email & password.', 'error');
  }
};


  return (
    <div>
      <header className="header">
        <div
          className="logo-area"
          onClick={() => handleLandingPage(navigate)}
        />
      </header>

      <div className="auth-container">
        <Notification
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={() =>
            setNotification((prev) => ({ ...prev, isVisible: false }))
          }
        />

        <form className="auth-card" onSubmit={handleSubmit}>
          <h2 className="auth-title">Login</h2>

          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group password-group">
            <div className="password-input-wrapper">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "input-error" : ""}`}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link className="auth-link" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
