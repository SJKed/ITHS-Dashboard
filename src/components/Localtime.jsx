import { useEffect, useState } from 'react';
import "../App.css";

function Localtime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Header-time">
            <p>
                Local Time: {time.toLocaleTimeString()}
            </p>
        </div>
    )
}

export default Localtime;
