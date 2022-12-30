import { Chip, Grid, Paper, Typography, Stack, Button, Box } from '@mui/material'
// import Link from 'react-router-dom'
import React,{useState} from 'react'
import pomonotoScreen from '../res/pomonotoScreen2.webp'
import Image from 'mui-image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Image from 'material-ui-image'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';







const Project = ({title,description,image,tags,link}) => {
    const size_theme = useTheme()
    const md_up = useMediaQuery(size_theme.breakpoints.up('md'));

    let [visible,setVisible] = useState("none")
    let [imgVisible,setImgVisible] = useState("flex")
    let [entered,setEntered] = useState(false)

    const style = {
    
        width:{xs:300,md:380},
        height:{xs:340,md:420},
        margin:2,
        boxShadow:entered?8:0,
        display:image?'flex':'none',
        borderRadius:2,
        backgroundColor:entered?'primary.mid':'secondary.dark',
      
    };
    

  return (
    <Paper sx={style} onMouseEnter={()=>{if(link!=='null'){setEntered(true);setVisible("flex");setImgVisible("none")}}}
     onMouseLeave={()=>{setVisible("none");setImgVisible("block");setEntered(false)}}>
        
        {/* <img src={pomonotoScreen}/> */}
        <Grid container direction='column'  alignItems='center' height={1}>
        {/* <Image src={pomonotoScreen}/> */}
            <Grid container item xs={1} sx={{p:1,pb:entered?1:4}} alignItems='center' justifyContent='center'>
                <Typography color={!entered?'secondary.light':'secondary.light'} variant='h4' align ='center'>{title}</Typography>
            </Grid>
            <Grid container item alignItems='flex-start' justifyContent='center' xs={9} display={imgVisible}>
                <Box alignItems='center' justifyContent='center' display='flex'>
                    <Image src={image}  shift="top" duration={700} sx={{borderRadius:0.6,}} width={md_up?340:280} height={md_up?300:235}
                    distance={400} shiftDuration={400} showLoading fit="cover"/>
                    
                </Box>
                
            </Grid>
            <Grid container width={"300px"} item alignItems='center' justifyContent='center' xs={5} sx={{ display:visible,px:{xs:2,md:0}}}>
                <Typography variant='body1' color='secondary.light' align ='center' fontSize={{xs:16,md:20}}>{description}</Typography>
            </Grid>
            
            <Grid container direction='column' item  xs={4} alignItems='center' justifyContent='flex-end' sx={{display:visible}}> 
            <Grid container spacing ={1} justifyContent='center' px={2}>

                {tags.map((e,i,)=>(
                    <Grid item>
                        <Chip sx={{backgroundColor:'rgba(0,0,0,.2)',color:'secondary.light', fontSize:{xs:12,md:18}}} label = {e}/>
                    </Grid>
 
                ))}

            </Grid> 
                
                <Button variant='contained' sx={{backgroundColor:'primary.dark', mb:1,mt:2}} target="_blank" href={link}>Visit Site<ArrowForwardIosIcon  sx={{pl:1, fontSize:16, }} /></Button>
            </Grid>
            
        </Grid>
    </Paper>
  )
}

export default Project