import axios from "axios";

const API_URL = "http://localhost:3001";

export const sendFeedback = async (feedback: any) => {
  try {
    const response = await axios.post(`${API_URL}/feedbackAcessibility`, feedback);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar feedback:", error);
    throw error;
  }
};
