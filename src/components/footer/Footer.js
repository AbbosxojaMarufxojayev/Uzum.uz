import React from 'react'
import "./Footer.css"
import google from "../../assets/google.svg"
import appStore from "../../assets/appStore.svg"
import { BsInstagram, BsTelegram, BsYoutube, BsFacebook } from "react-icons/bs" 

function Footer() {
  return (
    <div className='container footer'>
        <div className="footer__columns">
            <div className="col-1">
                <h4>Biz haqimizda</h4>
                <p style={{cursor: "pointer"}}>Topshirish punktlari</p>
                <p style={{cursor: "pointer"}}>Vakansiyalar</p>
            </div>
            <div className="col-2">
                <h4>Foydalanuvchilarga</h4>
                <p style={{cursor: "pointer"}}>Biz bilan bog'lanish</p>
                <p style={{cursor: "pointer"}}>Savol - javob</p>
            </div>
            <div className="col-3">
                <h4>Tadbirkorlarga</h4>
                <p style={{cursor: "pointer"}}>Uzumda soting</p>
                <p style={{cursor: "pointer"}}>Sotuvchini kabinetiga kirish</p>
            </div>
            <div className="col-4">
                <h4>Ilovani yuklab olish</h4>
                <div className="img__part__foo">
                    <img src={appStore} alt="" />
                    <img src={google} alt="" />
                </div>
                <h4 className='social'>Uzum ijtimoiy tarmoqlarda</h4>
                <div className="icons__part__foo">
                    <BsInstagram className='ins'/>
                    <BsTelegram className='telegram'/>
                    <BsYoutube className='tube'/>
                    <BsFacebook className='face'/>
                </div>
            </div>
        </div>
        <hr className="line__footer" />
        <div className="last__part__foo">
            <div className="left__part">
                <p>Maxfiylik kelishuvi</p>
                <span>Foydalanuvchi kelishuvi</span>
            </div>
            <div className="right__part">
                <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
            </div>
        </div>
    </div>
  )
}

export default Footer