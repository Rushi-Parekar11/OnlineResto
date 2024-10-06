import React, { useState } from 'react'
import "../Style/Category.scss"

function Category({category}) {


  const [coloron, setcoloron] = useState(1);




  return (
    <>
    <div className="cat-main">
    <h3 className='cat-head'>Find The Best Food</h3>

    <div className="btngroup">
        <span className='spancat' style={{backgroundColor:coloron===1 ? '#22c55e':''}}  onClick={()=>{category('All');setcoloron(1)}} >All</span>
        <span className='spancat' style={{backgroundColor:coloron===2 ? '#22c55e':''}} onClick={()=>{category('Lunch');setcoloron(2)}}>Lunch</span>
        <span className='spancat' style={{backgroundColor:coloron===3 ? '#22c55e':''}} onClick={()=>{category('Breakfast');setcoloron(3)}}>Breakfast</span>
        <span className='spancat' style={{backgroundColor:coloron===4 ? '#22c55e':''}} onClick={()=>{category('Dinner');setcoloron(4)}}>Dinner</span>
        <span className='spancat' style={{backgroundColor:coloron===5 ? '#22c55e':''}} onClick={()=>{category('Snacks');setcoloron(5)}}>Snacks</span>
    </div>

    </div>
    </>
  )
}

export default Category
