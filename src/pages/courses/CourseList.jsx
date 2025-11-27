import React from 'react';
import { Search, Filter, BookOpen, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const CourseList = () => {
  const { isProfessor, isAdmin } = useAuth();
  const canEdit = isProfessor || isAdmin;

  const courses = [
    {
      id: 1,
      title: 'Metodologias Ativas na Prática',
      category: 'Pedagogia',
      duration: '40h',
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=400',
      description: 'Aprenda a implementar metodologias ativas em sala de aula.'
    },
    {
      id: 2,
      title: 'Inclusão Escolar e Diversidade',
      category: 'Educação Especial',
      duration: '60h',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
      description: 'Estratégias para promover a inclusão escolar efetiva.'
    },
    {
      id: 3,
      title: 'Tecnologias Digitais na Educação',
      category: 'Tecnologia',
      duration: '30h',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
      description: 'Ferramentas digitais para potencializar o ensino.'
    }
  ];

  return (
    <div className="course-list-page">
      <div className="page-header">
        <h1 className="page-title">Catálogo de Cursos</h1>
        <div className="filters">
          <div className="search-input">
            <Search size={20} />
            <input type="text" placeholder="Buscar cursos..." />
          </div>
          <button className="filter-btn">
            <Filter size={20} />
            Filtrar
          </button>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className="course-card">
            <div className="card-image-wrapper">
              <img src={course.image} alt={course.title} />
              <span className="category-badge">{course.category}</span>
            </div>
            <div className="card-content">
              <div className="card-header-flex">
                <h3>{course.title}</h3>
                {canEdit && (
                  <button className="edit-btn" onClick={(e) => {
                    e.preventDefault();
                    // Handle edit
                  }}>
                    <Edit size={16} />
                  </button>
                )}
              </div>
              <p>{course.description}</p>
              <div className="card-footer">
                <span className="duration">
                  <BookOpen size={16} />
                  {course.duration}
                </span>
                <span className="enroll-link">Saiba mais →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .filters {
          display: flex;
          gap: 1rem;
        }

        .search-input {
          display: flex;
          align-items: center;
          background-color: var(--surface-color);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          gap: 0.5rem;
          width: 300px;
        }

        .search-input input {
          border: none;
          outline: none;
          width: 100%;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          color: var(--text-secondary);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background-color: var(--surface-color);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
        }

        .course-card:hover {
          transform: translateY(-4px);
        }

        .card-image-wrapper {
          position: relative;
          height: 200px;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .card-header-flex h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .edit-btn {
          padding: 0.25rem;
          color: var(--text-secondary);
          border-radius: 0.25rem;
        }

        .edit-btn:hover {
          background-color: var(--background-color);
          color: var(--primary-color);
        }

        .card-content p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .enroll-link {
          color: var(--primary-color);
          font-weight: 500;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default CourseList;
