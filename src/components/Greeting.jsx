import React from 'react';

const greetingStyle = {
    color: "#666",
    margin: ".1rem 0",
    padding: ".1rem 0",
    fontFamily: "Krub",
    fontWeight: "400",
    fontSize: "1.25rem",
}

const Greeting = () => {
    return (
        <div className="greeting" style={greetingStyle}>
            <h2>🙋🏼‍♀️ สวัสดีค่ะทุกคน  🙋🏼‍♀️</h2>
            <p>👩🏼‍🎨 มาสร้างสิ่งที่น่าทึ่งด้วยกันนะคะ  👩🏼‍🎨</p>
        </div>
    )
}

export default Greeting;