import React, {useRef}  from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid } from '@mui/material'
import shankaLight from '../res/shanka-logo2.png'

const buttonStyle = {
  color: 'primary.mid',
  fontSize:{xs:9,sm:16,md:20,lg:24},
  height:{xs:'64px',md:'80px'},
  paddingX:{xs:1,sm:2,md:4},
  borderRadius:0,
  '&:hover':{
    backgroundColor:'rgba(50,50,50,0.5)',
    borderBottom: 4,
    borderColor:'primary.mid'
  }
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
    
   <AppBar position="sticky" sx={{backgroundColor:'rgba(0,0,0,0.5)',boxShadow:4,margin:0, padding:{xs:0,md:0}}}>
       <Toolbar sx={{display:'flex', margin:0,padding:0}}>

         <Grid container>

           <Grid container item xs={3}  alignItems='center'>
              <img width={64} src={shankaLight} onClick={()=>{scrollTo(about)}}/>
           </Grid>

           <Grid item container xs={9} justifyContent="flex-end">
           <Stack direction='row' >
              <Button sx={buttonStyle}   onClick={()=>{scrollTo(about)}}>About me</Button>
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