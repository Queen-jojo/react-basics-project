import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";
import { Box, Input } from "@chakra-ui/react";

export const App = () => {
  const [recipes, setRecipes] = useState(data.hits.map((hit) => hit.recipe));
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeSelect = (selectedRecipe) => {
    setSelectedRecipe(selectedRecipe);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) => {
      const recipeName = recipe.label.toLowerCase();
      const healthLabels = recipe.healthLabels.map((label) =>
        label.toLowerCase()
      );
      return (
        recipeName.includes(query) ||
        healthLabels.some((label) => label.includes(query))
      );
    });
    setRecipes(filteredRecipes);
  };

  return (
    <Box>
      <Input placeholder="Search recipes" onChange={handleSearch} />
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe()}
        />
      ) : (
        <RecipeListPage recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      )}
    </Box>
  );
};