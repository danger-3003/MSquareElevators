import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import Logo from "../assets/Logo.svg"
import { useState } from 'react'

function NavBar() {

    const [menu,setMenu] = useState(false);
    const handleMenu=()=>{
        setMenu(!menu);
    }

    return (
        <div className="font-[poppins] fixed top-0 z-10 w-screen px-5 bg-[#121212] flex items-center justify-center md:justify-between shadow-[#00000038] shadow-md">
            <div className="block md:hidden absolute left-5" onClick={handleMenu}>
                <FontAwesomeIcon 
                    icon={menu?faTimes:faBars}
                    className="text-[#ffe875] text-md hover:text-white"
                />  
            </div>
            <div className="rounded-full flex items-center justify-center">
                <img src={Logo} alt="" className="h-12 w-40 py-2 md:py-1" />
            </div>
            <ul className={`flex items-center justify-center flex-col w-screen gap-10 md:flex-row md:mr-16 lg:mr-0 absolute left-0 ${!menu?"-top-80":"top-12"} transition-all duration-[500ms] bg-[#121212] md:top-0 py-5 md:py-0 md:relative`}>
                <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300" onClick={handleMenu}>
                    <Link to="/#home">Home</Link>
                </li>
                <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300" onClick={handleMenu}>
                    <Link to="/#about">About</Link>
                </li>
                <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300" onClick={handleMenu}>
                    <Link to="/#products">Products</Link>
                </li>
                <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300" onClick={handleMenu}>
                    <Link to="/specifications">Specifications</Link>
                </li>
                <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300" onClick={handleMenu}>
                    <Link to="/#contact">Contact</Link>
                </li>
            </ul>
            <div className="absolute right-5 lg:relative group">
                <a
                    href="tel:9885557571"
                    className="text-[#ffe875] font-light text-md transition-all group-hover:text-white duration-300 flex flex-row items-center"
                >
                    <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="text-[#ffe875] group-hover:text-white transition-all duration-300 mr-2"
                    />
                    <p className="hidden lg:block font-extralight">9885557571</p>
                </a>
            </div>
        </div>
    );
}

export default NavBar;
