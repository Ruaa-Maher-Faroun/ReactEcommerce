import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';


export default function Product({product}) {
     return (
        <div className="card p-0" style={{ width: '18rem' }}>
            <img src={product.thumbnail} className="card-img-top border-bottom" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text price d-flex align-items-center"><span className='fw-bold'>
                    ${product.price}
                </span>
                    <Link to={`/product/${product.id}`}  className="btn btn-primary ms-auto">Details</Link></p>
                <div><a href="#" className="badge text-bg-info">{product.category}</a></div>
            </div>
        </div>
    )
}
