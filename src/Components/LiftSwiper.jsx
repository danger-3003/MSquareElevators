import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Lift1 from "../assets/Products/Lifts/Lift1.jpg"
import Lift2 from "../assets/Products/Lifts/Lift2.jpg"
import Lift3 from "../assets/Products/Lifts/Lift3.jpg"
import Lift4 from "../assets/Products/Lifts/Lift4.jpg"
import Lift5 from "../assets/Products/Lifts/Lift5.jpg"
import Lift6 from "../assets/Products/Lifts/Lift6.jpg"
import Lift7 from "../assets/Products/Lifts/Lift7.jpg"
import Lift8 from "../assets/Products/Lifts/Lift8.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./swiper.css";

import { FreeMode, Pagination } from "swiper/modules";
function LiftSwiper() {
    // let width=window.innerWidth;
    const [items, setItems] = useState(5);
    useEffect(() => {
        if (551 < window.innerWidth && window.innerWidth <= 1024) {
            setItems(4);
        } else if (401 < window.innerWidth && window.innerWidth <= 550) {
            setItems(3);
        } else if (window.innerWidth <= 400) {
            setItems(2);
        }
    }, []);
    return (
        <>
            <p className="mx-6 sm:mx-10 lg:mx-20 xl:mx-36 text-left text-[#333333] font-semibold text-xl mt-10 ">Our Lift Designs - </p>
            <div className="mx-6 sm:mx-10 lg:mx-20 xl:mx-36 relative flex items-center justify-center">
                <div className="w-5 sm:w-10 h-full absolute z-[5] bg-gradient-to-r from-[#ececec] to-[#ececec00] left-0"></div>
                <div className="w-5 sm:w-10 h-full absolute z-[5] bg-gradient-to-r to-[#ececec] from-[#ececec00] right-0"></div>
                <Swiper
                    slidesPerView={items}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mt-10"
                >   
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift1} alt="Lift1" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>Collapsible Gate</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift2} alt="Lift2" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>IFG/ Accordian Gates</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift3} alt="Lift3" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>MS Powder Small Vision Semi Automatic Door</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift4} alt="Lift4" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>SS Big Vision Semi Automatic Door</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift5} alt="Lift5" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>Manual Telescopic Doors with Small Vision</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift6} alt="Lift6" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>SS Glass Manual Telescopic Doors with Big Vision</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift7} alt="Lift7" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>Automatic Telescopic Doors with Big Vision</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Lift8} alt="Lift8" />
                            <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>SS Small Vision holes Automatic Center Opening Doors</p></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default LiftSwiper;
