import React, { useSyncExternalStore } from "react"

function JSXExamples() {

    const greetings = <h1>Hello, React with JSX!</h1>;
    const name = 'จิรัญญา';
    const age = 24;
    const beCurrentYear = new Date().getFullYear() + 543;
    const currentYear = new Date().getFullYear();
    const user = {
        firstName: 'จิรัญญา', // same person but maybe a new legalised name
        surName: 'นวลละออง',
        age: 23,
        interests: ['ออกเเบบ', 'เขียนโค้ด', 'เที่ยว']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.surName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>ตัวอย่างการใช้ JSX</h1>
            <section>
                <h2>การเเสดงผลข้อมูล</h2>
                {greetings}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear} หรือ {beCurrentYear}</p>
                <p>ชื่อเต็ม {formatName(user)}</p>
            </section>
            <section>
                <h2>🎨 Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>
                <button
                    onClick={() => alert('คลิกเเล้ว!')}
                    onMouseEnter={() => console.log('เมาส์เข้า')}
                >
                    Hover หรือ Click ดู
                </button>
                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>
            <section>
                <h2>🔀 Conditional Rendering</h2>
                <p>
                    สถานะ : {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}
                {(
                    () => {
                        if (user.age >= 18) {
                            return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                        }
                        else {
                            return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                        }
                    }
                )()}
            </section>
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName} คือ</h3>
                <ul>
                    {user.interests.map((interest, index) => (
                        <li key = {index}>
                            {index + 1} . {interest}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default JSXExamples