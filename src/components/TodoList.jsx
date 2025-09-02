import React from 'react';

const listStyle = {
    color: "#666",
    margin: "10px",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1rem",
}

const TodoList = () => {
    // Displayed Values
    const todos = [
        { id: 1, text: 'ทบทวนของสัปดาห์ก่อน 📝', completed: false },
        { id: 2, text: 'เรียน BIS 👩🏼‍💼', completed: true },
        { id: 3, text: 'ลองเล่น Go ใน Server-Side 🖥️', completed: true },
        { id: 4, text: 'ละเลง Client-Side 📱เเละทำ AI 🤖', completed: true },
        { id: 5, text: 'วิเคราห์ระบบ เเละเป็นผู้จัดการฐานข้อมูล 👩🏼‍💻', completed: true },
        { id: 6, text: 'พัฒนาเเอป Flutter 💻', completed: false },
        { id: 7, text: 'เเล้วเเต่ใจจะไขว่คว้า 😌', completed: false }
    ];
    
    // Statistics Calculation
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3 style={{fontFamily: 'Krub', fontWeight: '700', color:'#EF7C8E'}}>🤔 ฉันต้องทำอะไรบ้างในเเต่ละอาทิตย์ 🤔</h3>
            
            {/*Progress Bar - Outer Bar*/}
            <div style={{
                backgroundColor: 'hsl(160, 40%, 60%)',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                {/*Progress Bar - Inner Bar*/}
                <div style={{
                    backgroundColor: 'hsl(160, 50%, 70%)',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'hsl(18, 72%, 93%)',
                    fontFamily: 'Krub',
                    fontWeight: '700',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={listStyle}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? 'hsl(160, 40%, 60%)' : 'hsl(160, 50%, 70%)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? 'hsl(18, 72%, 83%)' : 'hsl(18, 72%, 93%)'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, hsl(160, 40%, 50%), hsl(160, 40%, 60%))',
                color: 'hsl(18, 72%, 93%)',
                borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: '700',
                fontFamily: 'Krub',
            }}>
                ✨ บรรลุเเล้ว {completedCount} อย่าง จาก {totalCount} อย่าง ✨
            </div>
        </div>
    );
};

export default TodoList;