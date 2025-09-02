import React from 'react';

// A greetingStyle constant for changing text properties.
const greetingStyle = {
    color: "hsl(351, 78%, 71%)",
    padding: ".25rem 0",
    fontFamily: "Krub",
    fontWeight: "400",
    fontSize: "1.25rem",
}
// A Greeting constant for displaying greeting class.
const Greeting = () => {
    return (
        <div className="greeting" style={greetingStyle}>
            <h2>🙋🏼‍♀️ สวัสดีค่ะทุกคน  🙋🏼‍♀️</h2>
            <p>👩🏼‍🎨 มาสร้างสิ่งที่น่าตะลึงด้วยกันนะคะ  👩🏼‍🎨</p>
        </div>
    )
}

export default Greeting;