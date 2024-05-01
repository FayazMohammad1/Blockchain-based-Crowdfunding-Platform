import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { ahammad, ajay, donation, fayaz, mahendra, patient, transparency } from '../assets';

// Google Apps Script URL for form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyv26n5ruI6MypSyXCJKvtzBjM8f1eOVwiUpZKvz_YdEUnYHiDd_885aZRXgkCxcVUEBw/exec';

// Data for team members
const ServicesData = [
  {
    id: 1,
    img: fayaz,
    name: "Fayaz",
    description: "Team Member",
  },
  {
    id: 2,
    img: ajay,
    name: "Ajay",
    description: "Team Member",
  },
  {
    id: 3,
    img: ahammad,
    name: "Ahammad",
    description: "Team Member",
  },
  {
    id: 4,
    img: mahendra,
    name: "Mahendra",
    description: "Team Member",
  },
];

/**
 * Contact component displays contact form and team members.
 * Users can fill in the form to start a conversation and view the team members.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ // State for form data
    name: '',
    email: '',
    tel: '',
  });
  const [submitting, setSubmitting] = useState(false); // State to track form submission
  const [error, setError] = useState(null); // State for form submission error
  const [success, setSuccess] = useState(false); // State for successful form submission

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then(response => {
        if (response.ok) {
          setSuccess(true);
          setFormData({
            name: '',
            email: '',
            tel: '',
          });
        } else {
          setError('Failed to submit form. Please try again later.');
        }
      })
      .catch(error => {
        setError('Failed to submit form. Please try again later.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className='flex flex-col w-full'>
      <Header /> {/* Header component */}
      <div className="relative flex items-top justify-center min-h-[500px] bg-white dark:bg-[#13131a] sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-2">
          <div className="mt-2 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact form */}
              <div className="p-6 mr-2 bg-gray-200 dark:bg-[#1c1c24] sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-black dark:text-white font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-black dark:text-white mt-2">
                  Fill in the form to start a conversation
                </p>

                {/* Contact details */}
                <div className="flex items-center mt-8 text-gray-600 dark:text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-600 dark:text-white"
                  >
                    {/* Location icon */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    SRM University, AP
                  </div>
                </div>

                {/* Phone number */}
                <div className="flex items-center mt-4 text-gray-600 dark:text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-600 dark:text-white"
                  >
                    {/* Phone icon */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91 1234567890
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center mt-2 text-gray-600 dark:text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-600 dark:text-white"
                  >
                    {/* Email icon */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    talkwithfayaz@gmail.com
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
                {/* Name field */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-200 dark:bg-[#1c1c24] border border-gray-400 text-gray-900 dark:text-white font-semibold focus:border-[#8c6dfd] focus:outline-none"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-200 dark:bg-[#1c1c24] border border-gray-400 text-gray-900 dark:text-white font-semibold focus:border-[#8c6dfd] focus:outline-none"
                  />
                </div>

                {/* Telephone field */}
                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    placeholder="Telephone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-200 dark:bg-[#1c1c24] border border-gray-400 text-gray-900 dark:text-white font-semibold focus:border-[#8c6dfd] focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="md:w-32 bg-[#8c6dfd] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#8c6dfd] transition ease-in-out duration-300"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>

              {/* Error message */}
              {error && <div className="text-red-500 mt-2">{error}</div>}
              {/* Success message */}
              {success && <div className="text-green-500 mt-2">Form submitted successfully!</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className='mt-10'>
        <div className="flex flex-col gap-5 items-center">
          <div className="text-center mb-5 max-w w-full mx-auto">
            <p className="text-sm bg-clip-text text-black dark:text-white bg-gradient-to-r from-primary to-secondary ">
              {/* How Can Crowdfunding Help You */}
            </p>
            <h1 className="text-2xl sm:text-3xl text-black dark:text-white lg:text-4xl font-bold">Team</h1>
            <p className="text-lg mt-5 text-gray-500">
              "Teamwork is the fuel that allows common people to attain uncommon results."
            </p>
            <hr className='w-12 mx-auto mt-3 border-2 border-[#4acd8d]'/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 md:gap-10 place-items-center">
            {/* Display team members */}
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-gray-800 text-black dark:text-white hover:text-black dark:hover:text-white relative shadow-xl duration-high group max-w-[300px] mb-10"
              >
                <div className="h-[120px] w-[250px] mt-8">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform 
                  group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 py-12 text-center">
                  <div className="w-full">
                  </div>
                  <h1 className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white mt-12 font-bold">{service.name}</h1>
                  <p className="text-gray-500 mt-2 group-hover:text-black dark:group-hover:text-white duration-high text-sm line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
}
