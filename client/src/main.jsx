import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains"; // Import Sepolia chain
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'; // Import ThirdwebProvider and ChainId

import { StateContextProvider } from './context'; // Import StateContextProvider
import App from './App'; // Import the main App component
import './index.css'; // Import global styles

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped with ThirdwebProvider for blockchain functionality
root.render(
  <ThirdwebProvider desiredChainId={ChainId.Sepolia} activeChain={Sepolia} clientId="f673e6c73b503da90e3cb6d60b24eb58">
    {/* Wrap the entire application with Router for client-side routing */}
    <Router>
      {/* Provide application state using StateContextProvider */}
      <StateContextProvider>
        {/* Render the main App component */}
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
