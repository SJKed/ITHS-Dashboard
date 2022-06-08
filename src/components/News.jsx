import { useEffect, useState } from 'react';
import '../App.css';


function News() {
    const token = "AAAAAAAAAAAAAAAAAAAAALjMdQEAAAAA4W09iav1RxWbqapsKhbL0Al6rrU%3DWur6GkBuFKtGFmpjDX0mn90uxTN4yzKPOfDRgz4D4ewPRogYpl";
    const URL = "https://api.twitter.com/2/tweets/search/recent?query=%23iths2022"
    const [Tweets, setTweets] = useState('Loading...');

    useEffect(() => {
        setInterval(fetchTweets, 10000);
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
