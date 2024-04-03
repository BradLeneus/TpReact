import React from 'react';
import { v4 as uuid } from 'uuid';
// import { plantList } from './List';
import { plantList2 } from './plantList2';
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
    name: 'Programmation Objet-Orienté',
    HeadID: 'headingThree',
    img:   <img src="../logobd.avif" alt="logo" style={{ height: "80px" }} />,
    dataTarget: "#collapseThree",
    ariaControls: "collapseThree",
    button:<button type="button" class ='btn btn-outline-info'>Ajouter une tâche</button>
    },
    ]

function ShoppingList() {
    return (
        <ul>
            {plantList2.map((dynamicList) => (
            <li key={Accordion.id} style={{backgroundColor:"red", margin:"10px"}}>
                {Accordion.name}
                {a.isBestSale ? <span>🔥</span> : <span>👎</span>}
            </li>
        ))}
        </ul>
    )
}

export default ShoppingList