import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
} from "@chakra-ui/react";
import RestaurantItem from "./RestaurantItem";
import { useEffect, useState, useTransition } from "react";
import getRestaurantData from "@/pages/api/restaurant";

const RestaurantList = ({data}) => {
  const [page, setPage] = useState(1);

  const loadMoreHandler = () => {
    if (data?.length > page * 8) setPage((prevPage) => prevPage + 1);
  };

  return (
    <VStack justifyContent="start" alignItems="start" w="100%" mt="2rem">
      <Heading as="h3" color="gray.800" size="lg" fontWeight="normal">
        All Restaurants
      </Heading>
      <Grid
        mt="1rem"
        mb="2rem"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={8}
        w="100%"
        h="100%"
      >
        {data?.slice(0, page * 8).map((restaurant) => (
          <GridItem key={restaurant.id}>
            <RestaurantItem detail={restaurant} />
          </GridItem>
        ))}
        <GridItem colSpan={[1, 1, 2, 2, 4]} m="auto">
          <Button
            variant="unstyled"
            border="2px solid"
            color="#072647"
            bgColor="white"
            h="3rem"
            w="25rem"
            rounded={false}
            _hover={{ bgColor: "gray.200" }}
            onClick={loadMoreHandler}
            isDisabled={data?.length <= page * 8}
          >
            LOAD MORE
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default RestaurantList;
