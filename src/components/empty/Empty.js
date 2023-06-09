import React from 'react'
import "./Empty.css"


function Empty(props) {
    let {url, title, desc, btn} = props
  return (
    <div className='empty'>
        <img src={url} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>{btn}</button>
    </div>
  )
}

export default Empty