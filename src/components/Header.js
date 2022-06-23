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
    
   <AppBar position="sticky" sx={{backgroundColor:'rgba(0,0,0,0.4)',boxShadow:4,padding:0}}>
       <Toolbar sx={{display:'flex'}}>

         <Grid container>

           <Grid item xs={3}>
              <Typography color='primary.mid' variant="h5" fontSize={48}>Logo</Typography>
           </Grid>

           <Grid item container xs={9} justifyContent="flex-end">
           <Stack direction='row' gap={2}>
              <Button sx={{color:'primary.mid'}} width={1} onClick={()=>{scrollTo(about)}}>About me</Button>
              <Button sx={{color:'primary.mid'}} onClick={()=>{scrollTo(projects)}}>My projects</Button>
              <Button sx={{color:'primary.mid'}} onClick={()=>{scrollTo(contact)}}>Get in touch</Button>
            </Stack>
           </Grid>
         </Grid>
       
            
            
        
       
       </Toolbar>
       
   </AppBar>
  )
}

export default Header