import React, { useEffect, useRef } from 'react';

const MmsWidget = ({ scriptUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;

    // 2. Append it to our container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // 3. Cleanup: This runs when the user leaves the page
    return () => {
      // Remove any MMS iframes currently in the body
      const iframes = document.querySelectorAll('iframe[src*="mymusicstaff.com"]');
      iframes.forEach(iframe => iframe.remove());

      // Remove the script tag itself so it can be re-added later
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [scriptUrl]); // Re-run if the script URL changes

  return <div ref={containerRef} className="mms-widget-container" />;
};

export default MmsWidget;