import React from 'react';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { currentUser, logout, userRole } = useAuth();

  return (
    <header className="header">
      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Buscar cursos, materiais..." />
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">{currentUser?.displayName || 'Usuário'}</span>
            <span className="user-role">{userRole === 'admin' ? 'Administrador' : userRole === 'professor' ? 'Professor' : 'Estudante'}</span>
          </div>
          <button onClick={logout} className="logout-btn" title="Sair">
            <LogOut size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .header {
          height: 70px;
          background-color: var(--surface-color);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background-color: var(--background-color);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          width: 400px;
          gap: 0.5rem;
        }

        .search-icon {
          color: var(--text-secondary);
        }

        .search-bar input {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          color: var(--text-primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-btn {
          position: relative;
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .icon-btn:hover {
          background-color: var(--background-color);
        }

        .notification-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--error-color);
          color: white;
          font-size: 0.75rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar {
          width: 40px;
          height: 40px;
          background-color: #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: capitalize;
        }

        .logout-btn {
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: 0.5rem;
          margin-left: 0.5rem;
          transition: all 0.2s;
        }

        .logout-btn:hover {
          background-color: #fee2e2;
          color: #ef4444;
        }
      `}</style>
    </header>
  );
};

export default Header;
