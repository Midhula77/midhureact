 import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
 
 const Statetask = () => {
    var[pagename,setPagename] = useState("")
    const changeName = () => {
        setPagename("Home Page")
    }
        const changeGallery = () => {
            setPagename("Gallery Page")
        }
            const changeContact= () => {
                setPagename("Contact Page")
        
    

    }

   return (
     <div>
        <br></br>
       <Button variant='contained' color='primary'onClick={changeName}>Home Page</Button>
       <Button variant='contained' color='secondary'onClick={changeGallery}>Gallery Page</Button>
       <Button variant='contained' color='error'onClick={changeContact}>Contact Page</Button>
       <Typography>Welcome to{pagename}</Typography>
     </div>
   )
 }
 
 export default Statetask
 