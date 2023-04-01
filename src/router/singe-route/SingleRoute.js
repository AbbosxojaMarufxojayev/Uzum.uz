import React from 'react'
import { useParams } from "react-router-dom"
import { DATA } from "../../components/navbar/product/Product"

function SingleRoute() {
    let params = useParams()
    const oneItem = DATA?.find((item) => item.id === params.id)
    console.log(oneItem);
    if( !oneItem ){
        return <h1>404</h1>
    }

    return (
    <div className='container'>
        <h2>SingleRoute</h2>
        <img src={oneItem?.img} width={400} alt="" />
        <h2>{oneItem?.name}</h2>
    </div>
  )
}

export default SingleRoute