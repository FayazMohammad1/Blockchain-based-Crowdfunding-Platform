
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FundCard from './FundCard';
import { loader } from '../assets';
import { daysLeft } from '../utils';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
    }

    // Filter campaigns with remaining days more than 0
    const filteredCampaigns = campaigns.filter(campaign => daysLeft(campaign.deadline) > 0);

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-black dark:text-white text-left">{title} ({filteredCampaigns.length})</h1>

            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && (
                    <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
                )}

                {!isLoading && filteredCampaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-gray-400 dark:text-[#818183]">
                        You have not created any campaigns yet
                    </p>
                )}

                {!isLoading && filteredCampaigns.length > 0 && filteredCampaigns.map((campaign) => (
                    <FundCard
                        key={campaign.id}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />
                ))}
            </div>
        </div>
    )
}

export default DisplayCampaigns;
