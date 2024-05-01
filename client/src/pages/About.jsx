import React from 'react';
import { Header, Footer } from '../components';
import { ambulance, blockchain, cancer, child, earth, medical, ngo, poor, starvation } from '../assets';

export default function About() {
    return (
        <div className='flex flex-col w-full'>
            <Header />
            <div className="py-16 bg-white dark:bg-[#13131a]">
                <div className="container m-auto px-6 text-black dark:text-white md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                className='w-9/12'
                                src={blockchain}
                                alt="Blockchain"
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-black dark:text-white font-bold md:text-4xl">
                                Revolutionizing Crowdfunding with Blockchain Technology
                            </h2>
                            <p className="mt-6 text-black dark:text-gray-400">
                                We're on a mission to redefine the crowdfunding landscape using the transformative power of blockchain. Our platform brings together creators and backers in a decentralized ecosystem that prioritizes transparency, security, and accessibility. By leveraging blockchain technology, we eliminate the need for intermediaries, ensuring that funds flow directly from backers to creators with minimal fees and maximum efficiency.
                            </p>
                            <p className="mt-4 text-black dark:text-gray-400">
                                Join us in revolutionizing crowdfunding, where innovative ideas meet the limitless possibilities of blockchain technology. Together, we're shaping the future of fundraising, one block at a time.
                            </p>
                        </div>
                    </div>

                    {/* New section */}
                    <div className="flex flex-col gap-5 items-center">
                        <h1 className="text-2xl sm:text-3xl mt-10 text-black dark:text-white lg:text-4xl font-bold">Crowdfunding Categories</h1>
                        <hr className='w-64 mx-auto mt-1 border-2 border-[#4acd8d]'/>
                    </div>

                    <div className='inset-0 bg-gradient from-white to-transparent h-[400px] m-auto relative w-11/12 mt-2 grid items-center overflow-hidden'>
                        <div className='animate-[scroll_10s_linear_infinite] hover:[animation-play-state:paused] flex w-[2250px] gap-8'>
                            {[
                                { image: medical, label: 'Medical' },
                                { image: cancer, label: 'Cancer' },
                                { image: ngo, label: 'NGO' },
                                { image: child, label: 'Child Health' },
                                { image: ambulance, label: 'Emergency' },
                                { image: earth, label: 'Nature' },
                                { image: poor, label: 'Help Poor' },
                                { image: starvation, label: 'Starvation' },
                            ].map(({ image, label }, index) => (
                                <div key={index} className='hover:scale-105 hover:rotate-0 duration-300 h-[300px] w-[250px] flex flex-col items-center p-8 bg-slate-100 dark:bg-gray-800 rounded-3xl'>
                                    <img className='w-full ' src={image} alt={label} />
                                    <div className='text-gray-700 dark:text-white mt-3 font-semibold'>{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
