import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Calendar, Settings, GraduationCap } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: BookOpen, label: 'Cursos', path: '/courses' },
        { icon: Calendar, label: 'Agenda', path: '/calendar' },
        { icon: Settings, label: 'Configurações', path: '/settings' },
    ];

    return (
        <aside className="sidebar">
            <div className="logo-container">
                <GraduationCap size={32} className="logo-icon" />
                <span className="logo-text">AVA Paraná</span>
            </div>

            <nav className="nav-menu">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? 'active' : ''}`
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <style>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          background-color: var(--surface-color);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
        }

        .logo-container {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .logo-icon {
          color: var(--primary-color);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .nav-menu {
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          color: var(--text-secondary);
          transition: all 0.2s;
        }

        .nav-item:hover {
          background-color: var(--background-color);
          color: var(--primary-color);
        }

        .nav-item.active {
          background-color: #eff6ff;
          color: var(--primary-color);
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
