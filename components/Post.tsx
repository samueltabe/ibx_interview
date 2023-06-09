import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { useGetAllNewsQuery } from "@/store/apiSlice/newsApi";
import {useParams} from 'react-router-dom'

export const Post = () => {
    const [post, setPost] = useState([]);

    const { data, error, isLoading, isError } = useGetAllNewsQuery({
        q:'apple',
        from:'2023-05-30',
        to:'2023-05-30',
        sortBy:'popularity',
        apiKey:'d128a5d0636d4b81b69708bd2fbad56f'
      });

      const {name} = useParams();

      useEffect(() => {
        setPost(data.articles)
        // const article = post.filter(post=> post.title === name)
      }, [])

    return(
        <>
            <Head>
            <title>Ibx | News Details</title>
            <meta name="description" content="Generated by create next app" />
            <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,300,600,400&display=swap" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <div className='mx-auto max-w-7xl'>
              <h1>details</h1>
              
            </div>
        </>
    )
}
