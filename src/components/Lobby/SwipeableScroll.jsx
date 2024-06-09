import React, { useRef } from "react";
import { useSwipeable } from 'react-swipeable'
import './CSSFiles/SwipeableScroll.css'

export default function SwipeableScroll()  {
    const containerRef = useRef(null);

    const handlers = useSwipeable({
      onSwipedLeft: () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      },
      onSwipedRight: () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
      },
      trackMouse: true,
    });

      return (
        <div {...handlers} ref={containerRef} className="swipe-container">
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
            <div className="item">Item 5</div>
    </div>

      )
    }
