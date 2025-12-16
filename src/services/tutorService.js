import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
// Note: In a real production app, this key should be in an environment variable
// and potentially proxied through a backend to avoid exposure.
const API_KEY = "AIzaSyBcV6U6fWHaMExT9QbsTPjel7M5IaxlP-s";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getTutorResponse = async (userMessage) => {
    try {
        // Using gemini-1.5-flash as requested (fastest and most cost-effective)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
      Você é um Tutor Inteligente especializado em pedagogia e formação de professores.
      Seu objetivo é auxiliar professores da rede estadual do Paraná.
      Seja cordial, encorajador e baseie suas respostas em metodologias ativas e práticas pedagógicas modernas.
      
      Pergunta do professor: ${userMessage}
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Desculpe, estou tendo dificuldades para processar sua solicitação no momento. Verifique se a chave da API está correta e se o modelo gemini-1.5-flash está disponível.";
    }
};
