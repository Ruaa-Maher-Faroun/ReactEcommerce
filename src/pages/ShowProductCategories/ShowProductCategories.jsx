import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../components/Products/Products';
import CustomizedCategories from '../CustomizedCategories/CustomizedCategories';
import useCategoryFilter from '../../CustomHooks/useCategoryFilter/useCategoryFilter';
// import useFetch from '';
import Loader from '../../components/Loader/Loader';
import UseFetch from './../../CustomHooks/useFetch/UseFetch';


export default function ShowProductCategories() {
      const {data, error,isLoading} = UseFetch('https://dummyjson.com/products/categories')    
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
