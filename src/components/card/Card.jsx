import React from 'react';
import Item from '../item/Item';
import './card.css';

const Card = ({data}) => {
  
  return (

        <div className='cards'>
          <div className='bars'></div>
            <h1 className='lang-title'>Language</h1>  
            { <div className='lang-div'>

              {data.map((item,index)=>{

                return <Item card={item} key={index}/>
                
              })}
            </div>}
        </div>
  )
}

export default Card