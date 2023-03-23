import React from 'react'
import "./Product.css"
import { BsHeart } from 'react-icons/bs';
import {MdAddShoppingCart} from "react-icons/md"
function Product() {
    const DATA = [
        {
          id: "pro-1",
          name: "Notebook HP ...",
          price: 2_9500_000,
          img: "https://images.uzum.uz/cfvjbt7hj8j9g698psj0/original.jpg",
        },
        {
          id: "pro-2",
          name: "Notebook Lenovo...",
          price: 2_710_000,
          img: "https://images.uzum.uz/cg87067g49devoaajqfg/original.jpg",
        },
        {
          id: "pro-3",
          name: "Notebook Lenovo ",
          price: 3_055_000,
          img: "https://images.uzum.uz/cehnjgqvtie1lhbfak2g/original.jpg",
        },
        {
          id: "pro-4",
          name: "Smartphone Xiaomi Redmi Note 11S ",
          price: 2_600_000,
          img: "https://images.uzum.uz/ceva21gl08k0o9qhjpp0/original.jpg",
        },
        {
          id: "pro-5",
          name: "G'ilof, shaffof, silicone, iPhone 7/8 SE/XR/X/XS/11/12/13 Pro/14 uchun",
          price: 13_000,
          img: "https://images.uzum.uz/cf8q07avtie1lhbhgfv0/original.jpg",
        },
        {
          id: "pro-6",
          name: "Idish yuvish uchun suyuqlik",
          price: 8000,
          img: "https://images.uzum.uz/cg7bvmnhj8j9g699p9eg/t_product_540_high.jpg#1678981355930",
        },
        {
          id: "pro-7",
          name: "Klassik kola + shakarsiz Kola + brendlangan stakan",
          price: 22_000,
          img: "https://images.uzum.uz/cg8mo37g49devoaalmgg/t_product_540_high.jpg#1678981355950",
        },
        {
          id: "pro-8",
          name: "Erkaklar futbolkasi Base",
          price: 39_000,
          img: "https://images.uzum.uz/cg6435ng49devoaa9np0/t_product_540_high.jpg#1678981355954",
        },
        {
          id: "pro-9",
          name: "Xurmo Date Bam, 650g",
          price: 22_000,
          img: "https://images.uzum.uz/cg63rsvg49devoaa9m00/t_product_540_high.jpg#1678981355960",
        },
        {
          id: "pro-10",
          name: "Bolalar krosovkalari",
          price: 195_000,
          img: "https://images.uzum.uz/cg7ej0nhgiov1qiebn3g/t_product_540_high.jpg#1678981355969",
        },
      ];
  return (
    <div>
            <div className="data">
        {DATA?.map((item, inx) => (
          <div key={inx} className="data__item">
            <div className="data__heart">
              <BsHeart />
            </div>
            <img className='pro__img' src={item?.img} alt="" />
            <p className='pro__title'>
              {item?.name.length > 30
                ? item.name.slice(0, 25) + "..."
                : item.name}
            </p>
            <p className="discount">{Math.floor(item?.price / 10)} so'm/oyiga</p>
            <div className="prices">
            <del className='dis__price'>{item?.price + 300} so'm</del>
            <p className='pro__price'>{item?.price}so'm</p>
            </div>
            <MdAddShoppingCart className="pro__cart"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product