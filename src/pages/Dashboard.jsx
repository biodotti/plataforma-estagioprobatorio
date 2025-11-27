import React from 'react';
import { PlayCircle, Clock, Award } from 'lucide-react';

const Dashboard = () => {
    const recentCourses = [
        {
            id: 1,
            title: 'Metodologias Ativas na Prática',
            progress: 75,
            lastAccessed: '2 horas atrás',
            image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 2,
            title: 'Inclusão Escolar e Diversidade',
            progress: 30,
            lastAccessed: '1 dia atrás',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400'
        }
    ];

    return (
        <div className="dashboard">
            <h1 className="page-title">Bem-vindo de volta, Professor(a)!</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon bg-blue">
                        <PlayCircle size={24} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">4</span>
                        <span className="stat-label">Cursos em Andamento</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-green">
                        <Award size={24} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">12</span>
                        <span className="stat-label">Certificados</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-orange">
                        <Clock size={24} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">32h</span>
                        <span className="stat-label">Horas Estudadas</span>
                    </div>
                </div>
            </div>

            <section className="recent-section">
                <h2 className="section-title">Continue Estudando</h2>
                <div className="course-grid">
                    {recentCourses.map(course => (
                        <div key={course.id} className="course-card">
                            <img src={course.image} alt={course.title} className="course-image" />
                            <div className="course-content">
                                <h3 className="course-title">{course.title}</h3>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                                <div className="course-meta">
                                    <span>{course.progress}% concluído</span>
                                    <span>{course.lastAccessed}</span>
                                </div>
                                <button className="btn btn-primary continue-btn">
                                    Continuar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background-color: var(--surface-color);
          padding: 1.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .bg-blue { background-color: var(--primary-color); }
        .bg-green { background-color: var(--success-color); }
        .bg-orange { background-color: var(--warning-color); }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .course-card {
          background-color: var(--surface-color);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .course-card:hover {
          transform: translateY(-4px);
        }

        .course-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .course-content {
          padding: 1.5rem;
        }

        .course-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .progress-bar {
          height: 8px;
          background-color: var(--border-color);
          border-radius: 4px;
          margin-bottom: 0.75rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: var(--success-color);
          border-radius: 4px;
        }

        .course-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .continue-btn {
          width: 100%;
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
