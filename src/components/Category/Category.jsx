import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({ icon, name }) {    
    return (

        <div className="card border flex-wrap p-2 my-4 me-4 col-8 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center flex-row gap-2 bg-light" style={{ fontSize: "34px" }}>
            <Link to={`/products/category/${name.toLowerCase()}`} className='text-dark d-flex justify-content-center align-items-center flex-row gap-2 '>
            <div>
            <FontAwesomeIcon icon={icon} />

            </div>
            <div>
            <h5 className="mt-2 text-capitalize">{name.split("-").join(" ")}</h5>

            </div>
            </Link>

        </div>

    )
}
