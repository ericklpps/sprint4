import React, { useState } from "react";

const Daltonismo: React.FC = () =>{
    const [vozAtivada, setVozAtivada] = useState(false);
    const [leitorImagemAtivado, setLeitorImagemAtivado] = useState(false);

    return(
        <div className="flex justify-center items-center">
            <div className="mr-4">
                <p className="font-bold text-xl">Torne seu site mais inclusivo com a opção de alternar entre três paletas de cores adaptadas para diferentes tipos de daltonismo: monocromático, dicromático e tricromático. Esta funcionalidade personalizada visa atender às necessidades visuais específicas dos usuários, promovendo uma experiência online acessível e equitativa.</p>
                <br/>
                <div>
                    <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded mr-4">Monocromático</button>
                    <label className="switch">
                        <input type="checkbox" checked={vozAtivada} onChange={() => setVozAtivada(!vozAtivada)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <br/>
                <div>
                    <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded"> Dicromático</button>
                    <label className="switch">
                        <input type="checkbox" checked={leitorImagemAtivado} onChange={() => setLeitorImagemAtivado(!leitorImagemAtivado)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <br/>
                <div>
                    <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded mr-4 ">Tri cromático</button>
                    <label className="switch">
                        <input type="checkbox" checked={vozAtivada} onChange={() => setVozAtivada(!vozAtivada)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <img src="imagem5.png" alt=" mascote da salesforce" width="700" height="200" />
        </div>
    )
}
export default Daltonismo;
