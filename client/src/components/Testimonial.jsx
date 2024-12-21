import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import profile1 from "../../src/Assets/profile1.jpeg"
import profile2 from "../../src/Assets/profile2.jpeg"
import profile3 from "../../src/Assets/profile3.jpeg"
import frame from "../Assets/framebackground.png";
const testimonials = {
    "Family Members": [
        {
            id: 1,
            name: "Payal",
            role: "Housewife",
            image: profile1, // Replace with the actual image path
            review: "This platform gave me peace of mind knowing my kids will have everything they need when I’m no longer around. Assigning documents was simple, and the interface is so user-friendly. It's a gift of security",
        },
        {
            id: 2,
            name: "Sarah khan",
            role: "Teacher",
            image: profile2, // Replace with the actual image path
            review: "I can’t thank this platform enough for giving me peace of mind. It’s user-friendly, secure, and the perfect way to ensure my kids have what they need even if I’m not around.",
        },
        {
            id: 3,
            name: "Sarah oberoi",
            role: "housewife",
            image: profile3, // Replace with the actual image path
            review: "The platform’s simplicity and efficiency are unmatched. I was able to assign important documents to my family in just a few clicks. Now, I feel relieved knowing everything is in place for my loved ones.",
        },
        // Add 3 more family member reviews here
    ],
    "Business Owners": [
        {
            id: 1,
            name: "John A",
            role: "Small Business Owner",
            image: profile2,
            review: "This platform streamlined my business planning and helped me secure my documents efficiently. Highly recommended!",
        },
        {
            id: 2,
            name: "John Aaa",
            role: "large Business Owner",
            image: profile1,
            review: "As a startup owner, efficiency is everything. This platform simplified my document organization and gave me peace of mind knowing everything is securely stored. Highly recommend it!",
        },
        {
            id: 3,
            name: "John Aaaaa",
            role: "extralarge Business Owner",
            image: profile3,
            review: "Managing my business documents has never been this easy. This platform’s intuitive design and secure features have saved me countless hours of work. Absolutely love it!",
        },
        // Add 3 more business owner reviews here
    ],
    "Working Professionals": [
        {
            id: 1,
            name: "Emily R",
            role: "Marketing",
            image: profile3,
            review: "Assadf a working professional,  Lorem ipsum dolor sit amet.I needed a tool to manage my documents seamlessly. This platform has been a lifesaver!",
        },
        {
            id: 2,
            name: "Emily Rrr",
            role: "frontend",
            image: profile1,
            review: "As ,mnjhga working professional, I needed a tool to manage my documents seamlessly  This platform has been a lifesaver!",
        },
        {
            id: 3,
            name: "Emily Rrrrrr",
            role: "backend",
            image: profile2,
            review: " I needed a tool to manage my documents seamlessly. This platform has been a lifesaver! needed a tool to manage my documents seamlessly",
        },

    ],
};

function Testimonial() {
    const [activeCategory, setActiveCategory] = useState("Family Members");
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials[activeCategory].length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials[activeCategory].length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className='w-full max-w-9xl bg-[#2E2E2E] py-4 ' 
            style={{
                backgroundImage: `url(${frame})`,
                backgroundSize: "cover",
                
                backgroundPosition: "center",
            }}
            >
                <div className="w-full   max-w-7xl mx-auto p-6  rounded-lg shadow-md   ">
                    <div className='flex justify-center pb-4'><span className='inline-flex justify-center p-2 bg-white rounded-2xl '>
                        <Users className="h-5" /> <span className='font-sm'>Testimonial</span>
                    </span></div>

                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-2 text-white">What Our Users Say</h2>

                    {/* Tabs */}
                    <div className="flex justify-center space-x-4  md:mb-6">
                        {Object.keys(testimonials).map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded ${activeCategory === category
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                    } `}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setCurrentIndex(0);
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Review Slider */}
                    <div className="flex items-center justify-center">


                        <div className="flex flex-col items-center text-center mx-4 p-6 rounded-lg">

                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    // initial={{ opacity: 0, x: 50 }}
                                    // animate={{ opacity: 1, x: 0 }}
                                    // exit={{ opacity: 0, x: -50 }}
                                    // transition={{ duration: 0.5 }}


                                    initial={{ opacity: 0, x: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.5 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <p className="text-white  font-serif mb-4 ">
                                        {testimonials[activeCategory][currentIndex].review}
                                    </p>
                                    <div className='inline-flex p-2 pb-1 px-8 rounded-xl mt-4 justify-center bg-gray-700 items-center'>
                                        <img
                                            src={testimonials[activeCategory][currentIndex].image}
                                            alt={testimonials[activeCategory][currentIndex].name}
                                            className="w-16 h-16 rounded-full  bg-slate-500 object-cover "
                                        />
                                        <div className='ml-1 items-centr'>

                                            <p className="text-white font-semibold">
                                                {testimonials[activeCategory][currentIndex].name}
                                            </p>
                                            <p className="text-white ml-2 text-sm">
                                                {testimonials[activeCategory][currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>

                    <div className='flex justify-between md:justify-around'>
                        <button
                            className="text-white"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            className="text-white"
                            onClick={handleNext}
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Testimonial;
