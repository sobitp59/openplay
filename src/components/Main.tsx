import { useSelector } from 'react-redux'
import ButtonCategory from './ButtonCategory'
import { Outlet } from 'react-router-dom'
import { RootState } from '../store/store'

function Main() {
  const isSidebarOpen = useSelector((state : RootState) => state.sidebar.isSidebarOpen) 
  return (
    <div className={`w-full mt-[88px] relative ${isSidebarOpen ? 'ml-[15%]' : 'ml-0' } `}>
        <ButtonCategory/>
        <Outlet/>
    </div>
  )
}

export default Main