import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function Accordion() {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <img src="../logoappweb.svg" alt="logo" style={{ height: "60px" }} />
                        Application Web
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={{ backgroundColor: "blanchedalmond" }}>
                        <strong>Mes  tâches à faire</strong>
                        <div >
                            <button style={{ backgroundColor: "orange" }}>Ajout de Tâches</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">

                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <img src="../logobd.avif" alt="logo" style={{ height: "80px" }} />
                        Base de données
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={{ backgroundColor: "blanchedalmond" }}>
                        <strong>Mes tâches à faire</strong>
                    </div>
                    <button style={{ backgroundColor: "orange" }}>Ajout de Tâches</button>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <img src="../logoOOP.webp" alt="logo" style={{ height: "60px" }} />
                        Programmation Objet-Orienté
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={{ backgroundColor: "blanchedalmond" }}>
                        <strong>Mes tâches à faire</strong>
                    </div>
                    <button style={{ backgroundColor: "orange" }}>Ajout de Tâches</button>
                </div>
            </div>
        </div>


    );

} export default Accordion