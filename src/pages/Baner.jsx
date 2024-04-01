import React from 'react'
import trash from '../assets/trash.svg'
import upload from '../assets/Icon upload.svg'

import Baners from '../assets/Baners.jpg'
import CategoryReport from "../components/CategoryReport";

const Baner = () => {

  return (
    <div className="root-adm">
      <div className="user-content">
        <div className="header">
          <CategoryReport />
        </div>
        
        <div className='Baner'>
        <img src={trash} alt="pencil" className="trash" />
        <img className="img" src={Baners} alt="" />
        </div>
        <div className='Baner'>
        <img src={trash} alt="pencil" className="trash" />
        <img className="img"  src={Baners} alt="" />
        </div>

        <label>
        <div className='Baner_2'>
          
          <input type="file" className='file'/>
          <img src={upload} alt=""  />
          <h1 className='Baner_h1'>прекрепить постер пива</h1>
        </div>
        </label>
        

        <button className="button_2">Добавить</button>
        
      </div>
    </div>
  );

  
}

export default Baner
