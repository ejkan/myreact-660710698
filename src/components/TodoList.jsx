import React, { useState, useEffect, useRef } from 'react';
import './Animations.css'; // Make sure this import is correct

const listStyle = {
    margin: ".625rem",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1rem",
}

const TodoList = () => {
    // State to track if the component is in view
    const [isInView, setIsInView] = useState(false);

    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // observer.disconnect();
                } else {
                    setIsInView(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        // Cleanup function
        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    // Your data and calculations...
    const todos = [
        { id: 1, text: 'วันทบทวนของสัปดาห์ก่อน 📝', completed: false },
        { id: 2, text: 'วันวางเเผนทำธุรกิจ 👩🏼‍💼', completed: true },
        { id: 3, text: 'วันลองเล่น Go ใน Server-Side 🖥️', completed: true },
        { id: 4, text: 'วันเสก Client-Side 📱เเละทำ AI 🤖', completed: true },
        { id: 5, text: 'วันวิเคราะห์ระบบ เเละฐานข้อมูล 👩🏼‍💻', completed: true },
        { id: 6, text: 'วันพัฒนาเเอป Flutter 💻', completed: false },
        { id: 7, text: 'วันว่าง ที่อาจจะไม่ว่าง 😌', completed: false }
    ];

    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    // Render Area
    return (
        <div ref={componentRef} style={{ maxWidth: '30rem', margin: '1.25rem auto', padding: '1.25rem' }}>
            {/*Header*/}
            <h3
                className={`${isInView ? 'fade-in-slide-up-animate' : 'fade-in-slide-up-initial'}`}
                style={{fontFamily: 'Krub', fontWeight: '700', color:'hsl(351, 78%, 71%)'}}>🤔 วีกนี้กานต์ต้องทำอะไรบ้าง 🤔</h3>

            {/*Progress Bar - Outer Bar*/}
            <div
                className={`${isInView ? 'fade-in-slide-up-animate' : 'fade-in-slide-up-initial'}`}
                style={{
                backgroundColor: 'hsl(160, 40%, 60%)',
                borderRadius: '1.25rem',
                padding: '.25rem',
                margin: '1rem 0'
            }}>
                {/*Progress Bar - Inner Bar*/}
                <div
                    className={`${isInView ? 'fade-in-slide-up-animate' : 'fade-in-slide-up-initial'}`}
                    style={{
                    backgroundColor: 'hsl(160, 50%, 70%)',
                    width: isInView ? `${percentage}%` : '0%',
                    textAlign: 'center',
                    borderRadius: '1rem',
                    padding: '.5rem',
                    color: 'hsl(18, 72%, 93%)',
                    fontFamily: 'Krub',
                    fontWeight: '700',
                    transition: 'width 0.8s ease-out'
                }}>
                    ทำไปเเล้ว {percentage}%
                </div>
            </div>

            {/*Todolist*/}
            <div style={listStyle}>
                {todos.map((todo, index) => (
                    <div
                        key={todo.id}
                        className={`${isInView ? 'fade-in-slide-up-animate' : 'fade-in-slide-up-initial'} todo-item-delay-${index}`}
                        style={{
                            padding: '.75rem',
                            margin: '.5rem 0',
                            borderRadius: '.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? 'hsl(160, 40%, 60%)' : 'hsl(160, 50%, 70%)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '.75rem', fontSize: '1.25rem' }}>
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
            <div
                className={`${isInView ? 'fade-in-slide-up-animate summary-color-animate' : 'fade-in-slide-up-initial'}`}
                style={{
                    marginTop: '1.25rem',
                    textAlign: 'center',
                    padding: '1rem',
                    color: 'hsl(18, 72%, 93%)',
                    borderRadius: '.5rem',
                    fontSize: '1rem',
                    fontWeight: '700',
                    fontFamily: 'Krub',
                }}
            >
                ✨ บรรลุเเล้ว {completedCount} อย่าง จาก {totalCount} อย่าง ✨
            </div>
        </div>
    );
};

export default TodoList;