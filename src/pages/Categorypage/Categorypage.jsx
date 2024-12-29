import Category from '../../components/Category/Category'
import useCategoryFilter from '../../CustomHooks/useCategoryFilter/useCategoryFilter';
import Loader from '../../components/Loader/Loader';
import GetIcon from '../../components/GetIcon/GetIcon';
import {  faListCheck } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../CustomHooks/useFetch/useFetch';

export default function Categorypage() {
        const icons = GetIcon();
        
        const {data, error,isLoading} = useFetch('https://dummyjson.com/products/categories')    
        if(isLoading){
            return <Loader />;
        } 
        const { allCategories, categoriesNames,categories } = useCategoryFilter(data);
       
  return (
    <div className='container'>
        <div className="row cards">
            <Category icon={faListCheck} key={-1}  name={"All"}/>
            {categoriesNames.map((categoriesName,i) => <Category icon={icons[categoriesName.toLowerCase()]} key={i}  slug={categoriesName} name={categoriesName}/>)}
        </div>
    </div>
  )
}
