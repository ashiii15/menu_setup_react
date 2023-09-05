import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (
  <div className='btn-container'>
    {
      categories.map((Category,index)=>{
        return ( 
        <button className='filter-btn'key={index} onClick={()=>filterItems(Category)} type='button'>
          {Category}
        </button>
        ) 
      })
    }

  </div>
  
  )
};

export default Categories;
