import React, { useState } from "react";
import imagemDaltonismo from "../../assets/imagem2.png";

const Daltonismo: React.FC = () =>{
    const [monocromatico, setMonocromatico] = useState(false);
    const [dicromatico, setDicromatico] = useState(false);
    const [tricromatico, setTricromatico] = useState(false);

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Nova Função: Daltonismo</h2>
                <p className="text-lg text-center text-gray-800 mb-8">Torne seu site mais inclusivo com a opção de alternar entre três paletas de cores adaptadas para diferentes tipos de daltonismo: monocromático, dicromático e tricromático. Esta funcionalidade personalizada visa atender às necessidades visuais específicas dos usuários, promovendo uma experiência online acessível e equitativa.</p>
            </div>
            
            <div className="flex justify-center mb-8">
                <img src={imagemDaltonismo} alt="Imagem Daltonismo" className="w-64 h-64 object-cover" />
            </div>
            
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => setMonocromatico(true)}>Monocromático</button>
                <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => setDicromatico(true)}>Dicromático</button>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => setTricromatico(true)}>Tricromático</button>
            </div>
        </div>
    )
}

export default Daltonismo;
