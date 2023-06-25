import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import Context from '../context/Context';
import Card from './Card';



const Cards = () => {

    const [data, setData] = useState([]);
    const context = useContext(Context);

    const getData = () => {



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
        getData();
    })

    return (
        <div className='flex w-[85%] flex-wrap gap-6 ml-[50px] mt-[25px]'>

            {
                data.map(elem => {
                    return (
                        <Card elem={elem}></Card>
                    )
                })
            }
        </div>
    )
}

export default Cards