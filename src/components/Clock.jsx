import React, { useState, useEffect, useRef } from 'react';
import './Animations.css';

// A clockStyle constant for changing text properties.
const clockStyle = {
    color: "hsl(351, 80%, 80%)",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1.5rem",
}

// A Clock constant for displaying HTML DOMs.
const Clock = () => {
    const [date, setDate] = useState(new Date());

    const [isInView, setIsInView] = useState(false);
    const clockRef = useRef(null);

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []); // The empty array [] means this effect runs only once when the component mounts.

    // --- Effect for the Animation ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (clockRef.current) {
            observer.observe(clockRef.current);
        }

        return () => {
            if (clockRef.current) {
                observer.unobserve(clockRef.current);
            }
        };
    }, []);

    // We now use the 'date' from our state.
    const timeString = date.toLocaleTimeString('th-TH');
    const dateString = date.toLocaleDateString('th-TH' ,
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });

    return (
        // --- Add ref and className for the animation ---
        <div
            ref={clockRef}
            className={`clock ${isInView ? 'fade-in-slide-up-animate' : 'fade-in-slide-up-initial'}`}
            style={{paddingBottom: "2rem"}}
        >
            <h3 style={{ color: 'hsl(351, 78%, 71%)', margin: '.625rem', fontSize: '2rem' , fontFamily: 'Krub', fontWeight: '700' }}>⌚️ เวลาล่าสุด ⌚️</h3>
            <p className="date" style={clockStyle}>{dateString}</p>
            <p className="time" style={clockStyle}>{timeString} นาฬิกา</p>
        </div>
    );
};

export default Clock;