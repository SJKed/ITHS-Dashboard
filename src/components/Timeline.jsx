import '../App.css';
import { useEffect, useState } from 'react'

function Timeline() {
    const [speed, setSpeed] = useState('0mbps')

    async function fetchSpeed() {
        fetch('http://localhost:8888/.netlify/functions/speedtest')
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(fetchSpeed(), 60000);
    }, []);

    return (
        <div className="Widget Timeline">
            <p>{speed}</p>
        </div>
    );
}

export default Timeline;
