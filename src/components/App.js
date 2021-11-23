import React, { Fragment } from "react";

//
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
//Components
import FavouriteRecipeList from "./FavouriteRecipeList";
import RecipeList from "./RecipeList";
import SearchRecipes from "./SearchRecipes";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Fragment>
                <h1>Recipe Finder</h1>
                <SearchRecipes />
                <RecipeList />
              </Fragment>
            );
          }}
        />
        <Route
          exact
          path="/favourite"
          render={() => {
            return (
              <Fragment>
                <h4 className="nav-link">
                  <Link to="/">Home</Link>
                </h4>
                <FavouriteRecipeList />
              </Fragment>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
