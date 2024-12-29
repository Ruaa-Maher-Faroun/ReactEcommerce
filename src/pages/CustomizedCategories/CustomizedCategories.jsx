import React from 'react'
import Category from '../../components/Category/Category'
import GetIcon from '../../components/GetIcon/GetIcon';
import Loader from '../../components/Loader/Loader';
import Product from '../../components/Product/Product';
import useFetch from '../../CustomHooks/useFetch/UseFetch';

export default function CustomizedCategories({categories,category,allCategories}) {
    
    const keyword = category.charAt(0).toUpperCase()+category.slice(1);
    const{data,error,isLoading} = useFetch('https://dummyjson.com/products?limit=0');
    if(isLoading) return <Loader />;
    
    let products=[];
      const icons = GetIcon();
      let catData =  [];
      for (let i = 0 ; i < allCategories.length; i++) {
        catData.push(...allCategories[i])

    }
    let cats = []; 
    categories[category].forEach((cat) => {
        const d = catData.filter((obj) => obj.name.includes(cat));
        
         cats.push(...d)
    });
  
        if(data){      
            categories[category].forEach((cat) => {
                const keyy = cat.toLowerCase().split(" ").join("-");
                
                const d = data.products.filter((product) => product.category.includes(keyy));
                 products.push(...d)
            });
        
        }
      

  return (
    <section className="products bg-light ">

    <div className='container py-5'>
        <h2 className='mb-3 text-capitalize'>{keyword}</h2>
        <div className="row cards">
            {cats.map((cat,i) => <Category icon={icons[category]} key={i}  name={cat.slug}/>)}
        </div>
        {error ? <div className="alert danger
    alert-danger">{error}</div> : 

    
        <div className="cards row w-100 gap-5  mx-auto">
            {products.length === 0 ? <h2 className='alert alert-success'>There is no products</h2>:products.map((product,i)=> <Product key={i} product={product}/>)}
        </div>
    }
    </div>
    </section>
  )
}

