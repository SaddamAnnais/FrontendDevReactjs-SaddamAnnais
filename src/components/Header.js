import { Flex, Heading, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justifyContent="start" direction="column" w="100%">
      <Heading mb={3} color="gray.800" fontWeight="medium">Restaurants</Heading>
      <Text mb={3}>
        This website is used to complete technical tests for Sekawan Media with
        the help of{" "}
        <Link
          color="teal.500"
          href="https://restaurant-api.dicoding.dev/#/?id=dicoding-restaurant-api"
          isExternal
        >
          dicoding restaurant API
        </Link>
        .
      </Text>
    </Flex>
  );
};

export default Header;
