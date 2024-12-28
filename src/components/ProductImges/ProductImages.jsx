import React from 'react'

export default function ProductImages({data}) {
  return (
    <>
    <div className="other-imgs d-flex flex-column ">
    {data.images.map((img,i) => {
        return <img key={i} src={img} alt="" className={`border ${i==0? "border-dark": ""} me-2 rounded mb-2`} style={{width: "100px",
            height: "100px",objectFit:"contain"}}/>;
        })}
  </div>
  <div className="displayed-img border">

  <img src={data.thumbnail} className="rounded" alt="" style={{width:"400px"}}/>
  <div className="title p-3">

  <h3>{data.title}</h3>
  <span className='badge bg-success me-2'>{data.category}</span>
  </div>
  </div>
        </>
  )
}
