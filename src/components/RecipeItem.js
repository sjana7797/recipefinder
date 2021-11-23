import React, { useState } from "react";

import { connect } from "react-redux";
import { favouriteRecipe } from "../redux/actions";

import { Accordion } from "react-bootstrap";

function RecipeItem(props) {
  let { recipe, favComponent } = props;
  const [isFav, setIsFav] = useState(false);
  let ingredients = String(
    recipe.ingredientLines.map((ingredient) => {
      return ` ${ingredient} `;
    })
  );

  ingredients = ingredients.substring(0, ingredients.length - 1);

  const favouriteRecipeItem = () => {
    props.favouriteRecipe(recipe);
    setIsFav(true);
  };
  return (
    <div className="recipe-list">
      <div className="recipe-item">
        {favComponent ? (
          ""
        ) : (
          <div
            className="star"
            onClick={() => (isFav ? "" : favouriteRecipeItem())}
          >
            <ion-icon name={isFav ? "star" : "star-outline"}></ion-icon>
          </div>
        )}

        <a href={recipe.url} className="recipe-text">
          <h3>{recipe.label}</h3>
        </a>
        <img className="recipe-img" src={recipe.image} alt={recipe.label} />
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>{ingredients}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default connect(null, { favouriteRecipe })(RecipeItem);
