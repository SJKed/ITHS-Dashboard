import { useEffect, useState } from 'react';
import '../App.css';

function News() {
    const [Tweets, setTweets] = useState('Loading...');


    useEffect(() => {
        fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=SJKxyz&count=1')
            .then(response => response.json())
            .then(json => setTweets(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="Widget News">
                <p>
                    {Tweets[0].text}
                </p>
        </div>
    )
}

export default News;
