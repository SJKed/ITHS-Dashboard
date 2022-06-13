import { useEffect, useState } from 'react';
import '../App.css';

function Transit() {

    const [transit, setTransit] = useState([{ origin: "Liljeholmen", destination: "Stockholm City", departure: "Loading...", arrival: "Loading..." }]);

    async function fetchSL() {
        fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/fetchsl')
            .then(response => response.json())
            .then(data => {
                setTransit(data);
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(fetchSL(), 60000);
    }, []);

    return (
        <div className="Widget Transit">
            <p> The next train from Liljeholmen to Centralen: </p>
            <p id="Origin">{transit.origin}</p>
            <p id="Departure">{transit.departure}</p>
            <p id="Destination">{transit.destination}</p>
            <p id="Arrival">{transit.arrival}</p>
        </div>
    )
}


export default Transit;
