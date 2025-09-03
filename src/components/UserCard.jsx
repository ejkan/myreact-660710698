import React, { useState, useEffect, useRef } from 'react';
import pfp from './images/pfp.webp';
import './Animations.css';

const cardbody = {
    padding: '1rem',
    borderRadius: '.75rem',
    textAlign: 'center',
    backgroundColor: 'hsl(351, 80%, 70%)',
    maxWidth: '20rem',
    margin: '1rem auto'
}

const cardfont = {
    color: "hsl(18, 72%, 93%)",
    margin: ".625rem",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1rem",
};

const cardheader = {
    color: 'hsl(160, 43%, 80%)',
    margin: '.625rem',
    fontSize: '1.5rem' ,
    fontFamily: 'Krub',
    fontWeight: '700'
}

const cardpic = {
    border: '.5rem solid hsl(18, 72%, 93%)',
    borderRadius: '50%',
    width: '75%',
    height: '75%'
}

const Avatar = () => ( <img src={pfp} alt="Profile Picture" style={cardpic} /> );
const UserName = () => ( <h3 style={cardheader}>จิรัญญา นวลละออง</h3> );
const UserBio = () => ( <p style={cardfont}>นักศึกษาชั้นปีที่ 3</p> );


// Main components that's contained Avatar, UserName and UserBio.
const UserCard = () => {
    // --- Add the animation logic (same as before) ---
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null);

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        // --- Add the ref and conditional className ---
        <div
            ref={cardRef}
            className={isInView ? 'zoom-in-fade-animate' : 'zoom-in-fade-initial'}
            style={cardbody}
        >
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