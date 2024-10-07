import React, { useState } from 'react'
import "../Style/Cart.scss"
import "../Components/Ordercart"
import { RxCrossCircled } from "react-icons/rx";
import Ordercart from '../Components/Ordercart';
import {motion} from "framer-motion"
import {fadeIn} from "../Variants.js"


function Cart({cart,conditionfun}) {

  function removeEntryById(id) {
      console.log(id)
}

  const totalPrice = cart.reduce((acc, dataa) => acc + dataa.price, 0);

  return (
    <>
      <motion.div   initial='hidden' variants={fadeIn('left',1.2)} whileInView={'show'}  viewport={{once:false,amount:0.7}}
 id='cartbox' className="cartmainbox">

        <div className="cartmain">
          <h4 className='cartnm' >My Order</h4>
          <div className="noicon"> <RxCrossCircled className='noicon1' onClick={conditionfun} /></div>
        </div>

        <div className="orderitem">
        
      {
        cart.length===0 ?(
          <h2 style={{overflow:'hidden'}}>Cart is empty !</h2>
        ) : (
          cart.map((cartdata)=>(
          <Ordercart cartdata={cartdata} key={cartdata.id} getidfordelet={removeEntryById}/>
        ))
        )
      }
        
          
          

        </div>

        <div className="totalprice">
          Item:{cart.length} <br />
          Total Amount:{totalPrice} <br />
          <hr />

          <button className="Checkout">Checkout</button>
        </div>


      </motion.div>
      cart
    </>
  )
}

export default Cart
