import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleHashScroll } from '../utils/scrollUtils';

/**
 * A wrapper around React Router's Link that supports smooth scrolling to anchors
 */
export default function SmoothLink({ to, children, className, onClick, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

  // If the link is to the current page with a hash, handle it for smooth scrolling
  const handleClick = (e) => {
    // Call the original onClick if provided
    if (onClick) onClick(e);

    // Check if the link is to an anchor on the current page
    const [pathname, hash] = to.split('#');
    const currentPathname = location.pathname;

    if (hash && (pathname === currentPathname || pathname === '' || pathname === '/')) {
      e.preventDefault();

      // If we're already on the correct page, just scroll
      if (pathname === currentPathname || pathname === '' || pathname === '/') {
        handleHashScroll(`#${hash}`);
      } else {
        // Otherwise navigate and then scroll
        navigate(to);
        setTimeout(() => handleHashScroll(`#${hash}`), 100);
      }
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
