import CardWidget from "../CartWidget/CardWidget";
import "./NavBar.css";

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary navColor">
    <div className="container-fluid ">
        <a className="navbar-brand amarillo" href="#">McPizza</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse posicion" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active " aria-current="page" href="#">Reserva</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Contactanos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Ubicación</a>
                </li>
                <li className="nav-item">
                    <CardWidget amount={0} />
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}


//! DIFF manera de crear un componente. no se puede usar el "export default" con 'Const'
// const NavBar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>HOME</li>
//                 <li>ABOUT</li>
//                 <li>CONTACT</li>
//             </ul>
//         </nav>
//     )
// }

// export default NavBar