// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
import fetch from "node-fetch"
const token = "875bc083-478d-4124-8d6b-fff7a15ab122"

exports.handler = async function (event, context) {
  try {
    const response = await fetch(`https://api.resrobot.se/v2.1/trip?format=json&originId=740004046&destId=740000001&date&accessId=${token}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    const data = await response.json();
    console.log(data)

    return {
      statusCode: 200,
      body: JSON.stringify(data.Trip)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify((err.message))
    }
  }

}

