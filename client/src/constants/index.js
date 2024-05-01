import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

// Array of sidebar navigation links
export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/website',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/payment',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
  },
];
