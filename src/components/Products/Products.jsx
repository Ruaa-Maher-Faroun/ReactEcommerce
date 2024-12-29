import React from 'react';
import Loader from '../Loader/Loader';
import Product from '../Product/Product';
// import Pagination from '../Pagination/Pagination';
import useFetch from '../../CustomHooks/useFetch/useFetch';
//'https://dummyjson.com/products'
export default function Products({productsURL,pageName}) {


    const { data, error, isLoading } = useFetch(productsURL);


    if (isLoading) return <Loader />
    return (
        <section className="products bg-light ">
            <div className="container py-5 ">
                    <h2 className="mb-3 text-capitalize ">{pageName.split("-").join(" ")}</h2>
                    
                    {error ? <div className="alert danger
    alert-danger">{error}</div> : 
    <>
                <div className="cards row w-100 gap-5  mx-auto">

                        {data.products.length === 0 ? <h2 className='alert alert-success'>There is no products</h2>:data.products.map(product => <Product key={product.id} product={product} />)}
                    </div>
                    {/* {data.products.length === 0 ? "" : <Pagination data={data}/>} */}
    </>}
            </div>
        </section>
    )
}
