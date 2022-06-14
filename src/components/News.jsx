import { useState, useEffect } from 'react';
import '../App.css';
import './component_styles/News.css';
import pfp from "../assets/twitter_egg_blue.jpg";


function News() {

    const [Tweets, setTweets] = useState([{name: "Loading...", username: "Loading...", text: "Loading..."}]);

    async function fetchTweets() {
        fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/bob', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTweets(data);
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(fetchTweets(), 60000);
    }, []);

    return (
        <div className="Widget News">
            {Tweets.map((tweet, index) => {
                return (
                    <div className="Tweet" key={index}>
                        <div className="TweetHandle">
                            <img src={pfp} className="TweetPfp" alt="twitter_egg" />
                            <h3>{tweet.name}</h3>
                            <h3>@{tweet.username}</h3>
                        </div>
                        <div className="TweetContent">
                            <p>{tweet.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default News;
