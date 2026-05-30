exports.handler = async (event) => {
  try {

    const params = new URLSearchParams(
      event.queryStringParameters || {}
    );

    params.set("secret", process.env.API_SECRET);

    const url =
      `${process.env.GAS_URL}?${params.toString()}`;

    const response = await fetch(url);

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };

  }
};
