import { Box, Container, VStack, Text, Image, SimpleGrid, Heading, Flex, Spacer, Button, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for gaming and work.",
    image: "https://via.placeholder.com/150",
    price: "$999.99",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    image: "https://via.placeholder.com/150",
    price: "$799.99",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Lightweight tablet perfect for reading and browsing.",
    image: "https://via.placeholder.com/150",
    price: "$499.99",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={8} alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" color="white">Home</Button>
        <Button as={Link} to="/products" variant="ghost" color="white">Products</Button>
        <Button as={Link} to="/contact" variant="ghost" color="white">Contact</Button>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading>Welcome to ElectroShop</Heading>
          <Text>Find the best electronics at unbeatable prices!</Text>
        </Box>

        <Box textAlign="center" mb={4}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="lg"
            width="50%"
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md">{product.name}</Heading>
                <Text mt={4}>{product.description}</Text>
                <Text mt={4} fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;