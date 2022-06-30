import React, {useRef}  from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid } from '@mui/material'
import shankaLight from '../res/shanka-logo2.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const buttonStyle = {
  color: 'primary.mid',
  fontSize:{xs:13,sm:16,md:20,lg:24},
  height:{xs:'48px',md:'80px'},
  paddingX:{xs:1,sm:2,md:4},
  borderRadius:0,
  '&:hover':{
    backgroundColor:'rgba(50,50,50,0.5)',
    borderBottom: 4,
    borderColor:'primary.mid'
  }
}
const Header = ({about,projects,contact}) => {
  const size_theme = useTheme()
  const md_up = useMediaQuery(size_theme.breakpoints.up('md'));

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
       <Toolbar sx={{display:'flex', margin:0,paddingX:2}}>

         <Grid container>

           <Grid container item xs={3}  alignItems='center'>
              <img width={md_up?64:40} src={shankaLight} onClick={()=>{scrollTo(about)}}/>
           </Grid>

           <Grid item container xs={9} justifyContent="flex-end">
           <Stack direction='row' >
              <Button sx={buttonStyle}   onClick={()=>{scrollTo(about)}}>About</Button>
              <Button sx={buttonStyle} onClick={()=>{scrollTo(projects)}}>Projects</Button>
              <Button sx={buttonStyle} onClick={()=>{scrollTo(contact)}}>Contact</Button>
            </Stack>
           </Grid>
         </Grid>
       
            
            
        
       
       </Toolbar>
       
   </AppBar>
  )
}

export default Header