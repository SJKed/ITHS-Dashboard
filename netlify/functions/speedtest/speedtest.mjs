import FastSpeedTest from "fast-speedtest-api";

exports.handler = async (event, context) => {
  let speedtest = new FastSpeedTest({
    token: "K8TVhjW3gPdaOkD9J3MlD5MtYa1wnOV_mN3iZw",
    verbose: false,
    timeout: 10000,
    https: true,
    urlCount: 5,
    bufferSize: 8,
    unit: FastSpeedTest.UNITS.Mbps
  });

  try {
    speedtest.getSpeed().then(speed => {
      return {
        statusCode: 200,
        body: JSON.stringify(speed)
      };
    }
    ).catch(err => {
      return {
        statusCode: 500,
        body: JSON.stringify(err)
      };
    }
    );
  }
  catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}

