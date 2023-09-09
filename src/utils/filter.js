const filterRestaurant = ({ initArray, isOpen, category, priceLvl }) => {
  const retArr = [];

  if (initArray) {
    for (const item of initArray) {
      if (
        (item.category[0].name === category || undefined === category) &&
        (item.priceLvl === priceLvl || undefined === priceLvl) &&
        (item.isOpen === isOpen || undefined === isOpen)
      )
        retArr.push(item);
    }
    return retArr;
  }
};

export default filterRestaurant;
