import { Text, Box, Image, Card, CardBody, SimpleGrid } from "@chakra-ui/react";

export const RecipeDetails = ({ recipe }) => {
  return (
    <Box p={4}>
      <Text fontSize="2x1" fontWeight="bold" mb={4}>
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
        Diet Labels: {recipe.dietLabels.join(", ")}
      </Text>
      <Text fontSize="sm" color="red.500">
        Cautions: {recipe.cautions.join(", ")}
      </Text>
      <Text fontSize="sm" color="green.500">
        Health Labels: {recipe.healthLabels.join(", ")}
      </Text>

      <Text fontSize="sm" fontWeight="bold" mt={4}>
        Ingredients:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {recipe.ingredients.map((ingredient, index) => (
          <Card key={index} p={2} borderRadius="md">
            <CardBody>{ingredient.text}</CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Text fontSize="sm" fontWeight="bold" mt={4}>
        Nutrients:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Card p={2} borderRadius="md">
          <CardBody>Energy: {recipe.calories} kcal</CardBody>
        </Card>
        <Card p={2} borderRadius="md">
          <CardBody>
            Protein: {recipe.totalNutrients.PROCNT.quantity ?? 0}g
          </CardBody>
        </Card>
        <Card p={2} borderRadius="md">
          <CardBody>Fat: {recipe.totalNutrients.FAT.quantity ?? 0}g</CardBody>
        </Card>
        <Card p={2} borderRadius="md">
          <CardBody>
            Carbohydrates: {recipe.totalNutrients.CHOCDF.quantity ?? 0}g
          </CardBody>
        </Card>
        <Card p={2} borderRadius="md">
          <CardBody>
            Cholesterol: {recipe.totalNutrients.CHOLE.quantity ?? 0}mg
          </CardBody>
        </Card>
        <Card p={2} borderRadius="md">
          <CardBody>
            Sodium: {recipe.totalNutrients.NA.quantity ?? 0}mg
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};
