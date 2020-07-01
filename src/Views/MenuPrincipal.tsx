import React from 'react';

export default function MenuPrincipal() {
    return (
        <div style={{marginBottom: "1%"}}>
            <nav className={"navbar navbar-expand-sm navbar-dark"} style={{backgroundColor: "#343a40"}}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item dropdown"}>
                        <a className={"nav-link"} href={"#"} data-toggle={"dropdown"}>
                            <span className="navbar-toggler-icon"></span>
                        </a>
                        <div className={"dropdown-menu bg-dark"}>
                            <a className={"dropdown-item text-white bg-dark"} href={'https://github.com/Joao-PauloTI/galeria_imagens'}
                               target={'_blank'}>
                                GitHub do Projeto
                            </a>
                            <a className={"dropdown-item text-white bg-dark"} href={'https://pixabay.com/api/docs/'} target={'_blank'}>
                                Pixabay Api
                            </a>
                        </div>
                    </li>
                </ul>
                <a className="navbar-brand" href="/">Galeria de Imagens</a>
            </nav>
        </div>
    );
}
