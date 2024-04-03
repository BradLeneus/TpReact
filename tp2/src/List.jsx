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

const plantList2 = [
    {
    name: 'Monstera',
    category: 'Classic',
    id: {unique_id},
    isBestSale: true
    },
    {
    name: 'Ficus Lyrata',
    category: 'Classic',
    id: {unique_id},
    isBestSale: false
    },
    {
    name: 'Silver Pothos',
    category: 'Classic',
    id: {unique_id},
    isBestSale: true
    },
    {
    name: 'Yucca',
    category: 'Classic',
    id: {unique_id},
    isBestSale: true
    },
    ]

function ShoppingList() {
    return (
        <ul>
            {plantList2.map((Accordion) => (
            <li key={Accordion.id} style={{backgroundColor:"red", margin:"10px"}}>
                {Accordion.name}
                {a.isBestSale ? <span>🔥</span> : <span>👎</span>}
            </li>
        ))}
        </ul>
    )
}

export default ShoppingList