import Header from "@/components/Header";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import PrettyRating from "pretty-rating-react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStarHalfStroke,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

const RestaurantDetail = () => {
  const router = useRouter();
  const [detailData, setDetailData] = useState(undefined);

  useEffect(() => {
    console.log(detailData);
    if (router.query.detail !== undefined)
      setDetailData(JSON.parse(router.query.detail));
  }, [router.query.detail]);

  return (
    <>
      <Head>
        <title>Restaurant - Sekawan Media</title>
      </Head>
      <main>
        <VStack
          mt={["0.8rem", "1.5rem", "2rem"]}
          mx={["1.3rem", "2rem", , "3rem"]}
          fontSize={20}
          color={"gray.600"}
        >
          <Header />
          <Flex justifyContent="start" direction="column" w="100%">
            <Button
              leftIcon={<ChevronLeftIcon />}
              w="7rem"
              onClick={() => router.back()}
              p="0.4rem"
              bg="white"
              rounded={false}
              border="1px solid #082c54"
            >
              BACK
            </Button>
          </Flex>

          <Box
            w="100%"
            h={["15rem", "20rem", "30rem"]}
            bgImg={
              "https://restaurant-api.dicoding.dev/images/medium/" +
              detailData?.pictureId
            }
            mb="0.5rem"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
              h="100%"
              bg="rgba(0,0,0,0.5)"
            >
              <Heading
                as={"h3"}
                fontWeight="bold"
                fontSize={["3xl", "4xl", "5xl"]}
                color="whiteAlpha.900"
              >
                {detailData?.name}
              </Heading>
            </Flex>
          </Box>

          <Flex w="100%">
            <Text color="#082c54" fontSize="md" textTransform="uppercase">
              {detailData?.category[0].name}
              {detailData?.category[1]
                ? ` - ${detailData?.category[1]?.name}`
                : " "}
              {detailData?.category[2]
                ? ` - ${detailData?.category[2]?.name}`
                : " "}
              &#x2022; {"$".repeat(detailData?.priceLvl + 1)}
            </Text>
            <Spacer />
            {detailData && (
              <PrettyRating
                value={detailData?.rating}
                max={5}
                icons={{
                  complete: faStar,
                  half: faStarHalfStroke,
                  empty: farStar,
                }}
                colors={["#082c54", "#082c54", "#082c54"]}
                disabled={true}
              />
            )}
          </Flex>
          <Flex w="100%" mb="0.5rem">
            <Link
              color="teal.500"
              href={
                "https://www.google.com/maps/search/?api=1&query=" +
                escape(detailData?.address + ", " + detailData?.city)
              }
              isExternal
              fontSize="lg"
            >
              {detailData?.address}, {detailData?.city}
            </Link>

            <Spacer />
            <HStack minW={detailData?.isOpen ? "7rem" : "5rem"}>
              <Box
                rounded="full"
                bg={detailData?.isOpen ? "Turquoise" : "red"}
                boxSize="0.7rem"
                m="auto"
              />
              <Text color="#082c54" fontSize="md" ml="0.4rem">
                {detailData?.isOpen ? "OPEN NOW" : "CLOSED"}
              </Text>
            </HStack>
          </Flex>
          <Text align={"justify"} mb="1rem">
            {detailData?.description}
          </Text>
          <Grid w="100%" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
            <GridItem
              alignItems="center"
              display="flex"
              flexDirection="column"
              mb="2rem"
              h="100%"
            >
              <Text
                fontWeight="bold"
                borderBottom="1px"
                borderColor="gray.500"
                w="70%"
                align="center"
                h="2.5rem"
                mb="0.5rem"
              >
                Food Menu
              </Text>
              {detailData?.menus.foods.map((item, idx) => {
                return <Text key={idx}>{item.name}</Text>;
              })}
            </GridItem>
            <GridItem
              alignItems="center"
              display="flex"
              flexDirection="column"
              h="100%"
            >
              <Text
                fontWeight="bold"
                borderBottom="1px"
                borderColor="gray.500"
                w="70%"
                align="center"
                h="2.5rem"
                mb="0.5rem"
              >
                Drink Menu
              </Text>
              {detailData?.menus.drinks.map((item, idx) => {
                return <Text key={idx}>{item.name}</Text>;
              })}
            </GridItem>
          </Grid>
          <Flex w="100%" direction={["column", "column", "row"]} mt="1rem">
            <Text fontWeight="bold" h="2.5rem" mb="0.5rem" minW="8rem">
              Review :
            </Text>
            <Spacer />
            <Stack
              overflow="auto"
              direction={["column", "column", "row"]}
              alignItems="center"
              mb="3rem"
            >
              {detailData?.custReview.map((review, idx) => {
                return (
                  <Card
                    key={idx}
                    w={["15rem", "20rem", "20rem", "25rem"]}
                    h="15rem"
                    minW={["15rem", "20rem", "20rem", "25rem"]}
                    minH="15rem"
                    variant="unstyled"
                    border="1px solid"
                    borderColor="gray.500"
                    rounded={false}
                    p="1rem"
                  >
                    <Text fontWeight="bold">{review.name}</Text>
                    <Text fontSize="md" mb="1rem">
                      {review.date}
                    </Text>
                    <Text
                      fontSize="lg"
                      webkit
                      style={{
                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "5",
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                      }}
                      // ;
                    >
                      Comment: <br />
                      {review.review}
                    </Text>
                  </Card>
                );
              })}
            </Stack>
          </Flex>
        </VStack>
      </main>
    </>
  );
};

export default RestaurantDetail;
