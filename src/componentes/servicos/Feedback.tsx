import React, { useState } from "react";
import { sendFeedback } from "../ReqApis/ApiFeedback";

interface Feedback {
  userId: string;
  feedbackType: string;
  accessibilityText: string;
  optionsDaltonismo: string;
  grade: number;
}

const FeedbackForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [accessibilityText, setAccessibilityText] = useState("");
  const [optionsDaltonismo, setOptionsDaltonismo] = useState("");
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const newFeedback: Feedback = {
      userId: email, // Using the email directly as userId
      feedbackType,
      accessibilityText,
      optionsDaltonismo,
      grade,
    };

    try {
      await sendFeedback(newFeedback);

      setEmail("");
      setFeedbackType("");
      setAccessibilityText("");
      setOptionsDaltonismo("");
      setGrade(0);
      setSuccess(true);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setError("Erro ao enviar feedback.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <br />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Conte um pouco sobre sua experiência na Salesforce</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedbackType" className="block text-gray-700">Tipo de feedbak (Positivo ou Negativo)</label>
            <input
              type="text"
              id="feedbackType"
              name="feedbackType"
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accessibilityText" className="block text-gray-700">Tem alguma sugestão? (opcional)</label>
            <input
              type="text"
              id="accessibilityText"
              name="accessibilityText"
              value={accessibilityText}
              onChange={(e) => setAccessibilityText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="optionsDaltonismo" className="block text-gray-700">Você possui daltonismo? Se sim, informe qual (opcional)</label>
            <select
              id="optionsDaltonismo"
              name="optionsDaltonismo"
              value={optionsDaltonismo}
              onChange={(e) => setOptionsDaltonismo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Selecione...</option>
              <option value="monocromatico">Monocromático</option>
              <option value="dicromatico">Dicromático</option>
              <option value="tricromatico">Tricromático</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-gray-700">Avalie sua experiência (0 a 10)</label>
            <input
              type="number"
              id="grade"
              name="grade"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
              min="0"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">Obrigado pela colaboração!</div>}
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
          >
            Enviar Feedback
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default FeedbackForm;
