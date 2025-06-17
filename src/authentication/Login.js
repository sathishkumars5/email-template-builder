import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/common/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Auth.css';
import Notification from '../components/common/Notification'; 

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [notification, setNotification] = useState({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type, isVisible: true });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      showNotification('Login successful!', 'success');
      setTimeout(() => navigate('/homePage'), 1000);
    } catch (error) {
      showNotification(error.message || 'Login failed', 'error');
    }
  };

  return (
    <div className="auth-container">

      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
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
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group password-group">
          <div className="password-input-wrapper">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'input-error' : ''}`}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(prev => !prev)}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit" className="auth-button">Login</button>

        <p className="auth-footer">
          Don't have an account? <Link className="auth-link" to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
