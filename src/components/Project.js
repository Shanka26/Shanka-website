import { Chip, Grid, Paper, Typography, Stack, Button, Box } from '@mui/material'
// import Link from 'react-router-dom'
import React,{useState} from 'react'
import pomonotoScreen from '../res/pomonotoScreen2.webp'
import Image from 'mui-image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Image from 'material-ui-image'





const style = {
    
    width:'360px',
    height:'450px',
    margin:2,
    boxShadow:0,
    borderRadius:8,
    '&:hover':{
        backgroundColor:'primary.light',
        // backgroundColor: rgba(0,0,0,0.25),
        backgroundImage: `url()`, 
        boxShadow:20,
    }
};

const Project = ({title,image,tags,link}) => {

    let [visible,setVisible] = useState("none")
    let [imgVisible,setImgVisible] = useState("flex")
    

  return (
    <Paper sx={style} onMouseEnter={()=>{setVisible("flex");setImgVisible("none")}}
     onMouseLeave={()=>{setVisible("none");setImgVisible("flex")}}>
        
        {/* <img src={pomonotoScreen}/> */}
        <Grid container direction='column' height={1}>
        {/* <Image src={pomonotoScreen}/> */}
            <Grid container item xs={3} alignItems='center' justifyContent='center'>
                <Typography variant='h3' align ='center'>{title}</Typography>
            </Grid>
            <Grid container item  alignItems='flex-start' xs={9}  display={imgVisible}>
                <Box >
                    <Image src={image} shift="top" duration={700} 
                    distance={400} shiftDuration={400} showLoading fit="contain"/>
                </Box>
                
            </Grid>
            <Grid container item alignItems='center' xs={5} sx={{ display:visible,px:8}}>
                <Typography variant='h6' align ='center'>This is a website about websites used to make wesites that can create websites for website purposes</Typography>
            </Grid>
            
            <Grid container direction='column' item  xs={4} alignItems='center' justifyContent='space-evenly' sx={{display:visible}}> 
            <Stack direction='row' gap={2}>

                {tags.map((e,i,)=>(
                    <Chip label = {e}/>
                ))}

            </Stack> 
                
                <Button variant='contained' target="_blank" href={link}>Visit Site<ArrowForwardIosIcon  sx={{pl:1, fontSize:16}} /></Button>
            </Grid>
            
        </Grid>
    </Paper>
  )
}

export default Project