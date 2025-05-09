import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ scrollableContainerId }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollableContainerId) {
      const container = document.getElementById(scrollableContainerId);
      if (container) {
        container.scrollTo(0, 0);
        return; // Exit if we scrolled the specific container
      }
    }
    // Fallback to window scroll if no ID provided or element not found
    window.scrollTo(0, 0);
  }, [pathname, scrollableContainerId]);

  return null; // This component does not render anything
}

export default ScrollToTop;
