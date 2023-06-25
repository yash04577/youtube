import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

    const navigate = useNavigate();
    // console.log(props.elem)

    let description = props.elem.snippet.description;
    let thumbnail = props.elem.snippet.thumbnails.high.url
    let title = props.elem.snippet.title
    let channelTitle = props.elem.snippet.channelTitle;
    let id = props.elem.id.videoId

    let video_url = "https://www.youtube.com/embed/xpFTkruwhBQ";


    const clickHandler = (id) =>{
        navigate(`/${id}`)
    }

    return (


        <div className='w-[25vw]  rounded-lg relative group cursor-pointer' onClick={()=>clickHandler(id)}>
            <img className='w-[300px] rounded-lg h-[200px]' src={thumbnail} />
            <div className='flex'>
                <div className='flex-1 items-center flex justify-center'>
                    <img className='w-[70%] h-[50%] rounded-[50%]' src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className='flex-[4] text-white flex flex-col'>
                    <p className='font-semibold text-lg pt-4 pb-2'>{(title.length > 50) ? (title.substring(0, 50) + "...") : title}</p>
                    <p className='text-gray-300'>{channelTitle}</p>
                </div>
            </div>


        </div>
    )
}

export default Card