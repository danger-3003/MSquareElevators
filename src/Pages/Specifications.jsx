import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Image from "../assets/Specifications/Specifications.png"
import Bg from "../assets/Specifications/Bg.jpg"

function Specification() {
    return(
        <div>
            <div className="flex items-center justify-center py-20 md:py-40 pt-40" style={{background:`linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${Bg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                <p className="font-[poppins] text-white font-bold uppercase text-2xl md:text-4xl lg:text-5xl tracking-widest sm:tracking-[0.5rem]">Specifications</p>
            </div>
            <div className="flex items-center justify-center py-10 px-5 sm:px-7 md:px-10">
                <img src={Image} alt="Specifications" className="md:w-[38rem] lg:w-[44rem]"/>
            </div>
        </div>
    );
}

export default Specification;
