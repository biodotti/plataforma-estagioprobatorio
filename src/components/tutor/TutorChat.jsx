import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { getTutorResponse } from '../../services/tutorService';

const TutorChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: 'Olá! Sou seu Tutor Inteligente. Como posso ajudar você em seus estudos hoje?'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), type: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await getTutorResponse(input);
            const botMessage = { id: Date.now() + 1, type: 'bot', text: response };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = {
                id: Date.now() + 1,
                type: 'bot',
                text: 'Desculpe, tive um problema ao processar sua pergunta. Tente novamente.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`tutor-widget ${isOpen ? 'open' : ''}`}>
            {!isOpen && (
                <button className="tutor-toggle" onClick={() => setIsOpen(true)}>
                    <Sparkles size={24} />
                    <span className="toggle-label">Tutor IA</span>
                </button>
            )}

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="header-info">
                            <Sparkles size={20} className="header-icon" />
                            <h3>Tutor Inteligente</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="close-btn">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="messages-area">
                        {messages.map(msg => (
                            <div key={msg.id} className={`message ${msg.type}`}>
                                <div className="message-bubble">
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot">
                                <div className="message-bubble typing">
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Digite sua dúvida..."
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading || !input.trim()}>
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        .tutor-widget {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 100;
          font-family: var(--font-family);
        }

        .tutor-toggle {
          background: linear-gradient(135deg, var(--primary-color), #4f46e5);
          color: white;
          border: none;
          border-radius: 2rem;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: transform 0.2s;
        }

        .tutor-toggle:hover {
          transform: translateY(-2px);
        }

        .toggle-label {
          font-weight: 600;
          font-size: 1rem;
        }

        .chat-window {
          width: 380px;
          height: 600px;
          background-color: var(--surface-color);
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .chat-header {
          background: linear-gradient(135deg, var(--primary-color), #4f46e5);
          padding: 1rem;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-info h3 {
          font-size: 1rem;
          font-weight: 600;
        }

        .close-btn {
          color: white;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .close-btn:hover {
          opacity: 1;
        }

        .messages-area {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: #f8fafc;
        }

        .message {
          display: flex;
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.bot {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 80%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          font-size: 0.9375rem;
          line-height: 1.5;
        }

        .message.user .message-bubble {
          background-color: var(--primary-color);
          color: white;
          border-bottom-right-radius: 0.25rem;
        }

        .message.bot .message-bubble {
          background-color: white;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-bottom-left-radius: 0.25rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .input-area {
          padding: 1rem;
          background-color: white;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 0.5rem;
        }

        .input-area input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          outline: none;
          font-family: inherit;
        }

        .input-area input:focus {
          border-color: var(--primary-color);
        }

        .input-area button {
          background-color: var(--primary-color);
          color: white;
          width: 42px;
          height: 42px;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .input-area button:disabled {
          background-color: var(--secondary-color);
          cursor: not-allowed;
        }

        .typing span {
          animation: typing 1.4s infinite ease-in-out both;
          margin: 0 2px;
          display: inline-block;
          width: 4px;
          height: 4px;
          background-color: var(--text-secondary);
          border-radius: 50%;
        }

        .typing span:nth-child(1) { animation-delay: -0.32s; }
        .typing span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
        </div>
    );
};

export default TutorChat;
