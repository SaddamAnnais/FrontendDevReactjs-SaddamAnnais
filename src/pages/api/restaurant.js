import axios from "axios";

const getRestaurantList = async () => {
  // try {
  const response = await axios.get("https://restaurant-api.dicoding.dev/list");
  return response.data.restaurants;
  // } catch (error) {
  //   console.log("Error fetching restaurant data:", error);
  //   return null;
  // }
};

const getRestaurantData = async () => {
  // try {
    const restaurantList = await getRestaurantList();
    const restaurantData = [];
    if (restaurantList) {
      for (const item of restaurantList) {
        const response = await axios.get(
          "https://restaurant-api.dicoding.dev/detail/" + item.id
        );

        const newElmt = {
          ...item,
          isOpen: Math.floor(Math.random() * 10) % 2 === 1,
          priceLvl: Math.floor(Math.random() * 10) % 4,
          address: response.data.restaurant.address,
          menus: response.data.restaurant.menus,
          category: response.data.restaurant.categories,
          custReview: response.data.restaurant.customerReviews,
        };
        restaurantData.push(newElmt);
      }
      return restaurantData.sort(() => Math.random() - 0.5);
    }
  // } catch (error) {
  //   console.log("Error fetching restaurant data:", error);
  //   return null;
  // }
};

export default getRestaurantData;
