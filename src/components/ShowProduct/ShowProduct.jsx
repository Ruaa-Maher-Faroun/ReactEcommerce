import React from 'react'
import Products from '../Products/Products'

export default function ShowProducts() {

    return (
        <Products productsURL={'https://dummyjson.com/products'} pageName={"Products"}/>
    )
}
