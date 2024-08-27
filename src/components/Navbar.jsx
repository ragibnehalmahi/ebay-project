import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
    const NavbarMenu = [
        {title:"home",
            link:"/"
        }, 
        {
            id:2,
            title:"Trainer",
            link:"#"
        },
        {
            id:3,
            title:"Program",
            link:"#"
        },
        {
            id:4,
            title:"Pricing",
            link:"#"
        },
        {
            id:5,
            title:"Blogs",
            link:"#"
        }
    ]
  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <FaDumbbell />
          <p>Coders Gym</p>
        </div>
          {/* menu section*/}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
                {
                    NavbarMenu.map((item)=>{
                        return(
                            <li key={item.id}><a href={item.link}>{item.title}</a></li>
                        )
                    })
                }
            </ul>
          </div>
            {/* icons section*/}
            <div className='flex gap-6 my-6'>
            <button className='text-2xl hover:bg-blue-800 hover:text-white rounded-full p-2 duration-200'>
                <CiSearch className=''/>
            </button>
            <PiShoppingCartThin className='text-2xl hover:bg-orange-500 hover:text-white rounded-full p-2 duration-200'/>
            <button className='text-2xl hover:bg-blue-800 hover:text-white rounded-full p-2 duration-200'> login</button>
            </div>
              {/* mobile hamburger section*/}
    </div>
    </nav>
    </>
  )
}

export default Navbar