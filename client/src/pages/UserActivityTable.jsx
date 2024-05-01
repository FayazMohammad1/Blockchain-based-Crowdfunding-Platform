import React, { useState, useEffect } from 'react';
import { Loader } from '../components';
import { useStateContext } from '../context';
import { daysLeft } from '../utils';

const UserActivityTable = () => {
  // Context variables and functions
  const { getUserCampaigns, getDonations } = useStateContext();
  
  // State variables for user campaigns, loading status, and error
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user campaigns and handle errors
  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaigns = await getUserCampaigns();
        setUserCampaigns(campaigns);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user campaigns:', error);
        setError('Error fetching user campaigns. Please try again later.');
        setIsLoading(false);
      }
    };
    fetchData();
  }, [getUserCampaigns]);

  // Render donations for a campaign
  const renderDonations = (pId) => {
    try {
      const donations = getDonations(pId);
      return donations.map((donation, index) => (
        <tr key={`${donation.donator}-${index}`}>
          <td>{donation.donator}</td>
          <td>{donation.donation}</td>
        </tr>
      ));
    } catch (error) {
      console.error('Error fetching donations for campaign:', error);
      return null;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col rounded-[10px] p-4">
      {/* Display loader while loading */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        // Display error message if there's an error
        <div className="text-black dark:text-white">{error}</div>
      ) : userCampaigns.length === 0 ? (
        // Display message if no campaigns found
        <div className="text-black dark:text-white">No campaigns found.</div>
      ) : (
        // Render user campaigns table
        <table className="w-full border-collapse border-2 border-gray-900 dark:border-gray-200">
          <thead className='text-center'>
            <tr>
              <th className="px-4 py-2 bg-[#8c6dfd] text-lg text-white border-2 border-gray-900 dark:border-gray-200 dark:text-black">Transaction ID</th>
              <th className="px-4 py-2 bg-[#8c6dfd] text-lg text-white border-2 border-gray-900 dark:border-gray-200 dark:text-black">Campaign Title</th>
              <th className="px-4 py-2 bg-[#8c6dfd] text-lg text-white border-2 border-gray-900 dark:border-gray-200 dark:text-black">Amount Received</th>
              <th className="px-4 py-2 bg-[#8c6dfd] text-lg text-white border-2 border-gray-900 dark:border-gray-200 dark:text-black">Target</th>
            </tr>
          </thead>
          <tbody>
            {userCampaigns.map((campaign) => (
              <tr key={campaign.pId}>
                <td className="px-4 py-2 font-semibold text-lg border-2 border-gray-900 text-black dark:text-white dark:border-gray-200 text-center">{campaign.pId+1}</td>
                <td className="px-4 py-2 font-semibold text-lg border-2 border-gray-900 text-black dark:text-white dark:border-gray-200 text-center">{campaign.title}</td>
                <td className="px-4 py-2 font-semibold text-lg border-2 border-gray-900 text-black dark:text-white dark:border-gray-200 text-center">{campaign.amountCollected}</td>
                <td className="px-4 py-2 font-semibold text-lg border-2 border-gray-900 text-black dark:text-white dark:border-gray-200 text-center">{campaign.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserActivityTable;
