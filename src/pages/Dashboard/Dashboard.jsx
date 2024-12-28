import React from 'react'

export default function Dashboard() {
    return (
        <section className=' text-center bg-light py-4 '>
            <div className="container">
                <h2 className='mb-5'>Add new Product</h2>
                <div className="inputs d-flex flex-column justify-content-center align-items-center w-100">
                    <div class="form-floating mb-3 w-50">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Product Name" />
                        <label for="floatingInput">Product Name</label>
                    </div>
                    <div class="form-floating  mb-3 w-50">
                        <input type="number" class="form-control" id="floatingPassword" placeholder="stock" />
                        <label for="floatingPassword">Stock</label>
                    </div>
                    <div class="form-floating  mb-3 w-50">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Category" />
                        <label for="floatingPassword">Category</label>
                    </div>
                    <div class="form-floating  mb-3 w-50">
                        <textarea class="form-control" id="floatingPassword" placeholder="Password"></textarea>
                        <label for="floatingPassword">Description</label>
                    </div>

                </div>
            </div>
        </section>
    )
};
