import { useEffect, useState } from 'react';
import '../App.css';
import './component_styles/Transit.css'
import train from '../assets/train.png';

function Transit() {

    const [transit, setTransit] = useState([{ origin: "Liljeholmen", destination: "Stockholm City", departure: "Loading...", arrival: "Loading..." }]);

    async function fetchSL() {
        fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/fetchsl', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
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
            <p id="head"> Next from Liljeholmen to Centralen: </p>
            <div className="First">
                <p id="Origin">{transit.origin}</p>
                <p id="Departure">{transit.departure}</p>
            </div>
            <div className="Second">
                <p id="Destination">{transit.destination}</p>
                <p id="Arrival">{transit.arrival}</p>
            </div>
            <img src={train} id="trainImg" alt="train" />
        </div>
    )
}


export default Transit;
