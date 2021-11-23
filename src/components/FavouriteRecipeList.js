import React from "react";
import RecipeItem from "./RecipeItem";
import { connect } from "react-redux";

function FavouriteRecipeList(props) {
  let { favouritesRecipes } = props;
  return (
    <div>
      <h3>Favourite Recipes:</h3>
      {favouritesRecipes.length > 0 ? (
        favouritesRecipes.map((recipe, index) => {
          return <RecipeItem key={index} recipe={recipe} favComponent={true} />;
        })
      ) : (
        <div>No Favourite recipes</div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(FavouriteRecipeList);
