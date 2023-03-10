import { createContext, useState } from 'react'
import './App.css'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import Nav from './Components/Nav/nav'
import Projects from './Components/Projects/projects'
import {BsArrowUp} from 'react-icons/bs'

export const ThemeContext = createContext(null)

function App() {

  const top = () => {
    window.scrollTo(0,0)
  }

  const [theme, setTheme] = useState('Dark');

  const Toggle = () => {
    setTheme((curr) => curr === 'Light'? 'Dark' : 'Light')
  }

  return (
    <ThemeContext.Provider value={{theme, Toggle}}>
    <div className={theme === 'Light'? 'App-Light' : 'App-Dark'}>
       <Nav/>
       <Home/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
       <BsArrowUp onClick={top} className='arrow'/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
