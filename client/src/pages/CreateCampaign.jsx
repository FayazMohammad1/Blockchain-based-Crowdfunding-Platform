import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader, Navbar, Sidebar } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });

  // Function to handle changes in form fields
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the provided image URL is valid
    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true);
        // Convert target amount to ethers format
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)});
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL');
        setForm({ ...form, image: '' });
      }
    });
  }

  return (
    <>
      {/* Sidebar */}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {/* Navbar */}
        <Navbar />
        <div className="bg-white dark:bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
          {isLoading && <Loader />}
          {/* Section title */}
          <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-gray-200 dark:bg-[#3a3a43] rounded-[10px]">
            <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-gray-500 dark:text-white">Start a Campaign</h1>
          </div>

          {/* Campaign form */}
          <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
            {/* Name and title fields */}
            <div className="flex flex-wrap gap-[40px]">
              <FormField 
                labelName="Your Name *"
                placeholder="John Doe"
                inputType="text"
                value={form.name}
                handleChange={(e) => handleFormFieldChange('name', e)}
              />
              <FormField 
                labelName="Campaign Title *"
                placeholder="Write a title"
                inputType="text"
                value={form.title}
                handleChange={(e) => handleFormFieldChange('title', e)}
              />
            </div>

            {/* Description field */}
            <FormField 
              labelName="Story *"
              placeholder="Write your story"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChange('description', e)}
            />

            {/* Raised amount information */}
            <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
              <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
              <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
            </div>

            {/* Target and deadline fields */}
            <div className="flex flex-wrap gap-[40px]">
              <FormField 
                labelName="Goal *"
                placeholder="ETH 0.50"
                inputType="text"
                value={form.target}
                handleChange={(e) => handleFormFieldChange('target', e)}
              />
              <FormField 
                labelName="End Date *"
                placeholder="End Date"
                inputType="date"
                value={form.deadline}
                handleChange={(e) => handleFormFieldChange('deadline', e)}
              />
            </div>

            {/* Image URL field */}
            <FormField 
              labelName="Campaign image *"
              placeholder="Place image URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange('image', e)}
            />

            {/* Submit button */}
            <div className="flex justify-center items-center mt-[40px]">
              <CustomButton 
                btnType="submit"
                title="Submit new campaign"
                styles="bg-[#1dc071]"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateCampaign;
