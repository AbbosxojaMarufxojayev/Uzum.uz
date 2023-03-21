import React from 'react'
import Banner from '../../components/banner/Banner'
import Product from '../../components/navbar/product/Product'

function Home() {
  return (
    <div className='container'>
        <Banner/>
        <Product/>
    </div>
  )
}

export default Home