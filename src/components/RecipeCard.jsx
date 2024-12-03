import { Box, Text, Image } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Box cursor="pointer" onClick={onClick}>
      <Image src={recipe.image} alt={recipe.label} borderRadius="md" mb={4} />
      <Text fontWeight="semibold">{recipe.label}</Text>
      <Text fontSize="sm" color="gray.500">
        {recipe.mealType} | {recipe.dishType}
      </Text>
    </Box>
  );
};
