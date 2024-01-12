import React from 'react'
import { TbMusicSearch } from "react-icons/tb";


const Header = () => {
  return (
    <div className='Hea-i'>
      <div>
       <img src="https://nhac.vn/web-v2/new-image/logo.png" alt="" />
      </div>
      
      <div>
       <input className='Input-i' type="Từ Khóa Tìm Kiếm" />
       <button className='But-i'><TbMusicSearch /></button>
      </div>
      <div>
        <ul className='Ul-i'>
          <li className='Li-i'>Sách</li>
          <li className='Li-i'>|</li>
          <li className='Li-i'>Video</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header