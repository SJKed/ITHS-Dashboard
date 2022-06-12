import { useState, useEffect } from 'react';
import '../App.css';
import './component_styles/News.css';
import pfp from "../assets/twitter_egg_blue.jpg";


function News() {

    const [Tweets, setTweets] = useState([{name: "Loading...", username: "Loading...", text: "Loading..."}]);

    async function fetchNetlify() {
        fetch('http://localhost:8888/.netlify/functions/bob')
            .then(response => response.json())
            .then(data => {
                setTweets(data);
            })
            .catch(error => console.log(error));
    }

    //useEffect setInterval
    useEffect(() => {
        setInterval(() => {
            fetchNetlify();
        }, 10000);
    }, []);

    return (
        <div className="Widget News">
            {Tweets.map((tweet, index) => {
                return (
                    <div className="Tweet" key={index}>
                        <div className="TweetHandle">
                            <img src={pfp} className="TweetPfp" alt="twitter_egg" />
                            <h3>{tweet.name}</h3>
                            {/* <h3>@{tweet.username}</h3> */}
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
