import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'


function Home() {

  const acess_token = "858|0jKnpyUcEBbX4NDXBx7RTsUeBFE1WtLbK4xT1HID";
  const api_url = "https://reservation-system.sabeelan.com/reservation-system/api/en/banks?id=2&name=HSB&accountNumber=2222&isActive=Active"
 
  const authaxios = axios.create({
    baseURL : api_url,
    headers : {
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
  })
  const [banks , setBanks] = useState([]);

  const fetchData = useCallback(async()=>{
    try {
      const res = await authaxios.get("https://reservation-system.sabeelan.com/reservation-system/api/en/banks");
      console.log(res)
      setBanks(res.data.data)
      console.log(banks)
    }
    catch(err){
      console.log(err)
    }
  })

  useEffect (()=>{
    fetchData()
  },[])
  // useEffect (()=>{
  //   const res = await authaxios.get("https://reservation-system.sabeelan.com/reservation-system/api/en/banks?id=2&name=HSB&accountNumber=2222&isActive=Active");
  //   console.log(res)
  //   setBanks(res.data)
  // },[])
  return (
    <>
      {banks.map((x)=>{
        return(
          <div>
            <h1>{x.name}</h1>
          </div>
        )
      })}
    </>
  )
}

export default Home