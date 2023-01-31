import {AppContext} from './../context/appContext'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'

import Logo from './Logo'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { toggleSidebar,setToggleSidebar } = useContext(AppContext)
  // console.log(toggleSidebar)
  return (
    <Wrapper>
      <div
        className={
          toggleSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar' 
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={()=> {
            setToggleSidebar(!toggleSidebar)
          }}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={()=> {
            setToggleSidebar(!toggleSidebar)
          }} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
