import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[num, setnum]=useState(0)
    const inc = () => {
        setnum(++num)   
     }
    const dec = () => {
        setnum(num-1)
    }
  return (
    <div>
        <Typography>{num}</Typography>
        <br></br>
        <Button variant='contained'onClick={inc}>+</Button>
        <Button variant='contained'onClick={dec}>-</Button>


      
    </div>
  )
}

export default Counter
