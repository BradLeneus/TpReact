import React from "react";
import {v4 as uuid} from "uuid";


const unique_id = uuid();


const plantList2 = [

    {
        name :"Bradley",
        category:"Classic",
        id : {unique_id},
        isBestSale:true
    },
    {
        name :" Nike ",
        category:"Shoes",
        id : {unique_id},
        isBestSale:false
    },

    {
        name :" Adidas ",
        category:"Shoes",
        id : {unique_id},
        isBestSale:false

    }
]

function ShoppingList() {
    return (
    <ul>
        {plantList2.map((plant)=> (
      <li key={plant.id} style={{backgroundColor : "orange" , margin : "10px"}}>
         {plant.name}
         {plant.isBestSale ? <span> 🔥 </span> : <span> 👎 </span>}
            </li>
         
 
        ))}
 
    </ul>
    )
}export default ShoppingList