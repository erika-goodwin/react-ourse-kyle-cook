import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "../../App";

// export default function RecipeList({ recipes, handleRecipeAdd, handleRecipeDelete }) {
export default function RecipeList({ recipes }) {
  // const { recipes, handleRecipeAdd, handleRecipeDelete } = props;

  //destructure the handleRecipeAdd  instead of  "const value = useContext(RecipeContext)""
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <>
      <div className="recipe-list">
        <div className="">
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe} />;
          })}
        </div>

        <div className="recipe-list_add-recipe-btn-container">
          <button className="btn btn--primary" onClick={handleRecipeAdd}>
            Add Recipe
          </button>
        </div>
      </div>
    </>
  );
}
