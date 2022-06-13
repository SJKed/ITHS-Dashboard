import { useEffect, useState } from 'react';
import '../App.css';

function Transit() {

    const [transit, setTransit] = useState([{ Origin: "Liljeholmen", Destination: "Stockholm City", Departure: "Loading...", Arrival: "Loading..." }]);

    async function fetchSL() {
        // fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/fetchsl')
        fetch('http://localhost:8888/.netlify/functions/fetchsl')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setTransit(data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(() => {
            fetchSL();
        }, 60000);
    }, []);

    return (
        <div className="Widget Transit">
            <p> The next train from Liljeholmen to Centralen: </p>
            <p>{transit && transit.Origin}</p>
            <p>{transit && transit.Departure}</p>
            <p>{transit && transit.Destination}</p>
            <p>{transit && transit.Arrival}</p>
        </div>
    )
}


export default Transit;
