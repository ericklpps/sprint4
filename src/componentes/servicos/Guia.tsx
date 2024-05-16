import React, { useState } from "react";

const Guia: React.FC = () =>{
    const [vozAtivada, setVozAtivada] = useState(false);
    const [leitorImagemAtivado, setLeitorImagemAtivado] = useState(false);

    return(
        <div className="flex justify-center items-center">
            <div className="mr-4">
                <p className="font-bold text-xl">Integre acessibilidade ao seu site com um "Guia de Voz" para navegação auditiva e um "Leitor de Imagem" para descrições automáticas. Essas ferramentas beneficiam usuários com deficiência visual, tornando o conteúdo auditivo e as imagens descritas. Demonstre compromisso com a inclusão digital, oferecendo uma experiência acessível a todos os visitantes.</p>
                <div>
                    <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded mr-4">Guia de Voz</button>
                    <label className="switch">
                        <input type="checkbox" checked={vozAtivada} onChange={() => setVozAtivada(!vozAtivada)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded">Leitor de Imagem</button>
                    <label className="switch">
                        <input type="checkbox" checked={leitorImagemAtivado} onChange={() => setLeitorImagemAtivado(!leitorImagemAtivado)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <img src="imagem4.webp" alt="Albert Einstein mascote da salesforce" />
        </div>
    )
}
export default Guia;
