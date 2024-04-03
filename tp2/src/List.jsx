import React from 'react';
import { v4 as uuid } from 'uuid';
// import { plantList } from './List';

import Accordion from './Accordion';
const unique_id = uuid();
// const small_id = unique_id.slice(0, 8);

// La méthode JavaScript map() passe sur chaque élément d'un tableau.
// Il applique une fonction et renvoie un nouveau tableau contenant
// les résultats de cette fonction appliquée à chaque élément.

const listeTache = [
    {
    nom: 'Application Web',
    HeadID: 'headingOne',
    img:<img src="../logoappweb.svg" alt="logo" style={{ height: "60px" }} />,
    dataTarget: "#collapseOne",
    ariaControls: "collapseOne",
    button:<button type="button" class ='btn btn-outline-info'>Ajouter une tâche</button>
    },
    {
    nom:"Base de données",
    HeadID: 'headingTwo',
    img:<img src="../logobd.avif" alt="logo" style={{ height: "80px" }} />,
    dataTarget: "#collapseTwo",
    ariaControls: "collapseTwo",
    button:<button type="button" class ='btn btn-outline-info'>Ajouter une tâche</button>
    },
    {
    nom: 'Programmation Objet-Orienté',
    HeadID: 'headingThree',
    img:   <img src="../logobd.avif" alt="logo" style={{ height: "80px" }} />,
    dataTarget: "#collapseThree",
    ariaControls: "collapseThree",
    button:<button type="button" class ='btn btn-outline-info'>Ajouter une tâche</button>
    },
    ]

function ShoppingList() {
    return (
        
            {listeTache.map((dynamicList) => (
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id={dynamicList.HeadID}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={dynamicList.dataTarget} aria-expanded="true" aria-controls= {dynamicList.ariaControls}>
                 {dynamicList.img} {dynamicList.nom}
       </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby={dynamicList.HeadID} data-bs-parent="#accordionExample">
         <div>
            <p style={{textAlign:"center",backgroundColor:"blanchedalmond",padding:"5px 5px"}}>Mes Tâches à faire</p>
         </div>
      <div class="accordion-body">
       {dynamicList.button}
      </div>
    </div>
  </div>
    </div>
            
        ))}
    
    );
}

export default ShoppingList