export const carsSelector = state => state.catalog.items;
export const favoriteCarsSelector = state => state.catalog.favoritesItems;
export const filtersSelector = state => state.catalog.filters;
export const loadingSelector = state => state.catalog.isLoading;