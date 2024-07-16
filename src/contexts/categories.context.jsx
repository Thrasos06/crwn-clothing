import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


// Import a Js with exported data
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Run one time to pass data to firebase
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap =  async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
      };

      getCategoriesMap();
    }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
