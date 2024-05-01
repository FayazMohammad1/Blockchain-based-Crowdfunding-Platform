import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader, Navbar, Sidebar } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

/**
 * CampaignDetails component displays details of a specific campaign.
 * Users can view the campaign details, donate to the campaign, and see the list of donators.
 */
const CampaignDetails = () => {
  const { state } = useLocation(); // Extracting state from the location object
  const navigate = useNavigate(); // Navigate to different routes
  const { donate, getDonations, contract, address } = useStateContext(); // Using global state and functions from context

  const [isLoading, setIsLoading] = useState(false); // Loading state for async operations
  const [amount, setAmount] = useState(''); // State to hold the donation amount
  const [donators, setDonators] = useState([]); // State to hold the list of donators

  const remainingDays = daysLeft(state.deadline); // Calculate remaining days for the campaign

  // Fetch the list of donators when the component mounts or when contract or address changes
  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  // Function to fetch the list of donators for the campaign
  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  }

  // Function to handle donation to the campaign
  const handleDonate = async () => {
    setIsLoading(true); // Set loading state to true while donation is in progress
    await donate(state.pId, amount); // Donate to the campaign
    navigate('/'); // Navigate to the home page after donation
    setIsLoading(false); // Set loading state to false after donation is complete
  }

  return (
    <>
      {/* Sidebar for small screens */}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar/>
      </div>
      {/* Main content */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar /> {/* Navbar component */}
        <div>
          {isLoading && <Loader />} {/* Loader component while async operations are in progress */}

          <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
            {/* Campaign image and progress bar */}
            <div className="flex-1 flex-col">
              <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
              <div className="relative w-full h-[5px] bg-white dark:bg-[#3a3a43] mt-2">
                <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}></div>
              </div>
            </div>

            {/* Count boxes for campaign details */}
            <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
              <CountBox title="Days Left" value={remainingDays} />
              <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
              <CountBox title="Total Backers" value={donators.length} />
            </div>
          </div>

          <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
            {/* Creator information, campaign story, and donator list */}
            <div className="flex-[2] flex flex-col gap-[40px]">
              {/* Creator section */}
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">Creator</h4>
                <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                  <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white dark:bg-[#2c2f32] cursor-pointer">
                    <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
                  </div>
                  <div>
                    <h4 className="font-epilogue font-semibold text-[14px] text-black dark:text-white break-all">{state.owner}</h4>
                    <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]"> Campaign</p>
                  </div>
                </div>
              </div>

              {/* Campaign story section */}
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">Story</h4>
                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.description}</p>
                </div>
              </div>

              {/* Donators section */}
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">Donators</h4>
                <div className="mt-[20px] flex flex-col gap-4">
                  {donators.length > 0 ? donators.map((item, index) => (
                    <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                      <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                      <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p>
                    </div>
                  )) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                  )}
                </div>
              </div>
            </div>

            {/* Fund section */}
            <div className="flex-1">
              <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">Fund</h4>   
              <div className="mt-[20px] flex flex-col p-4 bg-white dark:bg-[#1c1c24] rounded-[10px]">
                <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">Fund the campaign</p>
                <div className="mt-[30px]">
                  <input 
                    type="number"
                    placeholder="ETH 0.1"
                    step="0.01"
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black dark:text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="my-[20px] p-4 bg-gray-200 dark:bg-[#13131a] rounded-[10px]">
                    <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-black dark:text-white">Back it because you believe in it.</h4>
                    <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
                  </div>
                  <CustomButton 
                    btnType="button"
                    title="Fund Campaign"
                    styles="w-full bg-[#8c6dfd]"
                    handleClick={handleDonate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampaignDetails;
