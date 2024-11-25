import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Room1 from "../assets/Products/Rooms/room1.jpg"
import Room2 from "../assets/Products/Rooms/room2.jpg"
import Room3 from "../assets/Products/Rooms/room3.jpg"
import Room4 from "../assets/Products/Rooms/room4.jpg"
import Room5 from "../assets/Products/Rooms/room5.jpg"
import Room6 from "../assets/Products/Rooms/room6.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./swiper.css";

import { FreeMode, Pagination } from "swiper/modules";
function RoomSwiper() {
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
            <p className="mx-6 sm:mx-10 lg:mx-20 xl:mx-36 text-left text-[#333333] font-semibold text-xl mt-10 ">Our Interior Designs - </p>
            <div className="mx-6 sm:mx-10 lg:mx-20 xl:mx-36 relative flex items-center justify-center">
                <div className="w-10 h-full absolute z-[5] bg-gradient-to-r from-[#ececec] to-[#ececec00] left-0"></div>
                <div className="w-10 h-full absolute z-[5] bg-gradient-to-r to-[#ececec] from-[#ececec00] right-0"></div>
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
                        <div className="relative overflow-hidden group mb-10 ml-5 sm:ml-0 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Room1} alt="Room1" />
                            {/* <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>Collapsible Gate</p></div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Room2} alt="Room2" />
                            {/* <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>IFG/ Accordian Gates</p></div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Room3} alt="Room3" />
                            {/* <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>MS Powder Small Vision Semi Automatic Door</p></div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Room4} alt="Room4" />
                            {/* <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>SS Big Vision Semi Automatic Door</p></div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Room5} alt="Room5" />
                            {/* <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>Manual Telescopic Doors with Small Vision</p></div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden group mb-10 shadow-lg shadow-[rgba(0,0,0,0.5)] h-max w-max rounded-xl">
                            <img className="h-60 w-28 md:h-72 md:w-48 object-cover object-center rounded-xl" src={Room6} alt="Room6" />
                            {/* <div className="bg-[#001f3f] top-full group-hover:top-0 transition-all duration-700 rounded-xl left-0 h-full w-full absolute flex items-center justify-center text-center font-light text-sm px-3"><p>SS Glass Manual Telescopic Doors with Big Vision</p></div> */}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default RoomSwiper;
