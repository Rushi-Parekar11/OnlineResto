import React from 'react'
import Foodcard from './Foodcard.js'
import "../Style/Fooditem.scss"

function Fooditem({cartselect,apidata}) {
  return (
    <div className='allinone'>

       {apidata.map((data) => {
        return <Foodcard data={data} key={data.id} cartselect={cartselect} />
       })}  
      
    </div>
  )
}

export default Fooditem
