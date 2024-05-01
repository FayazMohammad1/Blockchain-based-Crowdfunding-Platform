import React from "react";
import { Accordian } from "."; // Importing the Accordion component

const FAQs = () => {
  return (
    <div className="p-6 w-9/12 mt-2 bg-white dark:bg-gray-800 text-lg sm:text-md md:text-md font-semibold dark:text-white rounded-2xl">
      {/* FAQ items */}
      <Accordian
        title="What is Crowdfunding?"
        answer="Crowdfunding is a quick and easy way to raise money using the internet and social media. Using an online fundraising platform, you can raise the required amounts through donations from across India to help with any social, medical, personal, or creative need."
      />
      <Accordian
        title="Is crowdfunding legal in India?"
        answer="Yes, online donation-based crowdfunding for social, medical, and personal causes is legal in India. The Securities and Exchange Board of India (SEBI) considers all forms of crowdfunding legal in India except for equity crowdfunding. Specific crowdfunding organisations are registered under the Income Tax Act as charitable trusts. Contributions made to such donation platforms are eligible for income tax deductions under section 80G."
      />
      <Accordian
        title="How crowdfunding helps?"
        answer="To start a crowdfunding campaign for your treatment, choose a reputable platform that caters to medical causes, create a compelling campaign by sharing your story and needs, and promote the campaign to your network and beyond. Remember to provide regular updates and express gratitude to your supporters throughout the process."
      />
      <Accordian
        title="How much does it cost to raise funds?"
        answer="In just a few minutes, you can start a fundraiser on this platform - India’s leading online crowdfunding platform. Depending on your fundraising needs and the type of fundraising plan you choose, the fee is deducted as a certain percentage from the amount you raised."
      />
      <Accordian
        title="When will I receive the raised funds?"
        answer="You can request a withdrawal once your fundraiser has raised a certain amount. Once  verifies your bank details, the funds will be transferred within a few working days. You can request multiple fund withdrawals as and when required."
      />
      <Accordian
        title="How to raise a campaign for free?"
        answer="One can raise funds for anything - from diseases as rare as Spinal Muscular Atrophy (SMA) or common yet deadly illnesses such as cancer and kidney failure to even accident-related injuries. Medical crowdfunding empowers you to raise funds for any medical emergency. You can gain further clarity by contacting us here: info@crowdfunding.com or 1800 123 1800."
      />
    </div>
  );
};

export default FAQs;
