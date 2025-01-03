import React from 'react'

export default function Loader() {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  )
}
