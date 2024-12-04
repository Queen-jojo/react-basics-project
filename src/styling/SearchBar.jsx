import { Input } from "@chakra-ui/react";
import { data } from "../utils/data";

export const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    console.log("query:", query);

    // const filteredRecipes = data.hits.map.filter((recipe) => {
    const filteredRecipes = data.hits
      .map((hit) => hit.recipe)
      .filter((recipe) => {
        console.log("recipe:", recipe);
        const recipeName = recipe.label.toLowerCase();
        const healthLabels = recipe.healthLabels.map((label) =>
          label.toLowerCase()
        );
        return (
          recipeName.includes(query) ||
          healthLabels.some((label) => label.includes(query))
        );
      });
    onSearch(filteredRecipes);
  };

  return (
    <Input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};
