import React, { useState, useEffect, useRef } from 'react';
import './Animations.css';


const greetingStyle = {
    color: "hsl(351, 78%, 71%)",
    padding: ".25rem",
    fontFamily: "Krub",
    fontWeight: "400",
    fontSize: "1rem",
}

const Greeting = () => {
    const [isInView, setIsInView] = useState(false);
    const greetingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (greetingRef.current) {
            observer.observe(greetingRef.current);
        }

        return () => {
            if (greetingRef.current) {
                observer.unobserve(greetingRef.current);
            }
        };
    }, []);
    return (
        <div className={isInView ? 'zoom-in-fade-animate' : 'zoom-in-fade-initial'} style={greetingStyle} ref={greetingRef}>
            <h2>🙋🏼‍♀️ สวัสดีค่ะทุกคน  🙋🏼‍♀️</h2>
            <p style={{fontStyle: 'italic'}}>👩🏼‍🎨 มาสร้างสิ่งที่น่าตะลึงด้วยกันนะคะ  👩🏼‍🎨</p>
        </div>
    )
}

export default Greeting;