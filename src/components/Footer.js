import React from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid, Box } from '@mui/material'



let textStyle={
  color:'secondary.light',
  fontSize:{xs:14,sm:18,md:20,lg:22}
}
let emailStyle={
  color:'secondary.light',
  fontSize:{xs:14,sm:18,md:20,lg:26}
}
const Footer = () => {
  return (
    <AppBar position="sticky" sx={{background:"linear-gradient(to bottom,#333333,#006666)",
    boxShadow:0,paddingX:{xs:1},paddingY:{xs:8,md:8}}}>
       <Toolbar sx={{display:'flex'}}>

         <Box width={1} alignItems="center">

           
              <Typography align='center' variant="h6" sx={textStyle}>
              {"Copyright © "} Shanka Tech - Created by Shanka
              </Typography>
              <Typography align='center' variant="body1" sx={textStyle}>shamarl26leonard@gmail.com</Typography>
           

          
         </Box>
       
            
            
        
       
       </Toolbar>
       
   </AppBar>
  )
}

export default Footer