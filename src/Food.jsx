import React from "react";
import { useParams, Link } from "react-router-dom";

function Food() {

const params = useParams();

  return (
    <>
        <h1>Here's a { params.foodName }!</h1>
        <br />
        <Link to="/" >
        Go Back
        </Link>
    </>
  )
}

export default Food;
