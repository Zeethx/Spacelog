import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        appwriteService.getFilePreview(featuredImage)
            .then(url => setImageUrl(url))
            .catch(err => {
                console.error("Error fetching image:", err);
            });
    }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-1 md:p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={imageUrl} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='font-bold md:text-xl text-pink-800'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard