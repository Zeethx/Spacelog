import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className= "w-full footer left-0 right-0 bg-neutral-800 shadow mt-4">
        <div className="w-full p-4 md:py-8 text-white">
            <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center">
                        <Logo width="70" />
                    </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Blog</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Spacelog™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer