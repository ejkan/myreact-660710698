import React from 'react';

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
        <div className="clock" style={{paddingBottom: "2rem"}} >
            <h3 style={{ color: 'hsl(351, 78%, 71%)', margin: '.625rem', fontSize: '2rem' , fontFamily: 'Krub', fontWeight: '700' }}>⌚️ เวลาล่าสุด ⌚️</h3>
            <p className="date" style={clockStyle}>{dateString}</p>
            <p className="time" style={clockStyle}>{timeString} นาฬิกา</p>
        </div>
    );
};

export default Clock;