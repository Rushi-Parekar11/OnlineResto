import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import Fooditem from '../Components/Fooditem'
import Footercomp from '../Components/Footercomp'
import Cart from '../Components/Cart'
import apidata from "../Data/FoodData.js"
import { FaCartShopping } from "react-icons/fa6";
import {motion} from "framer-motion"
import {fadeIn} from "../Variants.js"
import "../Style/Home.scss"



function Home() {
  const[cart,setcart]=useState([]);


  const cartselect=(data)=>{
  let ispresent=false;
  
  cart.forEach((product)=>{
    if(data.id===product.id)
      ispresent=true
  })
  if (ispresent)
    return
  setcart([...cart,data])
  }


  const [categorySort,setcategorySort]=useState(apidata)

  const category=(seleted)=>{
    if(seleted==="All"){
      setcategorySort(apidata)
      return
    }

    const just=apidata.filter((ele)=>{
      return ele.category===seleted
    })
    setcategorySort(just)

  }


  const [condition,setcondition]=useState(true)

  function conditionfun(){setcondition(!condition)}


  return (
    <>
        <Navbar/>
        <Category category={category}/>
        <Fooditem cartselect={cartselect} apidata={categorySort}/>
        <Footercomp/>
      
        <span className="conditional" >
        {condition ? <motion.div initial='hidden' variants={fadeIn('up',0.3)} whileInView={'show'} viewport={{once:false,amount:0.7}}  className="carticon"><FaCartShopping style={{height:'30px',width:'30px',color:'black'}} onClick={conditionfun}/></motion.div>
        :<Cart cart={cart} conditionfun={conditionfun} /> }
        
        
        </span>
    </>
  )
}

export default Home
