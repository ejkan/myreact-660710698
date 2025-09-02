import React from 'react';
import pfp from './images/pfp.webp';

const cardfont = {
    color: "#666",
    margin: "10px",
    fontFamily: "Krub",
    fontWeight: "400",
    fontSize: "1rem",
};

const Avatar = () => (
    <img 
        src={pfp}
        alt="Profile picture"
        style={{
            borderRadius: '50%',
            width: '80%',
            height: '80%',
            border: '.5em solid HSL(330, 70%, 70%)'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px', fontSize: '1.5rem' , fontFamily: 'Krub', fontWeight: '600' }}>
        จิรัญญา นวลละออง
    </h3>
);

const UserBio = () => (
    <p style={cardfont}>
        นักศึกษา สาขาเทคโนโลยีสารสนเทศ
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
            <p style={cardfont}>
                คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร</p>
            <a href={"https://ejkan.link"} target="_blank" rel="noopener noreferrer" style={cardfont}>👉🏼 อยากจ้างทางนี้นะคะ 👈🏼</a>
        </div>
    );
};

export default UserCard;