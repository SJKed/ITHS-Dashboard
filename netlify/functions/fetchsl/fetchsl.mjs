// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')
const token = "875bc083-478d-4124-8d6b-fff7a15ab122"

const handler = async function (event, context) {
  try {
    fetch(`https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${KEY}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.text())
      .then(data => {
        console.log(data)
      })
  }
  catch (err) {
    return { error: err.message }
  }
}

module.exports = { handler }
