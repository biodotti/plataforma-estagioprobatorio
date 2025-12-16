import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { getSearchResponse } from '../services/searchService';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        const result = await getSearchResponse(query);
        setResponse(result);
        setLoading(false);
    };

    const handleNavigate = () => {
        // Extract URL from response and open in new tab
        const urlMatch = response.match(/https?:\/\/[^\s]+/);
        if (urlMatch) {
            window.open(urlMatch[0], '_blank');
        }
    };

    return (
        <div className="search-page">
            <div className="search-container">
                <img
                    src="https://www.educacao.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2025-07/estagio-probatorio690x311.png"
                    alt="SEED-PR"
                    className="seed-logo"
                />

                <h1 className="search-title">
                    <Sparkles size={32} className="sparkle-icon" />
                    Assistente de Documentação SEED-PR
                </h1>

                <form onSubmit={handleSearch} className="search-form">
                    <div className="search-input-wrapper">
                        <Search size={24} className="search-icon" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Busque por documentação, referenciais, orientações..."
                            className="search-input"
                            disabled={loading}
                        />
                    </div>
                    <button type="submit" className="search-button" disabled={loading}>
                        {loading ? 'Buscando...' : 'Buscar'}
                    </button>
                </form>

                {response && (
                    <div className="response-card">
                        <div className="response-content" dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }} />
                        {response.includes('http') && (
                            <button onClick={handleNavigate} className="navigate-button">
                                🚀 Levar-me até lá
                            </button>
                        )}
                    </div>
                )}
            </div>

            <style>{`
        .search-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .search-container {
          max-width: 800px;
          width: 100%;
          text-align: center;
        }

        .seed-logo {
          max-width: 400px;
          width: 100%;
          margin-bottom: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .search-title {
          color: white;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .sparkle-icon {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .search-form {
          background: white;
          border-radius: 3rem;
          padding: 0.5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          display: flex;
          gap: 0.5rem;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          gap: 1rem;
        }

        .search-icon {
          color: var(--text-secondary);
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1.125rem;
          padding: 1rem 0;
        }

        .search-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .search-button:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .search-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .response-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          margin-top: 2rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          text-align: left;
        }

        .response-content {
          color: var(--text-primary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .navigate-button {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          width: 100%;
          transition: transform 0.2s;
        }

        .navigate-button:hover {
          transform: scale(1.02);
        }
      `}</style>
        </div>
    );
};

export default SearchPage;
