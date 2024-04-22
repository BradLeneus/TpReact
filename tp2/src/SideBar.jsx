import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function SideBar() {
    const [courriel, setCourriel] = useState();
    const [annee, setannee] = useState();
    const [specialisation, setspecialisation] = useState();

    useEffect(() => {
        if (courriel && annee && specialisation) {
            localStorage.setItem("email", JSON.stringify(courriel));
            localStorage.setItem("année", JSON.stringify(annee));
            localStorage.setItem("spécialisation", JSON.stringify(specialisation));
        } else {
            const emailreste = JSON.parse(localStorage.getItem("email"));
            const anneereste = JSON.parse(localStorage.getItem("année"));
            const specialisationreste = JSON.parse(localStorage.getItem("spécialisation"));
            if (emailreste && anneereste && specialisationreste) {
                setCourriel(emailreste);
                setannee(anneereste);
                setspecialisation(specialisationreste);
            }
        }
    }, [courriel, annee, specialisation])

    return (
        <div class="containerSidebar">
            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ backgroundColor: "orange", color: "black" }}>
                Profil
            </a>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header" style={{backgroundColor: "black",color:"White"}}>
                    <button type="button" style={{ backgroundColor: "orange" }}>📷</button>
                    <img src="./iconApp.webp" alt="logo" style={{ height: "70px", paddingRight: "20px" }} /> <span style={{ fontSize: "40px" }}>Taskify</span>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" style={{backgroundColor: "orange"}}> 
                    <div>
                        <span class="cercle" ></span>
                    </div>
                    <div>
                        <span style={{ fontSize: "30px" }}>Nom</span>
                    </div>
                    <div class="formContainer">
                        <form action="">
                            <div>
                                <label for="courriel">Courriel</label>
                                <input type="email" name="courriel" id="courriel" value={courriel} onChange={event => setCourriel(event.target.value)} placeholder="someone@example.com" />
                            </div>
                            <div>
                                <label for="specialite">Specialité</label>
                                <input type="text" name="specialite" id="specialite" value={specialisation} onChange={event => setspecialisation(event.target.value)}  placeholder='Entrez votre spécialité'/>
                            </div>
                            <div>
                                <label for="annee">Année de Scolarité</label>
                                <input type="text" name="annee" id="annee" value={annee} onChange={event  => setannee(event.target.value)} placeholder='Entrez votre Année' />
                            </div>
                        </form>
                    </div>
                    <button type="button" style={{ marginTop: "100px", backgroundColor: "orange" }}>Déconnexion</button>
                </div>
            </div>
        </div>
    );
}

export default SideBar