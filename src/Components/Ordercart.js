import React from 'react'
import "../Style/Ordercart.scss"
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function Ordercart({cartdata,getidfordelet}) {
  return (
    <>
    <div className="ordercartmain">
      <div className="imgdiv"><img src={cartdata.img} alt="" height={'46px'} width={'46px'}/></div>
      <div className="ordername">{cartdata.name.slice(0,13)}... <br /><br /><strong style={{color:'orange',marginTop:'10px'}}>₹{cartdata.price}</strong></div>
      <div className="iconadd">
      <div className="iconfordelet" ><RxCross2 onClick={()=>getidfordelet(cartdata.id)}/></div>
      <div className="iconfornumber"><FaPlus style={{height:'10px'}}  /><span style={{fontSize:'small',border:'1px solid gray',padding:'0px 5px 0px 5px',borderRadius:'5px',margin:'3px'}}>0</span><FaMinus style={{height:'10px'}}  /></div>
        </div>
    </div>

    </>
  )
}

export default Ordercart
