import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../src/components/common/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Notification from '../components/common/Notification';
import './Auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
    passwordRules: false,
  });

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

  const passwordRules = [
    { label: 'At least 8 characters', test: (pwd) => pwd.length >= 8 },
    { label: '1 uppercase letter', test: (pwd) => /[A-Z]/.test(pwd) },
    { label: '1 lowercase letter', test: (pwd) => /[a-z]/.test(pwd) },
    { label: '1 number', test: (pwd) => /\d/.test(pwd) },
    { label: '1 special character (@$!%*?&)', test: (pwd) => /[@$!%*?&]/.test(pwd) },
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const { username, email, password, confirmPassword } = formData;
    const newErrors = {};

    if (!username.trim()) newErrors.username = 'Username is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email';
    if (!password) newErrors.password = 'Password is required';

    const failedRules = passwordRules.filter(rule => !rule.test(password));
    if (failedRules.length > 0) {
      newErrors.password = 'Password does not meet the required criteria';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (validationErrors.password) {
      setShow(prev => ({ ...prev, passwordRules: true }));
    }

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      sessionStorage.setItem('uid', userCredential.user.uid);
      sessionStorage.setItem('loginTime', Date.now().toString());
      sessionStorage.setItem('name', formData.username); // 👈 store name in session

      showNotification('Account created successfully!', 'success');

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username: formData.username,
        email: formData.email,
      });

      setTimeout(() => navigate('/homePage'), 1000);

      setTimeout(() => {
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('loginTime');
        sessionStorage.removeItem('name'); 
        navigate('/login');
      }, 8 * 60 * 60 * 1000);

    } catch (error) {
      console.error(error);
      showNotification('An error occurred during registration', 'error');
    }
  };

  return (
    <div className="auth-wrapper">
      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />

      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">Create Account</h2>

        <div className="form-group">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={`form-input ${errors.username ? 'input-error' : ''}`}
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>

        <div className="form-group">
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group password-group">
          <div className="passIcon-position">
            <input
              name="password"
              type={show.password ? 'text' : 'password'}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setShow(prev => ({ ...prev, passwordRules: true }))}
              onBlur={() => setTimeout(() => setShow(prev => ({ ...prev, passwordRules: false })), 300)}
              className={`form-input ${errors.password ? 'input-error' : ''}`}
            />
          </div>

          {show.passwordRules && (
            <div className="password-rules">
              <p>Password must contain:</p>
              <ul>
                {passwordRules.map((rule, i) => (
                  <li key={i} className={rule.test(formData.password) ? 'valid' : 'invalid'}>
                    {rule.test(formData.password) ? '✔' : '✖'} {rule.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-group password-group">
          <div className="passIcon-position">
            <input
              name="confirmPassword"
              type={show.confirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
            />
            <span className="password-toggle" onClick={() => setShow(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))}>
              <FontAwesomeIcon icon={show.confirmPassword ? faEye : faEyeSlash} />
            </span>
          </div>

          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="auth-button">Sign Up</button>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
