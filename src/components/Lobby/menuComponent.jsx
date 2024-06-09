import React, { useState, useEffect } from 'react';
import './CSSFiles/menuComponent.css';

const MenuComponent = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollX;
      const screenWidth = window.innerWidth;

      // Show menu when scrolling to the right (e.g., scrollPosition > 0)
      if (screenWidth <= 600 && scrollPosition > 0) {
        setMenuVisibility(true);
      } else {
        setMenuVisibility(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseLeaveMenuMobile = () => {
    setMenuVisibility(false);
  };

  return (
    <>
      <div className={`menu-mobile ${isMenuVisible ? 'active' : ''}`}>
        <div className='grid-container-mobile'>
          <h1 className='logoMobile'></h1>
          <ul>
            <li>- Vehicles</li>
            <li>- Energy</li>
            <li>- Charging</li>
            <li>- Discover</li>
          </ul>
        </div>
      </div>
      {isMenuVisible && <div className="backdrop" onClick={handleMouseLeaveMenuMobile}></div>}
    </>
  );
};

export default MenuComponent;