import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
  
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
    ]
  
    return (
      <header className='fixed top-0 left-0 right-0 z-50 text-white shadow-md bg-neutral-800'>
        <Container>
          <nav className='flex items-center'>
            <Link to='/' className='ml-8'>
              <Logo width='100px'/>
            </Link>
            <ul className='flex-grow flex items-center justify-end space-x-4'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='last:mr-0'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 rounded-full text-white hover:bg-pink-400 transition-colors duration-200 ease-in-out font-medium'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    )
  }

export default Header;
