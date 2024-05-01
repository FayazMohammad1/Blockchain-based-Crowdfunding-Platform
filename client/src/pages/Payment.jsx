import React from 'react';
import { Navbar, Sidebar } from '../components';
import UserActivityTable from './UserActivityTable';

function Payment() {
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
         
         {/* User activity table component */}
         <UserActivityTable />
       </div>
     </>
  );
}

export default Payment;
