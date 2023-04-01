import React from 'react'
import Empty from '../../components/empty/Empty'
import cat from '../../assets/cat.png'
import "./Cart.css"

function Cart() {
  return (
    <div className='empty'>
        <Empty
        url={cat}
        title="Savatda hozircha mahsulot yoʻq"
        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        btn="Akkountga kirish"/>
    </div>
  )
}

export default Cart