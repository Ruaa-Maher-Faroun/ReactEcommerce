import React from 'react'
import useFetch from '../useFetch/UseFetch';
import Loader from '../../components/Loader/Loader';

export default function useFilter(data,keywords) {
 
    const filterCategories = (data, keywords) =>  data.filter(cat => keywords.some(keyword => cat.name.includes(keyword)));
    const res = filterCategories(data, keywords);
    
  return res;
  
}
