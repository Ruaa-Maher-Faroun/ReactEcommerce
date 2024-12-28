import React from 'react'
import useFetch from '../../CustomHooks/useFetch/UseFetch'
import Loader from '../Loader/Loader';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';
import Products from '../Products/Products';

export default function Categories({ categoryName, category, data }) {
    console.log(data);
    console.log(category);
    const products = data.products.filter((product) => category.some((cat) => product.category.includes(cat.toLowerCase()))
    );
    console.log(products);

    return (
        <section className="products bg-light ">
            <div className="container py-5 ">
                <h2 className="mb-3 ">{categoryName}</h2>

              
                    <>
                        <div className="cards row w-100 gap-5  mx-auto">

                            {products.length === 0 ? <h2 className='alert alert-success'>There is no products</h2> : products.map(product => <Product key={product.id} product={product} />)}
                        </div>
                        {products.length === 0 ? "" : <Pagination data={products} />}
                    </>
            </div>
        </section>

    )
}

