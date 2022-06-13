import { useEffect } from 'react';
import '../App.css';

function Transit() {

    async function fetchSL() {
        fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/fetchsl')
            .then(response => response.text())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(() => {
            fetchSL();
        }, 10000);
    }, []);
    return (
        <div className="Widget Transit">
            <p>
                The next train from Liljeholmen to Centralen:
            </p>
        </div>
    )
}


export default Transit;
