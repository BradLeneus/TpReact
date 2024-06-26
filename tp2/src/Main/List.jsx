import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const listeTache = [
    {
    nom: 'Application Web',
    HeadID: 'headingOne',
    img:<img src="./logoappweb.png" alt="logo" style={{ height: "60px" }} />,
    dataTarget: "#collapseOne",
    ariaControls: "collapseOne",
    button:<button type="button" class ='btn btn-outline-info'  style={{backgroundColor:"orange",color:"beige"}}>Ajouter une tâche</button>,
    collapseID: "collapseOne"
    },
    {
    nom:"Base de données",
    HeadID: 'headingTwo',
    img:<img src="./logobd.png" alt="logo" style={{ height: "80px" }} />,
    dataTarget: "#collapseTwo",
    ariaControls: "collapseTwo",
    button:<button type="button" class ='btn btn-outline-info' style={{backgroundColor:"orange",color:"beige"}}>Ajouter une tâche</button>,
    collapseID: "collapseTwo"
    },
    {
    nom: 'Programmation Objet-Orienté',
    HeadID: 'headingThree',
    img:   <img src="./logoOOP.png" alt="logo" style={{ height: "60px" }} />,
    dataTarget: "#collapseThree",
    ariaControls: "collapseThree",
    button:<button type="button" class ='btn btn-outline-info' style={{backgroundColor:"orange",color:"beige"}}>Ajouter une tâche</button>,
    collapseID: "collapseThree"
    },
    ]

function Accordeon() {
    return (
        <div class="accordion" id="accordionExample">
            {listeTache.map((dynamicList) => (
                
  <div class="accordion-item">
    <h2 class="accordion-header" id={dynamicList.HeadID}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={dynamicList.dataTarget} aria-expanded="true" aria-controls= {dynamicList.ariaControls}>
                 {dynamicList.img} {dynamicList.nom}
       </button>
    </h2>
    <div id= {dynamicList.collapseID} class="accordion-collapse collapse" aria-labelledby={dynamicList.HeadID} data-bs-parent="#accordionExample">
         <div>
            <p style={{textAlign:"center",backgroundColor:"blanchedalmond",padding:"5px 5px"}}>Mes Tâches à faire</p>
         </div>
      <div class="accordion-body">
       {dynamicList.button}
      </div>
    </div>
  </div>
    
            
        ))}
    </div>
    );
}

export default Accordeon