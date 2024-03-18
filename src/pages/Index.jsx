import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTA3OTEzOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTA3OTEzOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTA3OTE0MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Box>
      <Flex bg="gray.100" p={4} alignItems="center">
        <Heading size="md">My E-commerce Store</Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" onClick={onOpen}>
          <Badge ml={1} colorScheme="red">
            {cart.length}
          </Badge>
        </IconButton>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading size="md">{product.name}</Heading>
            <Text fontWeight="bold">${product.price}</Text>
            <Button mt={4} colorScheme="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              {cart.map((item) => (
                <Flex key={item.id} alignItems="center" mb={4}>
                  <Image src={item.image} alt={item.name} boxSize="50px" mr={4} />
                  <Box>
                    <Heading size="sm">{item.name}</Heading>
                    <Text fontWeight="bold">${item.price}</Text>
                  </Box>
                  <Spacer />
                  <IconButton icon={<FaTrash />} variant="ghost" onClick={() => removeFromCart(item.id)} />
                </Flex>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
