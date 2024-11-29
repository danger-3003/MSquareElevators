import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Contact() {
    const location = useLocation();
    const contactSection = useRef(null);
    const [disable, setDisable] = useState(false);
    const [details, setDetails] = useState({
        name: "",
        email: "",
        number: "",
        Subject: "",
        Body: "",
    });

    useEffect(() => {
      // if (location.hash === '#contact' && contactSection.current) {
      //     contactSection.current.scrollIntoView({ behavior:'smooth' });
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
    
    if (location.hash === "#contact" && contactSection.current) {
        smoothScroll(contactSection.current, 1000); // 1000ms for the duration
    }
  }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable(true);
        const data = {
            name: details.name,
            email: details.email,
            toMail: "demoUser@gmail.com",
            toName: "MSquare Elevators",
            phone: details.number,
            subject: details.Subject, // Include inquiryType in subject
            message: details.Body,
        };
        axios
            .post("https://api.qrdcard.com/api/url/sendmail", data)
            .then((res) => {
                if (res) {
                    setDisable(false);
                    alert("Form Submitted Successfully");
                    setDetails({
                        details,
                        name: "",
                        email: "",
                        number: "",
                        Subject: "",
                        Body: "",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(details);
    };

    return (
        <div
            ref={contactSection}
            className="flex items-center justify-center flex-wrap flex-col md:flex-row gap-10 py-20 bg-[#ffffff]"
        >
            <div className="flex items-center justify-center flex-col">
                <p className="text-2xl font-bold text-center md:text- w-full text-[#333333]">
                    Contact Us -{" "}
                </p>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Name <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={details.name}
                                required
                                name="name"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        name: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#001f3f] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Email <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={details.email}
                                required
                                name="email"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        email: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#001f3f] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Mobile Number{" "}
                                <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="number"
                                placeholder="Your mobile number"
                                value={details.number}
                                required
                                name="mobile"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        number: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#001f3f] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Subject<span className="text-red-600">*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="Subject"
                                required
                                value={details.Subject}
                                name="country"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        Subject: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#001f3f] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Message<span className="text-red-600">*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="Your Message"
                                name="body"
                                value={details.Body}
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        Body: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#001f3f] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                disabled={disable}
                                className="bg-[#333333] hover:bg-[#121212] rounded-sm px-6 py-1 text-[#fff] font-semibold shadow-md shadow-slate-400 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="">
                <iframe
                    className="w-[90vw] h-60 sm:w-[80vw] sm:h-56 md:h-72 md:w-[26rem] lg:h-80 lg:w-[35rem]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.4898297959869!2d83.20009098193275!3d17.696422114270288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968fdad2f2dd1%3A0xbf8f356b353b9231!2sSree%20Ramakrishna%20Engineering%20Company!5e1!3m2!1sen!2sin!4v1732338086642!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    loading="eager"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
