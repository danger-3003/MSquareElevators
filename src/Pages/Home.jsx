import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Bg from "../assets/Background.jpg";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const homeSection = useRef(null);
    const location = useLocation();
    useEffect(() => {
        // if (location.hash === '#home' && homeSection.current) {
        //     homeSection.current.scrollIntoView({ behavior:'smooth' });
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
        
        if (location.hash === "#home" && homeSection.current) {
            smoothScroll(homeSection.current, 1000); // 1000ms for the duration
        }
    }, [location]);

    useEffect(()=>{
        AOS.init({duration:1000})
        AOS.refresh()
    })

    return (
        <>        
            {/* Slides per view */}
            <div className="relative overflow-hidden flex items-center flex-col justify-center px-5 md:px-10 pt-28 pb-20 md:pb-20 md:pt-36 lg:pt-52 lg:pb-40 font-[poppins]" ref={homeSection} style={{background:`linear-gradient(to bottom,rgba(0,6,6,0.9),rgba(0,3,6,0.7)), url(${Bg})`, backgroundAttachment:"fixed", backgroundPosition:"center", backgroundSize:"cover"}}>
                <div data-aos="fade-right" className="text-center text-white flex items-center justify-center flex-col">
                    <p className="font-bold uppercase text-3xl leading-[4rem] tracking-[0.4rem] md:text-[4rem] md:tracking-[0.7rem] lg:text-[5rem] lg:tracking-[0.9rem]">Welcome</p>
                    <p className="font-extralight text-base md:text-xl italic mt-3 mb-5">Your trusted partner in innovative moving technology.</p>
                    <p className="text-sm md:text-lg font-light w-[80%]">As a government-certified and licensed company, we deliver advanced solutions tailored to meet your construction needs. Whether it’s residential, commercial, or industrial, our elevators are designed to enhance mobility and elevate your experience.</p>
                </div>
                <div className="flex items-center justify-center flex-col fixed right-0 scale-75 sm:scale-100">
                    <div className="shadow-md shadow-slate-800 rounded-full bg-white w-5 h-5 p-5 my-1 flex items-center justify-center">
                        <a target="_blank" href="tel:6304978764"><FontAwesomeIcon icon={faPhone} className="text-blue-600"/></a>
                    </div>
                    <div className="shadow-md shadow-slate-800 rounded-full bg-white w-5 h-5 p-5 my-1 flex items-center justify-center">
                        <a target="_blank" href="mailto:demoUser@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="text-red-500"/></a>
                    </div>
                    <div className="shadow-md shadow-slate-800 rounded-full bg-white w-5 h-5 p-5 my-1 flex items-center justify-center">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=6304978764"><FontAwesomeIcon icon={faWhatsapp} className="text-emerald-500 text-xl mt-1"/></a>
                    </div>
                </div>
                <div data-aos="fade-left" className="my-5">
                    <Link to="#products" className="border-[#50c878] border rounded-md font-semibold text-[#50c878] hover:bg-[#50c878] hover:text-[#001f3f] tranisition-all duration-300 px-4 py-1 m-3">Explore</Link>
                    <Link to="#contact" className="border-[#50c878] border rounded-md font-semibold text-[#50c878] hover:bg-[#50c878] hover:text-[#001f3f] tranisition-all duration-300 px-4 py-1 m-3">Contact</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
