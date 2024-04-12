import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {

  return (
    <>
        <Link to="/food/sandwich" >
        Sandwich
        </Link >
        <span>  - - - - - - -  </span>
        <Link to="/food/burrito" >
        Burrito
        </Link >
        <span>  - - - - - - -  </span>
        <Link to="/food/salad" >
        Salad
        </Link >
    </>
  )
}

export default VendingMachine;