import React from 'react'
import {  AppBar,Typography, Toolbar, Stack,Button, Grid, Box } from '@mui/material'

const Footer = () => {
  return (
    <AppBar position="sticky" sx={{background:"linear-gradient(to bottom,#333333,#006666)",
    boxShadow:0,padding:{xs:6}}}>
       <Toolbar sx={{display:'flex'}}>

         <Box width={1}>

           
              <Typography align='center' variant="h6" color='secondary.light'>
              {"Copyright © "} Shanka Tech - Created by Shanka
              </Typography>
              <Typography align='center' variant="h6" color='secondary.light'>shamarl26leonard@gmail.com</Typography>
           

          
         </Box>
       
            
            
        
       
       </Toolbar>
       
   </AppBar>
  )
}

export default Footer