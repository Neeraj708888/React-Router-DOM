import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // Here we call to useLoaderData() Custom-Hook
    const data = useLoaderData();

    // const [data , setData] = useState([]);

    // useEffect(() => {
    // fetch('https://api.github.com/users/neeraj708888')
    // .then(response => response.json())
    // .then(data => {
        // console.log(data);
        // setData(data);
    // })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers: {data.followers }
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github;

 export const loaderInfo  = async () =>  {
   const response = await fetch('https://api.github.com/users/neeraj708888');
   console.table(response);
    return response.json();
}