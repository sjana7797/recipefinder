import React from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

import { Link } from "react-router-dom";

function RecipeList(props) {
  let { recipes } = props;

  return (
    <div>
      {props.favouritesRecipes.length > 0 ? (
        <h4 className="nav-link">
          <Link to="/favourite">Favourite</Link>
        </h4>
      ) : (
        ""
      )}

      {recipes.map((recipe, index) => {
        return (
          <RecipeItem key={index} recipe={recipe.recipe} favComponent={false} />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
