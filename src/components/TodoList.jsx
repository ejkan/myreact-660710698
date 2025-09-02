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
            <h3 style={{fontFamily: 'Krub', fontWeight: '700'}}>🤔 ฉันต้องทำอะไรบ้างในเเต่ละอาทิตย์ 🤔</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
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
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
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
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: '700',
                fontFamily: 'Krub',
            }}>
                ✨ บรรลุเเล้ว {completedCount} จาก {totalCount} อย่าง ✨
            </div>
        </div>
    );
};

export default TodoList;