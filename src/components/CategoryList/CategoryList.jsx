import React from 'react'
import useCategoryFilter from '../../CustomHooks/useCategoryFilter/useCategoryFilter';
import './CategoryList.css';
import { Link } from 'react-router-dom';
export default function CategoryList({data}) {

    
    const {allCategories,categoriesNames} = useCategoryFilter(data);

    
    return (
        // 
        <ul className="list-group list-group-flush">
                          <li className='border-0 list-group-item m-0'>

                                    <Link to='/products' className=' btn p-2 text-dark'>All</Link>
                                                                
                          </li>
            {categoriesNames.map((cat, i)=>{
                return(
                    <li className="border-0 list-group-item m-0" key={i}>
                        <div className="btn-group dropend">
                            <button type="button" className="btn p-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {cat}
                            </button>
                            <ul className="dropdown-menu px-2 py-1">
                                <li className='text-primary py-1'  key={i}>
                                    <Link to={`/products/category/${cat.toLowerCase()}`} className='text-dark'>All</Link>
                                    </li>
                                {allCategories[i].map((cat,i) => {
                                return (<li className='text-primary py-2'  key={i}>
                                    <Link to={`/products/category/${cat.slug}`} className='text-dark'>{cat.name}</Link>
                                    </li>)})}
                            </ul>
                        </div>
            </li>
                ) 
            })}
           
        
        </ul>
    )
}
