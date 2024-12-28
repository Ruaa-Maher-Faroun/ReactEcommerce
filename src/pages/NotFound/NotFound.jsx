import React from 'react'
import notFound from '../../assets/notFound.png'

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={notFound} alt="" className='w-100'/>
    </div>
  )
}
