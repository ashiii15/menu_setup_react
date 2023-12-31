import React from 'react';

const Menu = ({item}) => {
  return <div className='section-center'>
    {
      item.map((menuItems)=>{
        const {id,title,category,price,img,desc} = menuItems
        return <article key={id} className='menu-item'>
          <img src={img} alt={title} className='photo'></img>
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4>${price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
          </div>
        </article>
      })
    }


  </div>;
};

export default Menu;
