import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Broucher from "../assets/Broucher.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import LiftSwiper from "../Components/LiftSwiper";
import RoomSwiper from "../Components/RoomSwiper";

function Products() {
    const productSection = useRef(null);
    const location = useLocation();
    useEffect(() => {
        // if (location.hash === "#product" && productSection.current) {
        //     productSection.current.scrollIntoView({ behavior: "smooth" });
        // }
        function easeIn(t) {
            return t * t; // Simple ease-in function
        }
        
        function smoothScroll(target, duration) {
            const start = window.scrollY;
            const end = target.getBoundingClientRect().top + start;
            const distance = end - start;
            let startTime = null;
        
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeIn(progress);
                
                window.scrollTo(0, start + distance * ease);
        
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
        
            requestAnimationFrame(animation);
        }
        
        if (location.hash === "#products" && productSection.current) {
            smoothScroll(productSection.current, 1000); // 1000ms for the duration
        }
    }, [location]);
    return (
        <>
            {/* Slides per view */}
            <div className=" pb-16 pt-24 bg-[#ececec] font-[poppins] text-[#ffffff]" ref={productSection}>
               <div className="flex items-center justify-center flex-col">
                    <p className="font-bold uppercase text-4xl text-[#001f3f] mb-5">Our Products</p>
                    <p className="px-5 md:px-7 lg:w-[80%] text-[#121212] font-semibold mb-5 text-center">At MSquare Elevators, we offer a comprehensive range of elevator solutions tailored to meet diverse applications:</p>
                    <div className="flex items-center justify-center flex-row flex-wrap gap-3 mb-5">
                        <div className="bg-[#121212] px-3 py-2 rounded-lg hover:scale-110 transition-all duration-200">
                            <p>Residential Elevators</p>
                        </div>
                        <div className="bg-[#121212] px-3 py-2 rounded-lg hover:scale-110 transition-all duration-200">
                            <p>Commercial Elevators</p>
                        </div>
                        <div className="bg-[#121212] px-3 py-2 rounded-lg hover:scale-110 transition-all duration-200">
                            <p>Industrial Elevators</p>
                        </div>
                        <div className="bg-[#121212] px-3 py-2 rounded-lg hover:scale-110 transition-all duration-200">
                            <p>Custom Solutions</p>
                        </div>
                    </div>
                    <div className="">
                        <a href={Broucher} target="_blank" className="relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-[#001f3f] transition duration-300 ease-in-out border-2 border-[#001f3f] rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-[#001f3f] group-hover:translate-x-0 ease-in-out group-hover:rounded-full">
                                <svg className="w-6 h-6 text-[#ececec]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-[#001f3f] transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">Download Brochure</span>
                            <span className="relative invisible">Download Brochure</span>
                        </a>
                    </div>
                </div> 
            <div className="text-center">
                <LiftSwiper />
                <RoomSwiper />
            </div>
            </div>
        </>
    );
}

export default Products;