import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
// Note: In a real production app, this key should be in an environment variable
// and potentially proxied through a backend to avoid exposure.
const API_KEY = "YOUR_GEMINI_API_KEY";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getTutorResponse = async (userMessage) => {
    try {
        // For now, we'll use a mock response if no key is provided to prevent errors
        if (API_KEY === "YOUR_GEMINI_API_KEY") {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
            return "Estou funcionando em modo de demonstração. Para me conectar ao Gemini, adicione sua chave de API no arquivo TutorService.js. Mas posso te dizer que sua pergunta sobre '" + userMessage + "' é muito interessante!";
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
        return "Desculpe, estou tendo dificuldades para processar sua solicitação no momento.";
    }
};
