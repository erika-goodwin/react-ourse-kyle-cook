import React, { useContext, useEffect } from "react";
import IngredientList from "../ingredient/IngredientList";
import { RecipeContext } from "../../App";

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients } = props;

  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

  useEffect(() => {
    console.log("Render");
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <div className="recipe">
      <div className="recipe_header">
        <h3 className="recipe_header_title">{name}</h3>
        <div>
          <button
            className="btn btn--second mr-1"
            onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button
            className="btn btn--alert"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe_row">
        <span className="recipe_row_label">Cook Time:</span>
        <span className="recipe_row_value">{cookTime}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_row_label">Serving:</span>
        <span className="recipe_row_value">{servings}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_row_label">Instructions:</span>
        <div className="recipe_row_value recipe_row_value-instructions recipe_row_value-indented">
          {instructions}
        </div>
      </div>
      <div className="recipe_row">
        <span className="recipe_row_label">Ingredients:</span>
        <div className="recipe_row_value recipe_row_value-indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
