import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import RestaurantList from "@/components/RestaurantList/RestaurantList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Restaurant - Sekawan Media</title>
      </Head>
      <main>
        <VStack mt={["0.8rem","1.5rem", "2rem"]} mx={["1.3rem", "2rem",,"3rem"]} fontSize={20} color={"gray.600"}>
          <Header />
          <Filter />
          <RestaurantList />
        </VStack>
      </main>
    </ChakraProvider>
  );
}
