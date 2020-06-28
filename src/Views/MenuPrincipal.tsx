import React from 'react';

export default function MenuPrincipal() {
    return (
        <div>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item dropdown"}>
                        <a className={"nav-link dropdown-toggle"} href={"#"} data-toggle={"dropdown"}>
                            Galeria de Imagens
                        </a>
                        <div className={"dropdown-menu"}>
                            <a className={"dropdown-item"} href={'https://github.com/Joao-PauloTI/galeria_imagens'}
                               target={'_blank'}>
                                GitHub do Projeto
                            </a>
                            <a className="dropdown-item" href={'https://pixabay.com/api/docs/'} target={'_blank'}>
                                Pixabay Api
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
