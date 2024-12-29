import GetCategoryName from '../../components/GetCategoryName/GetCategoryName';
import useFilter from '../useFilter/useFilter';

export default function useCategoryFilter(data) {
   
    const {categories,categoriesNames} = GetCategoryName();
    const allCategories = []; 
    
    for( const cat in categories){

        allCategories.push(useFilter(data,categories[cat]));
        
        
    }

     
    
    return { allCategories, categoriesNames, categories };
}
