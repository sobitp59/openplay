import ButtonCategory from './ButtonCategory'
import { Outlet } from 'react-router-dom'

function Main() { 
  return (
    <div className='h-[91vh] w-full overflow-y-scroll no-scrollbar'>
        <ButtonCategory/>
        <Outlet/>
    </div>
  )
}

export default Main