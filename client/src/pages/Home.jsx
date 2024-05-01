import React, { useState, useEffect } from 'react';

import { DisplayCampaigns, Navbar, Sidebar } from '../components';
import { useStateContext } from '../context';

const Home = () => {
  // State for loading indicator and campaign data
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  // Accessing state and functions from context
  const { address, contract, getCampaigns } = useStateContext();

  // Function to fetch campaigns from the blockchain
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  // Fetch campaigns when contract or address changes
  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      {/* Sidebar component */}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {/* Navbar component */}
        <Navbar />
        {/* DisplayCampaigns component to show all campaigns */}
        <DisplayCampaigns 
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
    </>
  )
}

export default Home;
