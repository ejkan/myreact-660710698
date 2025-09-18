import react from 'react';
import { Link, useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate();
    const handleGoToHome = () => {
        navigate('/');
    }
    return (
        <div className="not-found">
            <h1>404 Not Found!</h1>
        </div>
    )
}
export default NotFound;