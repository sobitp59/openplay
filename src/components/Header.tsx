import { CircleUserRound as AvatarIcon, Menu as HamburgerIcon, Search as SearchIcon } from 'lucide-react'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarToggle } from '../features/sidebar/sidebar'

function Header() {
    
    const dispatch = useDispatch()

   
  return (
    <div className='flex justify-between align-middle py-6 px-4 border-b-2'>
        <section className='flex justify-start gap-4 align-middle'>
            <HamburgerIcon  onClick={() => dispatch(sidebarToggle())} className='h-auto cursor-pointer'/>
            <Logo/>
        </section>

        <section className='flex justify-center pl-6 gap-4 align-middle border-[1.5px] rounded-full w-[500px] h-[45px]'>
            <input 
                type="text" 
                placeholder='Search' 
                className='w-full h-full outline-none font-manrope'
            />
            <button className='px-6 border-l-[1.5px] rounded-r-full bg-gray-200'>
                <SearchIcon className='h-auto w-full' />
            </button>
        </section>

        <section className='flex justify-center align-middle'>
            <AvatarIcon className='h-auto w-[30px] text-gray-600'/>
        </section>
    </div>
  )
}

export default Header