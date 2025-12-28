import React from 'react'
import Sidebar from './Sidebar'

const CardList =({cards})=> {

  const [updateDriver,setUpdateriver]=useState();
  const [changeAvailability,setChangeAvailability]=useState();



  return (



    <div>{cards}</div>
  )
}

export default CardList