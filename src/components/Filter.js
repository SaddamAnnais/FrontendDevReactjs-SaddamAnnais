import {
  Button,
  Flex,
  HStack,
  Radio,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Filter = (props) => {
  const [isOpenChecked, setIsOpenChecked] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isResetable, setIsResetable] = useState(false);

  useEffect(() => {
    const param = {
      isOpen: isOpenChecked ? true : undefined,
      priceLvl: price === "" ? undefined : parseInt(price),
      category: category === "" ? undefined : category,
    };
    props.filterParam(param);
    if (
      (isOpenChecked === true || price !== "" || category !== "") &&
      isResetable !== true
    ) {
      setIsResetable(true);
    } else if (
      isOpenChecked === false &&
      price === "" &&
      category === "" &&
      isResetable === true
    )
      setIsResetable(false);
  }, [isOpenChecked, price, category]);

  const clearAllHandler = () => {
    setIsOpenChecked(false);
    setPrice("");
    setCategory("");
    setIsResetable(false);
  };

  return (
    <Flex
      direction={["column", "column", "row"]}
      w="100%"
      borderTop="1px"
      borderBottom="1px"
      borderColor="gray.400"
      py="1.5rem"
      px="1rem"
    >
      <Flex direction={["column", "row"]} mb={["1rem", "1rem", "1rem", "0"]}>
        <Text mr={5} fontSize={18} mt="5px">
          Filter by:{" "}
        </Text>
        <Spacer />
        <HStack
          mr={5}
          borderBottom="1px"
          borderColor="gray.500"
          w={["100%", "7em"]}
        >
          <Radio
            h="2.5rem"
            colorScheme="teal"
            isChecked={isOpenChecked}
            onClick={() => setIsOpenChecked((prev) => !prev)}
          >
            Open Now
          </Radio>
        </HStack>
        <HStack
          mr={5}
          borderBottom="1px"
          borderColor="gray.500"
          w={["100%", "7em"]}
        >
          <Select
            h="2.5rem"
            border={0}
            style={{ boxShadow: "none" }}
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value={0}>$</option>
            <option value={1}>$$</option>
            <option value={2}>$$$</option>
            <option value={3}>$$$$</option>
          </Select>
        </HStack>
        <HStack
          mr={5}
          borderBottom="1px"
          borderColor="gray.500"
          w={["100%", "7em"]}
        >
          <Select
            h="2.5rem"
            border={0}
            style={{ boxShadow: "none" }}
            placeholder="Categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Italia">Italia</option>
            <option value="Spanyol">Spanyol</option>
            <option value="Jawa">Jawa</option>
            <option value="Bali">Bali</option>
            <option value="Modern">Modern</option>
            <option value="Sunda">Sunda</option>
            <option value="Sop">Sop</option>
          </Select>
        </HStack>
      </Flex>
      <Spacer />
      <Button
        variant="outline"
        borderColor="gray.600"
        isDisabled={!isResetable}
        rounded={false}
        minW="10rem"
        w="auto"
        onClick={clearAllHandler}
      >
        Clear All
      </Button>
    </Flex>
  );
};

export default Filter;
