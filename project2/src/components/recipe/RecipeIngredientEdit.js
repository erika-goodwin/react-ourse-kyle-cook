import React from "react";

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleChangeIngredient, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleChangeIngredient(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        type="text"
        className="recipe-edit_input"
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        type="text"
        className="recipe-edit_input"
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn--alert"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        {" "}
        &times;
      </button>
    </>
  );
}
