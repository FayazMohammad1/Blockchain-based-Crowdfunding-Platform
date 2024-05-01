import React from 'react';
import { Header, Footer, AnimatedGif } from '../components';

export default function About() {
    return (
        <div className='flex flex-col w-full'>
            {/* Header component */}
            <Header />
            
            {/* Section: What Is Crowdfunding? */}
            <div className="py-16 bg-white dark:bg-[#13131a]">
                <div className="container m-auto px-6 text-black dark:text-white md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            {/* Image */}
                            <img
                                src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/Hiw-new/India-Map-new.png"
                                alt="image"
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            {/* Title */}
                            <h2 className="text-2xl text-black dark:text-white font-bold md:text-4xl">
                                What Is Crowdfunding?
                            </h2>
                            {/* Description */}
                            <p className="mt-6 text-black dark:text-gray-400">
                                Crowdfunding is the process of raising funds with the help of people across the country, using donation-based fundraising platforms as the medium. Crowdfunding helps fund your emergency medical treatment or chosen cause with free 24*7 support & expert assistance. Anyone can raise funds on donation platforms - from a newborn child, senior citizens to NGOs & more!
                            </p>
                            <p className="mt-4 text-black dark:text-gray-400">
                                With donation-based crowdfunding, getting financial help for patients in India is convenient and reliable. Unlike medical loans and insurance, fundraising via online crowdfunding platforms requires no liability to pay back the funds raised. So, all the amount generated can be used to cover the cost of emergency medical treatment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: How does Crowdfunding work? */}
            <div className="py-16 bg-white dark:bg-[#13131a]">
                <div className="container m-auto px-6 text-black dark:text-white md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:7/12 lg:w-6/12">
                            {/* Title */}
                            <h2 className="text-2xl text-black dark:text-white font-bold md:text-4xl">
                                How does Crowdfunding work?
                            </h2>
                            
                            {/* Steps */}
                            <h3 className="text-xl mt-12 text-black dark:text-gray-200 font-semibold md:text-2xl">1. Start a free fundraiser</h3>
                            <p className="mt-2 text-black dark:text-gray-400">
                                Start a free fundraiser by filling in all the relevant details
                            </p>
                            <hr className='w-64 mt-3'/>

                            <h3 className="text-xl mt-8 text-black dark:text-gray-200 font-semibold md:text-2xl">2. Share Your Fundraiser</h3>
                            <p className="mt-2 text-black dark:text-gray-400">
                                Share your fundraiser with friends, family and strangers to raise funds quickly
                            </p>
                            <hr className='w-64 mt-3'/>

                            <h3 className="text-xl mt-8 text-black dark:text-gray-200 font-semibold md:text-2xl">3. Withdraw All Donations</h3>
                            <p className="mt-2 text-black dark:text-gray-400">
                                Withdraw all the money you receive at any point in your fundraising journey
                            </p>
                            <hr className='w-64 mt-3'/>
                        </div>

                        {/* Animated GIF */}
                        <div className="md:5/12 lg:w-5/12">
                            <AnimatedGif
                                src="https://cdn.dribbble.com/users/114072/screenshots/2672604/steps.gif"
                                alt="Gif"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <Footer />
        </div>
    );
}
