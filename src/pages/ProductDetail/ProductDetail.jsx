import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from './../../CustomHooks/useFetch/UseFetch';
import Loader from './../../components/Loader/Loader';
import ProductCaption from './../../components/ProductCaption/ProductCaption';
import ProductImages from './../../components/ProductImges/ProductImages';
import Reviews from './../../components/Reviews/Reviews';

export default function ProductDetail() {
  const {id} = useParams();
  const {data,error,isLoading} = UseFetch(`https://dummyjson.com/products/${id}`);
 
  if(isLoading){
    return <Loader />;
  }
  return (
    <section className='product-detail'>
      <div className="container">
      {error ? <div className="alert danger
    alert-danger">{error}</div> : 
    <>
   
<div className="row py-5">
  <div className="col-5 d-flex">
    
<ProductImages data={data} />
  </div>
  <div className="col-5">
 <ProductCaption  data={data} />
  </div>
</div>
<div className="row border rounded mb-5">
  <div className="col-12">
    <Reviews reviews={data.reviews}/>
  </div>
</div>
</>}
      </div>
    </section>
  )
}
