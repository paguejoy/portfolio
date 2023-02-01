import { useContext } from 'react'
import {AppContext} from './../context/appContext'
import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
  const { toggleSidebar } = useContext(AppContext)
  console.log(toggleSidebar)
  
  return (
    <Wrapper>
      <div
        className={
          toggleSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
    
    
  )
}

export default BigSidebar
