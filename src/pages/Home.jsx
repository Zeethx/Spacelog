import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import authService from '../appwrite/auth';
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-white">
                                Welcome! 
                            </h1>
                            <p className="text-lg text-gray-500">
                                You have not created any posts yet.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='mt-16 xl:mt-24 3xl:mt-10'>
                    <img src='spacelog-text.png' alt='Spacelog' className='w-1/2 mx-auto my-5' />
                </div>
                <h2 className='text-bold text-sm md:text-lg text-center
                 text-gray-200 border-b border-purple-300 mb-4'
                >Write the Wonders of the Universe! </h2>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home