import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStarHalfStroke,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import PrettyRating from "pretty-rating-react";
import { useRouter } from "next/router";

const RestaurantItem = ({ detail }) => {
  const router = useRouter();
  return (
    <Card variant="unstyled" w="100%" mb="2rem">
      <CardBody>
        <VStack alignItems="start" mb="2rem" spacing="0.4em">
          <Image
            mb="0.5rem"
            w="100%"
            h="12rem"
            src={
              "https://restaurant-api.dicoding.dev/images/medium/" +
              detail.pictureId
            }
            alt={detail.name}
            fit="cover"
          />
          <Text fontSize="xl" fontWeight="medium">
            {detail.name}
          </Text>
          <HStack>
            <PrettyRating
              value={detail.rating}
              max={5}
              icons={{
                complete: faStar,
                half: faStarHalfStroke,
                empty: farStar,
              }}
              colors={["#082c54", "#082c54", "#082c54"]}
              disabled={true}
            />
          </HStack>
          <Flex direction="row" w="100%">
            <Text color="gray.500" fontSize="md" textTransform="uppercase">
              {detail.category[0].name} &#x2022; {"$".repeat(detail.priceLvl + 1)}
            </Text>
            <Spacer />
            <Box
              rounded="full"
              bg={detail.isOpen ? "Turquoise" : "red"}
              boxSize="0.7rem"
              m="auto"
            />
            <Text color="gray.500" fontSize="md" ml="0.4rem">
              {detail.isOpen ? "OPEN NOW" : "CLOSED"}
            </Text>
          </Flex>
        </VStack>
        <Button
          variant="unstyled"
          bgColor="#082c54"
          color="gray.200"
          w="100%"
          rounded={false}
          _hover={{ bgColor: "#072647" }}
          h="2.5rem"
          onClick={() => {
            // console.log(JSON.stringify(detail))
            router.push({ pathname: "/" + detail.id, query: { detail: JSON.stringify(detail) } })
          }}
        >
          LEARN MORE
        </Button>
      </CardBody>
    </Card>
  );
};

export default RestaurantItem;
