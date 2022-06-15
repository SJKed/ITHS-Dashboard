import '../App.css';
import { useEffect } from 'react'

function Timeline() {

    async function fetchSpeed() {
        fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/speedtest')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }
            )
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(fetchSpeed(), 60000);
    }, []);

    return (
        <div className="Widget Timeline">
            <p>Hola hombre</p>
        </div>
    );
}

export default Timeline;
