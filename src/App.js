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







  let viewStyle = {
    color:'primary.main',
    fontSize:{xs:32,md:40},
    '&:hover':{
      color:'primary.dark', 
      fontSize:{xs:40,md:48},
    }
    
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
    <Box >
      {/* <Header/> */}
      <Box height='100vh' >
        <Grid height={1} container direction='column' sx={{mx:0,px:8}}>

          <Grid container item xs={3} justifyContent='space-between'>
            
          <Grid item xs={5} >
          <Slide direction={"right"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography variant='h5' align='left'>{quote1}</Typography>
                <Typography variant='h5' align='left'>{author1}</Typography>
              </Box>
            </Slide>
            </Grid>

            <Grid item xs={5} >
            <Slide direction={"left"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography variant='h5' align='right'>{quote2}</Typography>
                <Typography variant='h5' align='right'>{author2}</Typography>
              </Box>
            </Slide>
            </Grid>
          </Grid>

          <Grid container item  direction='column' xs={2} >
            <Typography variant='h3' align='center'>
              Hi, I'm 
              <Typography display='inline' variant='inherit' onMouseEnter={()=>{setView(1)}} onMouseLeave={()=>{setView(0)}}
              sx={{textDecoration: 'underline',pl:1,...viewStyle}}>Shamarl</Typography>
            </Typography>

            <Typography variant='h3' align='center'>
              I'm a full-stack
              <Typography display='inline'  variant='inherit'onMouseEnter={()=>{setView(2)}} onMouseLeave={()=>{setView(0)}}
              sx={{textDecoration: 'underline',pl:1,...viewStyle}}>web developer</Typography>
            </Typography>

          </Grid>

          <Grid justifyContet="center"item xs={3} alignItems="center" ref={aboutRef}>
          
          <Slide direction={"up"} in={view>0} container={aboutRef.current} timeout={{enter:800,exit:10}}>
            <Box>
              <Typography variant='h5' align='center'>{about}</Typography>
              <Typography variant='h5' align='center'>{about2}</Typography>
            </Box>
          </Slide>
              
            
          </Grid>

          <Grid container item xs={4}  justifyContent='space-between'>
            
            {/* <Grid item  xs={12}>
              <Typography align='center'>{about}</Typography>
              <Typography align='center'>{about2}</Typography>
            </Grid> */}
            <Grid item xs={5}>
            <Slide direction={"right"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
                <Typography variant='h5' align='left'>{quote3}</Typography>
                <Typography variant='h5' align='left'>{author3}</Typography>
              </Box>
            </Slide>
            </Grid>

            <Grid item xs={5}>
            <Slide direction={"left"} in={view>0} container={aboutRef.current} timeout={{enter:600,exit:10}}>
              <Box>
              <Typography variant='h5' align='right'>{quote4}</Typography>
              <Typography variant='h5' align='right'>{author4}</Typography>
              </Box>
            </Slide>

          </Grid>

          </Grid>





        </Grid>

      </Box>
      



















      
      <Box ref = {projectsRef} sx={{p:2,backgroundColor:'primary.main', height:1 }}>
        <Typography variant="h2" align='center' sx={{marginBottom:8}}>Projects</Typography>
        <Box >
          <Grid container justifyContent='center' spacing={0}>
            {/* <Grid container item xs={12} md={6} lg={4}  justifyContent='center'>
              <Project title='Pomonoto' tags={['React','Django']} link="https://pomonoto.netlify.app/"/>
            </Grid>
            <Grid container item xs={12} md={6} lg={4} justifyContent='center'>
              <Project title='Pomonoto' tags={['React']} link="https://pomonoto.netlify.app/"/>
            </Grid>
            <Grid container item xs={12} md={6} lg={4} justifyContent='center'>
              <Project title='Pomonoto' tags={['React','Django']} link="https://pomonoto.netlify.app/"/>
            </Grid> */}
            
          </Grid>
         
        </Box>
        

      </Box>






      <Box  ref = {contactRef} justifyContent='center' alignItems='center' sx={{backgroundColor:'primary.dark', height:'100vh'}}>
        
          <Box pt={8} mb={8} alignItems='center'>
            <Typography mb={4} variant='h2'  align='center'>Get In Touch</Typography>
            <Typography variant='h4' align='center'>want to contact me about work, ask a question or just keep up with what I'm working on?</Typography>
            <Typography variant='h4' align='center'>Feel free to send me a message or follow me on social media. </Typography>

            
          </Box>

          <Stack direction='row' gap={4} justifyContent='center'>
            <Fab><TwitterIcon/></Fab>
            <Fab><RedditIcon/></Fab>
            <Fab><GitHubIcon/></Fab>
            </Stack>

            <Box mx={12} mt={8} >
              <Grid container rowSpacing={2} alignItems='center' justifyContent='center' >
              <Grid item xs={12}>
                <Typography variant='h6'>Send me an Email</Typography>
              </Grid>
              
              {/* <Grid item xs={6} >
                <TextField fullWidth label="Your Name" value={emailName} onChange={(e)=>{setEmailName(e.target.value)}}/>
              </Grid>

              <Grid item xs={6} >
                <TextField fullWidth label="Your Email" value={emailAddress} onChange={(e)=>{setEmailAddress(e.target.value)}}/>
              </Grid>
          
              <Grid item  xs={12}>
                <TextField fullWidth multiline rows={12} label="Your Message" value={emailMessage} onChange={(e)=>{setEmailMessage(e.target.value)}}/>
              </Grid> */}

              <Grid container item xs={12} justifyContent="space-between">
                <Typography variant='h6'>You should recieve a confirmation email</Typography>
                <Button onClick={(e)=>{sendEmail()}} >Send</Button>
              </Grid>
              
            </Grid>
            </Box>

         

      </Box>
        {/* <Footer/> */}
    </Box>
  );
}

export default App;
