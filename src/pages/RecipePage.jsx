import {
  Text,
  Box,
  Image,
  List,
  ListItem,
  Button,
  Center,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  console.log("recipe:", recipe);
  console.log("recipe.totalNutrients.PROCNT", recipe.totalNutrients.PROCNT);
  console.log(
    "recipe.totalNutrients.FAT.quantity",
    recipe.totalNutrients.FAT.quantity
  );
  console.log(
    "recipe.totalNutrients.CHOCDF.quantity",
    recipe.totalNutrients.CHOCDF.quantity
  );
  console.log(
    "recipe.totalNutrients.CHOLE.quantity",
    recipe.totalNutrients.CHOLE.quantity
  );
  console.log(
    "recipe.totalNutrients.NA.quantity",
    recipe.totalNutrients.NA.quantity
  );
  return (
    <Box p={4}>
      <Center gap={8} h="100vh" bgColor="blue.100">
        <Text fontSize="x1" fontWeight="bold">
          {recipe.label}
        </Text>
        <Image src={recipe.image} alt={recipe.label} borderRadius="md" mb={4} />
        <Text fontSize="sm" color="gray.500">
          {recipe.mealType} | {recipe.dishType}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Total Time: {recipe.totalTime} mins
        </Text>
        <Text fontSize="sm" color="gray.500">
          Servings: {recipe.yield}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Diet Labels: {recipe.dietLabels.join(" ")}
        </Text>
        <Text fontSize="sm" color="red.500">
          Cautions: {recipe.cautions.join(" ")}
        </Text>
        <Text fontSize="sm" color="green.500">
          Health Labels: {recipe.healthLabels.join(" ")}
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          Ingredients:
        </Text>
        <List>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index}>{ingredient}</ListItem>
          ))}
        </List>
        <Text fontSize="sm" fontWeight="bold">
          Nutrients:
        </Text>
        <List>
          <ListItem>Energy: {recipe.calories} kcal</ListItem>
          <ListItem>Fat: {recipe.totalNutrients.FAT.quantity ?? 0}g</ListItem>
          <ListItem>
            Carbohydrates: {recipe.totalNutrients.CHOCDF.quantity ?? 0}g
          </ListItem>
          <ListItem>
            Cholesterol: {recipe.totalNutrients.CHOLE.quantity ?? 0}mg
          </ListItem>
          <ListItem>
            Sodium: {recipe.totalNutrients.NA.quantity ?? 0}mg
          </ListItem>
        </List>
        <Button mt={4} onClick={() => onBack()}>
          Go back
        </Button>
      </Center>
    </Box>
  );
};
