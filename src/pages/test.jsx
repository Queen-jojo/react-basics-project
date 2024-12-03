import {
  Center,
  Text,
  Box,
  List,
  ListItem,
  Image,
  Card,
  CardBody,
} from "@chakra-ui/react";

export const RecipeListPage = ({ recipes, onRecipeSelect }) => {
  return (
    <Box p={4}>
      <Center bgColor="blue.100" h="100vh" flexDir="column" overflowY="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          The Best Recipe App
        </Text>
        <List spacing={6} w="full" maxW="3xl">
          {recipes.map((recipe) => (
            <ListItem
              key={recipe.label}
              cursor="pointer"
              onClick={() => onRecipeSelect(recipe)}
            >
              <Card
                borderRadius="md"
                boxShadow="md"
                p={4}
                _hover={{ boxShadow: "lg" }}
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
            </ListItem>
          ))}
        </List>
      </Center>
    </Box>
  );
};
