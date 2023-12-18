import { CircleUserRound as AvatarIcon, Menu as HamburgerIcon, Search, Search as SearchIcon } from 'lucide-react'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarToggle } from '../features/sidebar/sidebar'
import { useEffect, useRef, useState } from 'react'
import { YOUTUBE_SEARCH_VIDEO, YOUTUBE_SUGGESTION_API } from '../constants'
import { RootState } from '../store/store'
import { cacheSearchResults, getSearchedVideos, setSearchQuery } from '../features/search/search'
import { useNavigate } from 'react-router-dom'

type SearchData = {
    [key: string]: string[];
  }
  
function Header() {
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowsuggestions] = useState<boolean>(true);
    const dispatch = useDispatch()
    const cachedData = useSelector((store: RootState) => store.search.cachedSearch) as SearchData;
    const searchQuery = useSelector((store: RootState) => store.search.searchQuery) ;

    const navigate = useNavigate()
    const suggestionsRef = useRef(null)

    useEffect(() => {
         const timer = setTimeout(() => {
            if(cachedData[searchQuery]){
                setSuggestions(cachedData[searchQuery])
            }else{
                getSuggestions()
            }
        }, 250)

         return () => {
            clearTimeout(timer)
         }
    }, [searchQuery])

    async function getSuggestions(){
        try {
            const response = await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
            const data = await response.json();
            setSuggestions(data[1])

            dispatch(cacheSearchResults({
                [searchQuery] : data[1]
            }))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
            if(suggestionsRef.current && !((suggestionsRef.current as HTMLElement).contains(event.target as Node))){
                setShowsuggestions(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    

    async function handleVideoSearch(){
        try {
            const response = await fetch(`${YOUTUBE_SEARCH_VIDEO}q=${searchQuery}&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`);
            const data = await response.json()
            dispatch(getSearchedVideos(data?.items))
            navigate('/results')  
        } catch (error) {
            console.log('SERACH VIDEO',error)
        }
    }

    async function handleVideoSearchOnKeyDown(e:React.KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter'){
            handleVideoSearch()
        }
    }

    function handleSuggestionClick(suggestion : string){
        dispatch(setSearchQuery(suggestion))
        handleVideoSearch()
        navigate('/results')
        setShowsuggestions(false)
    }
  
  return (
    <div className='flex justify-between fixed w-full bg-white align-middle py-6 px-4 z-50'>
        <section className='flex justify-start gap-4 align-middle'>
            <HamburgerIcon  onClick={() => dispatch(sidebarToggle())} className='h-auto cursor-pointer'/>
            <Logo/>
        </section>
        
        <div className='relative'>
            <section className='flex  justify-center pl-6 gap-4 align-middle border-[1.5px] rounded-full w-[500px] h-[45px]'>
                <input 
                    type="search" 
                    placeholder='Search' 
                    className='w-full h-full outline-none font-manrope'
                    onChange={(e) => dispatch(setSearchQuery(e?.target?.value))}
                    value={searchQuery}
                    onFocus={() => setShowsuggestions(true)}
                    onKeyDown={handleVideoSearchOnKeyDown}
                />
                <button onClick={handleVideoSearch} className='px-6 border-l-[1.5px] rounded-r-full bg-gray-200'>
                    <SearchIcon className='h-auto w-full' />
                </button>
            </section>
            {showSuggestions && suggestions.length > 0 && <ul ref={suggestionsRef} className='absolute z-[5] bg-white w-[430px] rounded-md p-2 top-[60px] shadow-sm border-[1.5px]'>
                {suggestions.map((suggestion) => (
                    <li onClick={() => handleSuggestionClick(suggestion)}  key={suggestion} className='p-2 flex justify-start align-center rounded-md hover:bg-gray-100 cursor-pointer font-manrope text-gray-500'>
                        <Search className='w-5 h-5 mr-3'/> {suggestion}
                    </li>
                ))}
            </ul>}
        </div>
        <section className='flex justify-center align-middle'>
            <AvatarIcon className='h-auto w-[30px] text-gray-600'/>
        </section>
    </div>
  )
}

export default Header