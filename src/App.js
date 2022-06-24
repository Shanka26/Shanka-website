import React, {useState,useEffect,useRef}  from 'react'
import {Box, Button, Fab, Grid, Stack, TextField, Typography} from '@mui/material'
import Header from './components/Header'
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from './components/Footer';
import Project from './components/Project';
// import { send } from 'emailjs-com';
import Slide from '@mui/material/Slide';
import pomonotoScreen from './res/pomonotoScreen2.webp'
import dcoreScreen from './res/dcoreScreen4.png'
// import styled from "styled-components";
import { styled } from '@mui/system';



function App() {
  let aboutRef = useRef()
  let projectsRef = useRef()
  let contactRef = useRef()
  let [view , setView] = useState(0)
  let [about , setAbout] = useState("")
  let [about2 , setAbout2] = useState("")
  let infoRef= useRef()

  let[quote1 , setQuote1] = useState("")
  let[author1 , setAuthor1] = useState("")
  let[quote2 , setQuote2] = useState("")
  let[author2 , setAuthor2] = useState("")
  let[quote3 , setQuote3] = useState("")
  let[author3 , setAuthor3] = useState("")
  let[quote4 , setQuote4] = useState("")
  let[author4 , setAuthor4] = useState("")

  
  let[emailName,setEmailName]=useState("")
  let[emailAddress,setEmailAddress]=useState("")
  let[emailMessage,setEmailMessage]=useState("")




  const scrollBar = {
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(40,0,0,1)',
      borderRadius: 2
      
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0,0,0,.4)',
        
      }
    }


  let viewStyle = {
    color:'primary.main',
    fontSize:{xs:32,md:40},
    '&:hover':{
      color:'primary.mid', 
      fontSize:{xs:40,md:48},
    }
    
  }

  let fabStyle ={
    color:'secondary.light',
    backgroundColor:'primary.main',
    '&:hover':{
      // color:'primary.light',
      backgroundColor:'primary.dark'
    }
  }
 
  let textFieldStyle={
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'secondary.light',
    },
    '&:hover fieldset': {
      borderColor: 'primary.mid',
    },
  },
  input:{color: '#fff'}
}
let quoteStyle= {
  fontSize:{xs:12,sm:16,md:20,lg:28}
}


  let sendEmail=async()=>{
    console.log('shoot')
    // if(/\S+@\S+\.\S+/.test(emailAddress)&&emailAddress!==""&&emailMessage!==""){
    //   send('service_jgqvxe4','template_gi813u2',
    //   {from_name:emailName,
    //     to_name:'Shanka',
    //     message:emailMessage,
    //     reply_to:emailAddress},
    //     'PMbuGmUBbitnn0i_o'
    //     )
    //     .then((res)=>{
    //       console.log('SUCCESS!', res.status, res.text)
    //     })
    //     .catch((err)=>{
    //       console.log('FAILED...', err);
    //     })
    // }
  }

  let scroll = (section)=>{
    const anchor = document.querySelector(section)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  useEffect(()=>{
    if(view==1){
      setAbout("I come from the British Virgin Islands but I'm currently studying Computer Science at UCA")
      setAbout2("My aim in life is to grow everyday and enjoy myself while doing so.")

      setQuote1('“ It is better to light a candle than curse the darkness ”')
      setAuthor1("~ Chinese proverb")

      setQuote2('“ Be kind to your future self ”')
      setAuthor2("~ Someone very wise")

      setQuote3('“ I used to be an adventurer like you. Then I took an arrow in the knee. ”')
      setAuthor3("~ Whiterun guard")

      setQuote4('“ Ten out of ten people die, so don\'t take life too seriously. ”')
      setAuthor4("~ Henry Winkler")
    }
    else if(view==2){
      setAbout("I design and develop fully responsive web applications.")
      setAbout2("I love learning new technologies and improving my craft.")

      setQuote1('“A true master is an eternal student.”')
      setAuthor1("~ Master Yi")

      setQuote2('“ Choose a job you love, and you will never have to work a day in your life ”')
      setAuthor2("~ Confucious")

      setQuote3('“ Programming isn\'t about what you know, it\'s about what you can figure out. ”')
      setAuthor3("~ Chris Pine")

      setQuote4('“ The most damaging phrase in the language is.. it\'s always been done this way. ”')
      setAuthor4("~ Grace Hopper")
      
    }
    else{
      setAbout(" ")
      setAbout2(" ")

      setQuote1(' ')
      setAuthor1(" ")

      setQuote2(' ')
      setAuthor2(" ")

      setQuote3(' ')
      setAuthor3(" ")

      setQuote4(' ')
      setAuthor4(" ")
    }

  },[view])

  return (
    <Box ref={aboutRef} backgroundColor='secondary.dark' sx={{...scrollBar}}>
      <Box>
        <Header about={aboutRef} projects={projectsRef} contact={contactRef}/>
      </Box>
      
      <Box height={'100vh'} pt={4}  justifyContent='center' alignItems='center'>
        <Grid  height={1} container alignItems='space-around' direction='column' sx={{mx:0,px:{xs:2,sm:4,md:8,lg:12}}}>

          <Grid container item xs={4} justifyContent='space-between'>
            
          <Grid item xs={6} >
          <Slide direction={"right"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography color='secondary.light' variant='h6' align='left' sx={quoteStyle}>{quote1}</Typography>
                <Typography color='primary.mid' variant='h6' align='left' sx={quoteStyle}>{author1}</Typography>
              </Box>
            </Slide>
            </Grid>

            <Grid item xs={6} >
            <Slide direction={"left"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography color='secondary.light' variant='h6' align='right' sx={quoteStyle}>{quote2}</Typography>
                <Typography color='primary.mid' variant='h6' align='right' sx={quoteStyle}>{author2}</Typography>
              </Box>
            </Slide>
            </Grid>
          </Grid>

          <Grid container item  direction='column' xs={2} >
            <Typography color='secondary.light' variant='h3' align='center'>
              Hi, I'm 
              <Typography  display='inline' variant='inherit' onMouseEnter={()=>{setView(1)}} onMouseLeave={()=>{setView(0)}}
              sx={{textDecoration: 'underline',pl:1,...viewStyle}}>Shamarl</Typography>
            </Typography>

            <Typography color='secondary.light' variant='h3' align='center'>
              I'm a full-stack
              <Typography display='inline'  variant='inherit'onMouseEnter={()=>{setView(2)}} onMouseLeave={()=>{setView(0)}}
              sx={{textDecoration: 'underline',pl:1,...viewStyle}}>web developer</Typography>
            </Typography>

          </Grid>

          <Grid justifyContet="center" item xs={2} alignItems="center" ref={aboutRef}>
          
          <Slide direction={"up"} in={view>0} container={aboutRef.current} timeout={{enter:800,exit:10}}>
            <Box alignItems="center">
              <Typography color='secondary.light' variant='h5' align='center' sx={quoteStyle}>{about}</Typography>
              <Typography color='secondary.light'  variant='h5' align='center' sx={quoteStyle}>{about2}</Typography>
            </Box>
          </Slide>
              
            
          </Grid>

          <Grid container item xs={4}  justifyContent='space-between' alignItems='center'>
            
            
            <Grid item xs={5}>
            <Slide direction={"right"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography color='secondary.light' variant='h6' align='left' sx={quoteStyle}>{quote3}</Typography>
                <Typography color='primary.mid' variant='h6' align='left' sx={quoteStyle}>{author3}</Typography>
              </Box>
            </Slide>
            </Grid>

            <Grid item xs={5}>
            <Slide direction={"left"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
              <Typography color='secondary.light' variant='h6' align='right' sx={quoteStyle}>{quote4}</Typography>
              <Typography color='primary.mid' variant='h6' align='right' sx={quoteStyle}>{author4}</Typography>
              </Box>
            </Slide>

          </Grid>

          </Grid>





        </Grid>

      </Box>
      













      
      <Box ref = {projectsRef}
      sx={{p:4, pt:8,pb:12, height:1 ,}}>
        <Typography variant="h2" align='center' color='secondary.light' sx={{marginBottom:8}}>Projects</Typography>
        <Box >
          <Grid container justifyContent='center' spacing={0}>
            <Grid container item xs={12} md={6} lg={4}  justifyContent='center'>
              <Project title='Pomonoto' image={pomonotoScreen} tags={['React','Django', 'User Authentication']} link="https://pomonoto.netlify.app/"
              description="Pomodoro timer with a helpful twist, During work phases, users can jot down disappearing notes and be remided of them later when on break."/>
            </Grid>
            <Grid container item xs={12} md={6} lg={4} justifyContent='center'>
              <Project title="D'Core Paperie" image={dcoreScreen} tags={['React','Design']} link="https://dcore.netlify.app/"
              description='Website for local paperie business showcasing their services and all other pertinent information'/>
            </Grid>
            

            
          </Grid>
         
        </Box>
        

      </Box>






      <Box  ref = {contactRef} 
      pt={8} sx={{ height:'100vh'}}>
        
          <Box mb={2} alignItems='center'>
            <Typography color='secondary.light' mb={2} variant='h2'  align='center'>Get In Touch</Typography>
            <Typography color='secondary.light' variant='h5' align='center'>want to contact me about work, ask a question or just keep up with what I'm working on?</Typography>
            <Typography color='secondary.light' variant='h5' align='center'>Feel free to send me a message or follow me on social media. </Typography>

            
          </Box>

          <Stack direction='row' gap={2} justifyContent='center'>
            <Fab sx={fabStyle} size='medium'><TwitterIcon/></Fab>
            <Fab sx={fabStyle} size='medium'><RedditIcon/></Fab>
            <Fab sx={fabStyle} size='medium'><GitHubIcon/></Fab>
            </Stack>

            <Box mx={{xs:4,sm:8,md:16,lg:24}} my={2} >
              <Grid container rowSpacing={2} alignItems='center' justifyContent='center' >
              <Grid item xs={12}>
                <Typography color='secondary.light' variant='h6'>Send me an Email</Typography>
              </Grid>
              
              <Grid container justifyContent='flex-start' pr={{xs:0,md:1}} item xs={12} md={6} >
                
                  <TextField
                  sx={textFieldStyle}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}

                   fullWidth label="Your Name" value={emailName} onChange={(e)=>{setEmailName(e.target.value)}}/>
               
                
              </Grid>


              <Grid container justifyContent='flex-end' item xs={12} md={6} pl={{xs:0,md:1}}>
                <TextField 
                sx={textFieldStyle}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                fullWidth  label="Your Email" value={emailAddress} onChange={(e)=>{setEmailAddress(e.target.value)}}/>
              </Grid>
          
              <Grid item  xs={12}>
                <TextField 
                sx={textFieldStyle}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                inputProps={{ style: {color: 'white'}}}
                
                fullWidth multiline rows={6} label="Your Message" value={emailMessage} onChange={(e)=>{setEmailMessage(e.target.value)}}/>
              </Grid>

              <Grid container item xs={12} justifyContent="space-between">
                <Typography color='secondary.light' variant='h6'>You should recieve a confirmation email</Typography>
                <Button variant='contained' sx={{color: 'secondary.light'}} onClick={(e)=>{sendEmail()}} >Send</Button>
              </Grid>
              
            </Grid>
            </Box>

         

      </Box>
        <Footer/>
    </Box>
  );
}

export default App;
