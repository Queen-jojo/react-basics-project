import {
  Center,
  Text,
  Box,
  Image,
  Card,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";

export const RecipeListPage = ({ recipes, onRecipeSelect }) => {
  return (
    <Box p={4}>
      <Center bgColor="pink.100" h="100vh" flexDir="column" overflowY="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          The Best Recipe App
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
          {recipes.map((recipe) => (
            <Card
              key={recipe.label}
              borderRadius="md"
              boxShadow="md"
              p={4}
              _hover={{ boxShadow: "lg" }}
              cursor="pointer"
              onClick={() => onRecipeSelect(recipe)}
            >
              <CardBody>
                <Box display="flex" alignItems="center">
                  <Image
                    src={recipe.image}
                    alt={recipe.label}
                    borderRadius="md"
                    mr={4}
                    boxSize="100px"
                  />
                  <Box>
                    <Text fontWeight="semibold" fontSize="lg">
                      {recipe.label}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {recipe.mealType} | {recipe.dishType}
                    </Text>
                    {recipe.dietLabels.length > 0 && (
                      <Text fontSize="sm" color="gray.500">
                        Diet Labels: {recipe.dietLabels.join(", ")}
                      </Text>
                    )}
                    {recipe.cautions.length > 0 && (
                      <Text fontSize="sm" color="red.500">
                        Cautions: {recipe.cautions.join(", ")}
                      </Text>
                    )}
                    <Text fontSize="sm" color="green.500">
                      {recipe.healthLabels.includes("Vegan") ? "Vegan " : ""}
                      {recipe.healthLabels.includes("Vegetarian")
                        ? "Vegetarian"
                        : ""}
                    </Text>
                  </Box>
                </Box>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
