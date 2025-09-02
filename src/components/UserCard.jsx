import React from 'react';
import pfp from './images/pfp.webp';

// A cardfont constant for changing text properties.
const cardfont = {
    color: "hsl(18, 72%, 93%)",
    margin: ".625rem",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1rem",
};

// Avatar is a profile picture.
const Avatar = () => (
    <img 
        src={pfp}
        alt="Profile Picture"
        style={{
            borderRadius: '50%',
            width: '80%',
            height: '80%',
            border: '.5em solid hsl(18, 72%, 93%)'
        }}
    />
);

// UserName is a name of logged-in user.
const UserName = () => (
    <h3 style={{ color: 'hsl(160, 43%, 80%)', margin: '.625rem', fontSize: '1.5rem' , fontFamily: 'Krub', fontWeight: '700' }}>
        จิรัญญา นวลละออง
    </h3>
);

// UserBio is a description of logged-in user.
const UserBio = () => (
    <p style={cardfont}>
        นักศึกษาชั้นปีที่ 3
    </p>
);

// Main components that's contained Avatar, UserName and UserBio.
const UserCard = () => {
    return (
        <div style={{
            padding: '1.25rem',
            borderRadius: '.625rem',
            textAlign: 'center',
            backgroundColor: 'hsl(351, 80%, 70%)',
            maxWidth: '21.875rem',
            margin: '1.25rem auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
            <p style={cardfont}>
                สาขาเทคโนโลยีสารสนเทศ</p>
            <p style={cardfont}>
                คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร</p>
            <a href={"https://ejkan.link"} target="_blank" rel="noopener noreferrer" style={cardfont}>👉🏼 อยากจ้างทางนี้นะคะ 👈🏼</a>
        </div>
    );
};

export default UserCard;