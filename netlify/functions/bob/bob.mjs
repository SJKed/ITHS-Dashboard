// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import fetch from "node-fetch";
const token = "AAAAAAAAAAAAAAAAAAAAALjMdQEAAAAA4W09iav1RxWbqapsKhbL0Al6rrU%3DWur6GkBuFKtGFmpjDX0mn90uxTN4yzKPOfDRgz4D4ewPRogYpl";
const URL = "https://api.twitter.com/2/tweets/search/recent?query=%23iths2022&expansions=author_id&user.fields=name"

exports.handler = async (event, context) => {
  try {
    const response = await fetch(URL, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const data = await response.json();

    const tweets = data.data.map(tweet => {
      const user = data.includes.users.find(user => user.id === tweet.author_id);
      const { name, username } = user;
      const { text } = tweet;
      return { name, username, text };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(tweets)
    };
  }
  catch (err) {
    return { error: err.message };
  }
}