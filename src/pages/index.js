import Head from "next/head";
import { Spinner, VStack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import RestaurantList from "@/components/RestaurantList/RestaurantList";
import getRestaurantData from "./api/restaurant";
import ErrorModal from "@/components/ErrorModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [modalStatus, setModalStatus] = useState({
    isError: false,
    isLoading: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const newData = await getRestaurantData();
        console.log(newData);
        setData(newData);

        setModalStatus((prevStatus) => {
          return { ...prevStatus, isLoading: false };
        });
      } catch (error) {
        setModalStatus((prevStatus) => {
          return { ...prevStatus, isError: error };
        });
        console.log(!error)
        console.log("Error fetching restaurants:", error);
      }
    };

    setModalStatus((prevStatus) => {
      return { ...prevStatus, isLoading: true };
    });
    fetchRestaurants();
  }, []);

  return (
    <>
      <Head>
        <title>Restaurant - Sekawan Media</title>
      </Head>
      <main>
        <ErrorModal isOpen={modalStatus.isError} />
        <VStack
          mt={["0.8rem", "1.5rem", "2rem"]}
          mx={["1.3rem", "2rem", , "3rem"]}
          fontSize={20}
          color={"gray.600"}
        >
          <Header />
          <Filter />
          {modalStatus.isLoading && (
            <Spinner
            m="5rem"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.500"
            size="xl"
            />
          )}
          {!modalStatus.isLoading && !modalStatus.isError && <RestaurantList data={data} />}
        </VStack>
      </main>
    </>
  );
}
