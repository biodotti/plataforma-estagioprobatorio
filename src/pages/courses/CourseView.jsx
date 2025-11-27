import React from 'react';
import { Play, FileText, CheckCircle } from 'lucide-react';

const CourseView = () => {
    return (
        <div className="course-view">
            <div className="video-section">
                <div className="video-player">
                    <div className="placeholder-video">
                        <Play size={48} />
                        <span>Vídeo da Aula</span>
                    </div>
                </div>
                <div className="lesson-info">
                    <h1>Aula 1: Introdução às Metodologias Ativas</h1>
                    <p>
                        Nesta aula, vamos explorar os conceitos fundamentais das metodologias ativas
                        e como elas podem transformar o ambiente de sala de aula.
                    </p>
                </div>
            </div>

            <div className="playlist-section">
                <div className="playlist-header">
                    <h2>Conteúdo do Curso</h2>
                    <span className="progress-text">25% concluído</span>
                </div>

                <div className="module-list">
                    <div className="module-item active">
                        <div className="module-header">
                            <span className="module-number">01</span>
                            <div className="module-content">
                                <h3>Fundamentos</h3>
                                <span className="duration">45 min</span>
                            </div>
                            <CheckCircle size={20} className="completed-icon" />
                        </div>
                    </div>

                    <div className="module-item">
                        <div className="module-header">
                            <span className="module-number">02</span>
                            <div className="module-content">
                                <h3>Sala de Aula Invertida</h3>
                                <span className="duration">60 min</span>
                            </div>
                            <div className="status-icon"></div>
                        </div>
                    </div>

                    <div className="module-item">
                        <div className="module-header">
                            <span className="module-number">03</span>
                            <div className="module-content">
                                <h3>Gamificação</h3>
                                <span className="duration">55 min</span>
                            </div>
                            <div className="status-icon"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .course-view {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
          height: calc(100vh - 140px);
        }

        .video-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .video-player {
          width: 100%;
          aspect-ratio: 16/9;
          background-color: #000;
          border-radius: 1rem;
          overflow: hidden;
        }

        .placeholder-video {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          gap: 1rem;
          background: linear-gradient(45deg, #1e293b, #0f172a);
        }

        .lesson-info h1 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .lesson-info p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .playlist-section {
          background-color: var(--surface-color);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .playlist-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .playlist-header h2 {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .progress-text {
          font-size: 0.875rem;
          color: var(--primary-color);
          font-weight: 500;
        }

        .module-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
        }

        .module-item {
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: all 0.2s;
        }

        .module-item:hover {
          background-color: var(--background-color);
        }

        .module-item.active {
          background-color: #eff6ff;
          border-color: var(--primary-color);
        }

        .module-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .module-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--border-color);
        }

        .module-item.active .module-number {
          color: var(--primary-color);
        }

        .module-content {
          flex: 1;
        }

        .module-content h3 {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .duration {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .completed-icon {
          color: var(--success-color);
        }
      `}</style>
        </div>
    );
};

export default CourseView;
