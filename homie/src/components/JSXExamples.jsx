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
                <div className = "product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'เมล็ดกาเเฟเเม่จันใต้', price: 550, inStock: true },
                        { id: 2, name: 'เครื่องชงกาเเฟ', price: 5500, inStock: true },
                        { id: 3, name: 'กามอกา', price: 1250, inStock: false },
                        { id: 4, name: 'เมล็ดกาเเฟเอธิโอเปีย', price: 950, inStock: false }
                    ].map(product => (
                        <div key = {product.id} className = "product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className = {product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ?  ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                <React.Fragment>
                    <h3>หัวข้อนี้</h3>
                    <p>เนื้อหานี้</p>
                </React.Fragment>
                <>
                    <h3>หัวข้ออื่น ๆ</h3>
                    <p>เนื้อหาอื่น ๆ</p>
                </>
            </section>
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type = "text"
                    placeholder = "พิมพ์มาค่ะ..."
                    onChange = {(e) => console.log('พิมพ์', e.target.value, 'ไปเมื่อกี้')}
                />
                <select onChange={(e) => alert(`เลือกภาษา ${e.target.value}`)}>
                    <option value="">-- เลือกภาษาที่คุณสนใจ --</option>
                    <option value="cn-sp">จีน</option>
                    <option value="ja">ญี่ปุ่น</option>
                    <option value="kr">เกาหลี</option>
                    <option value="de">เยอรมัน</option>
                    <option value="es-es">สเปน</option>
                    <option value="fr">ฝรั่งเศส</option>
                    <option value="it">อิตาลี</option>
                    <option value="pt-pt">โปรตุเกส</option>
                </select>
            </section>
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน &#123;curly braces&#125;</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    )
}

export default JSXExamples