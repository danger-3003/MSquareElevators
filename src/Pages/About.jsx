import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideImage from "../assets/Background.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    const location = useLocation();
    const aboutScreen=useRef(null);
    useEffect(()=>{
        // if(location.hash==="#about" && aboutScreen.current)
        // {
        //     aboutScreen.current.scrollIntoView({behavior:'smooth'})
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
        
        if (location.hash === "#about" && aboutScreen.current) {
            smoothScroll(aboutScreen.current, 1000); // 1000ms for the duration
        }
    },[location]);

    useEffect(()=>{
        AOS.init({duration:1000})
        AOS.refresh()
    })

    return(
        <div className="h-max pt-24 pb-16 px-[3%] sm:px-5 md:px-10 font-[poppins] overflow-hidden" ref={aboutScreen}>
            <div className="flex items-center justify-center flex-col gap-10 md:flex-row">
                <div data-aos="fade-right" className="flex items-start justify-center flex-col w-[80%] sm:w-[32rem] md:w-[40rem]">
                    <div className="text-4xl font-bold text-[#001f3f] mb-5">
                        <p>Our Journey of Excellence</p>
                    </div>
                    <div>
                        <p>
                            MSquare Elevators stands as a leader in the elevator industry, recognized for delivering exceptional <span className="font-bold text-[#121212] text-lg uppercase">quality and trusted</span> by customers across the construction sector.
                            With years of technical expertise and marketing experience, our founding partners bring entrepreneurial spirit and a commitment to the highest standards of integrity.
                            Our presence spans key locations, with branches in <span className="font-bold text-[#121212] text-lg uppercase">Visakhapatnam</span> and <span className="font-bold text-[#121212] text-lg uppercase">Secunderabad</span>, ensuring seamless service and accessibility for our customers.
                        </p>
                    </div>
                </div>
                <img data-aos="fade-left" src={SideImage} alt="SideImage" className="w-[20rem] lg:w-[30rem] mb-5" />
            </div>
            <div data-aos="fade-up" className="my-5 sm:px-5 md:px-10 text-center">
                <p>
                    We’re more than a service provider; we’re a brand built on reliability, innovation, and customer satisfaction. Our mission is to offer seamless, state-of-the-art mobility
                    solutions that meet diverse construction demands while adhering to strict safety standards.
                </p>
            </div>
        </div>
    );
}

export default About;
