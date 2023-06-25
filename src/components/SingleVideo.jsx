import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleVideo = (props) => {

    // window.alert(props.id)
    const { id } = useParams();
    const [videoData, setVideoData] = useState({});

    // window.alert(id)


    const getVideoData = () => {
        // const axios = require("axios");

        console.log("heeeee")

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/videos',
            params: {part: 'contentDetails,snippet,statistics', id: (id)? id : "7ghhRHRP6t4"},
            headers: {
              'X-RapidAPI-Key': 'b5ce814a46msha2dff0584e5c399p1b70e2jsn3102485e56f4',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.items[0]);
              setVideoData(response.data.items[0]);
          }).catch(function (error) {
              console.error(error);
          });
    }

    useEffect(()=>{
        getVideoData();
    },[])


    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                frameborder="0"
                className='w-8/12 h-[60vh] mx-auto mt-10'

            ></iframe>

            <p>
                {
                    videoData.snippet.title
                }
            </p>

        </div>
    )
}

export default SingleVideo