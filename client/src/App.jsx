import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { About, CampaignDetails, Contact, CreateCampaign, Home, HowItWorks, Payment, Profile, Website } from './pages';
import { ThemeProvider } from './context/theme';

/**
 * Main component of the application.
 * Manages the routing and theme switching functionality.
 */
const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  /**
   * Switches to light theme.
   */
  const lightTheme = () => {
    setThemeMode("light");
  }

  /**
   * Switches to dark theme.
   */
  const darkTheme = () => {
    setThemeMode("dark");
  }

  // Changes the actual theme of the application
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="relative sm:-8 p-4 bg-gray-100 dark:bg-[#13131a] min-h-screen flex flex-row">
            <Routes>
              <Route path='/website' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/how-it-works' element={<HowItWorks />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/payment' element={<Payment />} />
              <Route path="/" element={<Website />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            </Routes>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App;
