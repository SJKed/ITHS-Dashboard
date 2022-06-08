// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import fetch from "node-fetch";
const handler = async (event) => {
  const token = "AAAAAAAAAAAAAAAAAAAAALjMdQEAAAAA4W09iav1RxWbqapsKhbL0Al6rrU%3DWur6GkBuFKtGFmpjDX0mn90uxTN4yzKPOfDRgz4D4ewPRogYpl";
  const URL = "https://api.twitter.com/2/tweets/search/recent?query=%23iths2022"
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await response.json();
  return {
    data
  };
}

module.exports = { handler }
