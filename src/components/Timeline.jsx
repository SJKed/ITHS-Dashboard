import '../App.css';
import { useEffect, useState } from 'react'

function Timeline() {

    const [posts, setPosts] = useState([{ title: "Loading...", subreddit: "Loading...", selftext: "Loading..."}]);

    async function fetchPosts() {
        fetch('https://charming-pegasus-c43878.netlify.app/.netlify/functions/speedtest')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPosts(data);
                console.log(posts)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(fetchPosts(), 60000);
    }, []);

    return (
        <div className="Widget Timeline">
            {posts.map((post, index) => {
                return (
                    <div className="Post" key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.selftext}</p>
                        <p>{post.subreddit}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;
