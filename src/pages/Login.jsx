import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, LogIn } from 'lucide-react';

const Login = () => {
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        try {
            setError('');
            await loginWithGoogle();
            navigate('/');
        } catch (err) {
            setError('Falha ao fazer login com Google. Tente novamente.');
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="logo-section">
                    <GraduationCap size={48} className="logo-icon" />
                    <h1>AVA Paraná</h1>
                    <p>Ambiente Virtual de Aprendizagem</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button onClick={handleGoogleLogin} className="google-btn">
                    <LogIn size={20} />
                    Entrar com Google
                </button>
            </div>

            <style>{`
        .login-container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--background-color);
        }

        .login-card {
          background-color: white;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .logo-section {
          margin-bottom: 2rem;
        }

        .logo-icon {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .logo-section h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .logo-section p {
          color: var(--text-secondary);
        }

        .google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background-color: white;
          border: 1px solid var(--border-color);
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.2s;
        }

        .google-btn:hover {
          background-color: #f8fafc;
          border-color: var(--text-secondary);
        }

        .error-message {
          background-color: #fee2e2;
          color: #ef4444;
          padding: 0.75rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
      `}</style>
        </div>
    );
};

export default Login;
