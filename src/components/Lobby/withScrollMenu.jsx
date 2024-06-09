import React, { useState, useEffect } from 'react';

const withScrollMenu = (WrappedComponent) => {
  return function WithScrollAwareMenu(props) {
    const [isMenuVisible, setMenuVisibility] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const windowWidth = window.innerWidth;
        const scrollDirection = window.scrollX > 0 ? 'right' : 'left';


        if (windowWidth <= 600 && scrollDirection === 'right') {
          setMenuVisibility(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return <WrappedComponent {...props} isMenuVisible={isMenuVisible} />;
  };
};

export default withScrollMenu;