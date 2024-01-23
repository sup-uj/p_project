import { Navbar, Avatar } from 'flowbite-react'
import { Button } from 'flowbite-react';
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';

const NavSection = () => {
    return (
        <nav className=''>

            <div>
                <Navbar fluid rounded >
                    <Navbar.Brand>
                        <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MNNIT SHOPPERS</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <div>
                            <Link to="/sidebar"> <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded /></Link>
                        </div>
                        <Navbar.Toggle />
                    </div>
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M21 21l-6-6M9 2a7 7 0 110 14 7 7 0 010-14z"></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search..."
                            className="py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className='flex item-center gap-5'>
                        <Button color="light">Sign Out</Button>
                        <img src={cart_icon} alt="" />
                        <div className="gap-0 w-[22px] h-[22px] flex justify-center items-center mt-[-3px] ml-[-5px] rounded-[11px] text-14 bg-red-500 text-white">
                            0
                        </div>


                    </div>

                </Navbar>
            </div>
        </nav>
    )
}

export default NavSection;