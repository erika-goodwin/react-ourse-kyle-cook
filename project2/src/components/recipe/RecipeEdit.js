import React, { useContext } from "react";
import { RecipeContext } from "../../App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeUpdate, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeUpdate(recipe.id, { ...recipe, ...changes });
  }

  function handleChangeIngredient(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }
  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit_remove-button-container">
        <button
          className="btn recipe-edit_remove-button"
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
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
          onChange={(e) => handleChange({ name: e.target.value })}
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
          onChange={(e) => handleChange({ cookTime: e.target.value })}
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
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
        />
        <label htmlFor="instructions" className="recipe-edit_label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit_input"
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
        />
      </div>
      <br />
      <label className="recipe-edit_label">Ingredients</label>
      <div className="recipe-edit_ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleChangeIngredient={handleChangeIngredient}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="recipe-edit_add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleIngredientAdd()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
