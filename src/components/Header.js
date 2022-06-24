import React, {useRef}  from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid } from '@mui/material'


const buttonStyle = {
  color: 'primary.mid',
  fontSize:{xs:9,sm:16,md:20,lg:24}
}
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
    
   <AppBar position="sticky" sx={{backgroundColor:'rgba(0,0,0,0.4)',boxShadow:4,padding:2}}>
       <Toolbar sx={{display:'flex'}}>

         <Grid container>

           <Grid item xs={3}>
              <Typography onClick={()=>{scrollTo(about)}} color='primary.mid' variant="h5" fontSize={32}>Logo</Typography>
           </Grid>

           <Grid item container xs={9} justifyContent="flex-end">
           <Stack direction='row' gap={{xs:0,sm:1,md:4}}>
              <Button sx={buttonStyle} width={1} onClick={()=>{scrollTo(about)}}>About me</Button>
              <Button sx={buttonStyle} onClick={()=>{scrollTo(projects)}}>My projects</Button>
              <Button sx={buttonStyle} onClick={()=>{scrollTo(contact)}}>Get in touch</Button>
            </Stack>
           </Grid>
         </Grid>
       
            
            
        
       
       </Toolbar>
       
   </AppBar>
  )
}

export default Header