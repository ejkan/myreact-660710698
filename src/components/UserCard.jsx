import React from 'react';

const Avatar = () => (
    <img 
        src="https://via.placeholder.com/50" 
        alt="Profile picture"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px 0' }}>
        จิรัญญา นวลละออง
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
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
            <p style={{ color: '#666', fontSize: '14px' }}>
                คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร</p>
            <a href={"https://ejkan.link"} target="_blank" rel="noopener noreferrer">👉🏼 อยากจ้างทางนี้นะคะ 👈🏼</a>
        </div>
    );
};

export default UserCard;