const ITEMS_PER_PAGE = 8;

export const getCars = (cars, page) => {
  return cars.slice((page - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE * page);
};

export const filterCars = (cars, filters) =>
  cars.filter(car => {
    const makeCondition = car.make
      .toLowerCase()
      .includes(filters.make.toLowerCase());

    const rentalPriceCondition =
      Number(car.rentalPrice.split('$')[1]) <= Number(filters.rentalPrice);

    const mileageCondition =
      car.mileage <= filters.mileageTo && car.mileage >= filters.mileageFrom;

    const conditions = [
      ...(!!filters.make ? [makeCondition] : []),
      ...(!!Number(filters.rentalPrice) ? [rentalPriceCondition] : []),
      ...(!!filters.mileageTo && !!filters.mileageFrom
        ? [mileageCondition]
        : []),
    ];

    return conditions.length ? conditions.every(condition => condition) : true;
  });

export const formatMileage = value => {
  const init = String(value).split('').reverse();
  init.splice(3, 0, ',');

  return init.reverse().join('');
};
