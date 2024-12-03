import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";
import { Box } from "@chakra-ui/react";
import { SearchBar } from "./styling/SearchBar";

export const App = () => {
  const [recipes] = useState(data.hits.map((hit) => hit.recipe));
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleRecipeSelect = (selectedRecipe) => {
    setSelectedRecipe(selectedRecipe);
  };

  return (
    <Box>
      <SearchBar onSearch={selectedRecipe} />
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
