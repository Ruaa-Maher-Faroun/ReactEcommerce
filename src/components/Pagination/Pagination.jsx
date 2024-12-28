import React, { useState } from 'react';
export default function Pagination({data}) {
    const [curPage,setCurPage] = useState(1);
    // const {data} = useFetch('https://dummyjson.com/products?limit=8&skip=0');
    // const {data2} = useFetch('https://dummyjson.com/products?limit=8&skip=8');
    // const {data3} = useFetch('https://dummyjson.com/products?limit=8&skip=16');
    // const {data4} = useFetch('https://dummyjson.com/products?limit=8&skip=24');
    const pageNum = Math.round(data.total / 8);
    console.log(pageNum);
    
    // console.log("data");
    // console.log(data);
    // console.log("data2");
    // console.log(data2);
    // console.log("data3");
    // // console.log(data3);
    // console.log("data4");
    // console.log(data4);
    const changePagination = (targetPage) => {
                setCurPage(targetPage);
    }
    return (
        <nav aria-label="..." className='w-100 my-5 d-flex justify-content-center'>
            <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>{
                    Array.apply(0, Array(10)).map((x,i)=>{

                         return  (
                         <li className={`page-item ${i === curPage? "active": ""}`}>
                            <a onClick={changePagination} className="page-link" href="#">{i+1}</a>
                        </li>);
                    })
                }
          
              
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>

    )
}
