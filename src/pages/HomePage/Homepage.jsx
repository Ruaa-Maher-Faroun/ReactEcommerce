import React from 'react'

import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import ShowProducts from '../../components/ShowProduct/ShowProduct';

export default function Homepage() {
  return (
    <>
      <Header />
      <ShowProducts />
    </>
  )
}
