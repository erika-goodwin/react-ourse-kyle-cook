import React from "react";

export default function RecipeIngredientEdit({ ingredient }) {
  return (
    <>
      <input
        type="text"
        className="recipe-edit_input"
        value={ingredient.name}
      />
      <input
        type="text"
        className="recipe-edit_input"
        value={ingredient.amount}
      />
      <button className="btn btn--alert"> &times;</button>
    </>
  );
}
