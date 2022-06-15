// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
import fetch from "node-fetch"
const token = "875bc083-478d-4124-8d6b-fff7a15ab122"

exports.handler = async function (event, context) {
  try {
    const response = await fetch(`https://api.resrobot.se/v2.1/trip?format=json&originId=740004046&destId=740000001&date&accessId=${token}`);
    const data = await response.json();
    const trip = data.Trip
    //The third available trip is the one we want, as it's almost exactly 10 minutes until departure.
    let origin = trip[3].Origin.name
    origin = origin.split("(")[0] //output: Liljeholmen T-bana
    let destination = trip[3].Destination.name
    destination = destination.split(" ")[1] // output: "Centralstation"
    const departure = trip[3].Origin.time
    const arrival = trip[3].Destination.time
    return {
      statusCode: 200,
      body: JSON.stringify({ origin, departure, destination, arrival })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify((err.message))
    }
  }
}

