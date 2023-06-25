import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context';
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';
import SingleVideo from './SingleVideo';
import Cards from './Cards';


const Feed = () => {

    const [data, setData] = useState([]);

    let API_KEY = 'AIzaSyCMd-DmspukbMlCWTZhoVe379ia4HvRr3E'
    let BASE_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCMd-DmspukbMlCWTZhoVe379ia4HvRr3E&type=video&q=ajax"
    let video = "https://www.youtube.com/embed/xpFTkruwhBQ"

    const context = useContext(Context);

    const { id } = useParams();

    const getData2 = () => {

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: (context.query) ? context.query : "python",
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
            },
            headers: {
                'X-RapidAPI-Key': 'b5ce814a46msha2dff0584e5c399p1b70e2jsn3102485e56f4',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data.items);
            setData([...response.data.items])

        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getData2();
    }, [context.query])
    

    return (
        <div className=' flex'>

            <Sidebar></Sidebar>


            {
                (id) ? (<SingleVideo />) : (<Cards />)
            }


        </div>
    )
}

export default Feed