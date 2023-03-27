import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname] = useState("Ponnu")

    const changeName = () =>{
        setFname("Ambili")
    }

  return (
    <div>
        <Typography>Meera {fname}</Typography>
        <br></br>
        <Button variant='contained'onClick={changeName}>Change</Button>
      
    </div>
  )
}

export default StateBasics
