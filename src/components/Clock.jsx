import React from 'react';

const clockStyle = {
    color: "#666",
    margin: "10px",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1.5rem",
}

const Clock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    const dateString = now.toLocaleDateString('th-TH' ,
    {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    return (
        <div className="clock">
            <h3 style={{ color: '#667eea', margin: '10px', fontSize: '2rem' , fontFamily: 'Krub', fontWeight: '700' }}>⌚️ เวลาล่าสุด ⌚️</h3>
            <p className="date" style={clockStyle}>{dateString}</p>
            <p className="time" style={clockStyle}>{timeString} นาฬิกา</p>
        </div>
    );
};

export default Clock;