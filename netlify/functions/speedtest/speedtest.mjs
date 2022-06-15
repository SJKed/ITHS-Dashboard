import FastSpeedTest from "fast-speedtest-api";

exports.handler = async (event, context) => {
  try {
    let speedtest = new FastSpeedTest({
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
      verbose: false, // default: false
      timeout: 10000, // default: 5000
      https: true, // default: true
      urlCount: 5, // default: 5
      bufferSize: 8, // default: 8
      unit: FastSpeedTest.UNITS.Mbps // default: Bps
    });
  
    speedtest.getSpeed().then(s => {
      console.log(`Speed: ${s} Mbps`);
      return {
        statusCode: 200,
        body: s
      }
    }).catch(e => {
      console.error(e.message);
      return {
        statusCode: 500,
        body: JSON.stringify(e.message)
      }
    });
  }
  catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message)
    }
  }

}

