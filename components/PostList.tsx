import React, { useState, useEffect, useCallback } from 'react'
import {Pagination, Date} from '.';
// import * as _ from "lodash";
import _ from 'lodash';
import { paginate } from "../utils/paginate";
import { useGetAllNewsQuery } from "@/store/apiSlice/newsApi";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { changeCurrIndex } from "@/store/slice/newsSlice";
import Link from 'next/link';


const PostList = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const pageSize = 12;

   const { data, error, isLoading, isError } = useGetAllNewsQuery({
    q:'apple',
    from:'2023-05-30',
    to:'2023-05-30',
    sortBy:'popularity',
    apiKey:'d128a5d0636d4b81b69708bd2fbad56f'
  });

  const paginatePosts = paginate(data?.articles, currentPage, pageSize);
  console.log(paginatePosts)


  const currIndex = useAppSelector((state) => state.news.currentIndex);
  const dispatch = useAppDispatch();

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

 
  


  

  return (
    <>
     {isLoading ? (
          <>Loading...</>
        ) : isError ? (
          <>Error</>
        ) : (

       <div className='items-center m-8 md:mx-auto lg:max-w-7xl h-full py-20 2xl:px-16'>
        <div className='flex justify-between'>
            <p className='text-[30px] font-[500]'>All Posts With Pagination</p>
            <button className='bg-[#0F52BA] hover:bg-blue-500 py-1 px-5 text-white rounded-md'><Link href="/allnews">View all news</Link></button>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-3 my-14'>
          
            {
              paginatePosts.map((article:any, index:number) =>{
                return (
                  <>
                    <div className="max-w-lg mx-auto">
                      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5" key={index}>
                          <a href={article.url}>
                            <img className="rounded-t-lg" src={article.urlToImage} alt="" />
                          </a>
                          <div className="p-5">
                              <a href={article.url}>
                                  <h5 className="text-gray-800 font-bold text-xl tracking-tight line-clamp-2 mb-2">{article.title}</h5>
                              </a>
                              <p className="font-normal text-gray-700 line-clamp-3 mb-3">{article.description}</p>
                              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={article.url}>
                                  Read more
                              </a>
                          </div>
                      </div>
                      
                    </div>
                  </>
                );    
            })
            }
        </div>
        <Pagination
        items={data.articles.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
       </div>
        )}
    </>
  )
}

export default PostList
