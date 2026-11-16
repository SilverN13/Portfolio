import { useState, useEffect } from 'react'
import Hero from './conponents/hero/Hero'
import Header from './conponents/header/Header'
import Main from './conponents/main/Main'
import Contact from './conponents/contact/Contact'
import Footer from './conponents/footer/Footer'


function App() {

  const [showScrollBtn , setShowScrollBtn] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 300){
        setShowScrollBtn(true)
      }else{
        setShowScrollBtn(false)
      }
    })
  },[])
  return (
    <div className='container'>
    <Header/>
    <Hero/>
    <div className="divider"/>
    <Main/>
    <div className="divider"/>
    <Contact/>
    <div className="divider"/>
    <Footer/>
    <a style={{opacity:showScrollBtn? 1 : 0,transition: "1s"}} href="#up">
    <button className='scroll2Top icon-keyboard_arrow_up'></button>
    </a>
    </div>
  )
}

export default App
