import { useState } from 'react'
import './main.css'
import { myProjects } from './myProjects'
import { AnimatePresence, motion } from 'framer-motion'



const Main = () => {

  const [currentActive, setCurrentActive] = useState('all')
  const [arr, setArr] = useState(myProjects)

  const handleClick = (buttonCategory) => {
    
    setCurrentActive(buttonCategory);
  
    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
  
      return ZZZ === buttonCategory;
    });
  
    setArr(newArr);
  }

  

  return (
    <main id='project' className='main flex'>
      <section className='left-section flex'>
        <button onClick={() => {
          setCurrentActive('all');
          setArr(myProjects)
        }}
          className={currentActive === 'all' ? 'active' : null}>all project</button>

        <button onClick={() => {
           handleClick('E-Commerce');
        }}
          className={currentActive === 'E-Commerce' ? 'active' : null}>E-Commerce</button>

        <button onClick={() => {
           handleClick('laravel')
        }}
          className={currentActive === 'laravel' ? 'active' : null}>Laravel</button>

        <button onClick={() => {
           handleClick('html');
        }}
          className={currentActive === 'html' ? 'active' : null}>Html & Css & JS</button>

        <button onClick={() => {
          handleClick('react')
        }}
          className={currentActive === 'react' ? 'active' : null}>React & Next</button>

        <button onClick={() => {
          handleClick('node')
        }}
          className={currentActive === 'node' ? 'active' : null}>Node & Express</button>
      </section>

      
      <section className='right-section flex'>
      <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", damping: 7, stiffness: 50}}
            
            key={item.imgPath} className='card'>
              <img src={item.imgPath} alt='' width={277} />
              <div className='box' style={{ width: "277px" }}>
                <h2 className='title'>{item.title}</h2>
                <p className='sub-title'> {item.descreption}</p>
                <div className='flex icons'>
                  <div className='flex links'>
                    <a href='{item.link}' className=''>
                      <div className='icon-link'>
                      </div>
                    </a>
                    <a href='https://github.com/AhmedAlariqi97' className=''>
                       <div className='icon-github-square'></div>
                    </a>
                  </div>
                  {/* <a href='' className='more flex'>more
                    <span className='icon-arrow-right'></span></a> */}
                </div>
              </div>
            </motion.article>
          )
        })}
      </AnimatePresence>
      </section>
    </main>
  )
}

export default Main