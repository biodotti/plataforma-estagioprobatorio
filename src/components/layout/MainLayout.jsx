import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                <main className="page-content">
                    <Outlet />
                </main>
            </div>

            <style>{`
        .layout {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          margin-left: 260px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .page-content {
          padding: 2rem;
          flex: 1;
        }
      `}</style>
        </div>
    );
};

export default MainLayout;
