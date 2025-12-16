// Groq API Integration for Documentation Search
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const getSearchResponse = async (userQuery) => {
    try {
        const response = await fetch(GROQ_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `Você é um assistente especializado em documentação educacional da Secretaria de Educação do Paraná (SEED-PR).
            
Sua função é:
1. Analisar a pergunta do usuário
2. Identificar qual documentação oficial é mais relevante
3. Sugerir o link correto
4. Oferecer navegação assistida

Quando responder, use este formato:
📚 **Documentação Relevante**: [Nome do documento]
🔗 **Link**: [URL completo]
📝 **Resumo**: [Breve explicação do que o usuário encontrará]

Ao final, SEMPRE pergunte: "Quer que eu te leve até o local que você está precisando?"`
                    },
                    {
                        role: "user",
                        content: userQuery
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            throw new Error(`Groq API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Error calling Groq API:", error);
        return "Desculpe, estou tendo dificuldades para processar sua busca no momento. Por favor, tente novamente.";
    }
};
