import { useState, useEffect } from 'react';
import '../App.css';


function News() {
    // const token = "AAAAAAAAAAAAAAAAAAAAALjMdQEAAAAA4W09iav1RxWbqapsKhbL0Al6rrU%3DWur6GkBuFKtGFmpjDX0mn90uxTN4yzKPOfDRgz4D4ewPRogYpl";
    // const URL = "https://api.twitter.com/2/tweets/search/recent?query=%23iths2022"

    const [Tweets, setTweets] = useState('Loading...');

    async function fetchNetlify() {
        fetch('http://localhost:8888/.netlify/functions/bob')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTweets(data);
            })
        .catch(error => console.log(error));
    }
    
    useEffect(() => {
        fetchNetlify();
    }, []);

    return (
        <div className="Widget News">
            <p>
                {Tweets}
            </p>
        </div>
    )
}

export default News;
