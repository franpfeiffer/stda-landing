import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { handleHashScroll } from '../utils/scrollUtils';

export default function Layout() {
  const location = useLocation();

  // Handle smooth scrolling when the location changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Scroll to the element with the hash
      handleHashScroll(location.hash);
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
