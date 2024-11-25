import { Link } from "react-router-dom";
import Bg from "../assets/Footer.jpg";
import Logo from "../assets/Logo.svg";
import { faLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return(
        <div>
            <div className="h-max font-[poppins] flex items-center justify-center flex-col px-5 py-10" style={{background:`linear-gradient(to right,rgba(18,18,18,0.7),rgba(18,18,18,0.9)),url(${Bg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
                <div className="">
                    <ul className={`flex items-center justify-center flex-wrap gap-5 flex-row bg-transparent`}>
                        <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300">
                            <Link to="/#home">Home</Link>
                        </li>
                        <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300">
                            <Link to="/#products">Products</Link>
                        </li>
                        <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300">
                            <Link to="/#about">About</Link>
                        </li>
                        <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300">
                            <Link to="/specifications">Specifications</Link>
                        </li>
                        <li className="text-[#ffe875] font-extralight hover:text-white transition-all duration-300">
                            <Link to="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row flex-wrap w-full">
                    <img src={Logo} alt="Logo" className="h-52 w-52 md:h-64 md:w-64 lg:h-80 lg:w-80" />
                    <div className="flex items-start justify-center flex-col gap-5 w-60 sm:w-64 md:w-80 text-[#fff]">
                        <div className="text-2xl font-semibold uppercase text-[#ffe875]">Contact Us</div>
                        <div className="flex items-start justify-start gap-1.5 sm:gap-3 flex-col">
                            <div className="flex items-start justify-start gap-3 text-base">
                                <FontAwesomeIcon icon={faLocationDot} className="text-md md:text-xl"/>
                                <p>Plot No: 58, Kompally, Near TTR Machines, Secunderabad - 500014</p>
                            </div>
                            <div className="flex items-start justify-start gap-3 text-base">
                                <FontAwesomeIcon icon={faEnvelope} className="text-md md:text-xl"/>
                                <a href="mailto:demoUser@gmail.com">demoUser@gmail.com</a>
                            </div>
                            <div className="flex items-center justify-start gap-2 text-base">
                                <FontAwesomeIcon icon={faPhone} className="text-md md:text-lg"/>
                                <a href="tel:6304978764">6304978764 ,</a>
                                <a href="tel:9885557571">9885557571</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
