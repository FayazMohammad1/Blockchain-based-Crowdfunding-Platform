import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#13131a] border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/028/700/133/original/crowdfunding-3d-icon-crowd-funding-3d-rendering-of-icon-illustration-giving-donation-donation-money-3d-icon-crowdfunding-money-collect-icon-render-in-crowdfunding-3d-render-icon-png.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black dark:text-white uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Pages */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black dark:text-white uppercase">Pages</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/how-it-works" className="hover:underline">
                                        How it works
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Legal */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black dark:text-white uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Separator */}
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                {/* Footer Text */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024_
                        <a href="https://fayazmohammad1.github.io/" className="hover:underline">
                            fayazmohammad
                        </a>
                        . All Rights Reserved.
                    </span>
                    {/* Social Media Links */}
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 dark:hover:text-white hover:text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 dark:hover:text-white hover:text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500 dark:hover:text-white hover:text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 dark:hover:text-white hover:text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A10 10 0 1 0 10 20 10 10 0 0 0 10 .333ZM8.69 11.552v.696c0 .768-.386 1.792-1.152 3.072-.766 1.28-1.556 2.24-2.37 2.88-.814.64-1.384.96-1.71.96-.356 0-.58-.192-.672-.576-.06-.208-.06-.672-.06-1.392v-4.32c0-.752.132-1.36.396-1.824a3.607 3.607 0 0 1 1.128-1.304c.476-.372 1.036-.688 1.68-.944.64-.256 1.076-.416 1.308-.48a4.035 4.035 0 0 0-.68-1.656 3.731 3.731 0 0 0-1.624-1.168c-.68-.296-1.392-.44-2.136-.44a6.006 6.006 0 0 0-2.4.528c-.72.352-1.364.852-1.932 1.5a6.997 6.997 0 0 0-1.44 2.328c-.34.896-.508 1.844-.508 2.844v4.368H.69v-5.42c0-1.072.14-2.088.42-3.048A8.026 8.026 0 0 1 2.89 4.52a7.562 7.562 0 0 1 3.312-2.008c1.42-.296 2.824-.444 4.21-.444 1.724 0 3.168.272 4.332.816 1.164.544 1.968 1.376 2.412 2.496a7.376 7.376 0 0 1 .372 2.36Z" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500 dark:hover:text-white hover:text-black">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0ZM4.172 4.172a8.36 8.36 0 0 1 2.142-1.672 4.093 4.093 0 0 0-.848 1.356A8.523 8.523 0 0 1 1.09 6.318a17.49 17.49 0 0 0 5.864 1.016 17.6 17.6 0 0 0 5.845-1.014c.33-.137.658-.293.98-.468a4.23 4.23 0 0 0-.799-1.5 8.345 8.345 0 0 1 2.121 1.672 7.962 7.962 0 0 1 1.6 2.676c.176.322.332.65.467.98a4.09 4.09 0 0 0 1.486-.804A8.36 8.36 0 0 1 18.829 10a17.535 17.535 0 0 0-1.018 5.85 17.715 17.715 0 0 0-1.016 5.842 8.346 8.346 0 0 1-1.672-2.12 4.116 4.116 0 0 0-1.352.844 8.525 8.525 0 0 1-2.674 1.6 17.49 17.49 0 0 0-2.11.934 17.49 17.49 0 0 0-2.108-.934 8.345 8.345 0 0 1-2.674-1.6 4.117 4.117 0 0 0-1.352-.844 8.525 8.525 0 0 1-2.675-1.6 17.48 17.48 0 0 0-2.11-.934 17.486 17.486 0 0 0-2.11.934 8.347 8.347 0 0 1-2.675 1.6 4.116 4.116 0 0 0-1.352.844 8.525 8.525 0 0 1-1.6-2.672 17.494 17.494 0 0 0-.934-2.112 17.58 17.58 0 0 0 .934-2.11 8.366 8.366 0 0 1 1.6-2.674 4.109 4.109 0 0 0-.844-1.35A8.525 8.525 0 0 1 1.09 5.682a17.545 17.545 0 0 0-1.016-5.85A17.686 17.686 0 0 0 1.09 1.99 8.369 8.369 0 0 1 3.764.386a4.118 4.118 0 0 0 1.35.844Z" />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
