import {
  Text,
  Box,
  Image,
  Button,
  Center,
  SimpleGrid,
  Card,
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
      <Button mt={4} onClick={() => onBack()}>
        Go back
      </Button>
      <Center bgColor="pink.100" h="100vh" flexDir="column" overflowY="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
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

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
          {recipe.ingredients.map((ingredient, index) => (
            <Card key={index}>{ingredient.text}</Card>
          ))}
        </SimpleGrid>

        <Text fontSize="sm" fontWeight="bold">
          Nutrients:
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
          <Card>Energy: {recipe.calories} kcal</Card>
          <Card>Protein: {recipe.totalNutrients.PROCNT.quantity ?? 0}g</Card>
          <Card>Fat: {recipe.totalNutrients.FAT.quantity ?? 0}g</Card>
          <Card>
            Carbohydrates: {recipe.totalNutrients.CHOCDF.quantity ?? 0}g
          </Card>
          <Card>
            Cholesterol: {recipe.totalNutrients.CHOLE.quantity ?? 0}mg
          </Card>
          <Card>Sodium: {recipe.totalNutrients.NA.quantity ?? 0}mg</Card>
        </SimpleGrid>
      </Center>
    </Box>
  );
};
