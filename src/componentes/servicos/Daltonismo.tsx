import React, { useState } from "react";
import imagemDaltonismo from "../../assets/imagem2.png";
import "./styles.css"; 

const Daltonismo: React.FC = () => {
    const [, setDaltonismo] = useState<string | null>(null);

    const aplicarPaleta = (tipoDaltonismo: string) => {
        document.documentElement.classList.remove("monocromatico", "dicromatico", "tricromatico");
        document.documentElement.classList.add(tipoDaltonismo);
        if (tipoDaltonismo === "monocromatico") {
            document.body.classList.add("monocromatico");
        } else {
            document.body.classList.remove("monocromatico");
        }
        setDaltonismo(tipoDaltonismo);
    };

    const restaurarPaleta = () => {
        document.documentElement.classList.remove("monocromatico", "dicromatico", "tricromatico");
        document.body.classList.remove("monocromatico");
        setDaltonismo(null);
    };

    return(
        <div className="flex flex-col items-center">
            <br/>
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Nova Função: Daltonismo</h2>
                <p className="text-lg text-center text-gray-800 mb-8">Torne seu site mais inclusivo com a opção de alternar entre três paletas de cores adaptadas para diferentes tipos de daltonismo: monocromático, dicromático e tricromático. Esta funcionalidade personalizada visa atender às necessidades visuais específicas dos usuários, promovendo uma experiência online acessível e equitativa.</p>
            </div>
            
            <div className="flex justify-center mb-8">
                <img src={imagemDaltonismo} alt="Imagem Daltonismo" className="w-64 h-64 object-cover" />
            </div>
            
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => aplicarPaleta("monocromatico")}>Monocromático</button>
                <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => aplicarPaleta("dicromatico")}>Dicromático</button>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 w-36" onClick={() => aplicarPaleta("tricromatico")}>Tricromático</button>
            </div>
            <br/>

            <div className="flex justify-center">
                <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded w-36" onClick={restaurarPaleta}>Restaurar</button>
            </div>
        </div>
    )
}

export default Daltonismo;
