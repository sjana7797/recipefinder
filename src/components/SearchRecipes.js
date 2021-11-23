import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import { setRecipes } from "../redux/actions";

import {
  Form,
  FormControl,
  FormGroup,
  Button,
  FormLabel,
  Col,
} from "react-bootstrap";

import { api, apiCust } from "../resources/api";

function SearchRecipes(props) {
  const [ingredients, setIngredients] = useState("");

  const searchRecipe = () => {
    let searchQuery = `${api}${ingredients}${apiCust}`;
    //console.log(searchQuery);
    fetch(searchQuery, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => props.setRecipes(json.hits));
  };
  return (
    <Fragment>
      <Form className="p-2 mt-4">
        <FormGroup className="p-1">
          <FormLabel className="fw-bold">Ingredients</FormLabel>
          <Col md={4} className="mx-auto">
            <FormControl
              type="text"
              placeholder="garlic,chicken"
              onChange={(event) => {
                setIngredients(event.target.value);
              }}
            />
          </Col>
        </FormGroup>
        {
          // <FormGroup className="d-inline-flex align-items-center p-1">
          //   <FormLabel className="me-2 fw-bold">Dish</FormLabel>
          //   <FormControl type="text" placeholder="adobo" />
          // </FormGroup>
        }
        <Button
          variant="outline-dark"
          className="px-3 ms-2 my-2"
          onClick={searchRecipe}
        >
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}

export default connect(null, { setRecipes })(SearchRecipes);
