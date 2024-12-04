import { Input } from "@chakra-ui/react";
import { data } from "../utils/data";

export const SearchBar = ({ selectedRecipe }) => {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    console.log("query:", query);

    const filteredRecipes = data.hits.filter((recipe) => {
      console.log("recipe:", recipe);
      const recipeName = recipe.recipe.label.toLowerCase();
      const healthLabels = recipe.recipe.healthLabels.map((label) =>
        label.toLowerCase()
      );
      return (
        recipeName.includes(query) ||
        healthLabels.some((label) => label.includes(query))
      );
    });
    selectedRecipe(filteredRecipes);
  };

  return (
    <Input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};
