import React from "react";
import { Link } from "react-router-dom";

import imagem1 from "../../assets/imagem1.webp";
import imagem2 from "../../assets/imagem2.png";
import imagem3 from "../../assets/imagem3.webp";

const Inicio: React.FC = () => {
    return (
        <>
            <div className="bg-white-200 p-4">
                <div className="flex justify-center items-center">
                    <div className="mr-4">
                        <p className="font-bold text-xl text-center">Entregue sucesso agora <br />com o Salesforce Customer 360.</p>
                        <p className="text-center">O Customer 360 é a nossa suíte de produtos e serviços que ajuda <br />98% dos clientes a alcançar ou superar suas metas de ROI.</p>
                    </div>
                    <img src={imagem1} alt="Imagem 1" width="200" height="200" className="text-center" />
                </div>
            </div>
            <div className="bg-white-500 p-4 flex justify-center space-x-4">
                <Link to="/Guia" className="bg-blue-500 text-black font-bold py-2 px-4 rounded text-center">Faça o teste grátis</Link>
                <Link to="/Daltonismo" className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded text-center">Saiba mais</Link>
            </div>
            <br />
            <main className="flex-grow bg-white-500">
                <h2 className="text-lg font-bold text-center">O que há de novo na Salesforce?</h2>
                <div className="flex justify-center space-x-4">
                    <div className="funcoes-section">
                    </div>
                    <div className="funcoes-section">
                        <h2 className="text-white font-bold text-lg mb-4 text-center">Nova função: Daltonismo</h2>
                        <div className="table-container">
                            <table className="table" style={{ border: '2px solid black', borderRadius: '10px' }}>
                                <tbody>
                                    <tr>
                                        <td className="image-cell" align="center">
                                            <img src={imagem2} alt="Daltonismo" width="200" height="200" className="text-center" />
                                            <br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <Link to="/Daltonismo" className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mb-2 text-center">Nova função: Daltonismo</Link>
                                            <br />
                                            <br/>
                                            <p className="text-center mb-4">Nova ferramenta onde o usuário pode <br />escolher a paleta de cores do site<br /> adaptada para os tipos de daltonismo.</p>
                                            <br />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br />
            </main>
        </>
    );
}

export default Inicio;
