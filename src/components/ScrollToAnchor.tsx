import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // Else scroll to anchor
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash, key]);

  return null;
}
