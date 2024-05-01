import React, { useState, useEffect } from 'react';

import { DisplayCampaigns, Navbar, Sidebar } from '../components';
import { useStateContext } from '../context';

const Profile = () => {
  // State variables for loading status and user campaigns
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  // Accessing context for user address, contract, and user campaigns
  const { address, contract, getUserCampaigns } = useStateContext();

  // Function to fetch user campaigns
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  // Effect hook to fetch campaigns when contract or address changes
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      {/* Sidebar component - visible on larger screens */}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      
      {/* Main content container */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {/* Navbar component */}
        <Navbar />
        
        {/* DisplayCampaigns component to show user's active campaigns */}
        <DisplayCampaigns 
          title="Your Active Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
    </>
  );
};

export default Profile;
