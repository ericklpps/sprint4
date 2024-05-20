
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Daltonismo from "./componentes/servicos/Daltonismo";
import Inicio from "./componentes/servicos/Inicio";
import NaoEncontrado from "./componentes/servicos/PNF";
import Login from "./componentes/servicos/Login";
import Cadastro from "./componentes/servicos/Cadastro";
import FeedbackForm from "./componentes/servicos/Feedback";
import GerenciarUsuarios from "./componentes/servicos/GerenciarUsuario";
 

function App() {
    return (
        <Router>
            <div>
                <header className="bg-white text-gray-800 p-4 rounded shadow-md">
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <img src="/logosalesforce.png" alt="Logo Salesforce" className="h-12 w-auto mr-2" />
                        </div>
                <nav>
                    <ul className="flex space-x-4 p-3" style={{ fontSize: '1.1rem' }}>
                        <li className="mr-4"><Link to='/' className="hover:text-blue-500">Inicio</Link></li>
                        <li className="mr-4"><Link to='/Daltonismo' className="hover:text-blue-500">Daltonismo</Link></li>
                        <li className="mr-4"><Link to='/Login' className="hover:text-blue-500">Login</Link></li>
                        <li className="mr-4"><Link to='/Cadastro' className="hover:text-blue-500">Cadastre-se</Link></li>
                        <li className="mr-4"><Link to='/Feedback' className="hover:text-blue-500">Feedback</Link></li>
                        <li className="mr-4"><Link to='/GerenciarUsuario'>Listar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/Daltonismo' element={<Daltonismo/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Cadastro' element={<Cadastro/>}/>
                    <Route path='/Feedback' element={<FeedbackForm/>}/>
                    <Route path="/GerenciarUsuario" element={<GerenciarUsuarios/>}/>
                    <Route path="*" element={<NaoEncontrado/>}/>
                </Routes>
                <hr/>
                <div id='final' className="text-center">
                    <footer className="bg-blue-500 text-white p-4">
                        <p>Salesforce</p>
                        <p className="mb-2">&#169;Todos os direitos reservados</p>
                        <p>Erick Lopes Silva RM - 553927, Gabriel Sá Bragança RM - 554064, Gustavo Henrique Camacho Dos Santos RM - 554184</p>
                        <p>https://github.com/ericklpps/sprint4</p>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default App;
