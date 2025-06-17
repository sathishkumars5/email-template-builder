import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/common/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { handleLoginpage } from '../components/common/routeFunction'; 
import { handleHomepage } from '../components/common/routeFunction';

const FrontPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '1rem'
      }}>
        <h2>Email template builder</h2>
        <button style={{
          backgroundColor: 'grey',
          border: 'none',
          width: '3rem',
          height: '2rem',
          cursor: 'pointer'
        }}>
          Try
        </button>
        
        {user ? (
          <>
            <button 
              style={{
                backgroundColor: 'grey',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding:'1rem',
                textDecoration:'underline'
              }}
              onClick={()=>handleHomepage(navigate)}
            >
              {user.email.split('@')[0]}
            </button>
            <button 
              style={{
                backgroundColor: 'red',
                border: 'none',
                width: '4rem',
                height: '2rem',
                cursor: 'pointer'
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            style={{
              backgroundColor: 'grey',
              border: 'none',
              width: '3rem',
              height: '2rem',
              cursor: 'pointer'
            }} 
            onClick={() => handleLoginpage(navigate)} 
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default FrontPage;