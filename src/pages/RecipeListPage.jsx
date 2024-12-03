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
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);
  return (
    <Box p={4}>
      <Center bgColor="blue.100" h="100vh" flexDir="column">
        <Card borderRadius="x1" w="4x2" h="4x2">
          <CardBody>
            <Text fontSize="x1" fontWeight="bold">
              The best Recipe App
            </Text>
            <List spacing={3}>
              {recipes.map((recipe) => (
                <ListItem
                  key={recipe.label}
                  cursor="pointer"
                  onClick={() => onRecipeSelect(recipe)}
                >
                  <Box display="flex" alignItems="center">
                    <Image
                      src={recipe.image}
                      alt={recipe.label}
                      borderRadius="md"
                      mr={4}
                    />
                    <Box>
                      <Text fontWeight="semibold">{recipe.label}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {recipe.mealType} | {recipe.dishType}
                      </Text>
                      {recipe.dietLabels.lenght > 0 && (
                        <Text fontSize="sm" color="gray.500">
                          Diet Labels: {recipe.dietLabels.join(", ")}
                        </Text>
                      )}
                      {recipe.cautions.lenght > 0 && (
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
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
