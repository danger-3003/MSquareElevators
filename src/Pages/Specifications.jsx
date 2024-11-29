import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Image from "../assets/Specifications/Specifications.png";
import Bg from "../assets/Specifications/Bg.jpg";

function Specification() {
    const location = useLocation();
    const specificationSection = useRef(null);

    useEffect(() => {
        if (
            location.pathname === "/specifications" &&
            specificationSection.current
        ) {
            specificationSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <div ref={specificationSection}>
            <div
                className="flex items-center justify-center py-20 md:py-40 pt-40"
                style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${Bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <p className="font-[poppins] text-white font-bold uppercase text-2xl md:text-4xl lg:text-5xl tracking-widest sm:tracking-[0.5rem]">
                    Specifications
                </p>
            </div>
            <div className="flex items-center justify-center flex-col w-full font-[poppins] px-5 md:px-10">
                <div className="pt-10 flex items-center justify-center flex-col lg:px-10 w-[90vw] sm:w-[25rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem]">
                    <p className="text-base md:text-lg text-center md:w-[40rem] lg:w-[50rem]">
                        At MSquare Elevators, we prioritize safety,
                        functionality, and customization in every elevator we
                        design. Below are the key size and construction-related
                        specifications for our elevators:
                    </p>
                    <div className="flex items-center justify-center flex-col">
                        <p className="font-bold text-2xl text-center lg:text-3xl text-[#001f3f] pt-10 pb-5">
                            Structural Requirements
                        </p>
                        <div className="flex items-center justify-center flex-wrap gap-5">
                            <div className="border border-[#001f3f] rounded-2xl p-5 w-60 h-52 sm:h-48 sm:w-72 lg:w-80">
                                <p className="font-semibold text-lg mb-3">
                                    Standard Height
                                </p>
                                <ul className="list-disc text-sm md:text-base pl-5">
                                    <li>
                                        From the last landing to the machine
                                        room: 14 feet.
                                    </li>
                                    <li>
                                        Minimum customized height: 10 feet (with
                                        reduced cabin height to 6 feet).
                                    </li>
                                </ul>
                            </div>
                            <div className="border border-[#001f3f] rounded-2xl p-5 w-60 h-52 sm:h-48 sm:w-72 lg:w-80">
                                <p className="font-semibold text-lg mb-3">
                                    Pit Depth
                                </p>
                                <ul className="list-disc text-sm md:text-base pl-5">
                                    <li>
                                        Standard pit depth: 6 feet from the
                                        bottom landing level.
                                    </li>
                                    <li>Minimum height: 1.5 feet.</li>
                                </ul>
                            </div>
                            <div className="border border-[#001f3f] rounded-2xl p-5 w-60 h-52 sm:h-48 sm:w-72 md:w-[19rem] lg:w-80">
                                <p className="font-semibold text-lg mb-3">
                                    Top of Shaft
                                </p>
                                <ul className="list-disc text-sm md:text-base pl-5">
                                    <li>
                                        Machines are to be placed on
                                        an 8-inch slab for stability.
                                    </li>
                                    <li>
                                        Access to the machine can be provided
                                        for emergencies.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-10 px-5 sm:px-7 md:px-10">
                    <img
                        src={Image}
                        alt="Specifications"
                        className="md:w-[38rem] lg:w-[44rem]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Specification;
