import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../components/Products/Products';
import CustomizedCategories from '../CustomizedCategories/CustomizedCategories';
import useCategoryFilter from '../../CustomHooks/useCategoryFilter/useCategoryFilter';
import Loader from '../../components/Loader/Loader';
import useFetch from '../../CustomHooks/useFetch/useFetch';


export default function ShowProductCategories() {
      const {data, error,isLoading} = useFetch('https://dummyjson.com/products/categories');
      console.log(data);
        
      if(isLoading){
          return <Loader />;
      }
  const { category } = useParams();
  const {allCategories,categories, categoriesNames} = useCategoryFilter(data);
  if(categories[category]){
    return <CustomizedCategories categories={categories} category={category} allCategories={allCategories}/>;
    
  }

  return (
      <Products productsURL={`https://dummyjson.com/products/category/${category}`} pageName={category}/>
  );
}
