import '../App.css';


function Timeline() {
    async function fetchSpeed() {
        fetch('http://localhost:9999/.netlify/functions/speedtest')
            .then(response => response.json())
            .then(data => {
                setTransit(data);
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(fetchTweets(), 60000 * 30);
    }, []);
    return (
        <div className="Widget Timeline">

        </div>
    );
}

export default Timeline;
