import ButtonCategory from './ButtonCategory'
import { Outlet } from 'react-router-dom'

function Main() { 
  return (
    <div className='h-[91vh] overflow-y-scroll no-scrollbar'>
        <ButtonCategory/>
        <Outlet/>
    </div>
  )
}

export default Main