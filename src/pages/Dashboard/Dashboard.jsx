import React from 'react'

export default function Dashboard() {
    return (
        <section className=' text-center bg-light py-4 '>
            <div className="container">
                <h2 className='mb-5'>Add new Product</h2>
                <div className="inputs d-flex flex-column justify-content-center align-items-center w-100">
                    <div className="form-floating mb-3 w-50">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Product Name" />
                        <label forhtml="floatingInput">Product Name</label>
                    </div>
                    <div className="form-floating  mb-3 w-50">
                        <input type="number" className="form-control" id="floatingPassword" placeholder="stock" />
                        <label forhtml="floatingPassword">Stock</label>
                    </div>
                    <div className="form-floating  mb-3 w-50">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Category" />
                        <label forhtml="floatingPassword">Category</label>
                    </div>
                    <div className="form-floating  mb-3 w-50">
                        <textarea className="form-control" id="floatingPassword" placeholder="Password"></textarea>
                        <label forhtml="floatingPassword">Description</label>
                    </div>

                </div>
            </div>
        </section>
    )
};
