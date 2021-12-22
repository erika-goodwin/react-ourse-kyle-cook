import React, { useContext } from "react";
import { RecipeContext } from "../../App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeUpdate } = useContext(RecipeContext);

  return (
    <div className="recipe-edit">
      <div className="recipe-edit_remove-button-container">
        <button className="btn recipe-edit_remove-button">&times;</button>
      </div>
      <div className="recipe-edit_detail-grid">
        <label htmlFor="name" className="recipe-edit_label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit_input"
          value={recipe.name}
          onChange={handleRecipeUpdate}
        />
        <label htmlFor="cookTime" className="recipe-edit_label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit_input"
          value={recipe.cookTime}
        />
        <label htmlFor="servings" className="recipe-edit_label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit_input"
          value={recipe.servings}
        />
        <label htmlFor="instructions" className="recipe-edit_label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit_input"
          id="instructions"
        >
          {recipe.instructions}
        </textarea>
      </div>
      <br />
      <label className="recipe-edit_label">Ingredients</label>
      <div className="recipe-edit_ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
      <div className="recipe-edit_add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  );
}
