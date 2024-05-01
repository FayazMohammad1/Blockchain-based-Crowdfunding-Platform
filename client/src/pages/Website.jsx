import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { transparency, patient, donation } from '../assets';
import FAQs from '../components/FAQs';

// Data for services section
const ServicesData = [
  {
    id: 1,
    img: transparency,
    name: "100% Transparency",
    description: "Campaign organizers can build trust with donors, maintain the integrity of the crowdfunding platform, attract more donors, and improve accountability.",
  },
  {
    id: 2,
    img: patient,
    name: "2500+ Patients Funded",
    description: "Over 2500 patients, each with a unique story, each finding support in our embrace. Together, we've woven a tapestry of resilience, spanning countless lives.",
  },
  {
    id: 3,
    img: donation,
    name: "Strong Donor Community",
    description: "Over 2500 patients, each with a unique story, each finding support in our embrace. Together, we've woven a tapestry of resilience, spanning countless lives.",
  },
];  

export default function Website() {
  // Background image style
  const bgImage = {
    backgroundImage: `url("https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/bannerImgHome_webp.webp")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className='flex flex-col w-full'>
        <Header />
        {/* Banner section */}
        <div className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center bg-gray-950 duration-200" style={bgImage} >
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Text content section */}
              <div
                data-aos="zoom-out"
                data-aos-duration="400"
                data-aos-once="true"
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  <span className='text-[#4acd8d]'>Need Funds</span> For Your Medical Treatment?
                </h1>
                <p className="text-lg text-gray-500">
                  Don't worry you've come to the right platform.
                </p>
                <div>
                  <button className="text-white bg-[#8c6dfd] hover:bg-violet-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-5 focus:outline-none" >
                    Explore 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services section */}
        <div className="py-12">
          <div className="flex flex-col gap-5 items-center">
            <div className="text-center mb-20 max-w w-full mx-auto">
              <p className="text-sm bg-clip-text text-black dark:text-white bg-gradient-to-r from-primary to-secondary ">
                {/* How Can Crowdfunding Help You */}
              </p>
              <h1 className="text-2xl sm:text-3xl text-black dark:text-white lg:text-4xl font-bold">How Can Crowdfunding Help You</h1>
              <p className="text-lg mt-5 text-gray-500">
                Crowdfunding is not only a way to raise money, but also a way to build a community of supporters who share your vision and values.
              </p>
              <hr className='w-64 mx-auto mt-3 border-2 border-[#4acd8d]'/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-10 place-items-center">
              {ServicesData.map((service) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="rounded-2xl bg-white dark:bg-gray-800 text-black dark:text-white hover:text-black dark:hover:text-white relative shadow-xl duration-high group max-w-[300px] "
                >
                  <div className="h-[120px] ">
                    <img
                      src={service.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-10
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 py-12 text-center">
                    <div className="w-full "></div>
                    <h1 className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white font-bold">{service.name}</h1>
                    <p className="text-gray-500 mt-2 group-hover:text-black dark:group-hover:text-white duration-high text-sm line-clamp-5">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="flex flex-col gap-5 items-center">
              <h1 className="text-2xl sm:text-3xl mt-10 text-black dark:text-white lg:text-4xl font-bold">FAQ's</h1>
              <hr className='w-12 mx-auto mt-1 border-2 border-[#4acd8d]'/>
            </div>
            <FAQs />
          </div>
        </div>
                
        <Footer/>
      </div>
    </>
  )
}
