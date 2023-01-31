import { Outlet } from 'react-router-dom'
import { FaAlignLeft } from 'react-icons/fa'
import {Wrapper} from '../../assets/wrappers/SharedLayout'
import { BigSidebar, SmallSidebar } from '../../components'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'

const SharedLayout = () => {
  const {toggleSidebar, setToggleSidebar} = useContext(AppContext)
  // console.log(toggleSidebar)

  return (
    <Wrapper>
      <main className='dashboard'>
      <SmallSidebar />
        <button type='button' className='toggle-btn' onClick={()=> setToggleSidebar(!toggleSidebar)}>
          <FaAlignLeft />
          <BigSidebar />
        </button>
        <div>
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
