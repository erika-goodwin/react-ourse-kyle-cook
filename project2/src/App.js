import React, { useEffect, useState } from "react";
import RecipeList from "./components/recipe/RecipeList";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./components/recipe/RecipeEdit";

//Context Setting
export const RecipeContext = React.createContext();
// Local Storage Setting => Check on Application tool of dev tool of Chrome
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    recipeJSON && setRecipes(JSON.parse(recipeJSON));
  }, []);

  // Local Storage Setting
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes)); //JSON.stringify: local strage can take only 'string'
  }, [recipes]);
  //Without ,[], this useEffect will render every single time. with ,[], it will render only the one time. with [item], when [item] is updated

  //Context Setting
  const recipeContextValue = {
    // handleRecipeAdd: handleRecipeAdd,
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeUpdate,
  };

  function handleRecipeUpdate(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipes) => recipes.id !== id));
  }

  return (
    <>
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList
          recipes={recipes}
          // handleRecipeAdd={handleRecipeAdd}
          // handleRecipeDelete={handleRecipeDelete}
        />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </RecipeContext.Provider>
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: 3,
    instructions:
      "1. put salt on Chicken 2. put chicken in oven 3. eat chicken",
    ingredients: [
      { id: 1, name: "chicken", amount: "2 Pounds" },
      { id: 2, name: "Salt", amount: "1 Tbs" },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    cookTime: "0:45",
    servings: 5,
    instructions: "1. put salt on Pork 2. put Pork in oven 3. eat pork",
    ingredients: [
      { id: 1, name: "pork", amount: "3 Pounds" },
      { id: 2, name: "Paprika", amount: "2 Tbs" },
    ],
  },
];

export default App;
