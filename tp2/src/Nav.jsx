import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Accordion from './Accordion';

function Navbar() {
    return (

        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid" style={{ backgroundColor: "orange" }}>
                <img src="../iconApp.png" alt="logo" style={{ height: "70px" }} />
                <a class="navbar-brand" style={{height:"40px"}}>Taskify</a>
                <form class="d-flex">
                    <input style={{ backgroundColor: "white" }} class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" />
                    <button style={{ backgroundColor: "white" }} class="btn btn-outline-success" type="submit">Recherche</button>
                </form>
            </div>
        </nav>

    );

} export default Navbar