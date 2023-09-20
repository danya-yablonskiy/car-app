import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import Catalog from "../pages/CatalogPage/CatalogPage";
import FavoritesPage from "pages/FavoritesPage/FavoritesPage";

export const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/> 
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="favorites" element={<FavoritesPage/>}/>
        </Route>
    </Routes>
  )
};
