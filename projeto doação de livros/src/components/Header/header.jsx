import logo from '../../assets/logo.png'
import busca from '../../assets/busca.png'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import Sobre from "../../Pages/Sobre/Sobre"
import S from "./header.module.scss"



export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>

            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li className="dropdown">
                        <button className={`btn dropdown-toggle ${S.dropdownButton}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Navegar
                        </button>
                        <ul className={`dropdown-menu ${S.dropdownMenu}`}>
                            <li><Link className="dropdown-item" to="/doados">Livros doados</Link></li>
                            <li><Link className="dropdown-item" to="/queroDoar">Quero doar</Link></li>
                            <li><Link className="dropdown-item" to="/sobre">Sobre o projeto</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className={S.boxSearch}>
                <input className={S.boxInput} type="text" placeholder="O que você procura"/>
                <img src={busca} alt="imagem de uma lupa" /> 
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/queroDoar" element={<QueroDoar/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
        </BrowserRouter>
    )
}