import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarClose } from '../features/sidebar/sidebar'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_VIDEO_BYID } from '../constants'
import Comment from './Comment'
import LiveChat from './LiveChat'
import { RootState } from '../store/store'

export const WatchVideo = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const [video, setVideo] = useState(null)
    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen)

    useEffect(() => {
        dispatch(sidebarClose()) 
        getVideoDetails()
    }, [])

    async function getVideoDetails(){
      try {
        const response = await fetch(YOUTUBE_VIDEO_BYID+`&id=${searchParams.get("v")}`)
        const data = await response.json()
        setVideo(data?.items[0])
      } catch (error) {
        console.log(error)
      }
    }

    const comments = [
      {
        id: 1,
        name: 'Sobit Prasad',
        text: 'Lorem ipsum dolor sit amet consectetur.',
        replies: [
          {
            id: 6,
            name: 'Daniel Lee',
            text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
            replies: [
              {
                id: 9,
                name: 'Olivia Miller',
                text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
                replies: []
              },
              {
                id: 10,
                name: 'David Taylor',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
                replies: [
                  {
                    id: 11,
                    name: 'Isabella Rodriguez',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    replies: []
                  },
                  {
                    id: 12,
                    name: 'Ethan Turner',
                    text: 'Suspendisse potenti. Sed euismod varius mi, a tristique quam scelerisque vel.',
                    replies: []
                  },
                  {
                    id: 13,
                    name: 'Ava Anderson',
                    text: 'Fusce euismod semper justo, sit amet pellentesque lectus malesuada vel.',
                    replies: []
                  },
                ]
              }
            ]
          },
          {
            id: 7,
            name: 'Sophia Garcia',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
            replies: [
              {
                id: 31,
                name: 'Aria Johnson',
                text: 'Nunc auctor mi vel urna vestibulum, a malesuada quam aliquet.',
                replies: [
                  {
                    id: 33,
                    name: 'Liam Davis',
                    text: 'Vestibulum eu dui nec ligula fermentum luctus at vel libero.',
                    replies: []
                  },
                  {
                    id: 34,
                    name: 'Olivia Turner',
                    text: 'Sed auctor tellus nec tellus ultrices, sit amet cursus nunc blandit.',
                    replies: []
                  }
                ]
              },
              {
                id: 32,
                name: 'Mason White',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                replies: []
              }
            ]
          },
          {
            id: 8,
            name: 'Michael Wilson',
            text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            replies: [
              {
                id: 29,
                name: 'Grace Taylor',
                text: 'Sed vel velit vitae tortor tristique scelerisque.',
                replies: []
              },
              {
                id: 30,
                name: 'Elijah Smith',
                text: 'Maecenas id justo eu nulla accumsan vulputate.',
                replies: []
              }
            ]
          },
        ]
      },
      {
        id: 2,
        name: 'John Doe',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        replies: [
          {
            id: 19,
            name: 'Harper Taylor',
            text: 'Praesent ac magna a nisi tristique feugiat in ut tellus.',
            replies: []
          },
          {
            id: 20,
            name: 'Benjamin Smith',
            text: 'Nam nec justo at elit luctus volutpat vel ut nulla.',
            replies: [
              {
                id: 26,
                name: 'Jackson Garcia',
                text: 'Fusce hendrerit augue vel libero rhoncus, eu lacinia velit semper.',
                replies: []
              },
              {
                id: 27,
                name: 'Penelope Davis',
                text: 'Vivamus euismod nunc vitae ultricies ultricies.',
                replies: []
              },
              {
                id: 28,
                name: 'Carter Wilson',
                text: 'Curabitur nec justo eget felis scelerisque feugiat.',
                replies: []
              },
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Alice Johnson',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        replies: []
      },
      {
        id: 4,
        name: 'Bob Smith',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        replies: [
          {
            id: 16,
            name: 'Liam Garcia',
            text: 'Vivamus consectetur purus in velit aliquam, sed blandit elit efficitur.',
            replies: []
          },
          {
            id: 17,
            name: 'Charlotte Davis',
            text: 'Integer dignissim tortor ac augue convallis, at posuere tortor semper.',
            replies: []
          },
          {
            id: 18,
            name: 'Lucas Wilson',
            text: 'Duis ac massa eu nisi fringilla condimentum vel ut elit.',
            replies: [
              {
                id: 24,
                name: 'Owen Martinez',
                text: 'Proin eu urna eget justo tincidunt cursus nec in quam.',
                replies: []
              },
              {
                id: 25,
                name: 'Zoe Brown',
                text: 'Phasellus euismod augue nec nulla sagittis, eu elementum dolor cursus.',
                replies: []
              },
            ]
          },
        ]
      },
      {
        id: 5,
        name: 'Emma Brown',
        text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: [
          {
            id: 14,
            name: 'Noah Martinez',
            text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            replies: []
          },
          {
            id: 15,
            name: 'Mia Brown',
            text: 'Curabitur eget urna a lectus sollicitudin venenatis non at risus.',
            replies: [
              {
                id: 21,
                name: 'Luna Rodriguez',
                text: 'Aliquam erat volutpat. In hac habitasse platea dictumst.',
                replies: []
              },
              {
                id: 22,
                name: 'Sebastian Turner',
                text: 'Cras ac dolor nec metus cursus ultricies a nec enim.',
                replies: []
              },
              {
                id: 23,
                name: 'Scarlett Anderson',
                text: 'Vestibulum vel urna id purus dignissim sodales.',
                replies: []
              },
            ]
          },
        ]
      },
    ]
    
    const videoHeight = !isSidebarOpen ? '700px' : '600px'

  return (
    <div className='p-6 w-full mt-[80px] '>
      
        {/* Video Frame */}
        <div className='w-full  grid grid-cols-4 gap-2 relative'>
          <section className='col-span-3'>
            <iframe 
                className='rounded-lg'
                width={'100%'} 
                height={videoHeight} 
                src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
          </section>
            <LiveChat />
        </div>

        {/* Comments Section */}
        <section>
          <ul>
            {comments.map(({id, name, text, replies}) => (
              <>
                <Comment id={id} name={name} text={text} replies={replies}/>
              </>
            ))}
          </ul>
        </section>
        
    </div>
  )
}
