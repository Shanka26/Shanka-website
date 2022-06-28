import React, {useState,useEffect,useRef}  from 'react'
import {Box, Button, Fab, Link, Grid, Stack, TextField, Typography} from '@mui/material'
import Header from './components/Header'
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from './components/Footer';
import Project from './components/Project';
import { send } from '@emailjs/browser';
import Slide from '@mui/material/Slide';
import pomonotoScreen from './res/pomonotoMock.webp'
import dcoreScreen from './res/dcoreMock.webp'
// import styled from "styled-components";
import { styled } from '@mui/system';



function App() {
  let aboutRef = useRef()
  let projectsRef = useRef()
  let contactRef = useRef()
  let [myView , setMyView] = useState(false)
  let [jobView , setJobView] = useState(false)
  let [about , setAbout] = useState("I come from the British Virgin Islands but I'm currently studying Computer Science at UCA")
  let [about_2 , setAbout_2] = useState("My aim in life is to grow everyday and enjoy myself in the process.")
  let [about2 , setAbout2] = useState("I design and develop responsive web applications")
  let [about2_2 , setAbout2_2] = useState("I love learning about new technologies and improving my craft")
  let infoRef= useRef()

  let[quote1 , setQuote1] = useState("“ Ten out of ten people die, so don\'t take life too seriously. ”")
  let[author1 , setAuthor1] = useState("~ Henry Winkler")
  let[quote2 , setQuote2] = useState("“ I used to be an adventurer like you. Then I took an arrow in the knee. ”")
  let[author2 , setAuthor2] = useState("~ Whiterun guard")
  let[quote3 , setQuote3] = useState("“ Programming isn\'t about what you know, it\'s about what you can figure out. ”")
  let[author3 , setAuthor3] = useState("~ Chris Pine")
  let[quote4 , setQuote4] = useState("“A true master is an eternal student.”")
  let[author4 , setAuthor4] = useState("~ Master Yi")

  
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
      fontSize:{xs:36,md:44},
    }
    
  }

  let homeStyle = {
    color:'secondary.light',
    fontSize:{xs:28,md:36},
    
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
  fontSize:{xs:18,sm:20,md:24,lg:28}
}


  let sendEmail=async()=>{
    console.log('shoot')
    if(/\S+@\S+\.\S+/.test(emailAddress)&&emailAddress!==""&&emailMessage!==""){
      send('service_jgqvxe4','template_gi813u2',
      {from_name:emailName,
        to_name:'Shanka',
        message:emailMessage,
        reply_to:emailAddress},
        'PMbuGmUBbitnn0i_o'
        )
        .then((res)=>{
          console.log('SUCCESS!', res.status, res.text)
          setEmailAddress("")
          setEmailName("")
          setEmailMessage("")
        })
        .catch((err)=>{
          console.log('FAILED...', err);
        })
    }
  }

  let scroll = (section)=>{
    const anchor = document.querySelector(section)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  
      // setAbout("I come from the British Virgin Islands but I'm currently studying Computer Science at UCA")
      // setAbout2("My aim in life is to grow everyday and enjoy myself while doing so.")
      
      // setQuote1('“ I used to be an adventurer like you. Then I took an arrow in the knee. ”')
      // setAuthor1("~ Whiterun guard")

      // setQuote2('“ Ten out of ten people die, so don\'t take life too seriously. ”')
      // setAuthor2("~ Henry Winkler")



      // setQuote3('“ It is better to light a candle than curse the darkness ”')
      // setAuthor3("~ Chinese proverb")

      // setQuote4('“ Be kind to your future self ”')
      // setAuthor4("~ Someone very wise")

      // set2About("I design and develop responsive web applications.")
      // set2About2("I love learning new technologies and improving my craft.")

      // setQuote1('“A true master is an eternal student.”')
      // setAuthor1("~ Master Yi")

      // setQuote2('“ Programming isn\'t about what you know, it\'s about what you can figure out. ”')
      // setAuthor2("~ Chris Pine")

      // setQuote3('“ Choose a job you love, and you will never have to work a day in your life ”')
      // setAuthor3("~ Confucious")

      // setQuote4('“ The most damaging phrase in the language is.. it\'s always been done this way. ”')
      // setAuthor4("~ Grace Hopper")
      
    

  return (
    <Box ref={aboutRef} backgroundColor='secondary.dark' width='100vw' sx={{...scrollBar,display:'flex',flexDirection:'column',}}>
      
        <Header about={aboutRef} projects={projectsRef} contact={contactRef}/>
      
      
      <Box height={'100vh'} justifyContent='center' alignItems='center'>
        <Grid  height='100%' container  direction='column' sx={{mx:0,px:{xs:2,sm:4,md:8,lg:12},pb:{xs:0}}}>

          <Grid container item xs={5} justifyContent='space-evenly' sx={{pt:2}}flexDirection='column'>
            
          <Box >
                <Slide direction={"right"} in={myView} container={aboutRef.current} unmountOnExit  timeout={{enter:600,exit:0}}>
                  <Box>
                    <Typography color='secondary.light' variant='h6' align='left' sx={quoteStyle}>{quote1}</Typography>
                    <Typography color='primary.mid' variant='h6' align='left' sx={quoteStyle}>{author1}</Typography>
                  </Box>
                </Slide>

                <Slide direction={"right"} in={jobView} container={aboutRef.current} unmountOnExit  timeout={{enter:600,exit:0}}>
                  <Box>
                    <Typography color='secondary.light' variant='h6' align='left' sx={quoteStyle}>{quote3}</Typography>
                    <Typography color='primary.mid' variant='h6' align='left' sx={quoteStyle}>{author3}</Typography>
                  </Box>
                </Slide>
            </Box>



            <Box>
                <Slide direction={"left"} in={myView} container={aboutRef.current} unmountOnExit  timeout={{enter:600,exit:0}}>
                  <Box >
                    <Typography color='secondary.light' variant='h6' align='right' sx={quoteStyle}>{quote2}</Typography>
                    <Typography color='primary.mid' variant='h6' align='right' sx={quoteStyle}>{author2}</Typography>
                  </Box>
                </Slide>

                <Slide direction={"left"} in={jobView} container={aboutRef.current} unmountOnExit timeout={{enter:600,exit:0}}>
                  <Box >
                    <Typography color='secondary.light' variant='h6' align='right' sx={quoteStyle}>{quote4}</Typography>
                    <Typography color='primary.mid' variant='h6' align='right' sx={quoteStyle}>{author4}</Typography>
                  </Box>
                </Slide>
            </Box>
          </Grid>

          <Grid container item xs={5} alignItems='center' justifyContent='flex-start' sx={{pt:0}} direction='column'  >
            <Typography color='secondary.light' variant='h3' sx={homeStyle}align='center'>
              Hi, I'm 
              <Typography  display='inline' variant='inherit' onMouseEnter={()=>{setMyView(true);setJobView(false)}} onMouseLeave={()=>{setMyView(false)}}
              sx={{textDecoration: 'underline',pl:1,...viewStyle}}>Shamarl</Typography>
            </Typography>

            <Typography color='secondary.light' variant='h3' sx={homeStyle} align='center'>
              I'm a full-stack
              <Typography display='inline'  variant='inherit'onMouseEnter={()=>{setJobView(true);setMyView(false)}} onMouseLeave={()=>{setJobView(false)}}
              sx={{textDecoration: 'underline',pl:1,...viewStyle}}>web developer</Typography>
            </Typography>

            <Grid container item justifyContent="center" alignItems='flex-start'  xs={3} sx={{pt:2}} ref={aboutRef}>
                <Box alignItems="flex-start">
                  <Slide direction={"up"} in={jobView} container={aboutRef.current} unmountOnExit timeout={{enter:800,exit:0}}>
                    <Box alignItems="center" >
                      {/* <Typography color='secondary.light' variant='h5' align='center' sx={quoteStyle} >{about2}</Typography> */}
                      <Typography color='secondary.light'  variant='h6' align='center' sx={quoteStyle} >{about2_2}</Typography>
                    </Box>
                  </Slide>

                  <Slide direction={"up"} in={myView} container={aboutRef.current} unmountOnExit timeout={{enter:800,exit:0}}>
                    <Box alignItems="center" >
                      {/* <Typography color='secondary.light' variant='h5' align='center' sx={quoteStyle} >{about}</Typography> */}
                      <Typography color='secondary.light'  variant='h6' align='center' sx={quoteStyle} >{about_2}</Typography>
                    </Box>
                  </Slide>
                </Box>
            </Grid>

          </Grid>

          

          {/* <Grid container item xs={3}  justifyContent='space-between' alignItems='flex-end'>
            
            
            <Grid item xs={6} sx={{pr:2}}>
            <Slide direction={"right"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography color='secondary.light' variant='h6' align='left' sx={quoteStyle}>{quote3}</Typography>
                <Typography color='primary.mid' variant='h6' align='left' sx={quoteStyle}>{author3}</Typography>
              </Box>
            </Slide>
            </Grid>

            <Grid item xs={6} sx={{pl:2}}>
            <Slide direction={"left"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
              <Typography color='secondary.light' variant='h6' align='right' sx={quoteStyle}>{quote4}</Typography>
              <Typography color='primary.mid' variant='h6' align='right' sx={quoteStyle}>{author4}</Typography>
              </Box>
            </Slide>

          </Grid>

          </Grid> */}





        </Grid>

      </Box>
      













      
      <Box ref = {projectsRef}
      sx={{p:4, pt:{xs:2,sm:4,md:8,lg:12},pb:12, height:1 ,}}>
        <Typography variant="h2" align='center' color='primary.mid' sx={{marginBottom:8}}>Projects</Typography>
        <Box >
          <Grid container justifyContent='center' spacing={0}>
            <Grid container item xs={12} md={6} lg={4}  justifyContent='center'>
              <Project title='Pomonoto' image={pomonotoScreen} tags={['React','Django', 'User Authentication']} link="https://pomonoto.netlify.app/"
              description="Pomodoro timer with a helpful twist. During work phases, users can jot down disappearing notes and be remided of them later when on break."/>
            </Grid>
            <Grid container item xs={12} md={6} lg={4} justifyContent='center'>
              <Project title="D'Core Paperie" image={dcoreScreen} tags={['React','Design']} link="https://dcore.netlify.app/"
              description='Website for local paperie business showcasing their services and all other pertinent information'/>
            </Grid>
            

            
          </Grid>
         
        </Box>
        

      </Box>






      <Box  ref = {contactRef} 
      pt={{xs:2,sm:4,md:8,lg:12}} pb={4} sx={{ height:1}}>
        
          <Box mb={2} alignItems='center' sx={{px:4}}>
            <Typography color='primary.mid' mb={2} variant='h2'  align='center'>Get In Touch</Typography>
            <Typography color='secondary.light' variant='h5' align='center'>want to contact me about work, ask a question or just keep up with what I'm working on?</Typography>
            <Typography color='secondary.light' variant='h5' align='center'>Feel free to send me a message or follow me on social media. </Typography>

            
          </Box>

          <Stack direction='row' gap={2} justifyContent='center'>
            <Fab sx={fabStyle} size='medium' component={Link} href='https://twitter.com/Shanka26/' target="_blank" rel="noopener"><TwitterIcon/></Fab>
            <Fab sx={fabStyle} size='medium'  component={Link} href='https://www.reddit.com/user/MinisterShanka' target="_blank" rel="noopener"><RedditIcon/></Fab>
            <Fab sx={fabStyle} size='medium' component={Link} href='https://github.com/Shanka26' target="_blank" rel="noopener"><GitHubIcon/></Fab>
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
      <Box>
        <Footer/>
      </Box>
        
    </Box>
  );
}

export default App;
