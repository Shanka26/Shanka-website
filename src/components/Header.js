import React, {useRef, useState}  from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid,IconButton,Box, Modal, Slide } from '@mui/material'
import shankaLight from '../res/shanka-logo2.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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

const menuHead={
  fontSize:40,
  color:'white',
  '&:hover':{
    color:'secondary.main',
    
  }
  // fontFamily:'Edu VIC WA NT Beginner',
  // fontWeight:700,
}

const menuStyle = {
  position: 'absolute',
  width: {xs:'100%'},
  height: '60%',
  backgroundColor: 'primary.main',
  
  justifyContent:'center',
  alignItems:'flex-start',
  // paddingTop:24,
  // display: 'flex',
  marginBottom:12
 
};

let menuButton={
  color:'primary.mid',
  fontSize:{xs:24,sm:24,md:24}
}

const headButton={
  fontSize:20,
  color:'primary.light',
  
  // fontWeight:700,
}
const Header = ({about,projects,contact}) => {
  let [menuOpen,setMenuOpen]=useState(false)
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

           <Grid item container xs={9} justifyContent="flex-end" >
           <Stack direction='row' sx={{flexDirection:'row',display:{xs:'none',lg:'flex'}}}>
              <Button sx={buttonStyle}   onClick={()=>{scrollTo(about)}}>About</Button>
              <Button sx={buttonStyle} onClick={()=>{scrollTo(projects)}}>Work</Button>
              <Button sx={buttonStyle} onClick={()=>{scrollTo(contact)}}>Contact</Button>
            </Stack>

            <IconButton sx={{display:{xs:'flex',lg:'none'}}} onClick={()=>{setMenuOpen(!menuOpen)}}>
                <MenuIcon sx={menuButton} />
            </IconButton>

           </Grid>
         </Grid>
       
            
            
        
       
       </Toolbar>
       <Modal
        open={menuOpen}
        onClose={()=>setMenuOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Slide direction="down" in={menuOpen}  >
        <Box flexDirection='column' backgroundColor= 'primary.light' sx={menuStyle}>
          <Box display='flex' justifyContent="flex-end" alignItems='flex-start' height='20vh'>
          <IconButton onClick={()=>{setMenuOpen(false)}} sx={{margin:1}}>
            <CloseIcon sx={{fontSize:24,color:'primary.light'}}/>
          </IconButton>
        </Box>
        <Box >
          <Stack 
          // sx={{position: 'absolute',top:'10%'}}
          >
          <Button  sx={{...menuHead}} onClick={()=>{scrollTo(about)}}>Home</Button>
            <Button sx={{...menuHead}} onClick={()=>{scrollTo(projects)}}>About</Button>
            
            <Button sx={{...menuHead}}  onClick={()=>{scrollTo(contact)}}>Shop</Button>
            
          </Stack>
        </Box>
        </Box>
        </Slide>
      </Modal>
       
   </AppBar>
  )
}

export default Header