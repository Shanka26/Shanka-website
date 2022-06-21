import React, {useRef}  from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid } from '@mui/material'



const Header = ({about,projects,contact}) => {
  

  let scroll = (section)=>{
    const anchor = document.querySelector(section)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  let scrollTo = (ref)=> {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    
   <AppBar position="sticky" sx={{backgroundColor:'transparent',boxShadow:0,padding:0}}>
       <Toolbar sx={{display:'flex'}}>

         <Grid container>

           <Grid item xs={4}>
              <Typography variant="h5" fontSize={{xs:48,md:60}}>Logo</Typography>
           </Grid>

           <Grid item container xs={4} justifyContent="center">
           <Stack direction='row' gap={4}>
              <Button onClick={()=>{scrollTo(about)}}>About me</Button>
              <Button onClick={()=>{scrollTo(projects)}}>My projects</Button>
              <Button onClick={()=>{scrollTo(contact)}}>Get in touch</Button>
            </Stack>
           </Grid>
         </Grid>
       
            
            
        
       
       </Toolbar>
       
   </AppBar>
  )
}

export default Header