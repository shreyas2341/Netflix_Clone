import React from 'react'

import Cards from '../Components/Cards';
import Slide from '../Components/Slidebar';
import movie_data from '../Data';
import { useSelector } from 'react-redux';

export default function Home() {
    const search = useSelector(state=>state.search)
  return (
    <>
    
    <div className='headtext'>
        <h1 className='text-center text-white'>Welcome to <span className='text-danger'>NetFlix-Mini</span></h1>
    </div>
    <Slide/>
    <div className='carddiv grids container'>
        {
            movie_data.map((val)=>{
                if(val.movie_name.includes(search))
                return(
                    <Cards name={val.movie_name} img={val.movie_img} desc={val.movie_desc}/>
                )
            })
        }
    </div>
    
    </>
  )
}
