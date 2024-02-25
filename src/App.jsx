import { useCallback } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Skill from './components/3-skill/Skill'
import Main from './components/4-main/Main'
import Contact from './components/5-contact/Contact'
import Footer from './components/6-footer/Footer'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);
  

  const [showScrollBtn, setshowScrollBtn] = useState(false);

  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Skill />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />


      {/* {showScrollBtn && (
        <a href='#up'>
          <button className='scroll2Top icon-chevron-up'></button>
        </a>
      )} */}

        <a href='#up' style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s"}}>
          <button className='scroll2Top icon-chevron-up'></button>
        </a>
      
    </div>
  )
}

export default App
