import React, { useState } from "react";
import imagemGuia from "../../assets/imagem4.webp"; // Ajuste o caminho se necessário

const Guia: React.FC = () => {
    const [vozAtivada, setVozAtivada] = useState(false);
    const [leitorImagemAtivado, setLeitorImagemAtivado] = useState(false);

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex flex-col items-center mb-8 w-full">
                <h2 className="text-4xl font-bold mb-4">Nova Função: Guia</h2>
                <p className="text-lg text-center text-gray-800 mb-8">Integre acessibilidade ao seu site com um "Guia de Voz" para navegação auditiva e um "Leitor de Imagem" para descrições automáticas. Essas ferramentas beneficiam usuários com deficiência visual, tornando o conteúdo auditivo e as imagens descritas. Demonstre compromisso com a inclusão digital, oferecendo uma experiência acessível a todos os visitantes.</p>
            </div>
            <div className="flex justify-center mb-8">
                <img src={imagemGuia} alt="Albert Einstein mascote da salesforce" className="w-64 h-64 object-cover" />
            </div>
            <div className="flex justify-center mb-8">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => setVozAtivada(!vozAtivada)}>Guia de Voz</button>
                <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => setLeitorImagemAtivado(!leitorImagemAtivado)}>Leitor de Imagem</button>
            </div>
        </div>
    );
};

export default Guia;
