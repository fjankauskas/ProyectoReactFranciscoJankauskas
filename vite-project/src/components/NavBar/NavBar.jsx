import React from "react";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <a className="navbar-brand" href="#">GuitarsPro</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Catalogo</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><CartWidget/></a>
            </li>
        </ul>
    </div>
</div>
</nav>
    );
}
export default NavBar;





// /* <header>
// <a href="#"></a>
// <div className="menu">
//     <nav>
//         <ul className="nav">
//             <li><a href="#">Cuenta</a></li> 
//             <h2 className="titulo2">TITULO</h2>
//             <form action=""></form>
//             <li><a href="#">Inicio</a></li>
//             <li><a href="#">Guitarras</a></li>
//             <li><a href="#">Contactanos</a></li>
//         </ul>
//     </nav>
// </div>
// </header> */