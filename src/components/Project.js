import { Chip, Grid, Paper, Typography, Stack, Button, Box } from '@mui/material'
// import Link from 'react-router-dom'
import React,{useState} from 'react'
import pomonotoScreen from '../res/pomonotoScreen2.webp'
import Image from 'mui-image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Image from 'material-ui-image'





const style = {
    
    width:'380px',
    height:'460px',
    margin:2,
    boxShadow:0,
    borderRadius:4,
    backgroundColor:'secondary.main',
    '&:hover':{
        backgroundColor:'primary.mid',
        // backgroundColor: rgba(0,0,0,0.25),
        backgroundImage: `url()`, 
        boxShadow:20,
    }
};

const Project = ({title,description,image,tags,link}) => {

    let [visible,setVisible] = useState("none")
    let [imgVisible,setImgVisible] = useState("flex")
    

  return (
    <Paper sx={style} onMouseEnter={()=>{setVisible("flex");setImgVisible("none")}}
     onMouseLeave={()=>{setVisible("none");setImgVisible("flex")}}>
        
        {/* <img src={pomonotoScreen}/> */}
        <Grid container direction='column' height={1}>
        {/* <Image src={pomonotoScreen}/> */}
            <Grid container item xs={3} alignItems='center' justifyContent='center'>
                <Typography color={visible=="none"?'secondary.dark':'secondary.light'} fontSize={'2.3em'} variant='h3' align ='center'>{title}</Typography>
            </Grid>
            <Grid container item  alignItems='flex-start' xs={9}  display={imgVisible}>
                <Box >
                    <Image src={image} shift="top" duration={700}  width ={380} height={276}
                    distance={400} shiftDuration={400} showLoading fit="fill"/>
                </Box>
                
            </Grid>
            <Grid container item alignItems='flex-start' xs={4} sx={{ display:visible,px:4}}>
                <Typography variant='body1' color='secondary.light' align ='center'>{description}</Typography>
            </Grid>
            
            <Grid container direction='column' item  xs={4} alignItems='center' justifyContent='space-around' sx={{display:visible}}> 
            <Grid container spacing ={1} justifyContent='center' px={8}>

                {tags.map((e,i,)=>(
                    <Grid item>
                        <Chip sx={{backgroundColor:'rgba(0,0,0,.2)',color:'secondary.light'}} label = {e}/>
                    </Grid>
                    
                    
                ))}

            </Grid> 
                
                <Button variant='contained' sx={{backgroundColor:'primary.dark'}} target="_blank" href={link}>Visit Site<ArrowForwardIosIcon  sx={{pl:1, fontSize:16, }} /></Button>
            </Grid>
            
        </Grid>
    </Paper>
  )
}

export default Project