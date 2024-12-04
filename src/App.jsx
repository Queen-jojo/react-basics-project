import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";
import { Box } from "@chakra-ui/react";
import { SearchBar } from "./styling/SearchBar";

export const App = () => {
  const [filteredRecipes, setFilteredRecipe] = useState(
    data.hits.map((hit) => hit.recipe)
  );
  const [selectedRecipe, setSelectedRecipe] = useState();
  console.log("filteredRecipes:", filteredRecipes);

  const handleRecipeSelect = (selectedRecipe) => {
    console.log("handleRecipeSelect:", handleRecipeSelect);
    setSelectedRecipe(selectedRecipe);
  };

  return (
    <Box>
      <SearchBar onSearch={setFilteredRecipe} />
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe()}
        />
      ) : (
        <RecipeListPage
          recipes={filteredRecipes}
          onRecipeSelect={handleRecipeSelect}
        />
      )}
    </Box>
  );
};
