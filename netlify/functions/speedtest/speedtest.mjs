// import fetch from "node-fetch";

// exports.cock = async function (event, context) {
//   try {
//     const response = fetch(`https://www.reddit.com/r/yugioh/top.json?limit=1`, {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       }
//     });
//     const data = await response.json();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data)
//     }
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify(err.message)
//     }
//   }
// }

import fetch from "node-fetch";
const URL = "https://www.reddit.com/r/yugioh/top.json?limit=5"

exports.handler = async (event, context) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    const posts = data.data.children.map(instance => { 
      const title = instance.data.title
      const subreddit = instance.data.subreddit
      let selftext = ""
      if (instance.data.selftext) {
        selftext = instance.data.selftext
      }
      return { title, subreddit, selftext }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(posts)
    };
  }
  catch (err) {
    return { error: err.message };
  }
}

